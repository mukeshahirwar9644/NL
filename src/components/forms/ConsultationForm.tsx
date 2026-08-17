import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { getConsultationWhatsAppUrl } from '../../lib/whatsapp';
import { Button } from '../ui/Button';

const consultationSchema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  phone: z.string().min(10, 'Please enter a valid 10-digit phone number'),
  whatsapp: z.string().optional(),
  location: z.string().min(2, 'Please specify your Village, Town or City'),
  projectType: z.enum(['School', 'House', 'Community Building', 'Village Infrastructure', 'Renovation', 'Other']),
  projectSize: z.string().optional(),
  message: z.string().min(10, 'Please describe your requirement in a few words'),
});

type ConsultationFormData = z.infer<typeof consultationSchema>;

export const ConsultationForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<ConsultationFormData | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      projectType: 'House',
    },
  });

  const onSubmit = async (data: ConsultationFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmittedData(data);
    setIsSubmitted(true);
    reset();
  };

  if (isSubmitted && submittedData) {
    const waUrl = getConsultationWhatsAppUrl({
      name: submittedData.name,
      phone: submittedData.phone,
      location: submittedData.location,
      projectType: submittedData.projectType,
      projectSize: submittedData.projectSize,
      message: submittedData.message,
    });

    return (
      <div className="bg-earth-900 border border-terracotta-600/50 rounded-sm p-8 text-center text-white shadow-2xl">
        <div className="w-16 h-16 bg-[#25D366]/20 text-[#25D366] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#25D366]/40">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <h3 className="text-2xl font-heading font-bold text-white mb-2">
          Thank You, {submittedData.name}!
        </h3>

        <p className="text-sm font-sans text-sand-300 max-w-md mx-auto mb-6">
          We have received your enquiry for the <strong>{submittedData.projectType}</strong> project in <strong>{submittedData.location}</strong>. We'll get in touch with you shortly.
        </p>

        <div className="p-4 bg-earth-950/80 rounded-sm border border-earth-800 mb-6 text-left text-xs font-mono space-y-1.5 text-sand-400">
          <div><strong className="text-terracotta-400">Phone:</strong> {submittedData.phone}</div>
          <div><strong className="text-terracotta-400">Location:</strong> {submittedData.location}</div>
          <div><strong className="text-terracotta-400">Type:</strong> {submittedData.projectType}</div>
          {submittedData.projectSize && <div><strong className="text-terracotta-400">Size:</strong> {submittedData.projectSize}</div>}
        </div>

        <div className="space-y-3">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button variant="whatsapp" size="lg" icon="whatsapp" className="w-full">
              Continue on WhatsApp Immediately
            </Button>
          </a>

          <button
            onClick={() => setIsSubmitted(false)}
            className="text-xs font-mono text-earth-400 hover:text-sand-200 underline mt-2"
          >
            Submit Another Requirement
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-earth-900/90 border border-earth-800 rounded-sm p-6 sm:p-8 shadow-xl text-white">
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-earth-800">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-terracotta-500"></span>
          <span className="font-mono text-xs uppercase tracking-wider text-terracotta-400">
            Consultation Request
          </span>
        </div>
        <span className="text-[11px] font-mono text-earth-500">SEC: DIRECT-ENQUIRY</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label className="block text-xs font-mono text-sand-300 uppercase mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            placeholder="e.g. Ramesh Kumar"
            {...register('name')}
            className={`w-full bg-earth-950 border ${
              errors.name ? 'border-red-500' : 'border-earth-700'
            } rounded-sm px-3.5 py-2.5 text-sm text-white placeholder-earth-600 focus:outline-none focus:border-terracotta-500`}
          />
          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-mono text-sand-300 uppercase mb-1.5">
            Phone Number *
          </label>
          <input
            type="tel"
            placeholder="e.g. 9876543210"
            {...register('phone')}
            className={`w-full bg-earth-950 border ${
              errors.phone ? 'border-red-500' : 'border-earth-700'
            } rounded-sm px-3.5 py-2.5 text-sm text-white placeholder-earth-600 focus:outline-none focus:border-terracotta-500`}
          />
          {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
        </div>

        {/* WhatsApp Number */}
        <div>
          <label className="block text-xs font-mono text-sand-300 uppercase mb-1.5">
            WhatsApp Number (Optional)
          </label>
          <input
            type="tel"
            placeholder="If different from phone"
            {...register('whatsapp')}
            className="w-full bg-earth-950 border border-earth-700 rounded-sm px-3.5 py-2.5 text-sm text-white placeholder-earth-600 focus:outline-none focus:border-terracotta-500"
          />
        </div>

        {/* Village / City */}
        <div>
          <label className="block text-xs font-mono text-sand-300 uppercase mb-1.5">
            Village / City / Location *
          </label>
          <input
            type="text"
            placeholder="e.g. Gram Rampur, Block A"
            {...register('location')}
            className={`w-full bg-earth-950 border ${
              errors.location ? 'border-red-500' : 'border-earth-700'
            } rounded-sm px-3.5 py-2.5 text-sm text-white placeholder-earth-600 focus:outline-none focus:border-terracotta-500`}
          />
          {errors.location && <p className="text-red-400 text-xs mt-1">{errors.location.message}</p>}
        </div>

        {/* Project Type */}
        <div>
          <label className="block text-xs font-mono text-sand-300 uppercase mb-1.5">
            Project Type *
          </label>
          <select
            {...register('projectType')}
            className="w-full bg-earth-950 border border-earth-700 rounded-sm px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-terracotta-500"
          >
            <option value="House">Residential House</option>
            <option value="School">School Building</option>
            <option value="Community Building">Community Building / Hall</option>
            <option value="Village Infrastructure">Village Infrastructure / Road</option>
            <option value="Renovation">Renovation & Improvement</option>
            <option value="Other">Custom Construction</option>
          </select>
          {errors.projectType && <p className="text-red-400 text-xs mt-1">{errors.projectType.message}</p>}
        </div>

        {/* Approximate Size */}
        <div>
          <label className="block text-xs font-mono text-sand-300 uppercase mb-1.5">
            Approximate Area / Size
          </label>
          <input
            type="text"
            placeholder="e.g. 1500 sq.ft or 3 rooms"
            {...register('projectSize')}
            className="w-full bg-earth-950 border border-earth-700 rounded-sm px-3.5 py-2.5 text-sm text-white placeholder-earth-600 focus:outline-none focus:border-terracotta-500"
          />
        </div>
      </div>

      {/* Message / Requirement */}
      <div className="mt-4">
        <label className="block text-xs font-mono text-sand-300 uppercase mb-1.5">
          Project Requirement Details *
        </label>
        <textarea
          rows={3}
          placeholder="Tell us about the space, number of floors, timeline, or any specific needs..."
          {...register('message')}
          className={`w-full bg-earth-950 border ${
            errors.message ? 'border-red-500' : 'border-earth-700'
          } rounded-sm px-3.5 py-2.5 text-sm text-white placeholder-earth-600 focus:outline-none focus:border-terracotta-500`}
        ></textarea>
        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
      </div>

      {/* Submit Button */}
      <div className="mt-6">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          icon="arrow"
          className="w-full justify-center"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting Request...' : 'Request A Consultation'}
        </Button>
      </div>

      <div className="mt-4 flex items-center justify-between text-[11px] text-earth-400 font-mono">
        <span className="flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-terracotta-400" />
          <span>Direct Contractor Review</span>
        </span>
        <span>No spam guaranteed</span>
      </div>
    </form>
  );
};
