import type { StaticImageData } from "next/image";
import type { Locale } from "@/i18n/messages";

import appDashboard from "@/assets/app-dashboard.png";
import galleryAquarium from "@/assets/gallery-aquarium-family.png";
import galleryCruise from "@/assets/gallery-cruise-sunset.png";
import galleryIstanbul from "@/assets/gallery-istanbul-group.png";
import galleryParis from "@/assets/gallery-paris-couple.png";
import kioskIstanbul from "@/assets/kiosk-istanbul.png";
import kioskModelPro from "@/assets/kiosk-model-pro.png";

export const blogLocales = ["en", "tr", "nl"] as const satisfies readonly Locale[];
export type BlogLocale = (typeof blogLocales)[number];
export type BlogCategory = "inspiration" | "experiences" | "guides" | "photosoft";
export type BlogProduct = "zoomselfie" | "photosoft";

export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogTranslation = {
  slug: string;
  title: string;
  excerpt: string;
  seoTitle: string;
  seoDescription: string;
  imageAlt: string;
  sections: BlogSection[];
};

export type BlogPost = {
  id: string;
  publishedAt: string;
  updatedAt?: string;
  readingMinutes: number;
  category: BlogCategory;
  product: BlogProduct;
  featured?: boolean;
  image: StaticImageData;
  translations: Record<BlogLocale, BlogTranslation>;
};

export type LocalizedBlogPost = Omit<BlogPost, "translations"> & BlogTranslation & {
  locale: BlogLocale;
  alternateSlugs: Record<BlogLocale, string>;
};

export const categoryLabels: Record<BlogLocale, Record<BlogCategory, string>> = {
  en: { inspiration: "Inspiration", experiences: "Experiences", guides: "Guides", photosoft: "PhotoSoft Insights" },
  tr: { inspiration: "İlham", experiences: "Deneyimler", guides: "Rehberler", photosoft: "PhotoSoft İçgörüleri" },
  nl: { inspiration: "Inspiratie", experiences: "Ervaringen", guides: "Gidsen", photosoft: "PhotoSoft-inzichten" },
};

