import Image from "@/components/site/ResponsiveImage";
import { Link } from "@/components/site/AppLink";
import { ArrowLeft, ArrowRight, Clock3 } from "lucide-react";
import { BlogLocaleSync } from "@/components/blog/BlogLocaleSync";
import { blogLocales, categoryLabels, getBlogPosts, type BlogLocale, type LocalizedBlogPost } from "@/content/blog";
import { localeLabels } from "@/i18n/messages";

const localizedArticleUi: Record<BlogLocale, {
  journal: string;
  back: string;
  minutes: string;
  contents: string;
  related: string;
  relatedText: string;
  read: string;
  zoomEyebrow: string;
  zoomTitle: string;
  zoomText: string;
  zoomCta: string;
  photoSoftEyebrow: string;
  photoSoftTitle: string;
  photoSoftText: string;
  photoSoftCta: string;
  languageLabel: string;
  nextLabel: string;
}> = {
  en: {
    journal: "ZoomSelfie Journal",
    back: "Back to all stories",
    minutes: "min read",
    contents: "In this story",
    related: "Keep exploring",
    relatedText: "More ideas from the complete photo and video journey.",
    read: "Read article",
    zoomEyebrow: "Create the moment",
    zoomTitle: "Bring a personal photo and video experience to your audience.",
    zoomText: "Explore ZoomSelfie through a purchasable kiosk, web campaign or integrated product.",
    zoomCta: "Explore ZoomSelfie",
    photoSoftEyebrow: "Plan the operation",
    photoSoftTitle: "Connect your complete attraction photography journey.",
    photoSoftText: "See how PhotoSoft brings capture, guest matching, sales, delivery and analytics into one platform.",
    photoSoftCta: "Explore PhotoSoft",
    languageLabel: "Article language",
    nextLabel: "Journal / Next",
  },
  tr: {
    journal: "ZoomSelfie Blog",
    back: "Tüm yazılara dön",
    minutes: "dk okuma",
    contents: "Bu yazıda",
    related: "Keşfetmeye devam edin",
    relatedText: "Fotoğraf ve video yolculuğunun tamamından daha fazla fikir.",
    read: "Yazıyı oku",
    zoomEyebrow: "Anı oluştur",
    zoomTitle: "Kitlenizi kişisel bir fotoğraf ve video deneyimiyle buluşturun.",
    zoomText: "ZoomSelfie'yi satın alınabilir kiosk, web kampanyası veya entegre ürün üzerinden keşfedin.",
    zoomCta: "ZoomSelfie'yi keşfet",
    photoSoftEyebrow: "Operasyonu planlayın",
    photoSoftTitle: "Turistik mekân fotoğrafçılığı yolculuğunuzun tamamını birleştirin.",
    photoSoftText: "PhotoSoft'un çekim, ziyaretçi eşleştirme, satış, teslimat ve analizi tek platformda nasıl buluşturduğunu görün.",
    photoSoftCta: "PhotoSoft'u keşfet",
    languageLabel: "Yazı dili",
    nextLabel: "Blog / Sonraki",
  },
  nl: {
    journal: "ZoomSelfie Journal",
    back: "Terug naar alle verhalen",
    minutes: "min lezen",
    contents: "In dit verhaal",
    related: "Blijf ontdekken",
    relatedText: "Meer ideeën uit de volledige foto- en videoreis.",
    read: "Lees artikel",
    zoomEyebrow: "Creëer het moment",
    zoomTitle: "Breng een persoonlijke foto- en video-ervaring naar je publiek.",
    zoomText: "Ontdek ZoomSelfie via een kiosk die je kunt kopen, een webcampagne of geïntegreerd product.",
    zoomCta: "Ontdek ZoomSelfie",
    photoSoftEyebrow: "Plan de operatie",
    photoSoftTitle: "Verbind de volledige reis van je attractiefotografie.",
    photoSoftText: "Bekijk hoe PhotoSoft opname, gastkoppeling, verkoop, levering en analyse samenbrengt in één platform.",
    photoSoftCta: "Ontdek PhotoSoft",
    languageLabel: "Taal van het artikel",
    nextLabel: "Journal / Volgende",
  },
};

