import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, X, RefreshCcw } from 'lucide-react';

const ErrorModal = ({ message, onClose, onRetry }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center px-6">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
      />

      {/* Error Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-sm p-8 rounded-xl border border-red-500/30 bg-[#080505] shadow-[0_0_50px_-12px_rgba(239,68,68,0.3)] text-center overflow-hidden font-mono"
      >
        {/* Subtle red scanning line */}
        <motion.div 
          animate={{ y: [0, 300, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent z-0"
        />

        <div className="relative z-10">
          <div className="flex justify-center mb-6">
            <div className="h-12 w-12 rounded-xl bg-red-500/10 flex items-center justify-center border border-red-500/20 shadow-inner">
              <AlertTriangle className="w-6 h-6 text-red-500" />
            </div>
          </div>

          <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-red-500 mb-2">
            System Exception
          </h3>
          
          <h2 className="text-xl font-bold tracking-tighter text-white mb-4">
            Uplink Failed
          </h2>

          <p className="text-[11px] text-zinc-500 uppercase tracking-widest leading-relaxed mb-8">
            {message || "The encryption handshake was interrupted by the host network."}
          </p>

          <div className="flex flex-col gap-3">
            <button 
              onClick={onRetry}
              className="w-full flex items-center justify-center gap-2 bg-red-600 text-white py-3 rounded-lg text-[11px] font-bold uppercase tracking-tighter hover:bg-red-500 transition-all"
            >
              <RefreshCcw className="w-3.5 h-3.5" />
              Re-initiate Protocol
            </button>
            
            <button 
              onClick={onClose}
              className="text-[10px] text-zinc-600 uppercase font-bold hover:text-zinc-300 transition-colors"
            >
              Close Terminal
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ErrorModal;