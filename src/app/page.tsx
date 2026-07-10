'use client';

import { motion } from 'framer-motion';
import NetworkBackground from '../components/NetworkBackground';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number] 
    }
  };

  return (
    <main className="min-h-screen font-sans selection:bg-white selection:text-black bg-[#0a0a0a]">
      
      {/* 01 // HERO SECTION (FULL SCREEN NETWORK BACKGROUND) */}
      <section className="h-screen w-full relative overflow-hidden flex flex-col">
        
        {/* NATIVE NEURAL NETWORK BACKGROUND */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-[#0a0a0a]">
          <NetworkBackground />
        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a] z-0 pointer-events-none"></div>

        {/* CONTENT */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-12 h-full flex flex-col justify-between pt-12 md:pt-24 pb-12">
          <header className="flex justify-between items-baseline w-full border-b border-glassBorder pb-6">
            <h1 className="font-mono text-xs tracking-widest text-white uppercase drop-shadow-md">ANSHUMAN RAJ</h1>
            <span className="font-mono text-xs tracking-widest text-white uppercase drop-shadow-md">[ GENAI & AUTOMATION ]</span>
          </header>

          <div className="max-w-2xl mt-auto mb-auto space-y-6 pointer-events-none">
            <motion.h2 
              className="text-4xl md:text-6xl font-normal tracking-tighter leading-none text-white drop-shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              GenAI & Automation <br />Engineer
            </motion.h2>
            <motion.p 
              className="text-zinc-300 text-base md:text-lg font-normal leading-relaxed drop-shadow-md"
              {...fadeInUp}
            >
              Transitioning prompt intelligence into deterministic, automated pipelines. I design 
              software that leverages generative models to orchestrate complex digital workflows, 
              converting unstructured natural language into structured, predictable data models.
            </motion.p>
            
            {/* NAYA RESUME BUTTON YAHAN ADD KARO */}
            <motion.div 
              className="pt-6 pointer-events-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <a 
                href="/resume.pdf" 
                target="_blank" 
                className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-xs text-white border border-glassBorder px-6 py-3 hover:bg-white hover:text-black transition-all duration-300"
              >
                <span>[ INIT_DOWNLOAD_RESUME.PDF ]</span>
                <span className="text-[10px]">↗</span>
              </a>
            </motion.div>
          </div>

          <div className="border-t border-glassBorder pt-6 flex justify-between items-center text-xs font-mono text-white drop-shadow-md pointer-events-none">
            
            <span>[CS & AI UNDERGRAD @CUAP]</span>
          </div>
        </div>
      </section>

      {/* WRAPPER FOR REST OF THE PAGE TO KEEP IT CENTERED */}
      <div className="w-full max-w-6xl mx-auto px-6 lg:px-12">
        
        {/* 02 // CASE STUDIES */}
        <section className="py-24 space-y-16">
          <div className="border-b border-glassBorder pb-4">
            <h3 className="font-mono text-xs tracking-widest text-muted uppercase">02 // SELECTED ARCHITECTURES</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* CHITRAGUPTA 2.0 - MOVED TO FIRST POSITION */}
            <motion.div className="space-y-6 group" {...fadeInUp}>
              <div className="p-8 bg-zinc-900/30 border border-glassBorder rounded-none backdrop-blur-sm transition-all duration-300 group-hover:border-zinc-700">
                <span className="font-mono text-xs text-muted block mb-2">CASE 01 // DEPLOYED AGENT</span>
                <h4 className="text-2xl font-normal tracking-tight mb-4">ChitraGupta 2.0: Agentic AI Coaching Platform</h4>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  An autonomous AI coaching platform combining deterministic policy-based decision-making with 
                  multi-provider LLM routing. Features 8 intelligence layers (policy engine, confidence tracking, 
                  identity modeling, 34 behavioral patterns, adaptive coaching, reasoning-driven tasks, 
                  context-aware memory, structured reflection) with real-time analytics dashboard.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['FastAPI', 'Next.js 16', 'React 19', 'Tailwind 4', 'Supabase', 'pgvector', 'Groq', 'Gemini', 'Mistral', 'OpenRouter', 'Cloudflare'].map((tech) => (
                    <span key={tech} className="font-mono text-[10px] bg-zinc-900 px-2 py-1 text-zinc-400 border border-glassBorder">{tech}</span>
                  ))}
                </div>
                <div className="flex gap-4 font-mono text-xs">
                  <a href="https://chitra-gupta-2-0.vercel.app/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">↗ Live System</a>
                  <a href="https://github.com/Anshumanraj07/ChitraGupta-2.0" target="_blank" rel="noreferrer" className="text-muted hover:text-white transition-colors">↗ Repository</a>
                </div>
              </div>
            </motion.div>

            {/* VAANI */}
            <motion.div className="space-y-6 group" {...fadeInUp}>
              <div className="p-8 bg-zinc-900/30 border border-glassBorder rounded-none backdrop-blur-sm transition-all duration-300 group-hover:border-zinc-700">
                <span className="font-mono text-xs text-muted block mb-2">CASE 02 // DEPLOYED MVP</span>
                <h4 className="text-2xl font-normal tracking-tight mb-4">Vaani: Cognitive Diagnostic Dashboard</h4>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  A cloud-native digital biomarker tracking system analyzing kinematic interactions and speech 
                  patterns to establish clinical baselines for cognitive load. Utilizes vectorless LlamaIndex Summary RAG 
                  to eliminate infrastructure costs completely.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Next.js', 'FastAPI', 'LlamaIndex', 'Groq Whisper', 'Supabase', 'Pinecone'].map((tech) => (
                    <span key={tech} className="font-mono text-[10px] bg-zinc-900 px-2 py-1 text-zinc-400 border border-glassBorder">{tech}</span>
                  ))}
                </div>
                <div className="flex gap-4 font-mono text-xs">
                  <a href="https://vaani-sepia.vercel.app/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">↗ Live System</a>
                  <a href="https://github.com/Anshumanraj07/Vaani" target="_blank" rel="noreferrer" className="text-muted hover:text-white transition-colors">↗ Repository</a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 03 // TECH STACK BENTO GRID */}
        <section className="py-12 space-y-12">
          <div className="border-b border-glassBorder pb-4">
            <h3 className="font-mono text-xs tracking-widest text-muted uppercase">03 // TECHNICAL STACK</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-6 bg-zinc-900/20 border border-glassBorder hover:border-zinc-700 transition-colors">
              <h4 className="font-mono text-xs text-muted mb-3 uppercase">// Intelligence Layer</h4>
              <p className="text-sm tracking-tight text-zinc-300">Groq, LlamaIndex RAG, Whisper, Prompt Optimization, Engineering Architecture.</p>
            </div>
            <div className="p-6 bg-zinc-900/20 border border-glassBorder hover:border-zinc-700 transition-colors">
              <h4 className="font-mono text-xs text-muted mb-3 uppercase">// Infrastructure</h4>
              <p className="text-sm tracking-tight text-zinc-300">FastAPI, Supabase (PostgreSQL), pgvector, REST APIs, Docker, Linux Systems, Render, Vercel.</p>
            </div>
            <div className="p-6 bg-zinc-900/20 border border-glassBorder hover:border-zinc-700 transition-colors">
              <h4 className="font-mono text-xs text-muted mb-3 uppercase">// Interfaces</h4>
              <p className="text-sm tracking-tight text-zinc-300">Next.js, Tailwind CSS, Framer Motion, Document Object Models, Telegram Bot API.</p>
            </div>
            <div className="p-6 bg-zinc-900/20 border border-glassBorder sm:col-span-2 lg:col-span-3 hover:border-zinc-700 transition-colors">
              <h4 className="font-mono text-xs text-muted mb-2 uppercase">// Systems Foundations</h4>
              <p className="text-sm tracking-tight text-zinc-300 font-mono text-zinc-400">Python · C · C++ · Java · Data Structures & Algorithms · Object-Oriented Logic.</p>
            </div>
          </div>
        </section>

        {/* 04 & 05 // ETHOS AND TERMINAL TERMINUS */}
        <section className="py-24 border-t border-glassBorder grid grid-cols-1 md:grid-cols-12 gap-12 mt-12">
          <div className="md:col-span-7 space-y-4">
            <h3 className="font-mono text-xs tracking-widest text-muted uppercase">04 // ETHOS</h3>
            <p className="text-muted text-sm leading-relaxed max-w-md">
              Pursuing a B.Sc. (Hons) in Computer Science & AI, I treat engineering with structural discipline. 
              I build zero-latency applications designed to solve operational inefficiencies, maintaining an unwavering 
              focus on system utility, production hygiene, and scalable execution.
            </p>
          </div>

          <div className="md:col-span-5 space-y-4">
            <h3 className="font-mono text-xs tracking-widest text-muted uppercase">05 // TERMINAL</h3>
            <ul className="space-y-2 font-mono text-sm">
              <li>Email: <a href="mailto:anshumanraj2207@gmail.com" className="text-zinc-300 hover:text-white transition-colors">anshumanraj2207@gmail.com</a></li>
              <li>GitHub: <a href="https://github.com/Anshumanraj07" target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-white transition-colors">github.com/Anshumanraj07</a></li>
              <li>LinkedIn: <a href="https://www.linkedin.com/in/anshuman-raj-aj22072006" target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-white transition-colors">linkedin.com/in/anshuman-raj</a></li>
            </ul>
          </div>
        </section>

        <footer className="text-center pt-12 pb-6 border-t border-glassBorder/50 font-mono text-[10px] text-muted">
          © 2026 ANSHUMAN RAJ. ALL RIGHTS RESERVED.
        </footer>
      </div>
    </main>
  );
}