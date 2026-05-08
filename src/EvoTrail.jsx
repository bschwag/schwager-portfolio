import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const photoThemes = [
  {
    number: '01',
    title: 'Motion as Mood',
    description: 'Blur, panning shots, and silhouettes that convey speed without clinical precision. The subject is the feeling, not the form.',
    do: 'Panning blur, B&W trail shots, silhouettes at golden hour, motion-streaked backgrounds, joyful mid-stride',
    dont: 'Crisp race-pace tracking shots, sponsored bib numbers, finish-line heroics, treadmill imagery',
    dark: false,
  },
  {
    number: '02',
    title: 'Wild in the Details',
    description: 'Close-up storytelling through the body. Tattoos, rings, earrings on trail. Character over content.',
    do: 'Tattoos and jewelry macro, product typography detail, sun-worn skin, dusty laces, expressive faces',
    dont: 'Pristine never-worn gear, blank-faced model posing, overly styled editorial stillness',
    dark: true,
  },
  {
    number: '03',
    title: 'Landscape as Character',
    description: "Terrain is a co-star. Aerial scale, coastal ridgelines, fog-covered switchbacks. The landscape isn't backdrop — it earns its place in the frame.",
    do: 'Drone aerials, runner small against terrain, coastal/PNW environments, moody overcast light',
    dont: 'Generic mountain stock imagery, sunny resort trails, identifiable tourist landmarks',
    dark: false,
  },
  {
    number: '04',
    title: 'Community & The After',
    description: 'Post-run is the real run. Laughter, shared food, van life, sprawling on a patch of grass. The finish is the beginning of something better.',
    do: 'Group hangs, van culture, snacks and coffee post-run, relaxed laughter, pile of shoes',
    dont: 'Lone wolf summit heroics, group race shots, competition finishers on a medal stand',
    dark: true,
  },
  {
    number: '05',
    title: 'Playful Edge & Irreverence',
    description: 'Unexpected subjects in unexpected moments. Film strip textures, double exposure, non-traditional crops. Humor as a visual language.',
    do: 'Film grain, double exposure, unexpected framing, unusual gear subjects, visual jokes, lo-fi edits',
    dont: 'Overly polished retouching, corporate lifestyle photography, safe compositions',
    dark: false,
  },
  {
    number: '06',
    title: 'Golden Hour & Dusk Energy',
    description: 'Warm prime light, long shadows, fog at dusk. The trail at its most cinematic. Earth tones that feel earned, not staged.',
    do: 'Magic hour light, warm earth tones, atmospheric fog, long-shadow silhouettes, dusk runs',
    dont: 'Midday harsh light, blue-hour cold tones, overcast flat grey (unless B&W treatment)',
    dark: true,
  },
];

function Placeholder({ label, aspect = '4/3', dark = true }) {
  return (
    <div
      className={`w-full rounded-xl flex items-center justify-center ${dark ? 'bg-[#2C2C2C]' : 'bg-gray-200'}`}
      style={{ aspectRatio: aspect }}
    >
      <p className={`text-label-sm text-center px-6 ${dark ? 'text-white/20' : 'text-gray-400'}`}>{label}</p>
    </div>
  );
}

