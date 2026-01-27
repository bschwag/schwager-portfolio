import React, { useState } from 'react';
import { Menu, X, ExternalLink, Github, Linkedin, Mail } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Experience grouped by theme, not timeline
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
        },
        {
          company: 'The Greenwood Collective',
          title: 'Co-founder',
          timeframe: '2007–2009',
          summary: 'Started a Seattle creative space pre-WeWork. Designed identity, drove community growth, and proved grassroots coworking could work without a playbook.',
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
        },
        {
          company: 'Slingshot Sports',
          title: 'Creative Director',
          timeframe: '2013–2014',
          summary: 'Led creative working shoulder-to-shoulder with R&D. Developed visual brand identity across Kite, Wake, and SUP segments.',
        },
        {
          company: 'Turnstyle',
          title: 'Senior Designer',
          timeframe: '2009–2013',
          summary: 'Designed brand, print, and interactive work across industries while upgrading their Flash site before it became a museum piece.',
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
        },
        {
          company: 'Engine Interactive',
          title: 'Interaction Designer',
          timeframe: '2006–2007',
          summary: 'Designed digital experiences for Expedia & Precor—helping bridge design and dev before it was cool or easy.',
        },
        {
          company: 'Microsoft',
          title: 'Interaction Designer',
          timeframe: '2005–2006',
          summary: 'Designed UI and icon systems for LifeCam hardware, collaborating with researchers and industrial designers.',
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
          <a href="#" className="text-2xl font-bold tracking-tight">
            Brett<span className="text-orange-500">.</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
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
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Creative Generalist
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Two decades designing memorable brand stories across startups, agencies, and in-house teams. I thrive at the intersection of bold ideas and human connection—whether kickstarting teams with solid foundations or injecting new thinking into larger organizations.
          </p>
          <div className="flex gap-4">
            <a
              href="#experience"
              className="px-8 py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition"
            >
              See Experience
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-gray-900 font-semibold rounded hover:bg-gray-900 hover:text-white transition"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Experience by Theme */}
      <section id="experience" className="bg-gray-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Experience</h2>

          <div className="space-y-20">
            {experienceGroups.map((group, idx) => (
              <div key={idx}>
                <div className={`bg-gradient-to-r ${group.color} rounded-lg p-1 mb-8 w-fit`}>
                  <div className="bg-white px-6 py-3 rounded">
                    <h3 className="text-lg font-bold">{group.theme}</h3>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {group.roles.map((role, roleIdx) => (
                    <div
                      key={roleIdx}
                      className={`${group.accentBg} p-8 rounded-lg border border-gray-200 hover:border-gray-400 transition`}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-xl font-bold">{role.company}</h4>
                          <p className="text-sm text-gray-600">{role.title}</p>
                        </div>
                        <span className="text-sm font-semibold text-gray-500">
                          {role.timeframe}
                        </span>
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

      {/* Reel Section */}
      <section id="reel" className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Work Reel</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { src: 'image-1.jpg', title: 'evo Branding', desc: 'Environmental & Digital' },
            { src: 'image-2.jpg', title: 'Adventure Brand', desc: 'Identity & Positioning' },
            { src: 'image-3.jpg', title: 'Mendi Campaign', desc: 'Digital & Storytelling' },
            { src: 'image-4.jpg', title: 'State Branding', desc: 'Environmental Design' },
            { src: 'image-5.jpg', title: 'Logo Systems', desc: 'Brand Mark & Typography' },
            { src: 'image-6.jpg', title: 'Product Design', desc: 'Packaging & Branding' },
            { src: 'image-7.jpg', title: 'Typography', desc: 'Custom Letterforms' },
            { src: 'image-8.jpg', title: 'Brimstone Branding', desc: 'Identity & Signage' },
          ].map((item, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-lg aspect-square bg-gray-200 cursor-pointer">
              <img 
                src={`/images/reel/${item.src}`}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300 flex items-end">
                <div className="p-6 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-sm">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experimental Sandbox */}
      <section id="sandbox" className="bg-gray-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experimental Sandbox</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl">
            Thinking out loud. Videos, blog posts, code experiments, and DIY projects where I get my hands dirty exploring ideas beyond client work.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {experiments.map((exp, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-lg border border-gray-200 hover:border-orange-500 hover:shadow-lg transition group cursor-pointer"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-sm font-semibold text-orange-500 bg-orange-50 px-3 py-1 rounded">
                    {exp.category}
                  </span>
                  <ExternalLink size={20} className="text-gray-300 group-hover:text-orange-500 transition" />
                </div>
                <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                <p className="text-sm text-gray-500">{exp.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's Work Together</h2>
            <p className="text-xl text-gray-600 mb-8">
              Looking for a creative partner to kickstart your next project or scale your in-house team? Let's talk.
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:brettschwager@gmail.com"
                className="flex items-center gap-3 text-lg font-semibold hover:text-orange-500 transition"
              >
                <Mail size={24} />
                brettschwager@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/brettschwager"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-lg font-semibold hover:text-orange-500 transition"
              >
                <Linkedin size={24} />
                LinkedIn
              </a>
              <a
                href="https://brettschwager.com"
                className="flex items-center gap-3 text-lg font-semibold hover:text-orange-500 transition"
              >
                <ExternalLink size={24} />
                Portfolio
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl h-96 flex items-center justify-center">
            <p className="text-white text-center text-xl font-bold">Your Photo/Brand Mark Here</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            Designed & built by Brett. Hood River, OR.
          </p>
        </div>
      </footer>
    </div>
  );
}