import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageSquare, Phone, ArrowUpRight, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getWhatsAppUrl, PHONE_NUMBER } from '../../lib/whatsapp';
import { cn } from '../../lib/utils';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Why Us', path: '/why-us' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          isScrolled
            ? 'bg-earth-950/90 backdrop-blur-md border-b border-earth-800/80 py-3.5 shadow-md shadow-black/10'
            : 'bg-gradient-to-b from-earth-950/90 via-earth-950/60 to-transparent py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Contractor Name */}
            <Link to="/" className="group flex items-center gap-3">
              <div className="w-11 h-11 rounded-md bg-black flex items-center justify-center p-1 border border-earth-700 shadow-md group-hover:border-terracotta-500 transition-all overflow-hidden">
                <img
                  src="/logo.png"
                  alt="NLM Logo"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg sm:text-xl tracking-tight text-white group-hover:text-terracotta-400 transition-colors">
                  NANDLAL AHIRWAR
                </span>
                <span className="font-mono text-[10px] tracking-widest text-terracotta-400/90 uppercase flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-terracotta-500"></span>
                  Construction & Development
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 bg-earth-900/60 p-1.5 rounded-full border border-earth-800/70 backdrop-blur-sm">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={cn(
                      'relative px-4 py-1.5 text-sm font-heading font-medium transition-colors rounded-full',
                      isActive
                        ? 'text-white font-semibold'
                        : 'text-sand-300 hover:text-white'
                    )}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavTab"
                        className="absolute inset-0 bg-terracotta-600/30 border border-terracotta-500/50 rounded-full -z-10"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              {/* WhatsApp Action Button */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 text-xs font-mono font-medium text-[#25D366] bg-earth-900/80 hover:bg-earth-850 rounded-sm border border-[#25D366]/40 transition-all group"
                title="Chat on WhatsApp"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366] group-hover:scale-110 transition-transform" />
                <span>WhatsApp</span>
              </a>

              {/* Get Quote CTA */}
              <Link
                to="/contact"
                className="flex items-center gap-2 px-4 py-2 text-xs font-heading font-semibold uppercase tracking-wider text-white bg-terracotta-600 hover:bg-terracotta-700 rounded-sm border border-terracotta-500 shadow-sm transition-all active:translate-y-0.5"
              >
                <span>Get a Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 md:hidden">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#25D366] bg-earth-900/80 rounded-sm border border-[#25D366]/40"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-sm bg-earth-900 text-sand-100 border border-earth-700 hover:bg-earth-800"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-terracotta-400" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 md:hidden bg-earth-950/98 backdrop-blur-xl flex flex-col pt-24 pb-8 px-6 overflow-y-auto"
          >
            {/* Architectural decorative line */}
            <div className="flex items-center justify-between pb-6 border-b border-earth-800 text-terracotta-400 font-mono text-xs">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4" />
                <span>NAVIGATION // ARCH.MENU</span>
              </div>
              <span>NANDLAL AHIRWAR</span>
            </div>

            {/* Navigation links */}
            <div className="flex flex-col gap-4 py-8">
              {navLinks.map((link, idx) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={cn(
                      'flex items-center justify-between text-2xl font-heading font-bold py-2 border-b border-earth-900 transition-colors',
                      isActive ? 'text-terracotta-400 pl-2 border-terracotta-700/50' : 'text-sand-100 hover:text-white'
                    )}
                  >
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-xs text-earth-500">0{idx + 1}</span>
                      {link.name}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-terracotta-500 opacity-60" />
                  </Link>
                );
              })}
            </div>

            {/* Quick Actions at bottom of mobile menu */}
            <div className="mt-auto pt-6 border-t border-earth-800 flex flex-col gap-3">
              <Link
                to="/contact"
                className="w-full py-3.5 bg-terracotta-600 hover:bg-terracotta-700 text-white font-heading font-semibold text-center rounded-sm border border-terracotta-500"
              >
                Get a Quote
              </Link>
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white text-xs font-mono font-medium rounded-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-center justify-center gap-2 py-3 bg-earth-800 text-sand-100 text-xs font-mono font-medium rounded-sm border border-earth-700"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
