"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Archive,
  ArrowLeft,
  Check,
  ChevronRight,
  Download,
  FileText,
  ImageIcon,
  LayoutDashboard,
  Plus,
  Save,
  Settings,
  Trash2,
} from "lucide-react";
import { Link } from "@/components/site/AppLink";

type PostStatus = "draft" | "published";
type PostLanguage = "en" | "tr" | "nl";
type PostCategory = "inspiration" | "experiences" | "guides" | "photosoft";

type AdminPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  cover: string;
  category: PostCategory;
  language: PostLanguage;
  status: PostStatus;
  publishedAt: string;
  updatedAt: string;
};

const STORAGE_KEY = "zoomselfie-content-studio-v1";

const makePost = (): AdminPost => ({
  id: crypto.randomUUID(),
  title: "Untitled story",
  slug: "untitled-story",
  excerpt: "",
  body: "",
  cover: "",
  category: "inspiration",
  language: "en",
  status: "draft",
  publishedAt: new Date().toISOString().slice(0, 10),
  updatedAt: new Date().toISOString(),
});

const slugify = (value: string) => value
  .toLocaleLowerCase("en-US")
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/(^-|-$)/g, "");

export default function Admin() {
  const [posts, setPosts] = useState<AdminPost[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as AdminPost[];
        setPosts(parsed);
        setSelectedId(parsed[0]?.id ?? null);
      }
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    } finally {
      setReady(true);
    }
  }, []);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  }, [posts, ready]);

  const selectedPost = useMemo(() => posts.find((post) => post.id === selectedId) ?? null, [posts, selectedId]);
  const publishedCount = posts.filter((post) => post.status === "published").length;

  const createPost = () => {
    const post = makePost();
    setPosts((current) => [post, ...current]);
    setSelectedId(post.id);
  };

  const updatePost = <K extends keyof AdminPost>(key: K, value: AdminPost[K]) => {
    if (!selectedId) return;
    setSaved(false);
    setPosts((current) => current.map((post) => post.id === selectedId ? { ...post, [key]: value, updatedAt: new Date().toISOString() } : post));
  };

  const updateTitle = (title: string) => {
    if (!selectedPost) return;
    setSaved(false);
    setPosts((current) => current.map((post) => post.id === selectedPost.id ? {
      ...post,
      title,
      slug: post.slug === slugify(selectedPost.title) || post.slug === "untitled-story" ? slugify(title) : post.slug,
      updatedAt: new Date().toISOString(),
    } : post));
  };

  const savePost = () => {
    if (!selectedPost) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
    setSaved(true);
    window.setTimeout(() => setSaved(false), 1800);
  };

  const setStatus = (status: PostStatus) => {
    updatePost("status", status);
    window.setTimeout(savePost, 0);
  };

  const removePost = () => {
    if (!selectedPost || !window.confirm(`Delete “${selectedPost.title}”?`)) return;
    const next = posts.filter((post) => post.id !== selectedPost.id);
    setPosts(next);
    setSelectedId(next[0]?.id ?? null);
  };

  const exportPosts = () => {
    const blob = new Blob([JSON.stringify(posts, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `zoomselfie-blog-${new Date().toISOString().slice(0, 10)}.json`;
    anchor.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#eeece6] pb-20 pt-28 text-zinc-950 sm:pt-32">
      <div className="container-page">
        <header className="flex flex-col gap-5 border-b border-black/10 pb-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Link to="/blog" className="inline-flex items-center gap-2 text-xs font-bold text-zinc-500 transition hover:text-zinc-950"><ArrowLeft className="h-3.5 w-3.5" /> Back to journal</Link>
            <p className="mt-6 text-[10px] font-black uppercase tracking-[.24em] text-amber-600">Internal workspace</p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-[-.055em] sm:text-5xl">Content Studio</h1>
          </div>
          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={exportPosts} disabled={!posts.length} className="inline-flex h-11 items-center gap-2 rounded-full border border-black/12 bg-white px-5 text-xs font-bold transition hover:border-black/30 disabled:cursor-not-allowed disabled:opacity-40"><Download className="h-4 w-4" /> Export JSON</button>
            <button type="button" onClick={createPost} className="inline-flex h-11 items-center gap-2 rounded-full bg-zinc-950 px-5 text-xs font-bold text-white transition hover:bg-amber-500 hover:text-black"><Plus className="h-4 w-4" /> New post</button>
          </div>
        </header>

        <div className="mt-7 grid gap-5 xl:grid-cols-[220px_300px_minmax(0,1fr)]">
          <aside className="rounded-[1.6rem] bg-zinc-950 p-4 text-white xl:min-h-[720px]">
            <div className="flex items-center gap-3 rounded-2xl bg-white/[.08] px-4 py-3"><LayoutDashboard className="h-4 w-4 text-primary" /><span className="text-sm font-bold">Overview</span></div>
            <p className="mb-2 mt-7 px-3 text-[9px] font-black uppercase tracking-[.2em] text-white/25">Content</p>
            <button type="button" className="flex w-full items-center gap-3 rounded-2xl bg-primary px-4 py-3 text-left text-sm font-bold text-black"><FileText className="h-4 w-4" /> Blog posts <span className="ml-auto text-[10px]">{posts.length}</span></button>
            <div className="mt-1 flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-white/38"><ImageIcon className="h-4 w-4" /> Media library <span className="ml-auto text-[8px] uppercase">Soon</span></div>
            <div className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-white/38"><Archive className="h-4 w-4" /> Site pages <span className="ml-auto text-[8px] uppercase">Soon</span></div>
            <div className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-white/38"><Settings className="h-4 w-4" /> Settings</div>
            <div className="mt-8 rounded-2xl border border-white/10 p-4">
              <p className="text-[9px] font-black uppercase tracking-[.18em] text-white/30">Local content</p>
              <div className="mt-4 grid grid-cols-2 gap-3"><div><strong className="block text-2xl">{posts.length}</strong><span className="text-[10px] text-white/35">Total</span></div><div><strong className="block text-2xl text-primary">{publishedCount}</strong><span className="text-[10px] text-white/35">Ready</span></div></div>
            </div>
          </aside>

          <aside className="overflow-hidden rounded-[1.6rem] border border-black/8 bg-white">
            <div className="flex items-center justify-between border-b border-black/8 px-5 py-4"><div><p className="text-[9px] font-black uppercase tracking-[.2em] text-zinc-400">Blog posts</p><p className="mt-1 text-xs text-zinc-500">Saved in this browser</p></div><button type="button" onClick={createPost} aria-label="New post" className="grid h-9 w-9 place-items-center rounded-full bg-zinc-950 text-white"><Plus className="h-4 w-4" /></button></div>
            <div className="max-h-[650px] overflow-y-auto p-2">
              {!posts.length && ready && <div className="px-5 py-16 text-center"><FileText className="mx-auto h-8 w-8 text-zinc-300" /><p className="mt-4 text-sm font-bold">No posts yet</p><p className="mt-2 text-xs leading-5 text-zinc-500">Create the first draft to start shaping the journal.</p></div>}
              {posts.map((post) => <button key={post.id} type="button" onClick={() => setSelectedId(post.id)} className={`mb-1 w-full rounded-[1.15rem] p-4 text-left transition ${post.id === selectedId ? "bg-[#f2efe8]" : "hover:bg-zinc-50"}`}><div className="flex items-start gap-3"><span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${post.status === "published" ? "bg-emerald-500" : "bg-amber-400"}`} /><div className="min-w-0 flex-1"><p className="truncate text-sm font-extrabold">{post.title}</p><p className="mt-1 truncate text-[10px] text-zinc-400">/{post.slug || "untitled"}</p><div className="mt-3 flex items-center gap-2 text-[9px] font-bold uppercase text-zinc-400"><span>{post.language}</span><span>·</span><span>{post.category}</span></div></div><ChevronRight className="mt-1 h-4 w-4 text-zinc-300" /></div></button>)}
            </div>
          </aside>

          <main className="min-w-0 rounded-[1.6rem] border border-black/8 bg-white">
            {selectedPost ? (
              <>
                <div className="flex flex-col gap-4 border-b border-black/8 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">
                  <div className="flex items-center gap-2"><span className={`h-2 w-2 rounded-full ${selectedPost.status === "published" ? "bg-emerald-500" : "bg-amber-400"}`} /><span className="text-xs font-bold capitalize">{selectedPost.status}</span><span className="text-[10px] text-zinc-400">· local workspace</span></div>
                  <div className="flex flex-wrap gap-2"><button type="button" onClick={removePost} className="grid h-10 w-10 place-items-center rounded-full border border-red-200 text-red-500 transition hover:bg-red-50" aria-label="Delete post"><Trash2 className="h-4 w-4" /></button><button type="button" onClick={savePost} className="inline-flex h-10 items-center gap-2 rounded-full border border-black/12 px-4 text-xs font-bold">{saved ? <Check className="h-4 w-4 text-emerald-500" /> : <Save className="h-4 w-4" />}{saved ? "Saved" : "Save draft"}</button><button type="button" onClick={() => setStatus(selectedPost.status === "published" ? "draft" : "published")} className="h-10 rounded-full bg-zinc-950 px-5 text-xs font-bold text-white transition hover:bg-amber-500 hover:text-black">{selectedPost.status === "published" ? "Move to draft" : "Mark ready"}</button></div>
                </div>

                <div className="grid min-w-0 lg:grid-cols-[minmax(0,1fr)_minmax(280px,.72fr)]">
                  <form className="space-y-5 p-5 sm:p-7" onSubmit={(event) => { event.preventDefault(); savePost(); }}>
                    <Field label="Title"><input value={selectedPost.title} onChange={(event) => updateTitle(event.target.value)} className="admin-input text-xl font-extrabold" /></Field>
                    <div className="grid gap-4 sm:grid-cols-2"><Field label="Slug"><input value={selectedPost.slug} onChange={(event) => updatePost("slug", slugify(event.target.value))} className="admin-input" /></Field><Field label="Publish date"><input type="date" value={selectedPost.publishedAt} onChange={(event) => updatePost("publishedAt", event.target.value)} className="admin-input" /></Field></div>
                    <div className="grid gap-4 sm:grid-cols-2"><Field label="Language"><select value={selectedPost.language} onChange={(event) => updatePost("language", event.target.value as PostLanguage)} className="admin-input"><option value="en">English</option><option value="tr">Türkçe</option><option value="nl">Nederlands</option></select></Field><Field label="Category"><select value={selectedPost.category} onChange={(event) => updatePost("category", event.target.value as PostCategory)} className="admin-input"><option value="inspiration">Inspiration</option><option value="experiences">Experiences</option><option value="guides">Guides</option><option value="photosoft">PhotoSoft</option></select></Field></div>
                    <Field label="Excerpt"><textarea rows={3} value={selectedPost.excerpt} onChange={(event) => updatePost("excerpt", event.target.value)} className="admin-input resize-y" placeholder="A short introduction for the blog card and search results." /></Field>
                    <Field label="Cover asset path"><input value={selectedPost.cover} onChange={(event) => updatePost("cover", event.target.value)} className="admin-input" placeholder="/images/story-cover.jpg" /></Field>
                    <Field label="Article"><textarea rows={15} value={selectedPost.body} onChange={(event) => updatePost("body", event.target.value)} className="admin-input resize-y leading-7" placeholder="Write the article here. Separate paragraphs with a blank line." /></Field>
                  </form>

                  <aside className="border-t border-black/8 bg-[#f5f2eb] p-5 sm:p-7 lg:border-l lg:border-t-0">
                    <p className="text-[9px] font-black uppercase tracking-[.22em] text-zinc-400">Live preview</p>
                    <div className="mt-5 overflow-hidden rounded-[1.4rem] border border-black/8 bg-white shadow-[0_22px_60px_-40px_rgba(0,0,0,.5)]">
                      <div className="aspect-[16/10] bg-zinc-900" style={selectedPost.cover ? { backgroundImage: `linear-gradient(rgba(0,0,0,.08),rgba(0,0,0,.25)),url(${selectedPost.cover})`, backgroundSize: "cover", backgroundPosition: "center" } : undefined}><div className="flex h-full items-end p-5"><span className="rounded-full bg-primary px-3 py-1.5 text-[9px] font-black uppercase">{selectedPost.category}</span></div></div>
                      <article className="p-6"><p className="text-[9px] font-bold uppercase tracking-[.14em] text-zinc-400">{selectedPost.publishedAt} · {selectedPost.language}</p><h2 className="mt-3 text-2xl font-extrabold leading-[1.08] tracking-[-.04em]">{selectedPost.title || "Untitled story"}</h2><p className="mt-3 text-sm leading-6 text-zinc-500">{selectedPost.excerpt || "Your story introduction will appear here."}</p><div className="mt-6 border-t border-black/8 pt-5 text-sm leading-7 text-zinc-700">{selectedPost.body ? selectedPost.body.split(/\n\n+/).slice(0, 3).map((paragraph, index) => <p key={index} className="mb-4 last:mb-0">{paragraph}</p>) : <p className="text-zinc-400">Start writing to see the article preview.</p>}</div></article>
                    </div>
                    <p className="mt-5 text-[10px] leading-5 text-zinc-400">This first version stores content locally. Database publishing, media uploads and account access can be connected without redesigning this screen.</p>
                  </aside>
                </div>
              </>
            ) : (
              <div className="grid min-h-[620px] place-items-center p-8 text-center"><div><FileText className="mx-auto h-10 w-10 text-zinc-300" /><h2 className="mt-5 text-2xl font-extrabold">Create your first story</h2><p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-zinc-500">Draft, preview and organise a blog post before connecting the publishing backend.</p><button type="button" onClick={createPost} className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-zinc-950 px-5 text-xs font-bold text-white"><Plus className="h-4 w-4" /> New post</button></div></div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block"><span className="mb-2 block text-[9px] font-black uppercase tracking-[.18em] text-zinc-400">{label}</span>{children}</label>;
}
