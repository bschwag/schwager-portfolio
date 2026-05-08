import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Linkedin, ArrowRight, Check, Send } from 'lucide-react';

const reelImages = [
  { src: '/images/reel/evo-wff-25-poster.jpg',             label: "evo — Women's Film Fest '25" },
  { src: '/images/reel/evo-just-roll-up-poster.jpg',       label: 'evo — Just Roll Up' },
  { src: '/images/reel/evo-just-roll-up.jpg',              label: 'evo — Just Roll Up' },
  { src: '/images/reel/evo-share-the-goods-campaign.jpg',  label: 'evo — Share the Goods' },
  { src: '/images/reel/evo-share-the-goods.jpg',           label: 'evo — Share the Goods' },
  { src: '/images/reel/evo-the-callaghan-site.jpg',        label: 'evo — The Callaghan' },
  { src: '/images/reel/evo-trail-paid.jpg',                label: 'evo — Trail Running' },
  { src: '/images/reel/evo-winter-storytelling.jpg',       label: 'evo — Winter Storytelling' },
  { src: '/images/reel/mendi-athlete-campaign.jpg',        label: 'Mendi — Athlete Campaign' },
  { src: '/images/reel/schwager-inc-evo-timeline.jpg',     label: 'Schwager Inc. — evo Timeline' },
  { src: '/images/reel/turnstyle-evo-apparel.jpg',         label: 'Turnstyle — evo Apparel' },
  { src: '/images/reel/brimstone-bizcards.jpg',            label: 'Schwager Inc. — Brimstone' },
  { src: '/images/reel/brimstone-boulders-identity.jpg',   label: 'Schwager Inc. — Brimstone Boulders' },
  { src: '/images/reel/ceder-speedster-identity.jpg',      label: 'Schwager Inc. — Ceder Speedster' },
  { src: '/images/reel/alpine-lakes-identity.jpg',         label: 'Alpine Lakes — Identity' },
  { src: '/images/reel/oso-verde-merch.jpg',               label: 'Schwager Inc. — Oso Verde' },
  { src: '/images/reel/oso-verde-packaging.jpg',           label: 'Schwager Inc. — Oso Verde' },
  { src: '/images/reel/saga-biz-cards.jpg',                label: 'Schwager Inc. — Saga' },
  { src: '/images/reel/marination-label.png',              label: 'Schwager Inc. — Marination' },
  { src: '/images/reel/kickin-boot-logo.png',              label: "Schwager Inc. — Kickin' Boot", isLogo: true, logoBg: '#1C1B18' },
  { src: '/images/reel/wave-logo.png',                     label: 'Schwager Inc. — Wave',          isLogo: true, logoBg: '#252420' },
  { src: '/images/reel/turnstyle-southland.jpg',           label: 'Turnstyle — Southland' },
];

function PhotoStrip() {
  const doubled = [...reelImages, ...reelImages];

  return (
    <div className="overflow-hidden mt-14 -mx-6 md:-mx-0">
      <div className="flex gap-3 animate-marquee" style={{ width: 'max-content' }}>
        {doubled.map((img, idx) => (
          <div key={idx} className="w-60 h-40 flex-shrink-0 rounded-xl overflow-hidden bg-neutral-100">
            <img src={img.src} alt={img.label} className="w-full h-full object-cover object-center" />
          </div>
        ))}
      </div>
    </div>
  );
}

