import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, MapPin, Phone, Mail, Cog, Clock } from "lucide-react";

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
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap" },
    ],
  }),
});

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#hours", label: "Hours" },
  { href: "#contact", label: "Contact" },
];

const services = [
  { icon: "🫓", name: "Dosa Pindi", desc: "Crisp, golden dosas every morning — freshly stone-ground batter.", tag: "Daily Fresh" },
  { icon: "🥣", name: "Idly Pindi", desc: "Soft, fluffy idly batter perfectly fermented for traditional taste.", tag: "Authentic" },
  { icon: "🍩", name: "Vada Pindi", desc: "Smooth urad dal batter for crispy, restaurant-style vadas.", tag: "Crispy" },
  { icon: "🌾", name: "Wet Grinding", desc: "Cold stone wet grinding that preserves nutrition and aroma.", tag: "Stone Ground" },
  { icon: "🌿", name: "Chutney Grinding", desc: "Quick chutney grinding for coconut, peanut, tomato and more.", tag: "Quick" },
  { icon: "⚡", name: "Quick Service", desc: "Fast turnaround so you never wait — bring it in, take it home.", tag: "Fast" },
];

function Index() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--cream)] text-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[var(--dark)]/95 backdrop-blur-md border-b border-[var(--gold)]/15">
        <nav className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-display text-xl font-semibold text-[var(--gold)]">
            <Cog className="w-6 h-6" strokeWidth={1.5} />
            <span>Leela Grinding</span>
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
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[var(--cream)] p-2"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
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
            </ul>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden bg-[var(--dark)] text-[var(--cream)] pt-32 pb-28">
        {/* Decorative gold circles */}
        <div aria-hidden className="absolute -top-20 -left-24 w-[420px] h-[420px] rounded-full border border-[var(--gold)]/20" />
        <div aria-hidden className="absolute -top-10 -left-10 w-[280px] h-[280px] rounded-full border border-[var(--gold)]/15" />
        <div aria-hidden className="absolute -bottom-32 -right-24 w-[500px] h-[500px] rounded-full border border-[var(--gold)]/15" />
        <div aria-hidden className="absolute bottom-10 right-40 w-[180px] h-[180px] rounded-full border border-[var(--gold)]/25" />
        <div aria-hidden className="absolute top-1/2 right-10 w-3 h-3 rounded-full bg-[var(--gold)]" />

        <div className="relative mx-auto max-w-5xl px-6 text-center animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--gold)]/40 text-[var(--gold)] text-xs tracking-[0.2em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
            Est. in Kandukur, AP
          </span>

          <h1 className="mt-8 font-display font-semibold text-5xl md:text-7xl leading-[1.05]">
            Fresh Grinding. <br />
            <span className="text-[var(--gold)] italic">Pure &amp; Hygienic.</span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-[var(--cream)]/70 leading-relaxed">
            Every batter and pindi stone-ground fresh, daily — preserving the aroma,
            nutrition, and authentic taste your family deserves.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#services"
              className="group inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[var(--gold)] text-[var(--dark)] font-medium tracking-wide transition-all hover:shadow-[var(--shadow-gold)] hover:-translate-y-0.5"
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-[var(--gold)] text-[var(--gold)] font-medium tracking-wide transition-all hover:bg-[var(--gold)] hover:text-[var(--dark)]"
            >
              Find Us
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-xs tracking-[0.25em] uppercase text-[var(--gold)] font-medium">Our Story</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold leading-tight text-[var(--dark)]">
              Leela Grinding <br /> Machine Shop
            </h2>
            <div className="mt-6 w-16 h-px bg-[var(--gold)]" />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              For years, Leela Grinding Machine Shop has been the trusted neighborhood name
              in <strong className="text-[var(--dark)]">South Bazar, Kandukur</strong>, serving families with
              fresh, hygienic batters and pindis ground every single day.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We blend traditional stone-grinding craft with modern hygiene — so every spoonful
              of batter carries the wholesome taste of home.
            </p>
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
                <h3 className="mt-6 font-display text-3xl text-[var(--gold)]">Fresh Ground Daily</h3>
                <p className="mt-4 text-[var(--cream)]/70 tracking-[0.15em] text-sm uppercase">
                  Hygienic · Fast · Trusted
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-[var(--cream)] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs tracking-[0.25em] uppercase text-[var(--gold)] font-medium">What We Offer</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-[var(--dark)]">
              Crafted with <em className="text-[var(--gold)]">care</em>.
            </h2>
            <p className="mt-5 text-muted-foreground">
              From breakfast staples to chutneys, every service is ground fresh to order.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <article
                key={s.name}
                className="group relative bg-white border border-[var(--gold)]/15 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_50px_-20px_oklch(0.65_0.14_70/0.5)] hover:border-[var(--gold)]/40"
              >
                <div className="text-5xl mb-5">{s.icon}</div>
                <h3 className="font-display text-2xl text-[var(--dark)]">{s.name}</h3>
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
            Working Hours
          </div>
          <h2 className="mt-6 font-display text-5xl md:text-7xl font-semibold text-[var(--gold)] leading-none">
            6:00 AM <span className="text-[var(--cream)]/30 mx-3">—</span> 8:30 PM
          </h2>
          <div className="mt-10 inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[var(--gold)]/40">
            <span className="w-2 h-2 rounded-full bg-[var(--gold)] animate-pulse" />
            <span className="text-sm text-[var(--cream)]/80">Open Every Day · Monday to Sunday</span>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs tracking-[0.25em] uppercase text-[var(--gold)] font-medium">Visit Us</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-[var(--dark)]">
              Come say <em className="text-[var(--gold)]">hello</em>.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-5">
              {[
                { icon: MapPin, title: "Address", text: "South Bazar, beside Sunitha Hotel, Near Pothu Raju Mitta, Kandukur, AP, India" },
                { icon: Phone, title: "Phone", text: "+91 89858 78241", href: "tel:+918985878241" },
                { icon: Mail, title: "Email", text: "leelathatavarthi@gmail.com", href: "mailto:leelathatavarthi@gmail.com" },
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
                <h3 className="mt-5 font-display text-3xl">Find us on the map</h3>
                <p className="mt-3 text-[var(--cream)]/70 text-sm leading-relaxed max-w-sm">
                  Easy to locate on South Bazar, right beside Sunitha Hotel near Pothu Raju Mitta.
                </p>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Leela+Grinding+Machine+Shop+South+Bazar+Kandukur"
                target="_blank"
                rel="noreferrer"
                className="relative mt-6 self-start inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--gold)] text-[var(--dark)] font-medium hover:-translate-y-0.5 hover:shadow-[var(--shadow-gold)] transition-all"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[var(--dark)] text-[var(--cream)]/70 py-16 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <div className="inline-flex items-center gap-2 font-display text-2xl font-semibold text-[var(--gold)]">
            <Cog className="w-6 h-6" strokeWidth={1.5} />
            Leela Grinding Machine Shop
          </div>
          <div className="mx-auto mt-6 w-20 h-px bg-[var(--gold)]/40" />
          <p className="mt-6 text-sm leading-relaxed">
            South Bazar, beside Sunitha Hotel, Near Pothu Raju Mitta,<br />Kandukur, Andhra Pradesh, India
          </p>
          <p className="mt-3 text-sm">+91 89858 78241 · leelathatavarthi@gmail.com</p>
          <p className="mt-3 text-sm text-[var(--gold)]/80">Open Daily · 6:00 AM — 8:30 PM</p>
          <p className="mt-10 text-xs tracking-[0.2em] uppercase text-[var(--cream)]/40">
            © {new Date().getFullYear()} Leela Grinding · Made with care
          </p>
        </div>
      </footer>
    </div>
  );
}
