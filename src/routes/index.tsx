import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, MapPin, Phone, Mail, Cog, Clock, Languages } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Leela Grinding Machine Shop — Fresh Flour & Batter in Kandukur, AP" },
      { name: "description", content: "Fresh, pure and hygienic daily grinding — dosa, idly, vada pindi, wet grinding and chutney. South Bazar, Kandukur, Andhra Pradesh." },
      { property: "og:title", content: "Leela Grinding Machine Shop" },
      { property: "og:description", content: "Fresh Grinding. Pure & Hygienic. Open every day in Kandukur, AP." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=DM+Sans:wght@400;500;600;700&family=Noto+Serif+Telugu:wght@500;600;700&family=Noto+Sans+Telugu:wght@400;500;600;700&display=swap" },
    ],
  }),
});

type Lang = "en" | "te";

const t = {
  en: {
    nav: { about: "About", services: "Services", hours: "Hours", contact: "Contact" },
    brand: "Leela Grinding",
    badge: "Est. in Kandukur, AP",
    heroTitle1: "Fresh Grinding.",
    heroTitle2: "Pure & Hygienic.",
    heroDesc: "Every batter and pindi stone-ground fresh, daily — preserving the aroma, nutrition, and authentic taste your family deserves.",
    ourServices: "Our Services",
    findUs: "Find Us",
    aboutTag: "Our Story",
    aboutTitle1: "Leela Grinding",
    aboutTitle2: "Machine Shop",
    aboutP1Pre: "For years, Leela Grinding Machine Shop has been the trusted neighborhood name in ",
    aboutP1Place: "South Bazar, Kandukur",
    aboutP1Post: ", serving families with fresh, hygienic batters and pindis ground every single day.",
    aboutP2: "We blend traditional stone-grinding craft with modern hygiene — so every spoonful of batter carries the wholesome taste of home.",
    freshDaily: "Fresh Ground Daily",
    freshTags: "Hygienic · Fast · Trusted",
    whatWeOffer: "What We Offer",
    craftedWith: "Crafted with",
    care: "care",
    servicesDesc: "From breakfast staples to chutneys, every service is ground fresh to order.",
    workingHours: "Working Hours",
    openEvery: "Open Every Day · Monday to Sunday",
    visitUs: "Visit Us",
    comeSay: "Come say",
    hello: "hello",
    address: "Address",
    addressText: "South Bazar, beside Sunitha Hotel, Near Pothu Raju Mitta, Kandukur, AP, India",
    phone: "Phone",
    email: "Email",
    findMap: "Find us on the map",
    mapDesc: "Easy to locate on South Bazar, right beside Sunitha Hotel near Pothu Raju Mitta.",
    openMaps: "Open in Google Maps",
    footerAddr: "South Bazar, beside Sunitha Hotel, Near Pothu Raju Mitta,",
    footerCity: "Kandukur, Andhra Pradesh, India",
    openDaily: "Open Daily · 8:00 AM — 8:30 PM",
    madeWith: "Leela Grinding · Made with care",
    services: [
      { icon: "🫓", name: "Dosa Pindi", desc: "Crisp, golden dosas every morning — freshly stone-ground batter.", tag: "Daily Fresh" },
      { icon: "🥣", name: "Idly Pindi", desc: "Soft, fluffy idly batter perfectly fermented for traditional taste.", tag: "Authentic" },
      { icon: "🍩", name: "Vada Pindi", desc: "Smooth urad dal batter for crispy, restaurant-style vadas.", tag: "Crispy" },
      { icon: "🌿", name: "Chutney Grinding", desc: "Quick chutney grinding for coconut, peanut, tomato and more.", tag: "Quick" },
      { icon: "⚡", name: "Quick Service", desc: "Fast turnaround so you never wait — bring it in, take it home.", tag: "Fast" },
    ],
  },
  te: {
    nav: { about: "మా గురించి", services: "సేవలు", hours: "సమయాలు", contact: "సంప్రదించండి" },
    brand: "లీలా గ్రైండింగ్",
    badge: "కందుకూరు, ఆం.ప్ర.లో స్థాపించబడింది",
    heroTitle1: "తాజా గ్రైండింగ్.",
    heroTitle2: "స్వచ్ఛమైన & పరిశుభ్రమైన.",
    heroDesc: "ప్రతి పిండి మరియు బ్యాటర్ ప్రతిరోజూ తాజాగా రుబ్బుతాము — మీ కుటుంబానికి సుగంధం, పోషణ మరియు అసలైన రుచిని అందిస్తాము.",
    ourServices: "మా సేవలు",
    findUs: "మమ్మల్ని కనుగొనండి",
    aboutTag: "మా కథ",
    aboutTitle1: "లీలా గ్రైండింగ్",
    aboutTitle2: "మెషీన్ షాప్",
    aboutP1Pre: "ఎన్నో సంవత్సరాలుగా, లీలా గ్రైండింగ్ మెషీన్ షాప్ ",
    aboutP1Place: "సౌత్ బజార్, కందుకూరు",
    aboutP1Post: "లో నమ్మకమైన పేరుగా నిలిచింది, ప్రతిరోజూ తాజా, పరిశుభ్రమైన పిండి మరియు బ్యాటర్‌లను అందిస్తోంది.",
    aboutP2: "సాంప్రదాయ రాతి రుబ్బుడుని ఆధునిక పరిశుభ్రతతో మేళవించి — ప్రతి చుక్క బ్యాటర్‌లోనూ ఇంటి రుచిని తీసుకొస్తాము.",
    freshDaily: "ప్రతిరోజూ తాజాగా రుబ్బబడుతుంది",
    freshTags: "పరిశుభ్రం · వేగం · నమ్మకం",
    whatWeOffer: "మేము అందించేవి",
    craftedWith: "శ్రద్ధతో",
    care: "తయారు చేయబడింది",
    servicesDesc: "అల్పాహారం నుండి చట్నీల వరకు, ప్రతి సేవ ఆర్డర్‌కి తాజాగా రుబ్బబడుతుంది.",
    workingHours: "పని వేళలు",
    openEvery: "ప్రతిరోజూ తెరిచి ఉంటుంది · సోమవారం నుండి ఆదివారం",
    visitUs: "మమ్మల్ని సందర్శించండి",
    comeSay: "వచ్చి",
    hello: "పలకరించండి",
    address: "చిరునామా",
    addressText: "సౌత్ బజార్, సునీత హోటల్ పక్కన, పోతురాజు మిట్ట దగ్గర, కందుకూరు, ఆం.ప్ర., భారతదేశం",
    phone: "ఫోన్",
    email: "ఇమెయిల్",
    findMap: "మ్యాప్‌లో మమ్మల్ని కనుగొనండి",
    mapDesc: "సౌత్ బజార్‌లో, పోతురాజు మిట్ట దగ్గర సునీత హోటల్ పక్కనే సులభంగా కనుగొనవచ్చు.",
    openMaps: "గూగుల్ మ్యాప్స్‌లో తెరువండి",
    footerAddr: "సౌత్ బజార్, సునీత హోటల్ పక్కన, పోతురాజు మిట్ట దగ్గర,",
    footerCity: "కందుకూరు, ఆంధ్రప్రదేశ్, భారతదేశం",
    openDaily: "ప్రతిరోజూ తెరిచి ఉంటుంది · ఉ. 8:00 — రా. 8:30",
    madeWith: "లీలా గ్రైండింగ్ · శ్రద్ధతో తయారు చేయబడింది",
    services: [
      { icon: "🫓", name: "దోస పిండి", desc: "ప్రతి ఉదయం కరకరలాడే, బంగారు రంగు దోసలు — తాజాగా రుబ్బిన బ్యాటర్.", tag: "ప్రతిరోజూ తాజా" },
      { icon: "🥣", name: "ఇడ్లీ పిండి", desc: "మృదువైన, మెత్తని ఇడ్లీ బ్యాటర్ సాంప్రదాయ రుచి కోసం పులియబెట్టబడింది.", tag: "అసలైనది" },
      { icon: "🍩", name: "వడ పిండి", desc: "హోటల్ స్టైల్ కరకర వడల కోసం మినప పప్పు బ్యాటర్.", tag: "కరకర" },
      { icon: "🌿", name: "చట్నీ రుబ్బుడు", desc: "కొబ్బరి, వేరుశెనగ, టమాట మరియు మరిన్ని చట్నీలు త్వరగా రుబ్బుతాము.", tag: "త్వరగా" },
      { icon: "⚡", name: "త్వరిత సేవ", desc: "మీరు వేచి ఉండకుండా — తీసుకొచ్చి, తీసుకెళ్లండి.", tag: "వేగంగా" },
    ],
  },
};

