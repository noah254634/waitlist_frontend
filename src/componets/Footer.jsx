import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Github, Twitter, Globe, Terminal } from "lucide-react";
import { useStore } from "../store/waitlist";
import SuccessCard from "./SuccessCard";
import ErrorModal from "./ErrorCard";
const Footer = () => {
  const [isError,setIsError]=useState(false)
  const [errorMessage,setErrorMessage]=useState('')
  const [role, setRole] = useState('trainer'); // Default selection
  const [email,setEmail]=useState('')
  const [submittedData, setSubmittedData] = useState(null)
  const {postWaitlist} = useStore()
  const handleSubmit =async (e) => {
    e.preventDefault()
    try{
    console.log(email)
    console.log(role)
    const data =await postWaitlist(email,role)
    console.log(data?.exist?.position)
    if(data){
      const email = data?.waiter?.email ?? data?.exist?.email ?? email;
      const Role = data?.exist?.role ?? data?.waiter?.role ?? role;
      const position =
        data?.position ?? data?.waiter?.position ?? data?.exist?.position ?? "Confirmed";
      setSubmittedData({
        role: Role,
        email: email,
        position
      })
    }
    else{
      // If the store returns null or an error object
      setErrorMessage('Uplink Connection Interrupted')
      setIsError(true)
    }
    setEmail('')
    setRole('trainer')
    }catch(err){
      console.log(err)
    }
    
  }
  const VeraLogo = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-blue-500"
    >
      {/* Central Core */}
      <rect x="9" y="9" width="6" height="6" rx="1" fill="currentColor" />

      {/* Orbital Data Points */}
      <circle cx="12" cy="4" r="1.5" fill="currentColor" fillOpacity="0.4" />
      <circle cx="12" cy="20" r="1.5" fill="currentColor" fillOpacity="0.4" />
      <circle cx="4" cy="12" r="1.5" fill="currentColor" fillOpacity="0.4" />
      <circle cx="20" cy="12" r="1.5" fill="currentColor" fillOpacity="0.4" />

      {/* Connecting Lines */}
      <path
        d="M12 5.5V9M12 15v5M5.5 12H9M15 12h5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.2"
      />
    </svg>
  );
  return (
    <footer className="bg-[#020202] pt-32 pb-12 px-6 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        {/* Integrated Waitlist & Brand Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              {/* The New Icon */}
              <div className="p-2 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <VeraLogo />
              </div>

              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tighter text-white leading-none">
                  VeraLabel<span className="text-blue-500">.ai</span>
                </span>
                <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest mt-1">
                  Verified_Data_Infrastructure
                </span>
              </div>
            </div>

            <p className="text-zinc-500 text-sm leading-relaxed max-w-sm font-sans">
              The institutional layer for curated machine intelligence. Bridging
              the global data gap through a distributed network of vetted
              engineers.
            </p>
            <div className="flex gap-3">
              {/*<SocialLink icon={<Twitter className="w-4 h-4" />} />*/}
              <SocialLink href="https://github.com/noah254634" icon={<Github className="w-4 h-4"   />} />
              {/*<SocialLink icon={<Globe className="w-4 h-4" />} />*/}
            </div>
          </div>

          {/* Integrated Whitelist Form */}
          <div className="lg:col-span-7 lg:pl-12">
  <div className="space-y-6">
    <div className="space-y-2">
      <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.3em]">
        Genesis_Whitelist_Registration
      </h4>
      <p className="text-[10px] text-zinc-600 font-mono italic">
        // Select your protocol role to initialize access
      </p>
    </div>

    {/* Role Selector Tabs */}
    <div className="flex p-1 bg-zinc-950 border border-zinc-900 rounded-xl w-fit">
      <button 
        type="button"
        onClick={() => setRole('trainer')}
        className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${
          role === 'trainer' ? 'bg-zinc-800 text-white shadow-lg' : 'text-zinc-600 hover:text-zinc-400'
        }`}
      >
        Model Trainer
      </button>
      <button 
        type="button"
        onClick={() => setRole('provider')}
        className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${
          role === 'provider' ? 'bg-zinc-800 text-white shadow-lg' : 'text-zinc-600 hover:text-zinc-400'
        }`}
      >
        Data Provider
      </button>
    </div>

    {/* Input Group */}
    <div className="flex flex-col sm:flex-row gap-2">
      <form onSubmit={handleSubmit} className='flex items-center w-full'>
      
      <input
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        required
        type="email"
        placeholder={role === 'trainer' ? "lab@organization.ai" : "provider@network.io"}
        className="flex-1 bg-zinc-950 border border-zinc-900 px-4 py-3 rounded-lg text-sm text-white placeholder:text-zinc-800 outline-none focus:border-zinc-700 transition-all font-mono"
      />
      <button type="submit" className="bg-zinc-100 hover:bg-white text-black px-6 py-3 rounded-lg text-[11px] font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2">
        Request Access <ArrowRight className="w-3 h-3" />
      </button>
      </form>

    </div>
    
    <div className="flex items-center gap-4">
       <span className="text-[9px] text-zinc-700 font-mono uppercase tracking-widest">Priority: High</span>
       <span className="text-[9px] text-zinc-700 font-mono uppercase tracking-widest">Slots: 42/1000</span>
    </div>
  </div>
</div>

        {/* Technical Metadata Row */}
        <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-8">
            <FooterLink label="Engineers_Portal" />
            <FooterLink label="Documentation" />
            <FooterLink label="Privacy_Policy" />
          </div>

          <div className="flex items-center gap-4 text-[9px] font-mono text-zinc-700 uppercase tracking-[0.2em]">
            <span>© 2026 VERAlabel_INFRA</span>
            <div className="flex items-center gap-2 px-3 py-1 bg-zinc-950 border border-zinc-900 rounded-full">
              <span className="h-1 w-1 rounded-full bg-green-500 animate-pulse" />
              <span className="text-zinc-500">System_Status: Optimal</span>
            </div>
          </div>
        </div>
        </div>
        <AnimatePresence>
      {submittedData && (
        <SuccessCard 
          position={submittedData.position} 
          role={submittedData.role} 
          email={submittedData.email}
          onClose={() => setSubmittedData(null)} 
        />
      )}
      {/* ERROR POPUP */}
      {isError && (
        <ErrorModal
          message="Connection Protocol: Time Out"
          onClose={() => setIsError(false)}
          onRetry={() => {
            setIsError(false);
            handleSubmit(new Event("submit")); 
          }}
        />
      )}
    </AnimatePresence>
      </div>
    </footer>
  );
};

const FooterLink = ({ label }) => (
  <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest hover:text-blue-500 cursor-pointer transition-colors">
    {label}
  </span>
);

const SocialLink = ({ icon, href }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="p-2.5 bg-zinc-950 border border-zinc-900 rounded-lg hover:border-zinc-700 hover:text-blue-500 text-zinc-500 transition-all flex items-center justify-center"
  >
    {icon}
  </a>
);

export default Footer;
