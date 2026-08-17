import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Compass } from 'lucide-react';
import { getWhatsAppUrl, PHONE_NUMBER } from '../../lib/whatsapp';
import { BlueprintGrid } from '../ui/BlueprintGrid';

export const ContactCTA: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-earth-950 text-white overflow-hidden">
      <BlueprintGrid variant="dark" withCoordinates={true} />

      {/* Ambient decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-terracotta-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-earth-900 border border-terracotta-700/80 text-terracotta-400 font-mono text-xs mb-6">
          <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '10s' }} />
          <span>START YOUR PROJECT // DIRECT CONSULTATION</span>
        </div>

        {/* Main Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
          Have A Building In Mind?
        </h2>

        <p className="mt-5 text-base sm:text-lg text-sand-300 font-sans max-w-2xl mx-auto leading-relaxed">
          Tell us what you want to build. We'll discuss your requirements, inspect the site, and help turn the idea into a practical, durable plan.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link to="/contact">
            <Button variant="primary" size="lg" icon="arrow">
              Start A Conversation
            </Button>
          </Link>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="whatsapp" size="lg" icon="whatsapp">
              WhatsApp Us
            </Button>
          </a>

          <a
            href={`tel:${PHONE_NUMBER}`}
            className="hidden sm:inline-flex"
          >
            <Button variant="outline" size="lg" icon="phone" className="border-earth-700 text-sand-100 hover:bg-earth-900 hover:text-white">
              Call Direct
            </Button>
          </a>
        </div>

        {/* Fast response guarantee tag */}
        <div className="mt-10 pt-6 border-t border-earth-800/80 inline-flex items-center gap-2 text-xs font-mono text-earth-400">
          <span className="w-2 h-2 rounded-full bg-[#25D366]"></span>
          <span>Fast response on WhatsApp & Direct Calls during business hours</span>
        </div>
      </div>
    </section>
  );
};
