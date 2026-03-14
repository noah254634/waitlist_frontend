import React from 'react';
import { motion } from 'framer-motion';

const Network = () => {
  return (
    <section className="py-24 px-6 bg-[#020202] border-t border-zinc-900/50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-[10px] uppercase tracking-[0.3em] text-blue-500 font-bold mb-4">Human Infrastructure</h2>
          <p className="text-3xl font-bold tracking-tight text-white mb-6">
            A distributed network of <span className="text-zinc-600">vetted intelligence.</span>
          </p>
          <div className="space-y-4 text-zinc-500 text-sm leading-relaxed">
            <p>
              We don't just rely on algorithms. We've built a pipeline for engineers across the continent to join the VeraLabel ecosystem.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="h-1 w-1 bg-blue-500 rounded-full" />
                <span>Specialized skill-based onboarding</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1 w-1 bg-blue-500 rounded-full" />
                <span>Continuous protocol-specific training</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1 w-1 bg-blue-500 rounded-full" />
                <span>Internal core team for quality assurance</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative h-[300px] bg-zinc-950 rounded-2xl border border-zinc-900 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]" />
          
          {/* Animated Nodes */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-2 w-2 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [1, 1.5, 1], 
                opacity: [0.3, 1, 0.3],
                x: Math.random() * 200 - 100,
                y: Math.random() * 200 - 100
              }}
              transition={{ 
                duration: 3 + i, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
          ))}
          <span className="relative z-10 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
            Vera-Network: Active Scanning
          </span>
        </div>
      </div>
    </section>
  );
};

export default Network;