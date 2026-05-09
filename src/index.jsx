import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Linkedin, ArrowRight, Check, Send, ChevronLeft, ChevronRight } from 'lucide-react';
import { heroImages, chapters } from './data.js';

// ---------------------------------------------------------------------------
// Lightbox
// ---------------------------------------------------------------------------

function Lightbox({ image, onClose, onPrev, onNext, hasPrev, hasNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft'  && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition text-white"
        aria-label="Close"
      >
        <X size={18} />
      </button>

      {hasPrev && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 md:left-8 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition text-white"
          aria-label="Previous"
        >
          <ChevronLeft size={20} />
        </button>
      )}

      {hasNext && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 md:right-8 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition text-white"
          aria-label="Next"
        >
          <ChevronRight size={20} />
        </button>
      )}

      <div
        className="max-w-5xl w-full mx-8 flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.caption}
          className="max-h-[80vh] w-full object-contain rounded-lg"
        />
        <p className="text-white/60 text-label-sm tracking-wide">{image.caption}</p>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Hero Slideshow
// ---------------------------------------------------------------------------

function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = useCallback((idx) => {
    setFading(true);
    setTimeout(() => {
      setCurrent(idx);
      setFading(false);
    }, 400);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  const img = heroImages[current];

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden bg-bg-dark">
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
        style={{
          backgroundImage: `url(${img.src})`,
          opacity: fading ? 0 : 1,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />

      {/* Caption */}
      <p
        className="absolute bottom-28 right-8 md:right-12 text-white/40 text-label-sm tracking-widest uppercase transition-opacity duration-400"
        style={{ opacity: fading ? 0 : 1 }}
      >
        {img.caption}
      </p>

      {/* Progress dots */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all ${i === current ? 'bg-white w-5' : 'bg-white/30'}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Hero copy + CTAs */}
      <div className="absolute inset-0 flex flex-col justify-end pb-32 px-8 md:px-16 max-w-4xl">
        <p className="text-brand-secondary text-label-lg font-semibold tracking-widest uppercase mb-4">
          Brett Schwager
        </p>
        <h1 className="text-display-lg md:text-[5rem] font-bold text-white leading-[1.0] mb-4 tracking-tight">
          Creative Leader<br />&amp; Designer
        </h1>
        <p className="text-body-lg text-white/70 mb-8 max-w-md leading-relaxed">
          20 years of helping teams build soulful brands.
        </p>
        <div className="flex gap-3 flex-wrap">
          <a
            href="#experience"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-secondary text-bg-dark font-semibold rounded-lg hover:opacity-90 transition text-label-lg"
          >
            See Experience <ArrowRight size={15} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/40 text-white font-semibold rounded-lg hover:border-white hover:bg-white/10 transition text-label-lg"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Chapter Section
// ---------------------------------------------------------------------------

function ChapterSection({ chapter, onImageClick }) {
  const isDark = chapter.number === '02';

  return (
    <section
      id={chapter.id}
      className={`py-20 md:py-32 ${isDark ? 'bg-bg-dark text-text-inverse' : 'bg-bg-base text-text-primary'}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Chapter header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="flex items-start gap-5">
            <span className={`text-[6rem] font-bold leading-none select-none mt-1 ${isDark ? 'text-white/10' : 'text-neutral-100'}`}>
              {chapter.number}
            </span>
            <div>
              <p className={`text-label-sm font-semibold tracking-widest uppercase mb-1 ${isDark ? 'text-brand-secondary' : 'text-brand-primary'}`}>
                {chapter.timeframe}
              </p>
              <h2 className="text-headline-lg font-bold">{chapter.company}</h2>
              <p className={`text-label-lg font-medium mt-1 ${isDark ? 'text-white/50' : 'text-text-muted'}`}>
                {chapter.role}
              </p>
            </div>
          </div>
          <p className={`text-body-lg max-w-md leading-relaxed ${isDark ? 'text-white/70' : 'text-text-secondary'}`}>
            {chapter.summary}
          </p>
        </div>

        {/* Punchy headline */}
        <p className={`text-headline-md font-bold mb-12 max-w-2xl leading-snug ${isDark ? 'text-white' : 'text-text-primary'}`}>
          {chapter.headline}
        </p>

        {/* Thumbnail grid */}
        {chapter.placeholder && chapter.images.length === 0 ? (
          <div className={`rounded-2xl border-2 border-dashed px-8 py-16 text-center ${isDark ? 'border-white/10 text-white/30' : 'border-border-default text-text-muted'}`}>
            <p className="text-label-lg font-medium">Visuals coming — pulling from archive.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {chapter.images.map((img, i) => (
              <button
                key={i}
                onClick={() => onImageClick(chapter.id, i)}
                className="group relative overflow-hidden rounded-xl bg-neutral-800 text-left"
                style={{ aspectRatio: '4/3' }}
                aria-label={img.caption}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-label-sm font-medium tracking-wide">{img.caption}</span>
                </div>
                {chapter.placeholder && (
                  <div className="absolute top-2 right-2 bg-black/50 text-white/60 text-label-sm px-2 py-0.5 rounded">
                    placeholder
                  </div>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Contact Form
// ---------------------------------------------------------------------------

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
            className="px-4 py-3 border border-border-default rounded-lg text-body-md focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 transition bg-bg-base" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-label-sm font-semibold text-text-muted uppercase tracking-wide">Email</label>
          <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@example.com"
            className="px-4 py-3 border border-border-default rounded-lg text-body-md focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 transition bg-bg-base" />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-label-sm font-semibold text-text-muted uppercase tracking-wide">Message</label>
        <textarea id="message" name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="Tell me about your project..."
          className="px-4 py-3 border border-border-default rounded-lg text-body-md focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 transition resize-none bg-bg-base" />
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

// ---------------------------------------------------------------------------
// Main Portfolio
// ---------------------------------------------------------------------------

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null); // { chapterId, index }

  const openLightbox = (chapterId, index) => setLightbox({ chapterId, index });
  const closeLightbox = () => setLightbox(null);

  const currentChapter = lightbox ? chapters.find((c) => c.id === lightbox.chapterId) : null;
  const currentImages  = currentChapter?.images ?? [];

  const prevImage = () => {
    if (lightbox.index > 0) setLightbox({ ...lightbox, index: lightbox.index - 1 });
  };
  const nextImage = () => {
    if (lightbox.index < currentImages.length - 1) setLightbox({ ...lightbox, index: lightbox.index + 1 });
  };

  return (
    <div className="bg-bg-base text-text-primary">

      {/* Lightbox */}
      {lightbox && currentImages[lightbox.index] && (
        <Lightbox
          image={currentImages[lightbox.index]}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
          hasPrev={lightbox.index > 0}
          hasNext={lightbox.index < currentImages.length - 1}
        />
      )}

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-bg-dark/90 backdrop-blur border-b border-nav-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-title-lg font-bold tracking-tight text-text-inverse">
            Brett<span className="text-brand-secondary">.</span>
          </a>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-1 text-text-inverse">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className={`${mobileMenuOpen ? 'flex' : 'hidden'} md:flex gap-7 absolute md:relative top-full left-0 right-0 md:top-auto md:left-auto flex-col md:flex-row bg-bg-dark md:bg-transparent p-6 md:p-0 border-b border-nav-border md:border-0 text-label-lg font-medium text-nav-text`}>
            {chapters.map((c) => (
              <a key={c.id} href={`#${c.id}`} onClick={() => setMobileMenuOpen(false)} className="hover:text-nav-text-hover transition">
                {c.company}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-nav-text-hover transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <HeroSlideshow />

      {/* Chapters */}
      <div id="experience">
        {chapters.map((chapter) => (
          <ChapterSection key={chapter.id} chapter={chapter} onImageClick={openLightbox} />
        ))}
      </div>

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
      <footer className="bg-bg-dark text-text-inverse py-14">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <span className="text-title-lg font-bold">Brett<span className="text-brand-secondary">.</span></span>
          <div className="flex flex-col gap-1 text-neutral-500 text-label-lg">
            <p>Earlier career: Microsoft · Engine Interactive</p>
            <p>Independent practice: <span className="text-neutral-400">Schwager Inc.</span> — ongoing</p>
          </div>
          <p className="text-neutral-600 text-label-sm">Hood River, OR · {new Date().getFullYear()}</p>
        </div>
      </footer>

    </div>
  );
}