export const blogPosts: BlogPost[] = [
  {
    id: "one-photo-bigger-story",
    publishedAt: "2026-07-22",
    readingMinutes: 5,
    category: "inspiration",
    product: "zoomselfie",
    featured: true,
    image: galleryIstanbul,
    translations: {
      en: {
        slug: "one-photo-a-bigger-story",
        title: "One photo can hold a much bigger story",
        excerpt: "A useful photo experience does more than add an effect. It connects a person, a place and a moment in one memory worth keeping.",
        seoTitle: "Turn One Photo into a Bigger Story",
        seoDescription: "See how ZoomSelfie turns a simple portrait into a personal, place-led photo or video memory.",
        imageAlt: "Friends inside a personalized Istanbul photo experience",
        sections: [
          {
            heading: "Start with the person, not the effect",
            paragraphs: [
              "The strongest photo experiences feel personal before they feel technical. The person should recognise themselves, the place they visited and the mood of that moment immediately.",
              "ZoomSelfie begins with a portrait captured at a kiosk or uploaded from a phone. The chosen scene then gives that portrait a setting and a story without taking attention away from the person in the frame.",
            ],
          },
          {
            heading: "Let the location become part of the memory",
            paragraphs: [
              "A landmark, museum, event or destination already carries meaning. Visual direction works best when it borrows from that identity: its colours, architecture, atmosphere and small details people remember after leaving.",
            ],
            bullets: ["Use a recognisable visual anchor", "Keep the person clearly visible", "Design for both still images and short vertical video", "Make the result easy to receive and share"],
          },
          {
            heading: "The result should feel effortless",
            paragraphs: [
              "The finished memory arrives through a QR code, link or email. There is no editing timeline to understand and no app to install. A short journey keeps the creative moment enjoyable and makes the final result feel immediate.",
            ],
          },
        ],
      },
      tr: {
        slug: "tek-fotograf-daha-buyuk-bir-hikaye",
        title: "Tek bir fotoğraf çok daha büyük bir hikâye taşıyabilir",
        excerpt: "İyi bir fotoğraf deneyimi yalnızca efekt eklemez; insanı, mekânı ve anı saklanmaya değer tek bir hatırada buluşturur.",
        seoTitle: "Tek Fotoğrafı Daha Büyük Bir Hikâyeye Dönüştürün",
        seoDescription: "ZoomSelfie'nin sade bir portreyi mekâna ait kişisel bir fotoğraf veya video hatırasına nasıl dönüştürdüğünü görün.",
        imageAlt: "Kişiselleştirilmiş İstanbul fotoğraf deneyimindeki arkadaş grubu",
        sections: [
          {
            heading: "Efektle değil, insanla başlayın",
            paragraphs: [
              "En güçlü fotoğraf deneyimleri teknik görünmeden önce kişisel hissettirir. İnsan, kendisini, bulunduğu yeri ve o anın duygusunu ilk bakışta tanıyabilmelidir.",
              "ZoomSelfie kioskta çekilen veya telefondan yüklenen bir portreyle başlar. Seçilen sahne, kadrajdaki insanın önüne geçmeden bu portreye bir mekân ve hikâye kazandırır.",
            ],
          },
          {
            heading: "Mekânı hatıranın bir parçası yapın",
            paragraphs: [
              "Bir simge yapı, müze, etkinlik veya destinasyon zaten güçlü bir anlam taşır. Görsel yön; o yerin renklerinden, mimarisinden, atmosferinden ve ziyaret sonrasında hatırlanan küçük ayrıntılarından beslendiğinde daha etkili olur.",
            ],
            bullets: ["Kolay tanınan bir görsel odak kullanın", "Kişiyi her zaman görünür tutun", "Hem fotoğraf hem kısa dikey video için tasarlayın", "Sonucu almayı ve paylaşmayı kolaylaştırın"],
          },
          {
            heading: "Sonuç zahmetsiz hissettirmeli",
            paragraphs: [
              "Hazırlanan hatıra QR kodu, bağlantı veya e-posta ile teslim edilir. Kullanıcının bir kurgu ekranını öğrenmesi ya da uygulama indirmesi gerekmez. Kısa yolculuk, yaratıcı anı keyifli tutar ve sonucu hemen ulaşılabilir kılar.",
            ],
          },
        ],
      },
      nl: {
        slug: "een-foto-een-groter-verhaal",
        title: "Eén foto kan een veel groter verhaal dragen",
        excerpt: "Een goede foto-ervaring voegt niet alleen een effect toe. Ze brengt mens, plek en moment samen in een herinnering die je wilt bewaren.",
        seoTitle: "Maak van Eén Foto een Groter Verhaal",
        seoDescription: "Ontdek hoe ZoomSelfie een eenvoudig portret verandert in een persoonlijke foto- of videoherinnering aan een plek.",
        imageAlt: "Vrienden in een gepersonaliseerde foto-ervaring in Istanbul",
        sections: [
          {
            heading: "Begin bij de persoon, niet bij het effect",
            paragraphs: [
              "De sterkste foto-ervaringen voelen persoonlijk voordat ze technisch aanvoelen. De persoon moet zichzelf, de bezochte plek en de sfeer van het moment meteen herkennen.",
              "ZoomSelfie begint met een portret dat bij een kiosk is gemaakt of vanaf een telefoon is geüpload. De gekozen scène geeft het portret vervolgens een omgeving en verhaal zonder de persoon naar de achtergrond te drukken.",
            ],
          },
          {
            heading: "Maak de locatie onderdeel van de herinnering",
            paragraphs: [
              "Een herkenningspunt, museum, evenement of bestemming heeft al betekenis. De visuele stijl werkt het best wanneer kleuren, architectuur, sfeer en herkenbare details van die plek terugkomen.",
            ],
            bullets: ["Gebruik een herkenbaar visueel anker", "Houd de persoon duidelijk zichtbaar", "Ontwerp voor foto's én korte verticale video", "Maak ontvangen en delen eenvoudig"],
          },
          {
            heading: "Het resultaat moet moeiteloos voelen",
            paragraphs: [
              "De herinnering wordt geleverd via QR-code, link of e-mail. Er is geen ingewikkelde editor en geen app nodig. Een korte route houdt het creatieve moment leuk en maakt het resultaat direct bereikbaar.",
            ],
          },
        ],
      },
    },
  },
  {
    id: "kiosk-experience",
    publishedAt: "2026-07-16",
    readingMinutes: 4,
    category: "experiences",
    product: "zoomselfie",
    image: kioskIstanbul,
    translations: {
      en: {
        slug: "inside-a-zoomselfie-kiosk-experience",
        title: "Inside a ZoomSelfie kiosk experience",
        excerpt: "From the first tap to the final QR code, every step should feel obvious, quick and enjoyable.",
        seoTitle: "How a ZoomSelfie Kiosk Experience Works",
        seoDescription: "Follow the complete self-service journey inside a ZoomSelfie photo and video kiosk.",
        imageAlt: "ZoomSelfie kiosk experience in Istanbul",
        sections: [
          { heading: "A clear invitation", paragraphs: ["A kiosk has only a few seconds to explain itself. A strong opening screen shows what visitors can make, how long it takes and where to begin. The interface should invite action without requiring instructions from staff."] },
          { heading: "Four simple decisions", paragraphs: ["The journey is intentionally short: take or upload a photo, choose a scene, review the result and receive it. Optional choices can enrich the experience, but the main path should always remain visible."], bullets: ["Capture or upload", "Select a template or theme", "Create and preview", "Receive by QR, link or email"] },
          { heading: "Designed for the place around it", paragraphs: ["The physical kiosk, its screen layout and its content library should feel connected to the venue. A compact indoor kiosk, an outdoor cabin and a branded event setup can share the same core journey while looking completely different."] },
        ],
      },
      tr: {
        slug: "zoomselfie-kiosk-deneyiminin-icinde",
        title: "Bir ZoomSelfie kiosk deneyiminin içinde",
        excerpt: "İlk dokunuştan son QR koduna kadar her adım anlaşılır, hızlı ve keyifli hissettirmeli.",
        seoTitle: "ZoomSelfie Kiosk Deneyimi Nasıl Çalışır?",
        seoDescription: "ZoomSelfie fotoğraf ve video kioskunda self-servis deneyimin bütün adımlarını keşfedin.",
        imageAlt: "İstanbul'da ZoomSelfie kiosk deneyimi",
        sections: [
          { heading: "Açık bir davet", paragraphs: ["Bir kiosk kendisini anlatmak için yalnızca birkaç saniyeye sahiptir. Güçlü bir açılış ekranı ziyaretçinin ne üretebileceğini, bunun ne kadar süreceğini ve nereden başlayacağını gösterir. Arayüz, personel desteğine ihtiyaç bırakmadan harekete davet etmelidir."] },
          { heading: "Dört basit karar", paragraphs: ["Yolculuk bilinçli olarak kısa tutulur: fotoğrafını çek veya yükle, sahneyi seç, sonucu incele ve teslim al. Ek seçenekler deneyimi zenginleştirebilir; ancak ana yol her zaman görünür kalmalıdır."], bullets: ["Çek veya yükle", "Şablon ya da tema seç", "Oluştur ve ön izle", "QR, bağlantı veya e-posta ile teslim al"] },
          { heading: "Çevresindeki mekân için tasarlandı", paragraphs: ["Fiziksel kiosk, ekran düzeni ve içerik kütüphanesi mekânla aynı dünyaya ait hissettirmelidir. Kompakt bir iç mekân kiosku, açık hava kabini ve markalı etkinlik kurulumu aynı temel yolculuğu paylaşırken tamamen farklı görünebilir."] },
        ],
      },
      nl: {
        slug: "in-een-zoomselfie-kioskervaring",
        title: "Binnen in een ZoomSelfie-kioskervaring",
        excerpt: "Van de eerste aanraking tot de laatste QR-code moet elke stap duidelijk, snel en prettig aanvoelen.",
        seoTitle: "Zo Werkt een ZoomSelfie-kioskervaring",
        seoDescription: "Volg de volledige selfservicereis in een ZoomSelfie foto- en videokiosk.",
        imageAlt: "ZoomSelfie-kioskervaring in Istanbul",
        sections: [
          { heading: "Een duidelijke uitnodiging", paragraphs: ["Een kiosk heeft maar een paar seconden om zichzelf uit te leggen. Een sterk beginscherm laat zien wat bezoekers kunnen maken, hoeveel tijd dat kost en waar ze beginnen. De interface nodigt uit zonder uitleg van medewerkers nodig te hebben."] },
          { heading: "Vier eenvoudige keuzes", paragraphs: ["De reis is bewust kort: maak of upload een foto, kies een scène, bekijk het resultaat en ontvang het. Extra keuzes kunnen de ervaring verrijken, maar de hoofdroute blijft altijd zichtbaar."], bullets: ["Maken of uploaden", "Een sjabloon of thema kiezen", "Creëren en bekijken", "Ontvangen via QR, link of e-mail"] },
          { heading: "Ontworpen voor de omgeving", paragraphs: ["De fysieke kiosk, schermindeling en contentbibliotheek horen bij de locatie te passen. Een compacte binnenkiosk, buitenunit en merkopstelling voor een evenement kunnen dezelfde kernreis delen en toch compleet anders ogen."] },
        ],
      },
    },
  },
  {
    id: "choosing-a-kiosk",
    publishedAt: "2026-07-08",
    readingMinutes: 6,
    category: "guides",
    product: "zoomselfie",
    image: kioskModelPro,
    translations: {
      en: {
        slug: "choosing-the-right-photo-kiosk",
        title: "Choosing the right photo kiosk for your space",
        excerpt: "The best kiosk is not simply the largest one. Start with the visitor flow, environment and content you want people to create.",
        seoTitle: "How to Choose the Right Photo Kiosk",
        seoDescription: "Compare the practical factors that shape the right ZoomSelfie kiosk configuration for a venue or event.",
        imageAlt: "ZoomSelfie Pro photo kiosk model",
        sections: [
          { heading: "Begin with the visitor flow", paragraphs: ["Think about where people first notice the kiosk, where they wait and how they leave after receiving their content. A kiosk should support the natural movement of the space rather than create a queue across it."] },
          { heading: "Match the hardware to the environment", paragraphs: ["Screen size, camera position, lighting and enclosure all depend on the installation. Indoor, outdoor and temporary event environments require different levels of protection and flexibility."], bullets: ["Available floor area", "Expected daily use", "Indoor or outdoor conditions", "Standing distance and group size", "Branding and finish requirements"] },
          { heading: "Choose options with a purpose", paragraphs: ["Printers, payment systems and additional lighting can be valuable, but only when they support the intended journey. A focused configuration is easier to understand, maintain and operate."] },
        ],
      },
      tr: {
        slug: "mekaniniz-icin-dogru-fotograf-kiosku",
        title: "Mekânınız için doğru fotoğraf kioskunu seçmek",
        excerpt: "En iyi kiosk yalnızca en büyük olan değildir. Ziyaretçi akışı, ortam ve insanların üretmesini istediğiniz içerikle başlayın.",
        seoTitle: "Doğru Fotoğraf Kiosku Nasıl Seçilir?",
        seoDescription: "Bir mekân veya etkinlik için doğru ZoomSelfie kiosk yapılandırmasını belirleyen pratik unsurları karşılaştırın.",
        imageAlt: "ZoomSelfie Pro fotoğraf kiosk modeli",
        sections: [
          { heading: "Ziyaretçi akışıyla başlayın", paragraphs: ["İnsanların kiosku ilk nerede fark ettiğini, nerede beklediğini ve içeriklerini aldıktan sonra nasıl ayrıldığını düşünün. Kiosk, mekânın doğal hareketini desteklemeli; geçiş alanının üzerinde kuyruk oluşturmamalıdır."] },
          { heading: "Donanımı ortama göre belirleyin", paragraphs: ["Ekran boyutu, kamera konumu, ışık ve gövde seçimi kurulum alanına bağlıdır. İç mekân, açık hava ve geçici etkinlik ortamları farklı koruma ve esneklik seviyeleri gerektirir."], bullets: ["Kullanılabilir zemin alanı", "Beklenen günlük kullanım", "İç veya dış mekân koşulları", "Çekim mesafesi ve grup büyüklüğü", "Markalama ve kaplama ihtiyaçları"] },
          { heading: "Seçenekleri bir amaçla ekleyin", paragraphs: ["Yazıcı, ödeme sistemi ve ek aydınlatma değerli olabilir; ancak yalnızca hedeflenen yolculuğu desteklediğinde. Odaklı bir yapılandırmayı anlamak, sürdürmek ve işletmek daha kolaydır."] },
        ],
      },
      nl: {
        slug: "de-juiste-fotokiosk-voor-jouw-locatie",
        title: "De juiste fotokiosk voor jouw locatie kiezen",
        excerpt: "De beste kiosk is niet simpelweg de grootste. Begin bij de bezoekersstroom, omgeving en content die mensen moeten kunnen maken.",
        seoTitle: "Zo Kies je de Juiste Fotokiosk",
        seoDescription: "Vergelijk de praktische factoren voor de juiste ZoomSelfie-kioskconfiguratie op een locatie of evenement.",
        imageAlt: "ZoomSelfie Pro-fotokioskmodel",
        sections: [
          { heading: "Begin bij de bezoekersstroom", paragraphs: ["Bedenk waar mensen de kiosk voor het eerst zien, waar ze wachten en hoe ze vertrekken nadat ze hun content hebben ontvangen. De kiosk ondersteunt de natuurlijke beweging in de ruimte en hoort geen wachtrij dwars door een looproute te veroorzaken."] },
          { heading: "Stem de hardware af op de omgeving", paragraphs: ["Schermformaat, camerapositie, verlichting en behuizing hangen af van de installatie. Binnenlocaties, buitenruimtes en tijdelijke evenementen vragen elk om een ander niveau van bescherming en flexibiliteit."], bullets: ["Beschikbare vloeroppervlakte", "Verwacht dagelijks gebruik", "Binnen- of buitenomstandigheden", "Opnameafstand en groepsgrootte", "Wensen voor branding en afwerking"] },
          { heading: "Kies opties met een duidelijk doel", paragraphs: ["Printers, betaalsystemen en extra verlichting kunnen waardevol zijn, maar alleen wanneer ze de beoogde route ondersteunen. Een gerichte configuratie is eenvoudiger te begrijpen, onderhouden en bedienen."] },
        ],
      },
    },
  },
  {
    id: "creative-formats",
    publishedAt: "2026-06-28",
    readingMinutes: 5,
    category: "inspiration",
    product: "zoomselfie",
    image: galleryAquarium,
    translations: {
      en: {
        slug: "creative-photo-and-video-formats",
        title: "Creative photo and video formats people want to share",
        excerpt: "A memorable result balances surprise with recognition. These formats give visitors something new without losing the original moment.",
        seoTitle: "Creative Photo and Video Formats for Visitor Experiences",
        seoDescription: "Explore visual formats for shareable, personalized ZoomSelfie photo and video experiences.",
        imageAlt: "Family in a creative aquarium photo experience",
        sections: [
          { heading: "Build around a recognisable moment", paragraphs: ["Transformation works best when the original portrait remains easy to recognise. The creative layer can change the place, era, colour or movement while preserving the expression that made the photo personal."] },
          { heading: "Formats that work across different places", paragraphs: ["Not every experience needs the same output. A museum may use a period portrait, an observation deck a cinematic skyline and an event a fast branded loop."], bullets: ["Animated destination postcard", "Then-and-now portrait", "Cinematic vertical reveal", "Seasonal campaign frame", "Group scene with a shared theme"] },
          { heading: "Design for the final screen", paragraphs: ["A result may be discovered first on a kiosk, then viewed on a phone and finally shared on a social platform. Strong type, clear framing and a recognisable subject help the same design survive every size."] },
        ],
      },
      tr: {
        slug: "paylasilmak-istenen-yaratici-fotograf-video-formatlari",
        title: "İnsanların paylaşmak isteyeceği yaratıcı fotoğraf ve video formatları",
        excerpt: "Hatırlanan bir sonuç, şaşırtıcılıkla tanıdıklığı dengeler. Bu formatlar asıl anı kaybetmeden ziyaretçiye yeni bir şey verir.",
        seoTitle: "Ziyaretçi Deneyimleri İçin Yaratıcı Fotoğraf ve Video Formatları",
        seoDescription: "Paylaşılabilir ve kişiselleştirilmiş ZoomSelfie fotoğraf-video deneyimleri için görsel formatları keşfedin.",
        imageAlt: "Yaratıcı akvaryum fotoğraf deneyimindeki aile",
        sections: [
          { heading: "Tanıdık bir anın etrafında tasarlayın", paragraphs: ["Dönüşüm, asıl portre kolayca tanındığında daha iyi çalışır. Yaratıcı katman; fotoğrafı kişisel yapan ifadeyi korurken mekânı, dönemi, rengi veya hareketi değiştirebilir."] },
          { heading: "Farklı mekânlarda çalışan formatlar", paragraphs: ["Her deneyim aynı çıktıya ihtiyaç duymaz. Bir müze dönem portresi, seyir terası sinematik şehir manzarası, etkinlik ise hızlı ve markalı bir döngü kullanabilir."], bullets: ["Hareketli destinasyon kartpostalı", "Geçmiş ve bugün portresi", "Sinematik dikey açılış", "Sezonluk kampanya çerçevesi", "Ortak temalı grup sahnesi"] },
          { heading: "Son ekranı düşünerek tasarlayın", paragraphs: ["Bir sonuç önce kioskta keşfedilebilir, sonra telefonda izlenebilir ve en sonunda sosyal platformda paylaşılabilir. Güçlü tipografi, temiz kadraj ve kolay tanınan bir özne aynı tasarımın her boyutta çalışmasını sağlar."] },
        ],
      },
      nl: {
        slug: "creatieve-foto-en-videoformaten",
        title: "Creatieve foto- en videoformaten die mensen willen delen",
        excerpt: "Een sterk resultaat combineert verrassing met herkenning. Deze formats geven bezoekers iets nieuws zonder het oorspronkelijke moment kwijt te raken.",
        seoTitle: "Creatieve Foto- en Videoformats voor Bezoekerservaringen",
        seoDescription: "Ontdek visuele formats voor deelbare, gepersonaliseerde ZoomSelfie foto- en video-ervaringen.",
        imageAlt: "Gezin in een creatieve aquariumfoto-ervaring",
        sections: [
          { heading: "Bouw rond een herkenbaar moment", paragraphs: ["Transformatie werkt het best wanneer het oorspronkelijke portret herkenbaar blijft. De creatieve laag kan plaats, tijdperk, kleur of beweging veranderen en tegelijk de uitdrukking bewaren die de foto persoonlijk maakt."] },
          { heading: "Formats voor verschillende locaties", paragraphs: ["Niet elke ervaring vraagt om dezelfde uitvoer. Een museum kan een historisch portret gebruiken, een uitzichtpunt een filmische skyline en een evenement een snelle merkloop."], bullets: ["Geanimeerde bestemmingskaart", "Toen-en-nu-portret", "Filmische verticale onthulling", "Seizoensgebonden campagneframe", "Groepsscène met één thema"] },
          { heading: "Ontwerp voor het laatste scherm", paragraphs: ["Een resultaat wordt misschien eerst op een kiosk ontdekt, daarna op een telefoon bekeken en uiteindelijk gedeeld op een sociaal platform. Sterke typografie, een helder kader en herkenbaar onderwerp laten hetzelfde ontwerp op elk formaat werken."] },
        ],
      },
    },
  },
  {
    id: "capture-to-share",
    publishedAt: "2026-06-18",
    readingMinutes: 4,
    category: "guides",
    product: "zoomselfie",
    image: galleryCruise,
    translations: {
      en: {
        slug: "designing-the-journey-from-capture-to-share",
        title: "Designing a smoother journey from capture to share",
        excerpt: "Every unnecessary choice creates hesitation. A focused journey helps people reach a result they love while the moment still feels fresh.",
        seoTitle: "Designing a Photo Journey from Capture to Share",
        seoDescription: "Learn the principles behind a clear, fast self-service photo and video journey.",
        imageAlt: "Couple sharing a personalized cruise photo",
        sections: [
          { heading: "Make the next action unmistakable", paragraphs: ["Each screen should answer one question and make one primary action obvious. A person should never need to guess whether to pose, tap, wait or scan."] },
          { heading: "Keep feedback immediate", paragraphs: ["A visible countdown, clear processing state and useful preview build confidence. Small moments of feedback are especially important when the experience includes a camera or generated video."], bullets: ["Use short, human instructions", "Show progress only when it is useful", "Keep secondary controls quiet", "Provide a clear way to try again"] },
          { heading: "Treat delivery as part of the experience", paragraphs: ["The journey does not finish when the visual is created. QR placement, mobile loading speed and download clarity decide whether the memory is actually kept and shared."] },
        ],
      },
      tr: {
        slug: "cekimden-paylasima-daha-akici-yolculuk",
        title: "Çekimden paylaşıma daha akıcı bir yolculuk tasarlamak",
        excerpt: "Her gereksiz seçim kararsızlık yaratır. Odaklı bir yolculuk, an hâlâ tazeyken insanların sevdikleri sonuca ulaşmasını sağlar.",
        seoTitle: "Çekimden Paylaşıma Fotoğraf Yolculuğu Tasarlamak",
        seoDescription: "Anlaşılır ve hızlı bir self-servis fotoğraf-video yolculuğunun temel ilkelerini öğrenin.",
        imageAlt: "Kişiselleştirilmiş gemi fotoğrafını paylaşan çift",
        sections: [
          { heading: "Sıradaki hareketi tartışmasız hâle getirin", paragraphs: ["Her ekran tek bir soruyu yanıtlamalı ve birincil hareketi açıkça göstermelidir. Kullanıcı poz vermesi, dokunması, beklemesi veya tarama yapması gerektiğini tahmin etmek zorunda kalmamalıdır."] },
          { heading: "Geri bildirimi anında verin", paragraphs: ["Görünür bir geri sayım, açık işlem durumu ve işe yarayan ön izleme güven oluşturur. Deneyim kamera veya üretilen video içerdiğinde küçük geri bildirim anları özellikle önemlidir."], bullets: ["Kısa ve insani yönlendirmeler kullanın", "İlerlemeyi yalnızca gerektiğinde gösterin", "İkincil kontrolleri sakin tutun", "Yeniden denemek için açık bir yol sunun"] },
          { heading: "Teslimatı deneyimin parçası sayın", paragraphs: ["Yolculuk görsel üretildiğinde bitmez. QR kodunun yeri, mobil açılış hızı ve indirme adımının açıklığı, hatıranın gerçekten saklanıp paylaşılmasını belirler."] },
        ],
      },
      nl: {
        slug: "een-soepelere-reis-van-opname-tot-delen",
        title: "Een soepelere reis ontwerpen van opname tot delen",
        excerpt: "Elke onnodige keuze zorgt voor twijfel. Een gerichte reis helpt mensen een resultaat te bereiken waar ze blij mee zijn terwijl het moment nog vers is.",
        seoTitle: "Een Fotoreis Ontwerpen van Opname tot Delen",
        seoDescription: "Leer de principes achter een duidelijke en snelle selfservice foto- en videoreis.",
        imageAlt: "Stel dat een gepersonaliseerde cruisefoto deelt",
        sections: [
          { heading: "Maak de volgende actie onmiskenbaar", paragraphs: ["Elk scherm beantwoordt één vraag en maakt één primaire actie duidelijk. Een persoon mag nooit hoeven raden of het tijd is om te poseren, tikken, wachten of scannen."] },
          { heading: "Geef direct feedback", paragraphs: ["Een zichtbare aftelling, duidelijke verwerkingsstatus en bruikbare preview geven vertrouwen. Kleine feedbackmomenten zijn extra belangrijk wanneer de ervaring een camera of gegenereerde video bevat."], bullets: ["Gebruik korte, menselijke instructies", "Toon voortgang alleen wanneer dat nuttig is", "Houd secundaire bediening rustig", "Bied een duidelijke mogelijkheid om opnieuw te proberen"] },
          { heading: "Zie levering als onderdeel van de ervaring", paragraphs: ["De reis eindigt niet wanneer het beeld is gemaakt. De plaats van de QR-code, mobiele laadsnelheid en helderheid van de download bepalen of de herinnering werkelijk wordt bewaard en gedeeld."] },
        ],
      },
    },
  },
  {
    id: "connected-attraction-operation",
    publishedAt: "2026-06-09",
    readingMinutes: 7,
    category: "photosoft",
    product: "photosoft",
    image: appDashboard,
    translations: {
      en: {
        slug: "connecting-an-attraction-photography-operation",
        title: "What connects a complete attraction photography operation?",
        excerpt: "Capture points, guest matching, galleries, sales and delivery create more value when they operate as one continuous system.",
        seoTitle: "Connecting an Attraction Photography Operation with PhotoSoft",
        seoDescription: "See how PhotoSoft connects capture, guest matching, content, sales, delivery and analytics inside an attraction.",
        imageAlt: "PhotoSoft attraction photography management dashboard",
        sections: [
          { heading: "The journey starts before the kiosk", paragraphs: ["In attraction photography, the first interaction often happens at a capture point: a studio, automatic camera, ride system or roaming photographer. The kiosk is one place to find and buy the result, not the whole operation."] },
          { heading: "A shared identity connects every stage", paragraphs: ["A QR code, ticket, wristband, guest account or integration can connect each capture with the right visitor. That connection lets the same gallery move across kiosk, POS and online channels without rebuilding the order journey."], bullets: ["Capture and association", "Automated creative products", "Personal gallery", "Kiosk, POS and online sales", "Digital or physical delivery", "Operational analytics"] },
          { heading: "One operation creates a clearer view", paragraphs: ["When capture and sales data live together, teams can compare locations, products and channels with confidence. PhotoSoft gives the professional photography business one operational structure from the first capture to the final delivery."] },
        ],
      },
      tr: {
        slug: "turistik-mekan-fotograf-operasyonunu-birlestirmek",
        title: "Eksiksiz bir turistik mekân fotoğraf operasyonunu ne birleştirir?",
        excerpt: "Çekim noktaları, ziyaretçi eşleştirme, galeriler, satış ve teslimat kesintisiz tek sistem olarak çalıştığında daha fazla değer üretir.",
        seoTitle: "PhotoSoft ile Turistik Mekân Fotoğraf Operasyonunu Birleştirmek",
        seoDescription: "PhotoSoft'un turistik mekânda çekim, ziyaretçi eşleştirme, içerik, satış, teslimat ve analizi nasıl birleştirdiğini görün.",
        imageAlt: "PhotoSoft turistik mekân fotoğrafçılığı yönetim paneli",
        sections: [
          { heading: "Yolculuk kiosktan önce başlar", paragraphs: ["Turistik mekân fotoğrafçılığında ilk etkileşim çoğu zaman bir çekim noktasında gerçekleşir: stüdyo, otomatik kamera, eğlence sistemi veya gezici fotoğrafçı. Kiosk, sonucu bulma ve satın alma noktalarından biridir; operasyonun tamamı değildir."] },
          { heading: "Ortak kimlik bütün adımları birbirine bağlar", paragraphs: ["QR kodu, bilet, bileklik, ziyaretçi hesabı veya entegrasyon her çekimi doğru ziyaretçiyle buluşturabilir. Bu bağlantı aynı galerinin, sipariş yolculuğunu yeniden kurmadan kiosk, POS ve çevrim içi kanallar arasında ilerlemesini sağlar."], bullets: ["Çekim ve eşleştirme", "Otomatik yaratıcı ürünler", "Kişisel galeri", "Kiosk, POS ve çevrim içi satış", "Dijital veya fiziksel teslimat", "Operasyon analitiği"] },
          { heading: "Tek operasyon daha net bir görünüm yaratır", paragraphs: ["Çekim ve satış verileri birlikte yaşadığında ekipler mekânları, ürünleri ve kanalları güvenle karşılaştırabilir. PhotoSoft, profesyonel fotoğraf işletmesine ilk çekimden son teslimata uzanan tek bir operasyon yapısı verir."] },
        ],
      },
      nl: {
        slug: "een-attractiefotografie-operatie-verbinden",
        title: "Wat verbindt een complete attractiefotografie-operatie?",
        excerpt: "Opnamepunten, gastkoppeling, galerijen, verkoop en levering leveren meer waarde op wanneer ze als één doorlopend systeem werken.",
        seoTitle: "Een Attractiefotografie-operatie Verbinden met PhotoSoft",
        seoDescription: "Ontdek hoe PhotoSoft opname, gastkoppeling, content, verkoop, levering en analyse binnen een attractie verbindt.",
        imageAlt: "PhotoSoft-beheerdashboard voor attractiefotografie",
        sections: [
          { heading: "De reis begint vóór de kiosk", paragraphs: ["Bij attractiefotografie vindt de eerste interactie vaak plaats bij een opnamepunt: een studio, automatische camera, attractiesysteem of mobiele fotograaf. De kiosk is één plek om het resultaat te vinden en kopen, niet de volledige operatie."] },
          { heading: "Eén identiteit verbindt iedere stap", paragraphs: ["Een QR-code, ticket, polsbandje, gastaccount of integratie koppelt elke opname aan de juiste bezoeker. Daardoor kan dezelfde galerij langs kiosk, POS en online kanalen bewegen zonder de bestelreis opnieuw op te bouwen."], bullets: ["Opname en koppeling", "Automatische creatieve producten", "Persoonlijke galerij", "Kiosk-, POS- en online verkoop", "Digitale of fysieke levering", "Operationele analyse"] },
          { heading: "Eén operatie geeft een duidelijker beeld", paragraphs: ["Wanneer opname- en verkoopdata samenkomen, kunnen teams locaties, producten en kanalen betrouwbaar vergelijken. PhotoSoft geeft het professionele fotobedrijf één operationele structuur van de eerste opname tot de laatste levering."] },
        ],
      },
    },
  },
  {
    id: "designing-for-destinations",
    publishedAt: "2026-05-29",
    readingMinutes: 5,
    category: "experiences",
    product: "zoomselfie",
    image: galleryParis,
    translations: {
      en: {
        slug: "designing-photo-experiences-for-destinations",
        title: "Designing a photo experience that belongs to its destination",
        excerpt: "The most memorable experiences could not have happened anywhere else. Their visual language begins with the place itself.",
        seoTitle: "Designing Photo Experiences for Destinations",
        seoDescription: "Learn how location, story and visual identity shape a distinctive destination photo experience.",
        imageAlt: "Couple in a personalized Paris destination photo",
        sections: [
          { heading: "Find what makes the place recognisable", paragraphs: ["A destination is more than its most famous view. Materials, signs, local colour, weather, sounds and movement can all inspire a visual system that feels specific rather than generic."] },
          { heading: "Create a small family of stories", paragraphs: ["A focused collection gives visitors choice without turning the selection screen into a catalogue. Each story can express a different mood while sharing the same destination identity."], bullets: ["A signature landmark scene", "A playful or unexpected version", "A seasonal story", "A clean souvenir format"] },
          { heading: "Carry the identity through delivery", paragraphs: ["The experience should still feel connected to the destination when the result opens on a phone. The gallery, download screen and share preview are all part of the memory, not administrative steps after it."] },
        ],
      },
      tr: {
        slug: "destinasyona-ait-fotograf-deneyimi-tasarlamak",
        title: "Destinasyonuna ait hissettiren bir fotoğraf deneyimi tasarlamak",
        excerpt: "En unutulmaz deneyimler başka hiçbir yerde yaşanamazdı. Görsel dilleri doğrudan mekânın kendisinden başlar.",
        seoTitle: "Destinasyonlar İçin Fotoğraf Deneyimi Tasarlamak",
        seoDescription: "Mekân, hikâye ve görsel kimliğin özgün bir destinasyon fotoğraf deneyimini nasıl şekillendirdiğini öğrenin.",
        imageAlt: "Kişiselleştirilmiş Paris destinasyon fotoğrafındaki çift",
        sections: [
          { heading: "Mekânı tanınır yapan şeyi bulun", paragraphs: ["Bir destinasyon en ünlü manzarasından ibaret değildir. Malzemeler, tabelalar, yerel renkler, hava, sesler ve hareket; jenerik değil o yere özel hissettiren bir görsel sisteme ilham verebilir."] },
          { heading: "Küçük bir hikâye ailesi oluşturun", paragraphs: ["Odaklı bir koleksiyon, seçim ekranını kataloğa çevirmeden ziyaretçiye tercih hakkı verir. Her hikâye farklı bir duygu taşırken aynı destinasyon kimliğini paylaşabilir."], bullets: ["İmza niteliğinde simge yapı sahnesi", "Eğlenceli veya beklenmedik bir yorum", "Sezonluk hikâye", "Temiz bir hatıra formatı"] },
          { heading: "Kimliği teslimata kadar taşıyın", paragraphs: ["Sonuç telefonda açıldığında da deneyim destinasyonla bağını korumalıdır. Galeri, indirme ekranı ve paylaşım ön izlemesi, sonradan gelen idari adımlar değil hatıranın parçalarıdır."] },
        ],
      },
      nl: {
        slug: "foto-ervaringen-voor-bestemmingen-ontwerpen",
        title: "Een foto-ervaring ontwerpen die bij de bestemming hoort",
        excerpt: "De meest memorabele ervaringen hadden nergens anders kunnen plaatsvinden. Hun visuele taal begint bij de plek zelf.",
        seoTitle: "Foto-ervaringen voor Bestemmingen Ontwerpen",
        seoDescription: "Leer hoe locatie, verhaal en visuele identiteit een onderscheidende foto-ervaring voor een bestemming vormen.",
        imageAlt: "Stel in een gepersonaliseerde bestemmingsfoto in Parijs",
        sections: [
          { heading: "Vind wat de plek herkenbaar maakt", paragraphs: ["Een bestemming is meer dan het bekendste uitzicht. Materialen, borden, lokale kleuren, weer, geluid en beweging kunnen samen een visueel systeem inspireren dat specifiek in plaats van algemeen voelt."] },
          { heading: "Maak een kleine familie van verhalen", paragraphs: ["Een gerichte collectie biedt bezoekers keuze zonder van het selectiescherm een catalogus te maken. Elk verhaal kan een andere sfeer uitdrukken en toch dezelfde bestemmingsidentiteit delen."], bullets: ["Een kenmerkende scène met een herkenningspunt", "Een speelse of onverwachte versie", "Een seizoensverhaal", "Een helder souvenirformat"] },
          { heading: "Trek de identiteit door tot de levering", paragraphs: ["Wanneer het resultaat op een telefoon opent, hoort het nog steeds met de bestemming verbonden te voelen. De galerij, het downloadscherm en de deelpreview zijn onderdelen van de herinnering, geen administratieve stappen erna."] },
        ],
      },
    },
  },
];

export function isBlogLocale(value: string): value is BlogLocale {
  return blogLocales.includes(value as BlogLocale);
}

export function getBlogPosts(locale: BlogLocale): LocalizedBlogPost[] {
  return blogPosts
    .map((post) => ({
      ...post,
      ...post.translations[locale],
      locale,
      alternateSlugs: Object.fromEntries(blogLocales.map((item) => [item, post.translations[item].slug])) as Record<BlogLocale, string>,
    }))
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getBlogPost(locale: BlogLocale, slug: string) {
  return getBlogPosts(locale).find((post) => post.slug === slug);
}

export function getAllBlogParams() {
  return blogPosts.flatMap((post) => blogLocales.map((locale) => ({ locale, slug: post.translations[locale].slug })));
}
