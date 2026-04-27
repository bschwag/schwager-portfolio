import React, { useState } from 'react';
import { Menu, X, ExternalLink, Linkedin, Mail, ChevronLeft, ChevronRight } from 'lucide-react';

function RoleCarousel({ role, accentBg, gradientColor }) {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  const slides = [{ type: 'cover' }, ...role.images.map(img => ({ type: 'image', ...img }))];
  const total = slides.length;

  const prev = () => setCurrent(c => Math.max(0, c - 1));
  const next = () => setCurrent(c => Math.min(total - 1, c + 1));

  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (diff > 50) next();
    else if (diff < -50) prev();
    setTouchStart(null);
  };

  return (
    <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
      <div
        className="relative aspect-[4/3] select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-300 ${idx === current ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            {slide.type === 'cover' ? (
              <div className={`h-full ${accentBg} p-6 flex flex-col justify-between`}>
                <div>
                  <span className="text-label-sm font-semibold text-gray-400 uppercase tracking-wide">{role.timeframe}</span>
                  <h3 className="text-title-lg font-bold mt-1">{role.company}</h3>
                  <p className="text-title-sm text-gray-500 mt-1">{role.title}</p>
                </div>
                <p className="text-gray-700 text-body-md leading-relaxed">{role.summary}</p>
                <div className={`text-label-sm font-semibold bg-gradient-to-r ${gradientColor} bg-clip-text text-transparent`}>
                  Swipe to see work →
                </div>
              </div>
            ) : (
              <div className="h-full relative bg-gray-200 flex items-center justify-center">
                {slide.src ? (
                  <img src={slide.src} alt={slide.caption} className="w-full h-full object-cover" />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${gradientColor} opacity-10`} />
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-label-sm font-medium">{slide.caption}</p>
                </div>
                {!slide.src && (
                  <p className="absolute inset-0 flex items-center justify-center text-gray-400 text-label-sm text-center px-4">
                    {slide.caption}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}

        {current > 0 && (
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-1.5 shadow-md"
          >
            <ChevronLeft size={18} />
          </button>
        )}
        {current < total - 1 && (
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-1.5 shadow-md"
          >
            <ChevronRight size={18} />
          </button>
        )}
      </div>

      <div className="flex justify-center gap-2 py-3 bg-white">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`rounded-full transition-all duration-200 ${idx === current ? 'w-4 h-2 bg-gray-900' : 'w-2 h-2 bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const experienceGroups = [
    {
      theme: 'Building from Zero',
      color: 'from-orange-500 to-red-500',
      accentBg: 'bg-orange-50',
      roles: [
        {
          company: 'Mendi',
          title: 'Co-founder & Chief Creative Officer',
          timeframe: '2019–2022',
          summary: 'Led the 0 to 1 creative journey of a natural recovery brand for athletes. Scaled a homegrown Portland recipe to gold medals on the world stage. $650K first-year revenue, 20% sustained growth.',
          images: [
            { src: 'https://picsum.photos/seed/mendi1/800/600', caption: 'Brand identity & packaging system' },
            { src: 'https://picsum.photos/seed/mendi2/800/600', caption: 'Campaign photography & storytelling' },
            { src: 'https://picsum.photos/seed/mendi3/800/600', caption: 'Product launch at World Games' },
          ],
        },
        {
          company: 'The Greenwood Collective',
          title: 'Co-founder',
          timeframe: '2007–2009',
          summary: 'Started a Seattle creative space pre-WeWork. Designed identity, drove community growth, and proved grassroots coworking could work without a playbook.',
          images: [
            { src: 'https://picsum.photos/seed/green1/800/600', caption: 'Space identity & signage' },
            { src: 'https://picsum.photos/seed/green2/800/600', caption: 'Community event photography' },
            { src: 'https://picsum.photos/seed/green3/800/600', caption: 'Brand collateral & print' },
          ],
        },
      ],
    },
    {
      theme: 'Scaling & Leadership',
      color: 'from-blue-500 to-cyan-500',
      accentBg: 'bg-blue-50',
      roles: [
        {
          company: 'evo',
          title: 'Creative Manager',
          timeframe: '2022–Present',
          summary: 'Leading creative strategy and design execution for global campaigns across retail, travel, hospitality, and community events.',
          images: [
            { src: 'https://picsum.photos/seed/evo1/800/600', caption: 'Global campaign — retail & digital' },
            { src: 'https://picsum.photos/seed/evo2/800/600', caption: 'Travel & hospitality creative' },
            { src: 'https://picsum.photos/seed/evo3/800/600', caption: 'Community event branding' },
            { src: 'https://picsum.photos/seed/evo4/800/600', caption: 'In-store environmental design' },
          ],
        },
        {
          company: 'Slingshot Sports',
          title: 'Creative Director',
          timeframe: '2013–2014',
          summary: 'Led creative working shoulder-to-shoulder with R&D. Developed visual brand identity across Kite, Wake, and SUP segments.',
          images: [
            { src: 'https://picsum.photos/seed/sling1/800/600', caption: 'Kite segment brand identity' },
            { src: 'https://picsum.photos/seed/sling2/800/600', caption: 'Wake catalog design' },
            { src: 'https://picsum.photos/seed/sling3/800/600', caption: 'Product launch campaign' },
          ],
        },
        {
          company: 'Turnstyle',
          title: 'Senior Designer',
          timeframe: '2009–2013',
          summary: 'Designed brand, print, and interactive work across industries while upgrading their Flash site before it became a museum piece.',
          images: [
            { src: 'https://picsum.photos/seed/turn1/800/600', caption: 'Brand identity systems' },
            { src: 'https://picsum.photos/seed/turn2/800/600', caption: 'Print & publication design' },
            { src: 'https://picsum.photos/seed/turn3/800/600', caption: 'Interactive & web work' },
          ],
        },
      ],
    },
    {
      theme: 'Hands-On Practice',
      color: 'from-purple-500 to-pink-500',
      accentBg: 'bg-purple-50',
      roles: [
        {
          company: 'Schwager, Inc.',
          title: 'Owner & Creative Director',
          timeframe: '2014–Present',
          summary: 'Built a flexible design practice scaling from hand-coding brand sites to leading identity, packaging, and campaigns for Microsoft, evo, and Season.',
          images: [
            { src: 'https://picsum.photos/seed/sch1/800/600', caption: 'Microsoft — identity & icon systems' },
            { src: 'https://picsum.photos/seed/sch2/800/600', caption: 'Season — packaging & brand' },
            { src: 'https://picsum.photos/seed/sch3/800/600', caption: 'evo — campaign creative' },
            { src: 'https://picsum.photos/seed/sch4/800/600', caption: 'Site design & development' },
          ],
        },
        {
          company: 'Engine Interactive',
          title: 'Interaction Designer',
          timeframe: '2006–2007',
          summary: 'Designed digital experiences for Expedia & Precor—helping bridge design and dev before it was cool or easy.',
          images: [
            { src: 'https://picsum.photos/seed/eng1/800/600', caption: 'Expedia — UX & interaction design' },
            { src: 'https://picsum.photos/seed/eng2/800/600', caption: 'Precor — product UI' },
            { src: 'https://picsum.photos/seed/eng3/800/600', caption: 'Wireframes & prototypes' },
          ],
        },
        {
          company: 'Microsoft',
          title: 'Interaction Designer',
          timeframe: '2005–2006',
          summary: 'Designed UI and icon systems for LifeCam hardware, collaborating with researchers and industrial designers.',
          images: [
            { src: 'https://picsum.photos/seed/ms1/800/600', caption: 'LifeCam UI design' },
            { src: 'https://picsum.photos/seed/ms2/800/600', caption: 'Icon system development' },
            { src: 'https://picsum.photos/seed/ms3/800/600', caption: 'Hardware-software design integration' },
          ],
        },
      ],
    },
  ];

  const experiments = [
    { title: 'Design Thinking in Motion', category: 'Video', date: 'Coming Soon' },
    { title: 'Typography Deep Dive', category: 'Blog', date: 'Coming Soon' },
    { title: 'Creative Coding Sandbox', category: 'Code Experiment', date: 'Coming Soon' },
    { title: 'Brand Systems Workshop', category: 'Reflection', date: 'Coming Soon' },
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-title-lg font-bold tracking-tight">
            Brett<span className="text-orange-500">.</span>
          </a>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:flex gap-8 absolute md:relative top-full left-0 right-0 md:top-auto md:left-auto flex-col md:flex-row bg-white md:bg-transparent p-6 md:p-0 border-b md:border-0`}>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="hover:text-orange-500 transition">Experience</a>
            <a href="#reel" onClick={() => setMobileMenuOpen(false)} className="hover:text-orange-500 transition">Work</a>
            <a href="#sandbox" onClick={() => setMobileMenuOpen(false)} className="hover:text-orange-500 transition">Experiments</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-orange-500 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-display-lg font-bold leading-tight mb-6">
            Creative Generalist
          </h1>
          <p className="text-body-lg text-gray-600 mb-8 leading-relaxed">
            Two decades designing memorable brand stories across startups, agencies, and in-house teams. I thrive at the intersection of bold ideas and human connection—whether kickstarting teams with solid foundations or injecting new thinking into larger organizations.
          </p>
          <div className="flex gap-4">
            <a href="#experience" className="px-8 py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition">
              See Experience
            </a>
            <a href="#contact" className="px-8 py-3 border-2 border-gray-900 font-semibold rounded hover:bg-gray-900 hover:text-white transition">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Experience by Theme */}
      <section id="experience" className="bg-gray-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-headline-lg font-bold mb-16">Experience</h2>
          <div className="space-y-20">
            {experienceGroups.map((group, idx) => (
              <div key={idx}>
                <div className={`bg-gradient-to-r ${group.color} rounded-lg p-1 mb-8 w-fit`}>
                  <div className="bg-white px-6 py-3 rounded">
                    <h3 className="text-title-md font-bold">{group.theme}</h3>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {group.roles.map((role, roleIdx) => (
                    <div key={roleIdx} className={`${group.accentBg} p-8 rounded-lg border border-gray-200 hover:border-gray-400 transition`}>
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-title-lg font-bold">{role.company}</h4>
                          <p className="text-title-sm text-gray-600">{role.title}</p>
                        </div>
                        <span className="text-title-sm font-semibold text-gray-500">{role.timeframe}</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{role.summary}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Reel — themed carousels */}
      <section id="reel" className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-headline-lg font-bold mb-4">Work Reel</h2>
          <p className="text-body-lg text-gray-600 mb-16 max-w-2xl">
            A visual tour through 20 years of brand work — organized by the chapter it came from.
          </p>

          <div className="space-y-20">
            {experienceGroups.map((group, idx) => (
              <div key={idx}>
                <div className={`bg-gradient-to-r ${group.color} rounded-lg p-1 mb-8 w-fit`}>
                  <div className="bg-white px-6 py-3 rounded">
                    <h3 className="text-title-md font-bold">{group.theme}</h3>
                  </div>
                </div>
                <div className={`grid gap-6 ${group.roles.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
                  {group.roles.map((role, roleIdx) => (
                    <RoleCarousel
                      key={roleIdx}
                      role={role}
                      accentBg={group.accentBg}
                      gradientColor={group.color}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experimental Sandbox */}
      <section id="sandbox" className="bg-gray-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-headline-lg font-bold mb-4">Experimental Sandbox</h2>
          <p className="text-body-lg text-gray-600 mb-12 max-w-2xl">
            Thinking out loud. Videos, blog posts, code experiments, and DIY projects where I get my hands dirty exploring ideas beyond client work.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {experiments.map((exp, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg border border-gray-200 hover:border-orange-500 hover:shadow-lg transition group cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-label-md font-semibold text-orange-500 bg-orange-50 px-3 py-1 rounded">
                    {exp.category}
                  </span>
                  <ExternalLink size={20} className="text-gray-300 group-hover:text-orange-500 transition" />
                </div>
                <h3 className="text-title-lg font-bold mb-2">{exp.title}</h3>
                <p className="text-title-sm text-gray-500">{exp.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-headline-lg font-bold mb-8">Let's Work Together</h2>
            <p className="text-body-lg text-gray-600 mb-8">
              Looking for a creative partner to kickstart your next project or scale your in-house team? Let's talk.
            </p>
            <div className="flex flex-col gap-4">
              <a href="mailto:brettschwager@gmail.com" className="flex items-center gap-3 text-title-md font-semibold hover:text-orange-500 transition">
                <Mail size={24} />
                brettschwager@gmail.com
              </a>
              <a href="https://linkedin.com/in/brettschwager" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-title-md font-semibold hover:text-orange-500 transition">
                <Linkedin size={24} />
                LinkedIn
              </a>
              <a href="https://brettschwager.com" className="flex items-center gap-3 text-title-md font-semibold hover:text-orange-500 transition">
                <ExternalLink size={24} />
                Portfolio
              </a>
            </div>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl h-96 flex items-center justify-center">
            <p className="text-white text-center text-title-lg font-bold">Your Photo/Brand Mark Here</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">Designed & built by Brett. Hood River, OR.</p>
        </div>
      </footer>
    </div>
  );
}
