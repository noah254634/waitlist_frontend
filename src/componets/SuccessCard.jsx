import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Share2, Copy, X } from 'lucide-react';

const SuccessCard = ({ position, role, email, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6 font-mono">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/95 backdrop-blur-md"
      />

      {/* Card Wrapper - Responsive width and padding */}
      <motion.div
        key="success-modal"
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        className="relative w-full max-w-[95%] sm:max-w-md p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#080808] shadow-[0_0_80px_-15px_rgba(59,130,246,0.3)] overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
        
        <motion.div 
          animate={{ y: [-100, 500] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent z-0 opacity-50"
        />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex justify-between items-start mb-6 sm:mb-8">
            <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
              <ShieldCheck className="w-5 h-5 text-blue-500" />
            </div>
            <button 
              onClick={onClose}
              className="p-1 text-zinc-600 hover:text-white transition-all active:scale-90"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Position Display - Responsive Font Sizes */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-6 sm:mb-8"
          >
            <h3 className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.5em] text-blue-500 mb-2 sm:mb-3">
              Node Verification Successful
            </h3>
            <h2 className="text-5xl sm:text-6xl font-bold tracking-tighter text-white mb-2">
              #{position}
            </h2>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800">
               <span className="w-1 h-1 rounded-full bg-green-500 animate-ping" />
               <span className="text-[8px] sm:text-[9px] text-zinc-400 uppercase tracking-widest">Active on Whitelist</span>
            </div>
          </motion.div>

          {/* Data Grid - 1 col on tiny mobile, 2 cols on small screens up */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-8">
            <DataModule label="Network Role" value={role} />
            <DataModule label="Clearance" value="Genesis" />
          </div>

          {/* Email Footer - Optimized for mobile overflow */}
          <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-950 border border-zinc-900 mb-6 sm:mb-8">
            <div className="min-w-0 flex-1 pr-2">
              <p className="text-[7px] sm:text-[8px] text-zinc-600 uppercase mb-0.5">Linked Identity</p>
              <p className="text-[10px] sm:text-[11px] text-zinc-300 truncate font-sans">
                {email}
              </p>
            </div>
            <button 
              onClick={copyEmail} 
              className="p-2 bg-zinc-900/50 hover:bg-zinc-900 rounded-md transition-colors active:bg-blue-500/20"
            >
              <Copy className="w-3.5 h-3.5 text-zinc-500" />
            </button>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

const DataModule = ({ label, value }) => (
  <div className="p-2 sm:p-3 rounded-lg bg-zinc-950/50 border border-zinc-900 text-left min-w-0">
    <p className="text-[7px] sm:text-[8px] text-zinc-600 uppercase mb-1 truncate">{label}</p>
    <p className="text-[9px] sm:text-[11px] font-bold text-zinc-200 uppercase truncate">{value}</p>
  </div>
);

export default SuccessCard;