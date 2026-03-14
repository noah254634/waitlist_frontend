import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const questions = [
    {
      q: "How does the 'Sourcing' process work?",
      a: "We operate a dual-layer sourcing model. Our local network of vetted engineers across Africa provides on-the-ground data curation and linguistic context. Simultaneously, our core internal team manages specialized annotation and engineering tasks to ensure institutional-grade quality.",
    },
    {
      q: "How are data providers compensated?",
      a: "We use a transparent fee structure. Once a dataset is validated and sold, funds are distributed via our Node.js payment layer.",
    },
    {
      q: "Is my proprietary data secure?",
      a: "Yes. We utilize Cloudflare R2's enterprise-grade encryption. Access is strictly controlled via signed URLs and authenticated microservices.",
    },
    {
      q: "Can I request specific regional data?",
      a: "Absolutely. VeraLabel was built specifically to bridge the gap in underrepresented regional data, including African dialects and contexts.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#020202]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold mb-8 text-center">
          System Intelligence / FAQ
        </h2>

        <div className="space-y-4">
          {questions.map((item, i) => (
            <Accordion key={i} question={item.q} answer={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-zinc-900 bg-zinc-950/50 rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between text-left hover:bg-zinc-900/50 transition-colors"
      >
        <span className="text-sm font-bold text-zinc-200 tracking-tight">
          {question}
        </span>
        {isOpen ? (
          <Minus className="w-4 h-4 text-blue-500" />
        ) : (
          <Plus className="w-4 h-4 text-zinc-600" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-xs text-zinc-500 leading-relaxed font-sans">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQ;