export default function EvoTrail() {
  return (
    <div className="bg-[#F0EDE8] text-[#1A1A1A]">

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#F0EDE8]/95 backdrop-blur border-b border-black/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-label-lg font-semibold hover:text-[#2D4A2A] transition"
          >
            <ArrowLeft size={16} /> Brett Schwager
          </Link>
          <span className="text-label-sm font-semibold text-[#C4953A] tracking-widest uppercase hidden md:block">
            evo — Trail Running
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-[#1A1A1A] text-white relative overflow-hidden" style={{ minHeight: '90vh' }}>
        {/* Background stacked type */}
        <div className="absolute inset-0 flex items-center overflow-hidden select-none pointer-events-none">
          <div
            className="font-black uppercase leading-[0.85] tracking-tighter text-white/[0.04] pl-6 md:pl-16"
            style={{ fontSize: 'clamp(72px, 14vw, 200px)' }}
          >
            RUN<br />TRAIL<br />RIDE<br />TRAIL<br />RUN<br />TRAIL<br />RIDE
          </div>
        </div>

        {/* Right image area */}
        <div className="absolute right-0 top-0 bottom-0 w-5/12 hidden md:flex items-center justify-center bg-[#242424]">
          <p className="text-white/15 text-label-sm text-center px-8">Motion blur runner — hero image</p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 flex flex-col justify-end" style={{ minHeight: '90vh' }}>
          <p className="text-label-lg font-semibold text-[#D4E141] tracking-widest uppercase mb-5">
            evo — FW25 · Spring/Summer 2026
          </p>
          <h1 className="text-display-lg font-bold leading-[1.05] mb-6 max-w-2xl">
            Built for the Trail.<br />Styled for Everywhere.
          </h1>
          <p className="text-body-lg text-white/60 max-w-md leading-relaxed mb-12">
            Introducing trail running as a new category at a brand built on snow and bikes — without losing what makes evo evo.
          </p>
          <div className="flex gap-10 flex-wrap">
            {[
              { label: 'Role', value: 'Creative Manager' },
              { label: 'Timeline', value: 'FW25 — SS26' },
              { label: 'Deliverables', value: 'Brand guidelines, campaigns, email, paid ads' },
              { label: 'Status', value: 'Live — current season' },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-label-sm text-white/30 uppercase tracking-widest mb-1">{item.label}</p>
                <p className="text-title-sm font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-label-lg font-semibold text-[#C4953A] tracking-widest uppercase mb-4">The Challenge</p>
              <h2 className="text-headline-lg font-bold mb-8">A new category for a brand with a clear identity.</h2>
              <p className="text-body-lg text-gray-600 leading-relaxed mb-5">
                evo has a strong point of view — built around ski, snowboard, and more recently, bike. Introducing trail running meant entering a crowded market with established players, without diluting what makes evo evo.
              </p>
              <p className="text-body-lg text-gray-600 leading-relaxed">
                The insight: we didn't need to convince our customer to try trail running. They were already doing it. We just needed to name it, frame it, and show them that evo understood their version of it — the version that looks as good off the trail as on it.
              </p>
            </div>
            <div className="space-y-3 pt-2 md:pt-16">
              {[
                { brand: 'Salomon', note: 'Trail to streetwear crossover' },
                { brand: 'Arc\'teryx', note: 'Technical meets lifestyle' },
                { brand: 'Hoka', note: 'Chunky sole as fashion statement' },
                { brand: 'On Running', note: 'Swiss precision, urban credibility' },
              ].map((item) => (
                <div key={item.brand} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100">
                  <div className="w-2 h-2 rounded-full bg-[#D4E141] flex-shrink-0" />
                  <div>
                    <p className="font-bold text-title-sm">{item.brand}</p>
                    <p className="text-body-sm text-gray-500">{item.note}</p>
                  </div>
                </div>
              ))}
              <p className="text-label-sm text-gray-400 pt-2 pl-1">
                The sneakerhead moment around trail running gave the campaign a cultural conversation to tap into.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Positioning */}
      <section className="bg-[#1A1A1A] text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-label-lg font-semibold text-[#D4E141] tracking-widest uppercase mb-4">Brand Positioning</p>
          <h2 className="text-headline-lg font-bold mb-16">Where evo lives in the trail running landscape.</h2>

          <div className="relative mb-6">
            <div className="flex justify-between text-label-sm text-white/40 uppercase tracking-widest mb-5">
              <span>Pure Mountain Runner</span>
              <span>Urban Sneakerhead</span>
            </div>
            <div className="relative h-px bg-white/15 mb-5">
              <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#2D4A2A] border-2 border-[#D4E141]" />
            </div>
            <div className="flex justify-between">
              <div className="text-label-sm text-white/30 max-w-[160px] space-y-1">
                <p>Elite. Summit-first.</p>
                <p>Alpine performance.</p>
                <p>Race aesthetics.</p>
                <p>Function only.</p>
              </div>
              <div className="text-label-sm text-white/30 max-w-[160px] text-right space-y-1">
                <p>Drop culture.</p>
                <p>Hype aesthetics.</p>
                <p>Studio photography.</p>
                <p>Lifestyle over terrain.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#2D4A2A] rounded-2xl p-8 md:p-12 max-w-xl mx-auto text-center mt-16">
            <p className="text-[#D4E141] text-label-lg font-semibold tracking-widest uppercase mb-4">The evo Zone</p>
            <p className="text-white text-body-lg leading-relaxed">
              Runs for joy, not podiums.<br />
              Community over competition.<br />
              Gear with cultural resonance —<br />
              looks as good off trail.
            </p>
          </div>
        </div>
      </section>

      {/* The Muse */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-label-lg font-semibold text-[#C4953A] tracking-widest uppercase mb-4">The Muse</p>
              <h2 className="text-headline-md font-bold mb-1">Age 20–34.</h2>
              <p className="text-title-sm text-gray-400 mb-10">Gen Z-influenced. Community-first.</p>
              <div className="space-y-7">
                {[
                  {
                    label: 'Runs for joy, not podiums',
                    detail: 'Community over competition. Finish lines are optional.',
                  },
                  {
                    label: 'Cultural markers on trail',
                    detail: "Tattoos, rings, earrings, sunglasses — identity doesn't pause for elevation.",
                  },
                  {
                    label: 'Gear that goes both ways',
                    detail: 'Performs on trail. Looks right at a coffee shop, gallery, or record store.',
                  },
                  {
                    label: 'Stories over stats',
                    detail: 'More interested in the company and the landscape than the KOM.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-0.5 bg-[#2D4A2A] flex-shrink-0 self-stretch mt-1" />
                    <div>
                      <p className="font-bold text-title-sm mb-0.5">{item.label}</p>
                      <p className="text-body-sm text-gray-500">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Placeholder label="The Muse — lifestyle portrait" aspect="3/4" dark={false} />
          </div>
        </div>
      </section>

      {/* Visual System */}
      <section className="bg-[#1A1A1A] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-label-lg font-semibold text-[#D4E141] tracking-widest uppercase mb-4">Visual System</p>
          <h2 className="text-headline-lg font-bold text-white mb-4">Heightened State of Being.</h2>
          <p className="text-body-lg text-white/50 mb-16 max-w-xl">
            Patterns inspired by mapping and construction. Distorted perspective mixing urban and natural landscapes. A system designed to feel both technical and human.
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            {/* Stacked type */}
            <div className="bg-[#2C2C2C] rounded-2xl p-8 overflow-hidden">
              <p className="text-label-sm text-white/30 uppercase tracking-widest mb-6">Type as Texture</p>
              <div
                className="font-black leading-[0.85] tracking-tighter text-[#D4E141] uppercase select-none"
                style={{ fontSize: 'clamp(40px, 6vw, 60px)' }}
              >
                RUN<br />TRAIL<br />RIDE<br />TRAIL<br />RUN
              </div>
            </div>

            {/* Color */}
            <div className="bg-[#2C2C2C] rounded-2xl p-8">
              <p className="text-label-sm text-white/30 uppercase tracking-widest mb-6">Color Palette</p>
              <div className="space-y-3">
                {[
                  { hex: '#D4E141', name: 'Acid Yellow', role: 'Technical accent' },
                  { hex: '#2D4A2A', name: 'Trail Green', role: 'Brand anchor' },
                  { hex: '#C4953A', name: 'Gold', role: 'Warmth & energy' },
                  { hex: '#F0EDE8', name: 'Cream', role: 'Off-trail lifestyle' },
                  { hex: '#1A1A1A', name: 'Near-black', role: 'Foundation' },
                ].map((c) => (
                  <div key={c.hex} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex-shrink-0 border border-white/10" style={{ backgroundColor: c.hex }} />
                    <div>
                      <p className="text-white text-label-lg font-semibold leading-none mb-0.5">{c.name}</p>
                      <p className="text-white/30 text-label-sm">{c.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Grid texture */}
            <div className="bg-[#C4953A] rounded-2xl p-8 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    'linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)',
                  backgroundSize: '28px 28px',
                }}
              />
              <div className="relative z-10">
                <p className="text-label-sm text-[#1A1A1A]/50 uppercase tracking-widest mb-6">Grid Overlay</p>
                <p className="text-[#1A1A1A] text-body-md leading-relaxed font-medium">
                  Distorted grid patterns inspired by topographic maps — a visual bridge between mountain terrain and urban geometry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photography Direction */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <p className="text-label-lg font-semibold text-[#C4953A] tracking-widest uppercase mb-4">Photography Direction</p>
              <h2 className="text-headline-lg font-bold">6 Themes. One Voice.</h2>
            </div>
            <p className="text-body-md text-gray-500 max-w-xs">
              A visual framework for selecting and briefing imagery that reflects the evo trail running brand voice.
            </p>
          </div>
        </div>

        <div className="space-y-px">
          {photoThemes.map((theme) => (
            <div
              key={theme.number}
              className={theme.dark ? 'bg-[#1A1A1A] text-white' : 'bg-[#F0EDE8] text-[#1A1A1A]'}
            >
              <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  <div>
                    <p className={`text-label-sm font-semibold tracking-widest uppercase mb-2 ${theme.dark ? 'text-[#D4E141]' : 'text-[#C4953A]'}`}>
                      {theme.number}
                    </p>
                    <h3 className="text-headline-sm font-bold mb-3">{theme.title}</h3>
                    <p className={`text-body-md mb-8 ${theme.dark ? 'text-white/50' : 'text-gray-500'}`}>
                      {theme.description}
                    </p>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="w-0.5 bg-[#2D4A2A] flex-shrink-0 self-stretch mt-0.5" />
                        <p className={`text-body-sm ${theme.dark ? 'text-white/60' : 'text-gray-600'}`}>
                          {theme.do}
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-0.5 bg-[#C4953A] flex-shrink-0 self-stretch mt-0.5" />
                        <p className={`text-body-sm ${theme.dark ? 'text-white/30' : 'text-gray-400'}`}>
                          {theme.dont}
                        </p>
                      </div>
                    </div>
                  </div>
                  <Placeholder label={`${theme.title} — photo placeholder`} aspect="4/3" dark={theme.dark} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Campaign Executions */}
      <section className="bg-[#2D4A2A] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-label-lg font-semibold text-[#D4E141] tracking-widest uppercase mb-4">
            Campaign Executions
          </p>
          <h2 className="text-headline-lg font-bold text-white mb-4">Across every touchpoint.</h2>
          <p className="text-body-lg text-white/50 mb-16 max-w-xl">
            The visual system translated across paid ads, email marketing, in-store environments, and digital campaigns.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                label: 'Paid Ad Carousel',
                desc: 'Stacked type with product hero photography. "Built for the trail." / "Styled for anywhere."',
              },
              {
                label: 'Email — Category Feature',
                desc: 'Yellow grid aesthetic with editorial layout. "Rugged Comfort & Cushion." Curated brand partners.',
              },
              {
                label: 'In-store / Environmental',
                desc: 'Seasonal campaign tagline connects signage to digital. Provides a tie-in to more trail-related content.',
              },
            ].map((item) => (
              <div key={item.label} className="bg-[#1A1A1A] rounded-2xl overflow-hidden">
                <Placeholder label={`${item.label} — image placeholder`} aspect="4/3" dark={true} />
                <div className="p-6">
                  <p className="text-[#D4E141] text-label-sm font-semibold uppercase tracking-widest mb-2">
                    {item.label}
                  </p>
                  <p className="text-white/50 text-body-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="bg-[#1A1A1A] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <p className="text-label-sm text-white/30 uppercase tracking-widest mb-2">Status</p>
            <p className="text-title-md font-semibold">Live — running across all channels, FW25</p>
            <p className="text-body-sm text-white/40 mt-1">High-res assets and final campaign images coming soon.</p>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-lg text-label-lg font-semibold hover:bg-white hover:text-[#1A1A1A] transition flex-shrink-0"
          >
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
        </div>
      </section>

    </div>
  );
}
