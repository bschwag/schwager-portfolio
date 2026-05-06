import React, { useState } from 'react';
import { Menu, X, Mail, Linkedin, ArrowRight, Check } from 'lucide-react';

function PhotoStrip() {
  const nums = [1, 2, 3, 4, 5, 6];
  const doubled = [...nums, ...nums];

  return (
    <div className="overflow-hidden mt-14 -mx-6 md:-mx-0">
      <div className="flex gap-3 animate-marquee" style={{ width: 'max-content' }}>
        {doubled.map((n, idx) => (
          <div
            key={idx}
            className="w-60 h-40 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100"
          >
            <img
              src={`/images/reel/image-${n}.jpg`}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function BuildItem({ label, status, detail }) {
  return (
    <div className="flex items-start gap-4 py-4 border-b border-gray-100 last:border-0">
      <div className={`mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center ${
        status === 'live'     ? 'bg-green-500' :
        status === 'building' ? 'bg-orange-400' :
                                'border-2 border-gray-200'
      }`}>
        {status === 'live'     && <Check size={11} color="white" strokeWidth={3} />}
        {status === 'building' && <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />}
      </div>
      <div className="flex-1 min-w-0">
        <p className={`font-semibold text-title-sm ${
          status === 'building' ? 'text-orange-600' :
          status === 'next'     ? 'text-gray-400'   :
                                  'text-gray-900'
        }`}>
          {label}
        </p>
        {detail && <p className="text-body-sm text-gray-400 mt-0.5">{detail}</p>}
      </div>
      {status === 'building' && (
        <span className="flex-shrink-0 text-label-sm font-semibold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full">
          In progress
        </span>
      )}
    </div>
  );
}

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const experience = [
    {
      company: 'evo',
      title: 'Creative Manager',
      timeframe: '2022–Present',
      summary: 'Leading creative strategy and execution for global campaigns across retail, travel, hospitality, and community events.',
    },
    {
      company: 'Schwager, Inc.',
      title: 'Owner & Creative Director',
      timeframe: '2014–Present',
      summary: 'Design practice spanning brand identity, packaging, and campaigns for Microsoft, evo, and Season.',
    },
    {
      company: 'Mendi',
      title: 'Co-founder & Chief Creative Officer',
      timeframe: '2019–2022',
      summary: '$650K first-year revenue. Scaled a Portland recipe to gold medals at the World Games.',
    },
    {
      company: 'Slingshot Sports',
      title: 'Creative Director',
      timeframe: '2013–2014',
      summary: 'Led brand identity across Kite, Wake, and SUP segments working shoulder-to-shoulder with R&D.',
    },
    {
      company: 'Turnstyle',
      title: 'Senior Designer',
      timeframe: '2009–2013',
      summary: "Brand, print, and interactive work across industries at one of Seattle's top design studios.",
    },
    {
      company: 'The Greenwood Collective',
      title: 'Co-founder',
      timeframe: '2007–2009',
      summary: 'Started a Seattle creative space pre-WeWork. Proved grassroots coworking could work without a playbook.',
    },
    {
      company: 'Engine Interactive',
      title: 'Interaction Designer',
      timeframe: '2006–2007',
      summary: 'UX design for Expedia and Precor — bridging design and dev before it was cool or easy.',
    },
    {
      company: 'Microsoft',
      title: 'Interaction Designer',
      timeframe: '2005–2006',
      summary: 'UI and icon systems for LifeCam hardware, collaborating with researchers and industrial designers.',
    },
  ];

  const buildItems = [
    {
      label: 'Site foundation — structure & type system',
      status: 'live',
      detail: 'Responsive layout, design tokens, component architecture',
    },
    {
      label: 'Mendi — full brand case study',
      status: 'building',
      detail: 'Co-founder story, $650K launch year, World Games gold medal',
    },
    {
      label: 'evo — campaign creative showcase',
      status: 'building',
      detail: 'Global campaigns across retail, travel, and community',
    },
    {
      label: 'Schwager Inc. — freelance work archive',
      status: 'next',
      detail: 'Microsoft, Season, and a decade of client work',
    },
    {
      label: 'Motion reel',
      status: 'next',
      detail: 'Video compilation of select projects',
    },
    {
      label: 'Writing & experiments',
      status: 'next',
      detail: 'Process writing, design thinking, side projects',
    },
  ];

  return (
    <div className="bg-white text-gray-900">

      {/* Progress banner */}
      <div className="bg-gray-900 text-white py-2.5 px-6 text-center">
        <p className="text-label-sm tracking-wide text-gray-300">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-orange-400 mr-2 align-middle animate-pulse" />
          Portfolio in progress — building in public.
          <a
            href="#building"
            className="ml-2 text-orange-400 hover:text-orange-300 transition underline underline-offset-2"
          >
            See what's coming →
          </a>
        </p>
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-title-lg font-bold tracking-tight">
            Brett<span className="text-orange-500">.</span>
          </a>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-1">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className={`${mobileMenuOpen ? 'flex' : 'hidden'} md:flex gap-7 absolute md:relative top-full left-0 right-0 md:top-auto md:left-auto flex-col md:flex-row bg-white md:bg-transparent p-6 md:p-0 border-b md:border-0 text-label-lg font-medium`}>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="hover:text-orange-500 transition">Experience</a>
            <a href="#work"       onClick={() => setMobileMenuOpen(false)} className="hover:text-orange-500 transition">Work</a>
            <a href="#building"   onClick={() => setMobileMenuOpen(false)} className="hover:text-orange-500 transition">What's Building</a>
            <a href="#contact"    onClick={() => setMobileMenuOpen(false)} className="hover:text-orange-500 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-20 md:pt-28 pb-0 overflow-hidden">
        <p className="text-label-lg font-semibold text-orange-500 tracking-widest uppercase mb-5">
          Brett Schwager — Hood River, OR
        </p>
        <h1 className="text-display-lg font-bold leading-[1.05] mb-7 max-w-2xl">
          Creative<br />Generalist.
        </h1>
        <p className="text-body-lg text-gray-500 mb-9 max-w-lg leading-relaxed">
          20 years designing brand stories that stick — across startups, agencies, and in-house teams.
          I work at the intersection of bold ideas and human connection.
        </p>
        <div className="flex gap-3 flex-wrap">
          <a
            href="#experience"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition text-label-lg"
          >
            See Experience <ArrowRight size={15} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-200 font-semibold rounded-lg hover:border-gray-900 hover:text-gray-900 transition text-label-lg text-gray-700"
          >
            Get in Touch
          </a>
        </div>
        <PhotoStrip />
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-headline-lg font-bold mb-14">Experience</h2>
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x-0 border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
            {experience.map((role, idx) => (
              <div
                key={idx}
                className={`p-7 bg-white hover:bg-gray-50 transition-colors ${
                  idx % 2 === 0 ? 'md:border-r border-gray-100' : ''
                } ${idx < experience.length - 2 ? 'md:border-b border-gray-100' : ''}`}
              >
                <div className="flex justify-between items-start gap-4 mb-2.5">
                  <div>
                    <h3 className="text-title-lg font-bold">{role.company}</h3>
                    <p className="text-title-sm text-gray-500 mt-0.5">{role.title}</p>
                  </div>
                  <span className="text-label-sm font-semibold text-gray-400 flex-shrink-0 pt-0.5">
                    {role.timeframe}
                  </span>
                </div>
                <p className="text-body-md text-gray-600 leading-relaxed">{role.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Preview */}
      <section id="work" className="bg-gray-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12 gap-4 flex-wrap">
            <div>
              <h2 className="text-headline-lg font-bold">Work Preview</h2>
              <p className="text-body-lg text-gray-500 mt-2">
                A taste of what's coming — full case studies in progress.
              </p>
            </div>
            <a
              href="#building"
              className="text-label-lg font-semibold text-orange-500 hover:text-orange-600 transition flex-shrink-0"
            >
              See full build log →
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className="group relative overflow-hidden rounded-xl bg-gray-200"
                style={{ aspectRatio: '4/3' }}
              >
                <img
                  src={`/images/reel/image-${n}.jpg`}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-label-sm font-medium tracking-wide">
                    Case study coming soon
                  </span>
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
            <p className="text-body-lg text-gray-500 mb-12">
              This portfolio is being assembled in public. Here's the exact status of each piece.
            </p>
            <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm bg-white px-6">
              {buildItems.map((item, idx) => (
                <BuildItem key={idx} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl">
            <h2 className="text-headline-lg font-bold mb-4">Let's Work Together</h2>
            <p className="text-body-lg text-gray-600 mb-10">
              Looking for a creative partner to kickstart your next project or scale your in-house team? Let's talk.
            </p>
            <div className="flex flex-col gap-5">
              <a
                href="mailto:brettschwager@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                  <Mail size={20} className="text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-label-sm text-gray-400 font-medium uppercase tracking-wide">Email</p>
                  <p className="text-title-md font-semibold group-hover:text-orange-500 transition-colors">
                    brettschwager@gmail.com
                  </p>
                </div>
              </a>
              <a
                href="https://linkedin.com/in/brettschwager"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Linkedin size={20} className="text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-label-sm text-gray-400 font-medium uppercase tracking-wide">LinkedIn</p>
                  <p className="text-title-md font-semibold group-hover:text-blue-600 transition-colors">
                    /in/brettschwager
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-title-lg font-bold">
            Brett<span className="text-orange-500">.</span>
          </span>
          <p className="text-gray-500 text-label-lg">Designed & built by Brett. Hood River, OR.</p>
          <p className="text-gray-600 text-label-sm">Portfolio in progress — {new Date().getFullYear()}</p>
        </div>
      </footer>

    </div>
  );
}
