import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Database, Cpu, ChevronRight, Terminal } from "lucide-react";
import { useStore } from "../store/waitlist";
import SuccessCard from "./SuccessCard";
import ErrorModal from "./ErrorCard";
const Hero = () => {
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { postWaitlist, systemStats } = useStore();
  const [role, setRole] = useState(null);
  const [email, setEmail] = useState("");
  const [submittedData, setSubmittedData] = useState(null);
  const [stats, setStats] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsError(false);
    setErrorMessage("");
    try {
      console.log(email);
      console.log(role);
      const data = await postWaitlist(email, role);
      console.log(data?.exist?.position);
      if (data) {
        const email = data?.waiter?.email ?? data?.exist?.email;
        const Role = data?.exist?.role ?? data?.waiter?.role;
        const position =
          data?.position ?? data?.waiter?.position ?? data?.exist?.position;
        setSubmittedData({
          role: Role,
          email: email,
          position,
        });
      } else {
        // If the store returns null or an error object
        setErrorMessage("Uplink Connection Interrupted");
        setIsError(true);
      }
      setEmail("");
      setRole(null);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const fetchSystemStats = async () => {
      try {
        const fetchedStats = await systemStats();
        console.log(fetchedStats);
        setStats(fetchedStats);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSystemStats();
  }, []);

  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 25, stiffness: 120 },
    },
  };

  return (
    <div className="relative min-h-screen bg-[#020202] text-white selection:bg-blue-500/30 overflow-hidden font-mono">
      {/* Dark Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#121212_1px,transparent_1px),linear-gradient(to_bottom,#121212_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <motion.div
        variants={containerVars}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20 flex flex-col items-center"
      >
        {/* Status Badge */}
        <motion.div variants={itemVars} className="mb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-zinc-800 bg-zinc-950 text-[10px] tracking-widest text-zinc-500 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
            Phase 1: Whitelist Entry Open
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVars}
          className="text-center text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter mb-6"
        >
          Building the foundation <br /> for{" "}
          <span className="text-blue-500">Autonomous Data</span>.
        </motion.h1>

        <motion.p
          variants={itemVars}
          className="text-center text-zinc-500 text-sm md:text-base max-w-xl mb-12 font-sans"
        >
          VeraLabel is an upcoming decentralized marketplace protocol. Join the
          whitelist to secure your spot in the ecosystem as a founding node or
          data partner.
        </motion.p>

        <LayoutGroup>
          {/* Path Selection */}
          <motion.div
            variants={itemVars}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl"
          >
            <PathCard
              active={role === "provider"}
              onSelect={() => setRole("provider")}
              icon={<Database className="w-4 h-4" />}
              label="Data Provider"
              status="Priority access to sell"
            />
            <PathCard
              active={role === "trainer"}
              onSelect={() => setRole("trainer")}
              icon={<Cpu className="w-4 h-4" />}
              label="Model Trainer"
              status="Priority access to buy"
            />
          </motion.div>

          {/* Whitelist Input */}
          <div className="w-full max-w-md mt-8 h-24">
            <AnimatePresence mode="wait">
              {role && (
                <motion.div
                  initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                  className="relative group"
                >
                  <div className="relative flex items-center p-1.5 rounded-lg border border-zinc-800 bg-zinc-950 focus-within:border-zinc-600 transition-all">
                    <form
                      onSubmit={handleSubmit}
                      className="flex items-center w-full"
                    >
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        type="email"
                        placeholder={`email@${role === "provider" ? "provider" : "lab"}.ai`}
                        className="w-full flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-zinc-800"
                      />
                      <button
                        type="submit"
                        className=" whitespace-nowrap bg-white text-black px-4 py-2 rounded-md text-[11px] font-bold hover:bg-zinc-200 transition-all uppercase tracking-tighter"
                      >
                        Get Early Access
                      </button>
                    </form>
                  </div>

                  <p className="mt-3 text-[10px] text-center text-zinc-600 uppercase tracking-widest">
                    Limited Genesis Slots Available
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </LayoutGroup>

        {/* System Specs */}
        <motion.div
          variants={itemVars}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 w-full border-t border-zinc-900 pt-8"
        >
          <Spec label="Protocol" value="Vera-1.0" />
          <Spec label="Architecture" value="Decentralized" />
          <Spec label="Launch Window" value="APRIL 2026" />{" "}
          <Spec label="Genesis Cap" value={`${stats?.count} on whitelist`} />
        </motion.div>
      </motion.div>
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
              handleSubmit(new Event("submit")); // Optional: auto-retry
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

const PathCard = ({ label, status, icon, active, onSelect }) => (
  <motion.button
    onClick={onSelect}
    className={`p-5 rounded-lg border text-left transition-all duration-300 ${
      active
        ? "border-zinc-400 bg-zinc-900"
        : "border-zinc-900 bg-zinc-950 hover:border-zinc-800"
    }`}
  >
    <div className={`mb-3 ${active ? "text-white" : "text-zinc-600"}`}>
      {icon}
    </div>
    <div className="text-xs font-bold mb-1 uppercase tracking-tight">
      {label}
    </div>
    <div className="text-[10px] text-zinc-600 uppercase tracking-tighter">
      {status}
    </div>
  </motion.button>
);

const Spec = ({ label, value }) => (
  <div className="flex flex-col">
    <span className="text-[9px] uppercase tracking-[0.2em] text-zinc-700 mb-1">
      {label}
    </span>
    <span className="text-xs font-bold text-zinc-400">{value}</span>
  </div>
);
export default Hero;