function BuildItem({ label, status, detail }) {
  return (
    <div className="flex items-start gap-4 py-4 border-b border-border-default last:border-0">
      <div className={`mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center ${
        status === 'live'     ? 'bg-semantic-success-base' :
        status === 'building' ? 'bg-brand-primary' :
                                'border-2 border-border-default'
      }`}>
        {status === 'live'     && <Check size={11} color="white" strokeWidth={3} />}
        {status === 'building' && <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />}
      </div>
      <div className="flex-1 min-w-0">
        <p className={`font-semibold text-title-sm ${
          status === 'building' ? 'text-brand-primary' :
          status === 'next'     ? 'text-text-muted'   :
                                  'text-text-primary'
        }`}>
          {label}
        </p>
        {detail && <p className="text-body-sm text-text-muted mt-0.5">{detail}</p>}
      </div>
      {status === 'building' && (
        <span className="flex-shrink-0 text-label-sm font-semibold text-brand-primary bg-neutral-100 px-2.5 py-1 rounded-full">
          In progress
        </span>
      )}
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('https://formspree.io/f/xykodkzr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-start gap-3 py-8">
        <div className="w-12 h-12 rounded-xl bg-semantic-success-light flex items-center justify-center">
          <Check size={20} className="text-semantic-success-base" strokeWidth={3} />
        </div>
        <h3 className="text-title-lg font-bold">Message sent!</h3>
        <p className="text-body-md text-text-secondary">Thanks for reaching out — I'll get back to you soon.</p>
        <button onClick={() => setStatus('idle')} className="text-label-lg font-semibold text-brand-primary hover:text-brand-primary-hover transition mt-2">
          Send another →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-label-sm font-semibold text-text-muted uppercase tracking-wide">Name</label>
          <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your name"
            className="px-4 py-3 border border-border-default rounded-lg text-body-md focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 transition" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-label-sm font-semibold text-text-muted uppercase tracking-wide">Email</label>
          <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@example.com"
            className="px-4 py-3 border border-border-default rounded-lg text-body-md focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 transition" />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-label-sm font-semibold text-text-muted uppercase tracking-wide">Message</label>
        <textarea id="message" name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="Tell me about your project..."
          className="px-4 py-3 border border-border-default rounded-lg text-body-md focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 transition resize-none" />
      </div>
      {status === 'error' && (
        <p className="text-label-sm text-semantic-error-base">Something went wrong — try again or reach out on LinkedIn.</p>
      )}
      <button type="submit" disabled={status === 'submitting'}
        className="self-start inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-text-inverse font-semibold rounded-lg hover:bg-brand-primary-hover transition text-label-lg disabled:bg-neutral-200 disabled:text-neutral-400 disabled:cursor-not-allowed">
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
        <Send size={15} />
      </button>
    </form>
  );
}

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const experience = [
    { company: 'evo',                     title: 'Creative Manager',                   timeframe: '2022–Present', summary: 'Leading creative strategy and execution for global campaigns across retail, travel, hospitality, and community events.' },
    { company: 'Schwager, Inc.',           title: 'Owner & Creative Director',          timeframe: '2014–Present', summary: 'Design practice spanning brand identity, packaging, and campaigns for Microsoft, evo, and Season.' },
    { company: 'Mendi',                    title: 'Co-founder & Chief Creative Officer', timeframe: '2019–2022',   summary: 'Took a homegrown Portland recipe to the world stage. Built everything from scratch — brand, packaging, and every story in between.' },
    { company: 'Slingshot Sports',         title: 'Creative Director',                  timeframe: '2013–2014',   summary: 'Led brand identity across Kite, Wake, and SUP segments working shoulder-to-shoulder with R&D.' },
    { company: 'Turnstyle',                title: 'Senior Designer',                    timeframe: '2009–2013',   summary: "Brand, print, and interactive work across industries at one of Seattle's top design studios." },
    { company: 'The Greenwood Collective', title: 'Co-founder',                         timeframe: '2007–2009',   summary: 'Started a Seattle creative space pre-WeWork. Proved grassroots coworking could work without a playbook.' },
    { company: 'Engine Interactive',       title: 'Interaction Designer',               timeframe: '2006–2007',   summary: 'UX design for Expedia and Precor — bridging design and dev before it was cool or easy.' },
    { company: 'Microsoft',                title: 'Interaction Designer',               timeframe: '2005–2006',   summary: 'UI and icon systems for LifeCam hardware, collaborating with researchers and industrial designers.' },
  ];

  const buildItems = [
    { label: 'Site foundation — structure & type system',  status: 'live',     detail: 'Responsive layout, design tokens, component architecture' },
    { label: 'evo — Trail Running case study',             status: 'live',     detail: 'Brand guidelines, photography direction, paid ads & email' },
    { label: 'Mendi — full brand case study',              status: 'building', detail: 'Co-founder story, 0-to-1 brand build, World Games gold medal' },
    { label: 'Schwager Inc. — freelance work archive',     status: 'next',     detail: 'Microsoft, Season, and a decade of client work' },
    { label: 'Motion reel',                                status: 'next',     detail: 'Video compilation of select projects' },
    { label: 'Writing & experiments',                      status: 'next',     detail: 'Process writing, design thinking, side projects' },
  ];

  return (
    <div className="bg-bg-base text-text-primary">

      {/* Progress banner */}
      <div className="bg-bg-dark text-text-inverse py-2.5 px-6 text-center">
        <p className="text-label-sm tracking-wide text-neutral-400">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-secondary mr-2 align-middle animate-pulse" />
          Portfolio in progress — building in public.
          <a href="#building" className="ml-2 text-brand-secondary hover:opacity-80 transition underline underline-offset-2">
            See what's coming →
          </a>
        </p>
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-nav-bg/95 backdrop-blur border-b border-nav-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-title-lg font-bold tracking-tight text-nav-text">
            Brett<span className="text-nav-text-active">.</span>
          </a>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-1 text-nav-text">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className={`${mobileMenuOpen ? 'flex' : 'hidden'} md:flex gap-7 absolute md:relative top-full left-0 right-0 md:top-auto md:left-auto flex-col md:flex-row bg-nav-bg md:bg-transparent p-6 md:p-0 border-b border-nav-border md:border-0 text-label-lg font-medium text-nav-text`}>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="hover:text-nav-text-hover transition">Experience</a>
            <a href="#work"       onClick={() => setMobileMenuOpen(false)} className="hover:text-nav-text-hover transition">Work</a>
            <a href="#building"   onClick={() => setMobileMenuOpen(false)} className="hover:text-nav-text-hover transition">What's Building</a>
            <a href="#contact"    onClick={() => setMobileMenuOpen(false)} className="hover:text-nav-text-hover transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-20 md:pt-28 pb-0 overflow-hidden">
        <p className="text-label-lg font-semibold text-brand-primary tracking-widest uppercase mb-5">
          Brett Schwager — Hood River, OR
        </p>
        <h1 className="text-display-lg font-bold leading-[1.05] mb-7 max-w-2xl">
          Creative<br />Generalist.
        </h1>
        <p className="text-body-lg text-text-secondary mb-9 max-w-lg leading-relaxed">
          20 years designing brand stories that stick — across startups, agencies, and in-house teams.
          I work at the intersection of bold ideas and human connection.
        </p>
        <div className="flex gap-3 flex-wrap">
          <a href="#experience" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-text-inverse font-semibold rounded-lg hover:bg-brand-primary-hover transition text-label-lg">
            See Experience <ArrowRight size={15} />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-brand-primary text-brand-primary font-semibold rounded-lg hover:bg-brand-primary hover:text-text-inverse transition text-label-lg">
            Get in Touch
          </a>
        </div>
        <PhotoStrip />
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-headline-lg font-bold mb-14">Experience</h2>
          <div className="grid md:grid-cols-2 border border-border-default rounded-2xl overflow-hidden shadow-sm">
            {experience.map((role, idx) => (
              <div
                key={idx}
                className={`p-7 bg-bg-base hover:bg-bg-subtle transition-colors ${idx % 2 === 0 ? 'md:border-r border-border-default' : ''} ${idx < experience.length - 2 ? 'border-b border-border-default' : ''}`}
              >
                <div className="flex justify-between items-start gap-4 mb-2.5">
                  <div>
                    <h3 className="text-title-lg font-bold">{role.company}</h3>
                    <p className="text-title-sm text-text-muted mt-0.5">{role.title}</p>
                  </div>
                  <span className="text-label-sm font-semibold text-text-muted flex-shrink-0 pt-0.5">{role.timeframe}</span>
                </div>
                <p className="text-body-md text-text-secondary leading-relaxed">{role.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="bg-bg-subtle py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12 gap-4 flex-wrap">
            <div>
              <h2 className="text-headline-lg font-bold">Work</h2>
              <p className="text-body-lg text-text-secondary mt-2">Case studies — more coming soon.</p>
            </div>
            <a href="#building" className="text-label-lg font-semibold text-brand-primary hover:text-brand-primary-hover transition flex-shrink-0">
              See full build log →
            </a>
          </div>

          {/* Live case study */}
          <Link to="/evo-trail" className="group block mb-4 rounded-2xl overflow-hidden bg-[#1A1A1A] relative" style={{ minHeight: '320px' }}>
            <div
              className="absolute inset-0 font-black uppercase leading-[0.85] tracking-tighter text-white/[0.04] flex items-center pl-10 select-none overflow-hidden"
              style={{ fontSize: 'clamp(60px, 10vw, 140px)' }}
            >
              RUN<br />TRAIL<br />RIDE<br />TRAIL
            </div>
            <div className="relative z-10 p-8 md:p-12 flex flex-col justify-between" style={{ minHeight: '320px' }}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-label-sm font-semibold text-[#D4E141] tracking-widest uppercase mb-2">evo — FW25</p>
                  <h3 className="text-headline-sm font-bold text-white">Trail Running Campaign</h3>
                  <p className="text-body-md text-white/50 mt-2 max-w-md">
                    Brand guidelines, photography direction, paid ads, and email — introducing trail running as a new category.
                  </p>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#D4E141] transition-colors">
                  <ArrowRight size={16} className="text-white group-hover:text-[#1A1A1A] transition-colors" />
                </div>
              </div>
              <div className="flex gap-3 mt-8 flex-wrap">
                {['Brand Strategy', 'Photography Direction', 'Paid Ads', 'Email', 'In-store'].map((tag) => (
                  <span key={tag} className="text-label-sm font-medium text-white/40 bg-white/5 px-3 py-1 rounded-full border border-white/10">{tag}</span>
                ))}
              </div>
            </div>
          </Link>

          {/* Photo grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {reelImages.map((img, n) => (
              <div key={n} className="group relative overflow-hidden rounded-xl bg-neutral-200" style={{ aspectRatio: '4/3', backgroundColor: img.logoBg || undefined }}>
                <img
                  src={img.src}
                  alt={img.label}
                  className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
                    img.isLogo ? 'object-contain p-8' : 'object-cover object-center'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-label-sm font-medium tracking-wide">{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Building */}
      <section id="building" className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <h2 className="text-headline-lg font-bold mb-3">What's Building</h2>
            <p className="text-body-lg text-text-secondary mb-12">
              This portfolio is being assembled in public. Here's the exact status of each piece.
            </p>
            <div className="border border-border-default rounded-2xl overflow-hidden shadow-sm bg-bg-base px-6">
              {buildItems.map((item, idx) => (
                <BuildItem key={idx} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-bg-subtle py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <h2 className="text-headline-lg font-bold mb-4">Let's Work Together</h2>
            <p className="text-body-lg text-text-secondary mb-10">
              Looking for a creative partner to kickstart your next project or scale your in-house team? Let's talk.
            </p>
            <ContactForm />
            <div className="mt-10 pt-8 border-t border-border-default">
              <a href="https://linkedin.com/in/brettschwager" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group w-fit">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Linkedin size={20} className="text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-label-sm text-text-muted font-medium uppercase tracking-wide">LinkedIn</p>
                  <p className="text-title-md font-semibold group-hover:text-blue-600 transition-colors">/in/brettschwager</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bg-dark text-text-inverse py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-title-lg font-bold">Brett<span className="text-brand-secondary">.</span></span>
          <p className="text-neutral-500 text-label-lg">Designed & built by Brett. Hood River, OR.</p>
          <p className="text-neutral-600 text-label-sm">Portfolio in progress — {new Date().getFullYear()}</p>
        </div>
      </footer>

    </div>
  );
}
