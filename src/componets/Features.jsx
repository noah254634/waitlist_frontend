import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Globe, Lock } from 'lucide-react';

const Features = () => {
  return (
    <section className="py-24 px-6 bg-[#020202] border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-[10px] uppercase tracking-[0.3em] text-blue-500 font-bold mb-4">Protocol Infrastructure</h2>
          <p className="text-3xl font-bold tracking-tight text-white max-w-md">
            The institutional layer for <span className="text-zinc-500">verifiable intelligence.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Large Feature Card */}
          <FeatureCard 
            className="md:col-span-2"
            icon={<ShieldCheck className="text-blue-500" />}
            title="Cryptographic Proof of Label"
            description="Every data point is signed by the provider and verified on-chain, ensuring 100% provenance and preventing model collapse from synthetic data loops."
          />
          
          {/* Small Feature Card */}
          <FeatureCard 
            icon={<Zap className="text-amber-500" />}
            title="Latency-Free Sync"
            description="Global edge nodes for instant data delivery."
          />

          <FeatureCard 
            icon={<Lock className="text-emerald-500" />}
            title="Privacy Preserving"
            description="Zero-knowledge proofs for sensitive datasets."
          />

          <FeatureCard 
            className="md:col-span-2"
            icon={<Globe className="text-purple-500" />}
            title="Decentralized Labeling Network"
            description="A globally distributed workforce of human annotators vetted by the protocol's reputation engine."
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description, className = "" }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`p-8 rounded-2xl border border-zinc-900 bg-zinc-950/50 hover:border-zinc-800 transition-all ${className}`}
  >
    <div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center mb-6 border border-zinc-800">
      {icon}
    </div>
    <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{title}</h3>
    <p className="text-zinc-500 text-sm leading-relaxed font-sans">{description}</p>
  </motion.div>
);

export default Features;