function formatDate(date: string, locale: BlogLocale) {
  return new Intl.DateTimeFormat(locale === "tr" ? "tr-TR" : locale === "nl" ? "nl-NL" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${date}T12:00:00Z`));
}

export default function BlogArticle({ post }: { post: LocalizedBlogPost }) {
  const copy = localizedArticleUi[post.locale];
  const related = getBlogPosts(post.locale).filter((item) => item.id !== post.id).sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category)).slice(0, 3);
  const isPhotoSoft = post.product === "photosoft";

  return (
    <div data-no-translate className="bg-white text-zinc-950">
      <BlogLocaleSync currentLocale={post.locale} alternateSlugs={post.alternateSlugs} />

      <article>
        <header className="relative overflow-hidden bg-[#f4f0e8] pb-14 pt-28 sm:pb-20 sm:pt-36">
          <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(24,24,27,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(24,24,27,.055)_1px,transparent_1px)] [background-size:48px_48px]" />
          <div className={`absolute -right-28 top-10 h-96 w-96 rounded-full blur-3xl ${isPhotoSoft ? "bg-cyan-300/18" : "bg-primary/22"}`} />
          <div className="container-page relative">
            <div className="flex flex-wrap items-center justify-between gap-5">
              <Link to="/blog" className="inline-flex items-center gap-2 text-xs font-bold text-zinc-600 transition hover:text-zinc-950"><ArrowLeft className="h-4 w-4" />{copy.back}</Link>
              <div className="flex items-center gap-1 rounded-full border border-black/10 bg-white/65 p-1 backdrop-blur-sm" aria-label={copy.languageLabel}>
                {blogLocales.map((locale) => <Link key={locale} to={`/blog/${locale}/${post.alternateSlugs[locale]}`} hrefLang={locale} className={`rounded-full px-3 py-1.5 text-[10px] font-black uppercase transition ${locale === post.locale ? "bg-zinc-950 text-white" : "text-zinc-500 hover:text-zinc-950"}`}>{localeLabels[locale]}</Link>)}
              </div>
            </div>

            <div className="mx-auto mt-16 max-w-5xl text-center sm:mt-20">
              <div className="flex flex-wrap items-center justify-center gap-3 text-[10px] font-black uppercase tracking-[.18em] text-zinc-500">
                <span className={isPhotoSoft ? "text-cyan-700" : "text-amber-600"}>{categoryLabels[post.locale][post.category]}</span><span className="h-1 w-1 rounded-full bg-zinc-300" /><span>{formatDate(post.publishedAt, post.locale)}</span><span className="h-1 w-1 rounded-full bg-zinc-300" /><span className="inline-flex items-center gap-1.5"><Clock3 className="h-3.5 w-3.5" />{post.readingMinutes} {copy.minutes}</span>
              </div>
              <p className="mt-6 text-xs font-black uppercase tracking-[.24em] text-zinc-400">{copy.journal}</p>
              <h1 className="mt-5 text-5xl font-extrabold leading-[.98] tracking-[-.06em] sm:text-7xl lg:text-[5.5rem]">{post.title}</h1>
              <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-zinc-600 sm:text-xl">{post.excerpt}</p>
            </div>
          </div>
        </header>

        <div className="container-page -mt-1 pb-20 sm:pb-28">
          <div className="relative aspect-[16/9] max-h-[720px] overflow-hidden rounded-[1.75rem] bg-zinc-100 shadow-[0_30px_90px_-55px_rgba(0,0,0,.65)] sm:rounded-[2.5rem]">
            <Image src={post.image} alt={post.imageAlt} priority sizes="(max-width: 1280px) 100vw, 1280px" className="absolute inset-0 h-full w-full object-cover" />
          </div>

          <div className="mx-auto mt-16 grid max-w-6xl gap-12 lg:grid-cols-[220px_minmax(0,720px)] lg:justify-center lg:gap-20">
            <aside className="hidden lg:block">
              <div className="sticky top-28 border-l border-black/12 pl-5">
                <p className="text-[10px] font-black uppercase tracking-[.2em] text-zinc-400">{copy.contents}</p>
                <ol className="mt-5 space-y-4">
                  {post.sections.map((section, index) => <li key={section.heading}><a href={`#section-${index + 1}`} className="group flex gap-3 text-xs font-semibold leading-5 text-zinc-500 transition hover:text-zinc-950"><span className={isPhotoSoft ? "text-cyan-600" : "text-amber-600"}>0{index + 1}</span><span>{section.heading}</span></a></li>)}
                </ol>
              </div>
            </aside>

            <div className="min-w-0">
              {post.sections.map((section, index) => (
                <section id={`section-${index + 1}`} key={section.heading} className="scroll-mt-28 border-b border-black/10 pb-12 pt-12 first:pt-0 last:border-b-0">
                  <p className={`text-[10px] font-black uppercase tracking-[.2em] ${isPhotoSoft ? "text-cyan-700" : "text-amber-600"}`}>0{index + 1}</p>
                  <h2 className="mt-4 text-3xl font-extrabold leading-[1.1] tracking-[-.04em] sm:text-4xl">{section.heading}</h2>
                  <div className="mt-6 space-y-5">
                    {section.paragraphs.map((paragraph) => <p key={paragraph} className="text-base leading-8 text-zinc-700 sm:text-lg sm:leading-9">{paragraph}</p>)}
                  </div>
                  {section.bullets && <ul className={`mt-8 space-y-3 rounded-[1.5rem] border p-6 sm:p-7 ${isPhotoSoft ? "border-cyan-900/10 bg-cyan-50" : "border-amber-900/10 bg-amber-50"}`}>{section.bullets.map((bullet) => <li key={bullet} className="flex gap-3 text-sm font-semibold leading-6 text-zinc-700"><span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${isPhotoSoft ? "bg-cyan-500" : "bg-primary"}`} />{bullet}</li>)}</ul>}
                </section>
              ))}
            </div>
          </div>
        </div>
      </article>

      <section className={`py-20 text-white sm:py-24 ${isPhotoSoft ? "bg-[#070a0d]" : "bg-zinc-950"}`}>
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className={`text-xs font-black uppercase tracking-[.22em] ${isPhotoSoft ? "text-cyan-300" : "text-primary"}`}>{isPhotoSoft ? copy.photoSoftEyebrow : copy.zoomEyebrow}</p>
            <h2 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.04] tracking-[-.05em] sm:text-6xl">{isPhotoSoft ? copy.photoSoftTitle : copy.zoomTitle}</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/55">{isPhotoSoft ? copy.photoSoftText : copy.zoomText}</p>
          </div>
          <Link to={isPhotoSoft ? "/photosoft" : "/products"} className={`inline-flex h-13 items-center justify-center gap-2 rounded-full px-7 text-sm font-bold text-zinc-950 transition hover:bg-white ${isPhotoSoft ? "bg-cyan-300" : "bg-primary"}`}>{isPhotoSoft ? copy.photoSoftCta : copy.zoomCta}<ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      <section className="bg-[#f4f0e8] py-20 sm:py-24 lg:py-28">
        <div className="container-page">
          <div className="flex items-end justify-between gap-6 border-b border-black/12 pb-6"><div><p className="text-xs font-black uppercase tracking-[.2em] text-amber-600">{copy.nextLabel}</p><h2 className="mt-4 text-4xl font-extrabold tracking-[-.05em] sm:text-5xl">{copy.related}</h2><p className="mt-3 text-sm text-zinc-600">{copy.relatedText}</p></div><Link to="/blog" className="hidden items-center gap-2 text-xs font-bold sm:inline-flex">{copy.back}<ArrowRight className="h-4 w-4" /></Link></div>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {related.map((item) => (
              <article key={item.id} className="group">
                <Link to={`/blog/${item.locale}/${item.slug}`}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-zinc-200"><Image src={item.image} alt={item.imageAlt} loading="lazy" sizes="(max-width: 768px) 100vw, 33vw" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" /></div>
                  <p className="mt-5 text-[10px] font-black uppercase tracking-[.16em] text-amber-600">{categoryLabels[item.locale][item.category]}</p>
                  <h3 className="mt-3 text-xl font-extrabold leading-[1.15] tracking-[-.03em] group-hover:text-amber-700">{item.title}</h3>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold">{copy.read}<ArrowRight className="h-3.5 w-3.5" /></span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
