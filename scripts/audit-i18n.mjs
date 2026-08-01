import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const visibleObjectKeys = new Set(["label", "title", "text", "description", "eyebrow", "cta", "name", "detail", "tagline", "q", "a", "shortTitle", "idealFor"]);
const visibleJsxProps = new Set(["alt", "aria-label", "placeholder", "title", "eyebrow", "description"]);
const translated = { tr: new Set(), nl: new Set() };

function addDictionaryKeys(object, locale) {
  for (const prop of object.properties) {
    if (ts.isPropertyAssignment(prop)) {
      if (ts.isStringLiteral(prop.name)) translated[locale].add(prop.name.text);
      else if (ts.isIdentifier(prop.name)) translated[locale].add(prop.name.text);
    }
  }
}

function visitMessages(node, source) {
  if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name) && node.initializer && ts.isObjectLiteralExpression(node.initializer)) {
    const locale = node.name.text === "tr" || node.name.text.endsWith("Tr") ? "tr" : node.name.text === "nl" || node.name.text.endsWith("Nl") ? "nl" : null;
    if (locale) addDictionaryKeys(node.initializer, locale);
  }
  if (ts.isCallExpression(node) && ts.isPropertyAccessExpression(node.expression) && node.expression.expression.getText(source) === "Object" && node.expression.name.text === "assign") {
    const [target, object] = node.arguments;
    if (target && ts.isIdentifier(target) && (target.text === "tr" || target.text === "nl") && object && ts.isObjectLiteralExpression(object)) addDictionaryKeys(object, target.text);
  }
  ts.forEachChild(node, (child) => visitMessages(child, source));
}
for (const file of fs.readdirSync("src/i18n").filter((name) => name.endsWith(".ts"))) {
  const source = ts.createSourceFile(file, fs.readFileSync(path.join("src/i18n", file), "utf8"), ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  visitMessages(source, source);
}

const folders = ["src/routes", "src/components/site"];
const files = folders.flatMap((folder) => fs.readdirSync(folder).filter((file) => file.endsWith(".tsx")).map((file) => path.join(folder, file)));
const report = {};

function normalize(value) { return value.replace(/\s+/g, " ").trim(); }
function isVisible(value) {
  const clean = normalize(value);
  return clean.length > 1 && /[A-Za-z]/.test(clean) && !clean.startsWith("/") && !clean.startsWith("inset(") && !clean.includes("@/");
}

for (const file of files) {
  const source = ts.createSourceFile(file, fs.readFileSync(file, "utf8"), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const found = new Set();
  const add = (value) => { if (isVisible(value)) found.add(normalize(value)); };
  function visit(node) {
    if (ts.isJsxText(node)) add(node.text);
    if (ts.isJsxAttribute(node) && node.initializer && visibleJsxProps.has(node.name.text)) {
      if (ts.isStringLiteral(node.initializer)) add(node.initializer.text);
      if (ts.isJsxExpression(node.initializer) && node.initializer.expression && ts.isStringLiteral(node.initializer.expression)) add(node.initializer.expression.text);
    }
    if (ts.isJsxExpression(node) && !ts.isJsxAttribute(node.parent) && node.expression && ts.isConditionalExpression(node.expression)) {
      for (const branch of [node.expression.whenTrue, node.expression.whenFalse]) if (ts.isStringLiteral(branch)) add(branch.text);
    }
    if (ts.isPropertyAssignment(node) && ts.isIdentifier(node.name) && visibleObjectKeys.has(node.name.text)) {
      if (ts.isStringLiteral(node.initializer) || ts.isNoSubstitutionTemplateLiteral(node.initializer)) add(node.initializer.text);
    }
    if (ts.isArrayLiteralExpression(node)) for (const item of node.elements) if (ts.isStringLiteral(item) || ts.isNoSubstitutionTemplateLiteral(item)) add(item.text);
    ts.forEachChild(node, visit);
  }
  visit(source);
  const missing = [...found].filter((value) => !translated.tr.has(value) || !translated.nl.has(value)).sort();
  if (missing.length) report[file] = missing;
}

console.log(JSON.stringify({ counts: { tr: translated.tr.size, nl: translated.nl.size }, report }, null, 2));
