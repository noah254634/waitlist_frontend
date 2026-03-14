import React from 'react';
import { motion } from 'framer-motion';

const Vision = () => {
  return (
    <section className="py-32 px-6 bg-[#020202] border-t border-zinc-900/50 relative overflow-hidden">
      {/* Structural Accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        
        {/* Left Column: Metadata (4 Cols) */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-8"
        >
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-2 py-1 rounded border border-blue-500/20 bg-blue-500/5">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[9px] uppercase tracking-[0.4em] text-blue-400 font-mono font-bold">Document_01 // Origin</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[0.85]">
              The Story <br /> 
              Behind <span className="text-zinc-600 italic">VeraLabel</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zinc-900">
            <MetaItem label="Author" value="Noah Khaemba" />
            <MetaItem label="Location" value="Nairobi / Bungoma" />
            <MetaItem label="Objective" value="Data Sovereignty" />
            <MetaItem label="Status" value="Genesis Phase" />
          </div>
        </motion.div>

        {/* Right Column: Narrative (7 Cols + 1 Offset) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-6 lg:col-start-7 space-y-10"
        >
          <div className="prose prose-invert prose-zinc max-w-none">
            <p className="text-zinc-400 text-lg leading-relaxed font-sans">
              AI is described as the technology that will shape the world. But while working closely with these systems, I noticed a troubling gap: <span className="text-white">The future is being built on a blind spot.</span>
            </p>
            
            <p className="text-zinc-400 text-lg leading-relaxed font-sans">
              Most datasets are Western-centric—built from English-language content and digital activity from a handful of regions. Many AI systems struggle to understand the realities of billions across Africa. Not because the knowledge doesn't exist, but because <span className="text-white">the data was never built for them.</span>
            </p>

            <div className="relative py-8 my-8 border-y border-zinc-900">
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 h-12 w-1 bg-blue-600" />
              <p className="text-2xl font-bold text-white tracking-tight leading-tight">
                "What if the world had a place to exchange datasets that truly represent global knowledge?"
              </p>
            </div>

            <p className="text-zinc-500 text-base leading-relaxed">
              VeraLabel is that answer. We are building a trusted marketplace where organizations access high-quality data and contributors from around the globe help shape the intelligence of tomorrow.
            </p>
          </div>

          {/* Verification Signature */}
          <div className="flex items-center justify-between p-6 rounded-xl border border-zinc-900 bg-zinc-950/50 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-[10px] font-mono text-blue-500 font-bold">
                NK-01
              </div>
              <div className="space-y-0.5">
                <p className="text-sm font-bold text-white tracking-tight uppercase">Noah Khaemba</p>
                <p className="text-[10px] text-zinc-600 font-mono tracking-widest uppercase italic font-semibold">Founder // Authorized Signature</p>
              </div>
            </div>
            <div className="hidden sm:block text-[10px] font-mono text-zinc-800 uppercase tracking-[0.2em] -rotate-90">
              Vera_Identity_Verified
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const MetaItem = ({ label, value }) => (
  <div className="space-y-1">
    <p className="text-[9px] uppercase tracking-widest text-zinc-600 font-bold font-mono">{label}</p>
    <p className="text-xs text-zinc-400 font-medium">{value}</p>
  </div>
);

export default Vision;