import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { BlueprintGrid } from '../components/ui/BlueprintGrid';
import { ConsultationForm } from '../components/forms/ConsultationForm';
import { QuickQuoteCalculator } from '../components/forms/QuickQuoteCalculator';
import { MessageSquare, Phone, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { getWhatsAppUrl, PHONE_NUMBER, OFFICE_LOCATION, CONTRACTOR_NAME } from '../lib/whatsapp';

export const Contact: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 bg-earth-50 text-earth-900">
      
      {/* Header Banner */}
      <section className="relative py-16 lg:py-24 bg-earth-950 text-white overflow-hidden">
        <BlueprintGrid variant="dark" withCoordinates={true} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            theme="dark"
            badge="Direct Consultation"
            tagline="Start Your Project"
            title="Let's Build Something Meaningful."
            subtitle="Reach out directly to Nandlal Ahirwar to discuss school buildings, residential houses, community halls, or custom construction projects."
          />
        </div>
      </section>

      {/* Direct Contact Cards Row */}
      <section className="py-12 bg-earth-900 border-b border-earth-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            {/* WhatsApp Card */}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-earth-950 rounded-sm border border-earth-800 hover:border-[#25D366] transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="p-3 rounded-xs bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 inline-block mb-4 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div className="text-xs font-mono text-terracotta-400 uppercase">Instant Messaging</div>
                <h3 className="text-lg font-heading font-bold text-white mt-1">WhatsApp Chat</h3>
                <p className="text-xs font-sans text-sand-400 mt-2">
                  Fastest way to discuss floor plans, send site photos, and receive cost guidance.
                </p>
              </div>
              <div className="mt-6 font-mono text-xs font-semibold text-[#25D366] flex items-center gap-1">
                <span>Open WhatsApp Chat →</span>
              </div>
            </a>

            {/* Direct Phone Call Card */}
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="p-6 bg-earth-950 rounded-sm border border-earth-800 hover:border-terracotta-500 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="p-3 rounded-xs bg-terracotta-600/20 text-terracotta-400 border border-terracotta-500/30 inline-block mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="text-xs font-mono text-terracotta-400 uppercase">Direct Call</div>
                <h3 className="text-lg font-heading font-bold text-white mt-1">Talk About Your Project</h3>
                <p className="text-xs font-sans text-sand-400 mt-2">
                  Call {PHONE_NUMBER} to speak directly about project requirements and site visits.
                </p>
              </div>
              <div className="mt-6 font-mono text-xs font-semibold text-terracotta-400 flex items-center gap-1">
                <span>Call Directly Now →</span>
              </div>
            </a>

            {/* Service Area Card */}
            <div className="p-6 bg-earth-950 rounded-sm border border-earth-800 flex flex-col justify-between">
              <div>
                <div className="p-3 rounded-xs bg-sand-100/10 text-sand-300 border border-earth-700 inline-block mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="text-xs font-mono text-terracotta-400 uppercase">Site Consultations</div>
                <h3 className="text-lg font-heading font-bold text-white mt-1">Regional Service</h3>
                <p className="text-xs font-sans text-sand-400 mt-2">
                  Available for on-site inspection, soil check, and face-to-face planning.
                </p>
              </div>
              <div className="mt-6 font-mono text-xs text-sand-400">
                {OFFICE_LOCATION}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form & Estimator Grid */}
      <section className="py-20 bg-earth-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
            
            {/* Consultation Form (7 Cols) */}
            <div className="lg:col-span-7">
              <ConsultationForm />
            </div>

            {/* Quick Estimator & Additional Info (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <QuickQuoteCalculator />

              {/* Working Hours & Trust Note */}
              <div className="bg-white p-6 rounded-sm border border-sand-300 shadow-sm text-xs font-sans space-y-3">
                <div className="flex items-center gap-2 font-heading font-bold text-sm text-earth-950">
                  <Clock className="w-4 h-4 text-terracotta-600" />
                  <span>Direct Availability</span>
                </div>
                <p className="text-earth-700 leading-relaxed">
                  Monday to Saturday: 8:00 AM – 7:00 PM IST.<br />
                  Messages sent via WhatsApp are reviewed directly by <strong>{CONTRACTOR_NAME}</strong>.
                </p>
                <div className="pt-2 border-t border-sand-200 flex items-center gap-2 text-earth-600 font-mono text-[11px]">
                  <ShieldCheck className="w-4 h-4 text-terracotta-600" />
                  <span>No middle-agents. Direct contractor communication.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
