"use client";

import Image from "@/components/site/ResponsiveImage";
import { Link } from "@/components/site/AppLink";
import { ArrowRight, BookOpen, Clock3 } from "lucide-react";
import { useMemo, useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";
import { categoryLabels, getBlogPosts, type BlogCategory, type BlogLocale, type LocalizedBlogPost } from "@/content/blog";
import { cn } from "@/lib/utils";

const localizedBlogUi: Record<BlogLocale, {
  eyebrow: string;
  title: string;
  intro: string;
  featured: string;
  readStory: string;
  all: string;
  latest: string;
  latestDescription: string;
  read: string;
  minutes: string;
  photoSoftEyebrow: string;
  photoSoftTitle: string;
  photoSoftText: string;
  explorePhotoSoft: string;
  closingEyebrow: string;
  closingTitle: string;
  closingText: string;
  seeGallery: string;
  indexLabel: string;
  categoriesLabel: string;
}> = {
  en: {
    eyebrow: "Stories, ideas and field notes",
    title: "A closer look at the moments we create.",
    intro: "Ideas for more personal photo and video experiences, clearer self-service journeys and better-connected attraction photography.",
    featured: "Featured story",
    readStory: "Read the story",
    all: "All stories",
    latest: "Latest from the journal",
    latestDescription: "Practical guides, visual inspiration and lessons from the complete photo journey.",
    read: "Read article",
    minutes: "min read",
    photoSoftEyebrow: "PhotoSoft insights",
    photoSoftTitle: "The operation behind every guest photo.",
    photoSoftText: "Explore capture, guest matching, sales, delivery and analytics as one connected attraction photography journey.",
    explorePhotoSoft: "Explore the insight",
    closingEyebrow: "See it in motion",
    closingTitle: "Ideas are better when you can picture them.",
    closingText: "Visit the gallery to see the kinds of photos and videos a ZoomSelfie experience can create.",
    seeGallery: "Explore the gallery",
    indexLabel: "Journal / 001",
    categoriesLabel: "Blog categories",
  },
  tr: {
    eyebrow: "Hikâyeler, fikirler ve saha notları",
    title: "Ürettiğimiz anlara daha yakından bakın.",
    intro: "Daha kişisel fotoğraf-video deneyimleri, daha anlaşılır self-servis yolculuklar ve birbiriyle bağlantılı turistik mekân fotoğrafçılığı için fikirler.",
    featured: "Öne çıkan hikâye",
    readStory: "Hikâyeyi oku",
    all: "Tüm yazılar",
    latest: "Blogdan son yazılar",
    latestDescription: "Pratik rehberler, görsel ilham ve fotoğraf yolculuğunun tamamından edinilen deneyimler.",
    read: "Yazıyı oku",
    minutes: "dk okuma",
    photoSoftEyebrow: "PhotoSoft içgörüleri",
    photoSoftTitle: "Her ziyaretçi fotoğrafının arkasındaki operasyon.",
    photoSoftText: "Çekim, ziyaretçi eşleştirme, satış, teslimat ve analizi birbirine bağlı tek bir turistik mekân fotoğrafçılığı yolculuğu olarak keşfedin.",
    explorePhotoSoft: "İçgörüyü keşfet",
    closingEyebrow: "Hareket hâlinde görün",
    closingTitle: "Fikirler, onları gözünüzde canlandırabildiğinizde daha güzeldir.",
    closingText: "Bir ZoomSelfie deneyiminin üretebileceği fotoğraf ve videoları görmek için galeriyi ziyaret edin.",
    seeGallery: "Galeriyi keşfet",
    indexLabel: "Blog / 001",
    categoriesLabel: "Blog kategorileri",
  },
  nl: {
    eyebrow: "Verhalen, ideeën en notities uit de praktijk",
    title: "Bekijk de momenten die we maken van dichterbij.",
    intro: "Ideeën voor persoonlijkere foto- en video-ervaringen, duidelijkere selfservicereizen en beter verbonden attractiefotografie.",
    featured: "Uitgelicht verhaal",
    readStory: "Lees het verhaal",
    all: "Alle verhalen",
    latest: "Nieuw uit het journal",
    latestDescription: "Praktische gidsen, visuele inspiratie en lessen uit de volledige fotoreis.",
    read: "Lees artikel",
    minutes: "min lezen",
    photoSoftEyebrow: "PhotoSoft-inzichten",
    photoSoftTitle: "De operatie achter elke gastfoto.",
    photoSoftText: "Ontdek opname, gastkoppeling, verkoop, levering en analyse als één verbonden reis voor attractiefotografie.",
    explorePhotoSoft: "Bekijk het inzicht",
    closingEyebrow: "Bekijk het in beweging",
    closingTitle: "Ideeën worden beter wanneer je ze voor je kunt zien.",
    closingText: "Bezoek de galerij en ontdek welke foto's en video's een ZoomSelfie-ervaring kan maken.",
    seeGallery: "Ontdek de galerij",
    indexLabel: "Journal / 001",
    categoriesLabel: "Blogcategorieën",
  },
};

const blogCategoryKeys: Array<BlogCategory | "all"> = ["all", "inspiration", "experiences", "guides", "photosoft"];

function formatDate(date: string, locale: BlogLocale) {
  return new Intl.DateTimeFormat(locale === "tr" ? "tr-TR" : locale === "nl" ? "nl-NL" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${date}T12:00:00Z`));
}

export default function Blog() {
  const { locale } = useI18n();
  const selectedLocale = locale as BlogLocale;
  const copy = localizedBlogUi[selectedLocale];
  const posts = useMemo(() => getBlogPosts(selectedLocale), [selectedLocale]);
  const featured = posts.find((post) => post.featured) ?? posts[0];
  const [category, setCategory] = useState<BlogCategory | "all">("all");
  const visiblePosts = category === "all" ? posts.filter((post) => post.id !== featured.id) : posts.filter((post) => post.category === category && post.id !== featured.id);
  const photoSoftPost = posts.find((post) => post.product === "photosoft");

  return (
    <div data-no-translate className="overflow-hidden bg-[#f4f0e8] text-zinc-950">
      <section className="relative min-h-[92svh] overflow-hidden pb-16 pt-28 sm:pt-32 lg:pb-20 lg:pt-36">
        <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(24,24,27,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(24,24,27,.055)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="absolute -right-24 top-12 h-96 w-96 rounded-full bg-primary/24 blur-3xl" />
        <div className="container-page relative">
          <div className="grid gap-8 border-b border-black/15 pb-10 lg:grid-cols-[1fr_.7fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[.24em] text-amber-600">{copy.eyebrow}</p>
              <h1 className="mt-5 max-w-4xl text-5xl font-extrabold leading-[.94] tracking-[-.065em] sm:text-7xl lg:text-[5.75rem]">{copy.title}</h1>
            </div>
            <p className="max-w-xl text-base leading-7 text-zinc-600 lg:justify-self-end lg:text-lg">{copy.intro}</p>
          </div>

          <Link to={`/blog/${selectedLocale}/${featured.slug}`} className="group mt-8 grid overflow-hidden rounded-[2rem] bg-zinc-950 text-white shadow-[0_32px_90px_-48px_rgba(0,0,0,.8)] lg:grid-cols-[1.18fr_.82fr]">
            <div className="relative min-h-[360px] overflow-hidden sm:min-h-[470px] lg:min-h-[520px]">
              <Image src={featured.image} alt={featured.imageAlt} priority sizes="(max-width: 1024px) 100vw, 60vw" className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.025]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10 lg:bg-gradient-to-r lg:from-transparent lg:to-black/10" />
            </div>
            <div className="relative flex min-h-[360px] flex-col p-7 sm:p-10 lg:p-12">
              <div className="absolute right-8 top-8 h-3 w-3 rounded-full bg-primary shadow-[0_0_0_8px_rgba(255,184,0,.13)]" />
              <p className="text-[10px] font-black uppercase tracking-[.24em] text-primary">{copy.featured}</p>
              <div className="mt-auto">
                <div className="flex flex-wrap items-center gap-3 text-[11px] font-bold uppercase tracking-[.14em] text-white/45">
                  <span>{categoryLabels[selectedLocale][featured.category]}</span><span className="h-1 w-1 rounded-full bg-white/25" /><span>{formatDate(featured.publishedAt, selectedLocale)}</span>
                </div>
                <h2 className="mt-5 text-3xl font-extrabold leading-[1.04] tracking-[-.045em] sm:text-4xl lg:text-5xl">{featured.title}</h2>
                <p className="mt-5 max-w-xl text-sm leading-7 text-white/62 sm:text-base">{featured.excerpt}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary">{copy.readStory}<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container-page">
          <div className="flex flex-col gap-7 border-b border-black/12 pb-7 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[.22em] text-amber-600">{copy.indexLabel}</p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-[-.055em] sm:text-6xl">{copy.latest}</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base">{copy.latestDescription}</p>
            </div>
            <div className="flex max-w-full gap-2 overflow-x-auto pb-1" aria-label={copy.categoriesLabel}>
              {blogCategoryKeys.map((item) => (
                <button key={item} type="button" onClick={() => setCategory(item)} className={cn("whitespace-nowrap rounded-full border px-4 py-2.5 text-xs font-bold transition", category === item ? "border-zinc-950 bg-zinc-950 text-white" : "border-black/12 bg-white text-zinc-600 hover:border-black/35 hover:text-zinc-950")}>
                  {item === "all" ? copy.all : categoryLabels[selectedLocale][item]}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-x-5 gap-y-12 md:grid-cols-2 lg:grid-cols-12">
            {visiblePosts.map((post, index) => <ArticleCard key={post.id} post={post} locale={selectedLocale} readLabel={copy.read} minutesLabel={copy.minutes} wide={index === 0 || index % 5 === 4} />)}
          </div>
          {visiblePosts.length === 0 && <p className="py-20 text-center text-sm text-zinc-500">—</p>}
        </div>
      </section>

      {photoSoftPost && (
        <section className="relative overflow-hidden bg-[#070a0d] py-20 text-white sm:py-24 lg:py-28">
          <div className="absolute right-0 top-0 h-full w-1/2 bg-cyan-300/[.035]" />
          <div className="absolute -left-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-cyan-300/10 blur-3xl" />
          <div className="container-page relative grid items-center gap-10 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">
            <div>
              <p className="text-xs font-black uppercase tracking-[.24em] text-cyan-300">{copy.photoSoftEyebrow}</p>
              <h2 className="mt-5 text-4xl font-extrabold leading-[1.02] tracking-[-.055em] sm:text-6xl">{copy.photoSoftTitle}</h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-white/55">{copy.photoSoftText}</p>
              <Link to={`/blog/${selectedLocale}/${photoSoftPost.slug}`} className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-cyan-300 px-6 text-sm font-bold text-zinc-950 transition hover:bg-white">{copy.explorePhotoSoft}<ArrowRight className="h-4 w-4" /></Link>
            </div>
            <Link to={`/blog/${selectedLocale}/${photoSoftPost.slug}`} className="group relative min-h-[360px] overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900 sm:min-h-[470px]">
              <Image src={photoSoftPost.image} alt={photoSoftPost.imageAlt} sizes="(max-width: 1024px) 100vw, 55vw" className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/10" />
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9"><p className="text-[10px] font-bold uppercase tracking-[.2em] text-cyan-300">{categoryLabels[selectedLocale].photosoft}</p><h3 className="mt-3 max-w-2xl text-2xl font-extrabold sm:text-3xl">{photoSoftPost.title}</h3></div>
            </Link>
          </div>
        </section>
      )}

      <section className="bg-primary py-20 sm:py-24">
        <div className="container-page grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[.24em] text-black/55">{copy.closingEyebrow}</p>
            <h2 className="mt-4 max-w-4xl text-4xl font-extrabold leading-[1.02] tracking-[-.055em] sm:text-6xl">{copy.closingTitle}</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-black/65">{copy.closingText}</p>
          </div>
          <Link to="/gallery" className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-zinc-950 px-7 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-zinc-800">{copy.seeGallery}<ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </div>
  );
}

function ArticleCard({ post, locale, readLabel, minutesLabel, wide }: { post: LocalizedBlogPost; locale: BlogLocale; readLabel: string; minutesLabel: string; wide: boolean }) {
  return (
    <article className={cn("group", wide ? "lg:col-span-7" : "lg:col-span-5")}>
      <Link to={`/blog/${locale}/${post.slug}`} className="block">
        <div className={cn("relative overflow-hidden rounded-[1.6rem] bg-zinc-100", wide ? "aspect-[16/10]" : "aspect-[4/3]")}>
          <Image src={post.image} alt={post.imageAlt} loading="lazy" sizes={wide ? "(max-width: 1024px) 100vw, 58vw" : "(max-width: 1024px) 100vw, 42vw"} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]" />
          <span className={cn("absolute left-4 top-4 rounded-full px-3 py-1.5 text-[9px] font-black uppercase tracking-[.16em] backdrop-blur-md", post.product === "photosoft" ? "bg-cyan-300 text-zinc-950" : "bg-white/90 text-zinc-950")}>{categoryLabels[locale][post.category]}</span>
          <span className="absolute bottom-4 right-4 grid h-11 w-11 translate-y-2 place-items-center rounded-full bg-zinc-950 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"><ArrowRight className="h-4 w-4" /></span>
        </div>
        <div className="mt-5">
          <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.12em] text-zinc-400"><span>{formatDate(post.publishedAt, locale)}</span><span className="h-1 w-1 rounded-full bg-zinc-300" /><span className="inline-flex items-center gap-1.5"><Clock3 className="h-3.5 w-3.5" />{post.readingMinutes} {minutesLabel}</span></div>
          <h3 className="mt-3 text-2xl font-extrabold leading-[1.1] tracking-[-.035em] transition-colors group-hover:text-amber-600 sm:text-3xl">{post.title}</h3>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-600">{post.excerpt}</p>
          <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-zinc-950"><BookOpen className="h-3.5 w-3.5 text-amber-600" />{readLabel}</span>
        </div>
      </Link>
    </article>
  );
}