function Index() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<Lang>("en");
  const L = t[lang];
  const teluguFont = lang === "te" ? { fontFamily: "'Noto Sans Telugu', 'DM Sans', sans-serif" } : undefined;
  const teluguDisplay = lang === "te" ? { fontFamily: "'Noto Serif Telugu', 'Playfair Display', serif" } : undefined;

  const navLinks = [
    { href: "#about", label: L.nav.about },
    { href: "#services", label: L.nav.services },
    { href: "#hours", label: L.nav.hours },
    { href: "#contact", label: L.nav.contact },
  ];

  const toggleLang = () => setLang(lang === "en" ? "te" : "en");

  return (
    <div className="min-h-screen bg-[var(--cream)] text-foreground" style={teluguFont}>
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[var(--dark)]/95 backdrop-blur-md border-b border-[var(--gold)]/15">
        <nav className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-display text-xl font-semibold text-[var(--gold)]" style={teluguDisplay}>
            <Cog className="w-6 h-6" strokeWidth={1.5} />
            <span>{L.brand}</span>
          </a>
          <ul className="hidden md:flex items-center gap-9">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm tracking-wide text-[var(--cream)]/80 hover:text-[var(--gold)] transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleLang}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--gold)]/40 text-[var(--gold)] text-xs tracking-wide hover:bg-[var(--gold)] hover:text-[var(--dark)] transition-all"
              aria-label="Toggle language"
            >
              <Languages className="w-3.5 h-3.5" />
              {lang === "en" ? "తెలుగు" : "English"}
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-[var(--cream)] p-2"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
        {open && (
          <div className="md:hidden bg-[var(--dark)] border-t border-[var(--gold)]/15">
            <ul className="px-6 py-4 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a onClick={() => setOpen(false)} href={l.href} className="block text-[var(--cream)]/80 hover:text-[var(--gold)]">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={() => { toggleLang(); setOpen(false); }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--gold)]/40 text-[var(--gold)] text-xs"
                >
                  <Languages className="w-3.5 h-3.5" />
                  {lang === "en" ? "తెలుగు" : "English"}
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden bg-[var(--dark)] text-[var(--cream)] pt-32 pb-28">
        <div aria-hidden className="absolute -top-20 -left-24 w-[420px] h-[420px] rounded-full border border-[var(--gold)]/20" />
        <div aria-hidden className="absolute -top-10 -left-10 w-[280px] h-[280px] rounded-full border border-[var(--gold)]/15" />
        <div aria-hidden className="absolute -bottom-32 -right-24 w-[500px] h-[500px] rounded-full border border-[var(--gold)]/15" />
        <div aria-hidden className="absolute bottom-10 right-40 w-[180px] h-[180px] rounded-full border border-[var(--gold)]/25" />
        <div aria-hidden className="absolute top-1/2 right-10 w-3 h-3 rounded-full bg-[var(--gold)]" />

        <div className="relative mx-auto max-w-5xl px-6 text-center animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--gold)]/40 text-[var(--gold)] text-xs tracking-[0.2em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
            {L.badge}
          </span>

          <h1 className="mt-8 font-display font-semibold text-5xl md:text-7xl leading-[1.05]" style={teluguDisplay}>
            {L.heroTitle1} <br />
            <span className="text-[var(--gold)] italic">{L.heroTitle2}</span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-[var(--cream)]/70 leading-relaxed">
            {L.heroDesc}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="#services" className="group inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[var(--gold)] text-[var(--dark)] font-medium tracking-wide transition-all hover:shadow-[var(--shadow-gold)] hover:-translate-y-0.5">
              {L.ourServices}
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-[var(--gold)] text-[var(--gold)] font-medium tracking-wide transition-all hover:bg-[var(--gold)] hover:text-[var(--dark)]">
              {L.findUs}
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-xs tracking-[0.25em] uppercase text-[var(--gold)] font-medium">{L.aboutTag}</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold leading-tight text-[var(--dark)]" style={teluguDisplay}>
              {L.aboutTitle1} <br /> {L.aboutTitle2}
            </h2>
            <div className="mt-6 w-16 h-px bg-[var(--gold)]" />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              {L.aboutP1Pre}<strong className="text-[var(--dark)]">{L.aboutP1Place}</strong>{L.aboutP1Post}
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">{L.aboutP2}</p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl border border-[var(--gold)]/30" aria-hidden />
            <div className="relative rounded-3xl bg-[var(--dark)] text-[var(--cream)] p-12 text-center overflow-hidden">
              <div aria-hidden className="absolute -top-16 -right-16 w-56 h-56 rounded-full border border-[var(--gold)]/20" />
              <div aria-hidden className="absolute -bottom-20 -left-16 w-64 h-64 rounded-full border border-[var(--gold)]/15" />
              <div className="relative">
                <div className="mx-auto w-20 h-20 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/40 flex items-center justify-center">
                  <Cog className="w-10 h-10 text-[var(--gold)]" strokeWidth={1.4} />
                </div>
                <h3 className="mt-6 font-display text-3xl text-[var(--gold)]" style={teluguDisplay}>{L.freshDaily}</h3>
                <p className="mt-4 text-[var(--cream)]/70 tracking-[0.15em] text-sm uppercase">{L.freshTags}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-[var(--cream)] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs tracking-[0.25em] uppercase text-[var(--gold)] font-medium">{L.whatWeOffer}</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-[var(--dark)]" style={teluguDisplay}>
              {L.craftedWith} <em className="text-[var(--gold)]">{L.care}</em>.
            </h2>
            <p className="mt-5 text-muted-foreground">{L.servicesDesc}</p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {L.services.map((s) => (
              <article
                key={s.name}
                className="group relative bg-white border border-[var(--gold)]/15 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_50px_-20px_oklch(0.65_0.14_70/0.5)] hover:border-[var(--gold)]/40"
              >
                <div className="text-5xl mb-5">{s.icon}</div>
                <h3 className="font-display text-2xl text-[var(--dark)]" style={teluguDisplay}>{s.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <span className="mt-6 inline-block text-[11px] tracking-[0.2em] uppercase text-[var(--gold)] border border-[var(--gold)]/40 rounded-full px-3 py-1">
                  {s.tag}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOURS */}
      <section id="hours" className="relative bg-[var(--dark)] text-[var(--cream)] py-28 overflow-hidden">
        <div aria-hidden className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full border border-[var(--gold)]/10" />
        <div aria-hidden className="absolute -top-10 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full border border-[var(--gold)]/15" />

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <div className="inline-flex items-center gap-2 text-[var(--gold)] text-xs tracking-[0.25em] uppercase">
            <Clock className="w-4 h-4" />
            {L.workingHours}
          </div>
          <h2 className="mt-6 font-display text-5xl md:text-7xl font-semibold text-[var(--gold)] leading-none">
            8:00 AM <span className="text-[var(--cream)]/30 mx-3">—</span> 8:30 PM
          </h2>
          <div className="mt-10 inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[var(--gold)]/40">
            <span className="w-2 h-2 rounded-full bg-[var(--gold)] animate-pulse" />
            <span className="text-sm text-[var(--cream)]/80">{L.openEvery}</span>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs tracking-[0.25em] uppercase text-[var(--gold)] font-medium">{L.visitUs}</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-[var(--dark)]" style={teluguDisplay}>
              {L.comeSay} <em className="text-[var(--gold)]">{L.hello}</em>.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-5">
              {[
                { icon: MapPin, title: L.address, text: L.addressText },
                { icon: Phone, title: L.phone, text: "+91 89858 78241", href: "tel:+918985878241" },
                { icon: Mail, title: L.email, text: "leelathatavarthi@gmail.com", href: "mailto:leelathatavarthi@gmail.com" },
              ].map((c) => (
                <div
                  key={c.title}
                  className="group flex gap-5 p-6 rounded-2xl border border-[var(--gold)]/20 bg-[var(--cream)]/40 transition-all hover:border-[var(--gold)]/60 hover:-translate-y-1 hover:shadow-[var(--shadow-gold)]"
                >
                  <div className="shrink-0 w-12 h-12 rounded-full bg-[var(--gold)]/15 flex items-center justify-center text-[var(--gold)]">
                    <c.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] tracking-[0.2em] uppercase text-[var(--gold)] font-medium">{c.title}</div>
                    {c.href ? (
                      <a href={c.href} className="mt-1 block text-[var(--dark)] hover:text-[var(--gold)] transition-colors">{c.text}</a>
                    ) : (
                      <p className="mt-1 text-[var(--dark)]">{c.text}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="relative rounded-2xl bg-[var(--dark)] text-[var(--cream)] p-10 flex flex-col justify-between min-h-[360px] overflow-hidden">
              <div aria-hidden className="absolute -top-20 -right-20 w-72 h-72 rounded-full border border-[var(--gold)]/20" />
              <div aria-hidden className="absolute -bottom-24 -left-16 w-64 h-64 rounded-full border border-[var(--gold)]/15" />
              <div className="relative">
                <MapPin className="w-10 h-10 text-[var(--gold)]" strokeWidth={1.4} />
                <h3 className="mt-5 font-display text-3xl" style={teluguDisplay}>{L.findMap}</h3>
                <p className="mt-3 text-[var(--cream)]/70 text-sm leading-relaxed max-w-sm">{L.mapDesc}</p>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Leela+Grinding+Machine+Shop+South+Bazar+Kandukur"
                target="_blank"
                rel="noreferrer"
                className="relative mt-6 self-start inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--gold)] text-[var(--dark)] font-medium hover:-translate-y-0.5 hover:shadow-[var(--shadow-gold)] transition-all"
              >
                {L.openMaps}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[var(--dark)] text-[var(--cream)]/70 py-16 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <div className="inline-flex items-center gap-2 font-display text-2xl font-semibold text-[var(--gold)]" style={teluguDisplay}>
            <Cog className="w-6 h-6" strokeWidth={1.5} />
            {L.brand}
          </div>
          <div className="mx-auto mt-6 w-20 h-px bg-[var(--gold)]/40" />
          <p className="mt-6 text-sm leading-relaxed">
            {L.footerAddr}<br />{L.footerCity}
          </p>
          <p className="mt-3 text-sm">+91 89858 78241 · leelathatavarthi@gmail.com</p>
          <p className="mt-3 text-sm text-[var(--gold)]/80">{L.openDaily}</p>
          <p className="mt-10 text-xs tracking-[0.2em] uppercase text-[var(--cream)]/40">
            © {new Date().getFullYear()} {L.madeWith}
          </p>
        </div>
      </footer>
    </div>
  );
}
