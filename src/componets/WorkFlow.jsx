import React from 'react';
import { motion } from 'framer-motion';
import { Search, Database, Layers, Cloud } from 'lucide-react';

const Workflow = () => {
  const processes = [
    {
      icon: <Layers className="w-5 h-5" />,
      title: "Flexible Ingress",
      desc: "Submit existing datasets for professional labeling or request custom data sourcing from our engineering team."
    },
    {
      icon: <Search className="w-5 h-5" />,
      title: "Precision Sourcing",
      desc: "Our engineers hunt and curate niche datasets specifically for your model's unique regional or linguistic context."
    },
    {
      icon: <Cloud className="w-5 h-5" />,
      title: "Secured Persistence",
      desc: "All raw and processed assets are staged in R2-Cloudflare, ensuring high-availability and institutional-grade security."
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Market Supply",
      desc: "We proactively populate the marketplace with high-demand datasets to ensure liquidity for AI researchers."
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#020202] border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-[10px] uppercase tracking-[0.3em] text-blue-500 font-bold mb-4">Operational Architecture</h2>
          <p className="text-3xl font-bold tracking-tight text-white leading-tight max-w-2xl">
            A hybrid engine for <span className="text-zinc-600">curated machine intelligence.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {processes.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl border border-zinc-900 bg-zinc-950/40 hover:bg-zinc-900/50 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center text-blue-500 mb-6 border border-zinc-800 group-hover:border-blue-500/50 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-white font-bold mb-3 tracking-tight text-sm uppercase">{item.title}</h3>
              <p className="text-zinc-500 text-xs leading-relaxed font-sans">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-y-4 gap-x-6 p-4 rounded-xl bg-zinc-950 border border-zinc-900 w-full md:w-fit">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-blue-500 font-bold uppercase tracking-tighter underline decoration-blue-500/30 underline-offset-4">Core Stack:</span>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <TechBadge label="Cloudflare R2" />
            <TechBadge label="FastAPI Microservices" />
            <TechBadge label="Node.js Backend" />
            <TechBadge label="Distributed Tasking" />
          </div>
        </div>
      </div>
    </section>
  );
};

const TechBadge = ({ label }) => (
  <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-zinc-900 border border-zinc-800">
    <div className="w-1 h-1 rounded-full bg-zinc-600" />
    <span className="text-[10px] font-mono text-zinc-400 italic whitespace-nowrap">{label}</span>
  </div>
);

export default Workflow;