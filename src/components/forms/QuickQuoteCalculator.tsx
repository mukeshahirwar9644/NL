import React, { useState } from 'react';
import { Calculator, Shield } from 'lucide-react';
import { getWhatsAppUrl, CONTRACTOR_NAME } from '../../lib/whatsapp';
import { Button } from '../ui/Button';

export const QuickQuoteCalculator: React.FC = () => {
  const [projectType, setProjectType] = useState<'House' | 'School' | 'Community' | 'Renovation'>('House');
  const [areaSqFt, setAreaSqFt] = useState<number>(1200);
  const [qualityGrade, setQualityGrade] = useState<'Standard' | 'Premium'>('Standard');

  // Estimate timeframe in months
  const estimatedMonths = Math.max(2, Math.round((areaSqFt / 500) * (qualityGrade === 'Premium' ? 1.2 : 1)));

  // Generate customized WhatsApp query message
  const whatsappQuery = `Namaste ${CONTRACTOR_NAME}, I used your website project estimator for a ${projectType} project (${areaSqFt} sq.ft, ${qualityGrade} grade). I would like to discuss the feasibility and exact estimate.`;

  return (
    <div className="bg-earth-900 border border-earth-800 rounded-sm p-6 sm:p-8 text-white shadow-xl">
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-earth-800">
        <div className="flex items-center gap-2">
          <Calculator className="w-5 h-5 text-terracotta-400" />
          <h3 className="font-heading font-bold text-lg text-white">
            Quick Project Estimator
          </h3>
        </div>
        <span className="text-[10px] font-mono text-terracotta-400 bg-earth-950 px-2 py-0.5 rounded border border-earth-800">
          INSTANT ESTIMATE
        </span>
      </div>

      {/* Project Type Selector */}
      <div className="mb-5">
        <label className="block text-xs font-mono text-sand-300 uppercase mb-2">
          Select Project Type
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {(['House', 'School', 'Community', 'Renovation'] as const).map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setProjectType(type)}
              className={`py-2 px-3 text-xs font-heading font-medium rounded-sm border transition-all ${
                projectType === type
                  ? 'bg-terracotta-600 border-terracotta-500 text-white font-bold'
                  : 'bg-earth-950 border-earth-800 text-sand-300 hover:border-earth-700'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Area Slider */}
      <div className="mb-5">
        <div className="flex items-center justify-between text-xs font-mono mb-2">
          <span className="text-sand-300 uppercase">Estimated Built-Up Area</span>
          <span className="text-terracotta-400 font-bold text-sm">{areaSqFt.toLocaleString()} sq.ft</span>
        </div>
        <input
          type="range"
          min="400"
          max="6000"
          step="100"
          value={areaSqFt}
          onChange={(e) => setAreaSqFt(Number(e.target.value))}
          className="w-full h-2 bg-earth-950 rounded-lg appearance-none cursor-pointer accent-terracotta-500"
        />
        <div className="flex justify-between text-[10px] font-mono text-earth-500 mt-1">
          <span>400 sq.ft (Single Unit)</span>
          <span>3,000 sq.ft</span>
          <span>6,000 sq.ft (Campus)</span>
        </div>
      </div>

      {/* Construction Finish Level */}
      <div className="mb-6">
        <label className="block text-xs font-mono text-sand-300 uppercase mb-2">
          Construction Finish Level
        </label>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setQualityGrade('Standard')}
            className={`p-3 text-left rounded-sm border text-xs transition-all ${
              qualityGrade === 'Standard'
                ? 'bg-earth-800 border-terracotta-500 text-white shadow-sm'
                : 'bg-earth-950 border-earth-800 text-sand-400 hover:border-earth-700'
            }`}
          >
            <div className="font-heading font-bold text-sand-100 mb-0.5">Durable Pukka Grade</div>
            <div className="text-[11px] text-earth-400">Class 1 Red Brick, RCC Frame, Kota stone</div>
          </button>

          <button
            type="button"
            onClick={() => setQualityGrade('Premium')}
            className={`p-3 text-left rounded-sm border text-xs transition-all ${
              qualityGrade === 'Premium'
                ? 'bg-earth-800 border-terracotta-500 text-white shadow-sm'
                : 'bg-earth-950 border-earth-800 text-sand-400 hover:border-earth-700'
            }`}
          >
            <div className="font-heading font-bold text-sand-100 mb-0.5">Architectural Finish</div>
            <div className="text-[11px] text-earth-400">Brick Jaali accents, tile roof, custom verandah</div>
          </button>
        </div>
      </div>

      {/* Estimation Results Summary Box */}
      <div className="bg-earth-950 p-4 rounded-sm border border-earth-800 mb-6">
        <div className="grid grid-cols-2 gap-4 text-xs font-mono">
          <div>
            <div className="text-earth-400 text-[10px] uppercase">Estimated Timeline</div>
            <div className="text-terracotta-400 font-bold text-base mt-0.5">
              ~ {estimatedMonths} to {estimatedMonths + 1} Months
            </div>
          </div>
          <div>
            <div className="text-earth-400 text-[10px] uppercase">Foundation Type</div>
            <div className="text-sand-100 font-bold text-xs mt-1">
              RCC Plinth + Strip Footing
            </div>
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-earth-900 flex items-center gap-2 text-[11px] text-sand-400">
          <Shield className="w-3.5 h-3.5 text-terracotta-500 shrink-0" />
          <span>Includes material sourcing, labor supervision & quality water curing</span>
        </div>
      </div>

      {/* Direct WhatsApp CTA */}
      <a
        href={getWhatsAppUrl(whatsappQuery)}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <Button variant="whatsapp" size="md" icon="whatsapp" className="w-full">
          Discuss This Estimate on WhatsApp
        </Button>
      </a>
    </div>
  );
};
