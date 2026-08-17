import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Phone, Mail, MapPin, ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';
import { getWhatsAppUrl, PHONE_NUMBER, EMAIL_ADDRESS, OFFICE_LOCATION, CONTRACTOR_NAME, CONTRACTOR_TAGLINE } from '../../lib/whatsapp';
import { servicesData } from '../../data/services';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-earth-950 text-sand-200 pt-16 pb-24 md:pb-16 border-t border-earth-800/80 overflow-hidden">
      {/* Decorative blueprint grid background */}
      <div className="absolute inset-0 bg-blueprint-dark opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top brand & statement grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-earth-800/70">
          {/* Main Brand Column */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-md bg-black flex items-center justify-center p-1 border border-earth-700 shadow-md group-hover:border-terracotta-500 transition-all overflow-hidden">
                <img
                  src="/logo.png"
                  alt="NLM Logo"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl tracking-tight text-white group-hover:text-terracotta-400 transition-colors">
                  {CONTRACTOR_NAME}
                </span>
                <span className="font-mono text-[10px] tracking-widest text-terracotta-400 uppercase">
                  Village Construction & Development
                </span>
              </div>
            </Link>

            <p className="text-sm font-sans text-sand-300 max-w-md leading-relaxed mt-2">
              "{CONTRACTOR_TAGLINE}"
            </p>

            <p className="text-xs text-earth-400 font-sans leading-relaxed max-w-sm">
              We work on construction projects that serve real people and real communities—from schools where children learn to homes where families grow and community buildings where people come together.
            </p>

            {/* Direct WhatsApp Badge */}
            <div className="pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] text-xs font-mono rounded-sm border border-[#25D366]/30 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat directly on WhatsApp for enquiries</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <span className="font-mono text-xs font-semibold text-terracotta-400 uppercase tracking-wider flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" />
              Explore
            </span>
            <ul className="space-y-2 text-sm">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Projects', path: '/projects' },
                { name: 'Why Choose Us', path: '/why-us' },
                { name: 'Get a Quote', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-earth-300 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-terracotta-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <span className="font-mono text-xs font-semibold text-terracotta-400 uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              Services
            </span>
            <ul className="space-y-2 text-xs">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link
                    to="/services"
                    className="text-earth-400 hover:text-sand-100 transition-colors block py-0.5"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <span className="font-mono text-xs font-semibold text-terracotta-400 uppercase tracking-wider">
              Direct Contact
            </span>

            <div className="space-y-3 text-xs text-sand-300">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center gap-2.5 hover:text-terracotta-400 transition-colors"
              >
                <div className="p-2 rounded bg-earth-900 text-terracotta-400 border border-earth-800">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-earth-400 uppercase font-mono">Phone Call</div>
                  <div className="font-medium text-sand-100">{PHONE_NUMBER}</div>
                </div>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-[#25D366] transition-colors"
              >
                <div className="p-2 rounded bg-earth-900 text-[#25D366] border border-earth-800">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-earth-400 uppercase font-mono">WhatsApp</div>
                  <div className="font-medium text-sand-100">{PHONE_NUMBER}</div>
                </div>
              </a>

              <div className="flex items-start gap-2.5 text-earth-400 pt-1">
                <div className="p-2 rounded bg-earth-900 text-terracotta-400 border border-earth-800 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-earth-400 uppercase font-mono">Service Area</div>
                  <div className="text-sand-300">{OFFICE_LOCATION}</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-earth-400">
                <div className="p-2 rounded bg-earth-900 text-terracotta-400 border border-earth-800">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-earth-400 uppercase font-mono">Email Enquiries</div>
                  <div className="text-sand-300">{EMAIL_ADDRESS}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Architectural Coordinate Ribbon */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-earth-400 font-mono gap-4">
          <div>
            © {currentYear} {CONTRACTOR_NAME}. Village Construction & Development. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px] text-earth-500">
            <span>SPEC: RCC + MASONRY</span>
            <span>•</span>
            <span>RURAL INFRASTRUCTURE</span>
            <span>•</span>
            <span className="text-terracotta-400/80">QUALITY BUILT</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
