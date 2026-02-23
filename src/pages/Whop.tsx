import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Calendar, MessageSquare, Map, Zap, ShieldAlert, BarChart3, BookOpen } from 'lucide-react';

export default function WhopPage() {
  return (
    <div className="min-h-screen bg-sky-100 text-zinc-900 font-sans selection:bg-emerald-500/30 relative overflow-hidden">
      {/* Windows XP Bliss inspired background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Sky */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-400 to-sky-100" />
        
        {/* Clouds */}
        <div className="absolute top-10 left-10 w-64 h-20 bg-white/80 rounded-full blur-2xl" />
        <div className="absolute top-24 right-20 w-96 h-32 bg-white/60 rounded-full blur-3xl" />
        <div className="absolute top-40 left-1/3 w-80 h-24 bg-white/70 rounded-full blur-2xl" />
        
        {/* Rolling Green Hills */}
        <div className="absolute bottom-0 left-[-10%] right-[-10%] h-[40vh] bg-gradient-to-t from-green-600 to-emerald-400 rounded-t-[100%] blur-[2px]" />
        <div className="absolute bottom-[-10vh] left-[-20%] right-[20%] h-[50vh] bg-gradient-to-t from-green-700 to-emerald-500 rounded-t-[100%] blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 sm:py-32">
        
        {/* 1) Hero */}
        <header className="text-center max-w-3xl mx-auto mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-white/50 text-sm text-zinc-700 mb-8 shadow-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Accepting new installs
            </div>
            <h1 className="text-5xl sm:text-7xl font-medium tracking-tight mb-8 leading-[1.1] text-zinc-900 drop-shadow-sm">
              Onboarding + retention loop <span className="text-emerald-700">installed in 7 days.</span>
            </h1>
            <p className="text-lg sm:text-xl text-zinc-700 mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
              A fixed-scope install that makes new members 'get it' fast, reduces support drag, and creates a repeatable weekly cadence.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="mailto:hello@frostedlogic.com?subject=MAP" 
                className="w-full sm:w-auto px-8 py-4 bg-emerald-600 text-white rounded-xl font-medium hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
              >
                Reply MAP
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="{{BOOKING_URL}}" 
                className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-900 border border-zinc-200 rounded-xl font-medium hover:bg-zinc-50 transition-colors flex items-center justify-center shadow-sm"
              >
                Book a 12-min fit check
              </a>
            </div>
          </motion.div>
        </header>

        {/* 4) Walkthrough */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-24"
        >
          <a 
            href="{{WALKTHROUGH_URL}}" 
            className="group flex items-center gap-3 px-6 py-4 bg-white/60 border border-white/50 rounded-2xl hover:bg-white/80 transition-all backdrop-blur-md shadow-sm"
          >
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center group-hover:scale-110 transition-transform text-emerald-600">
              <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-current border-b-[6px] border-b-transparent ml-1" />
            </div>
            <span className="font-medium text-zinc-700 group-hover:text-zinc-900 transition-colors">
              Walkthrough (coming today)
            </span>
          </a>
        </motion.div>

        {/* 3) Proof / Visual section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="bg-white/80 border border-white/50 rounded-3xl p-8 sm:p-12 backdrop-blur-md shadow-xl shadow-black/5">
            <div className="mb-12 text-center">
              <h2 className="text-2xl font-medium mb-4 text-zinc-900">The Loop Map</h2>
              <p className="text-zinc-600">Visualizing the member journey from Day 0 to retained.</p>
            </div>
            
            {/* Placeholder SVG for Loop Map */}
            <div className="w-full aspect-[16/9] sm:aspect-[21/9] bg-zinc-50 rounded-2xl border border-zinc-200 flex items-center justify-center relative overflow-hidden mb-12 shadow-inner">
              {/* Abstract diagram representation */}
              <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.05) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
              
              <div className="flex items-center justify-between w-full max-w-3xl px-8 relative z-10">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600 shadow-sm">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-medium text-zinc-500 uppercase tracking-wider">Join</span>
                </div>
                
                <div className="flex-1 h-px bg-gradient-to-r from-blue-200 via-zinc-300 to-emerald-200 mx-2 sm:mx-4 relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 py-1 sm:px-3 sm:py-1 bg-white border border-zinc-200 rounded-full text-[8px] sm:text-[10px] text-zinc-600 whitespace-nowrap shadow-sm">
                    Onboarding Sequence
                  </div>
                </div>
                
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-700 shadow-sm">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-medium text-zinc-500 uppercase tracking-wider text-center">Aha Moment</span>
                </div>
                
                <div className="flex-1 h-px bg-gradient-to-r from-zinc-300 to-emerald-200 mx-2 sm:mx-4 relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 py-1 sm:px-3 sm:py-1 bg-white border border-zinc-200 rounded-full text-[8px] sm:text-[10px] text-zinc-600 whitespace-nowrap shadow-sm">
                    Retention Loop
                  </div>
                </div>
                
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-sm">
                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-medium text-zinc-500 uppercase tracking-wider">Retained</span>
                </div>
              </div>
            </div>

            {/* How it works 3-step strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-zinc-200">
              <div className="flex flex-col">
                <span className="text-sm font-mono text-blue-600 mb-2">01 / Day 1</span>
                <h3 className="font-medium text-zinc-900 mb-1">Audit & Map</h3>
                <p className="text-sm text-zinc-600">We map your current flow and identify the friction points.</p>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-mono text-zinc-500 mb-2">02 / Day 3</span>
                <h3 className="font-medium text-zinc-900 mb-1">Build & Install</h3>
                <p className="text-sm text-zinc-600">Sequences, routing, and deflection kits are implemented.</p>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-mono text-emerald-600 mb-2">03 / Day 7</span>
                <h3 className="font-medium text-zinc-900 mb-1">Handoff & Launch</h3>
                <p className="text-sm text-zinc-600">Operator doc delivered. The new loop goes live.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 2) "What you get" */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-medium mb-4 text-zinc-900 drop-shadow-sm">What you get</h2>
            <p className="text-zinc-800 font-medium">Everything needed to fix your leaky bucket, installed for you.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { icon: Map, title: "Loop map", desc: "Before/after visualization of your member journey." },
              { icon: MessageSquare, title: "Day 0/1/3 sequence", desc: "Automated onboarding messages installed and tested." },
              { icon: Calendar, title: "Weekly value drop", desc: "Plus inactivity nudges to re-engage slipping members." },
              { icon: Zap, title: "\"Start here\" structure", desc: "Clear routing for channels and roles to reduce confusion." },
              { icon: ShieldAlert, title: "Support deflection kit", desc: "FAQ + canned replies/macros to reduce support drag." },
              { icon: BarChart3, title: "Simple tracking", desc: "Day-7 checkpoint to measure onboarding success." },
              { icon: BookOpen, title: "Operator handoff doc", desc: "The exact playbook for your team to run the loop." },
            ].map((feature, i) => (
              <div key={i} className="bg-white/80 border border-white/50 rounded-2xl p-6 hover:bg-white transition-colors backdrop-blur-md shadow-lg shadow-black/5">
                <feature.icon className="w-6 h-6 text-emerald-600 mb-4" />
                <h3 className="font-medium text-zinc-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 5) CTA Footer */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-medium mb-8 text-zinc-900 drop-shadow-sm">Ready to fix your retention?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a 
              href="mailto:hello@frostedlogic.com?subject=MAP" 
              className="w-full sm:w-auto px-8 py-4 bg-emerald-600 text-white rounded-xl font-medium hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
            >
              Reply MAP
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="{{BOOKING_URL}}" 
              className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-900 border border-zinc-200 rounded-xl font-medium hover:bg-zinc-50 transition-colors flex items-center justify-center shadow-sm"
            >
              Book a 12-min fit check
            </a>
          </div>
          <p className="text-sm text-zinc-800 font-medium">
            If you reply 'MAP', I'll send the 1-page loop map + the Day 0/1/3 message sequence.
          </p>
        </motion.section>

        {/* 6) Scope Boundary */}
        <footer className="text-center pb-8">
          <div className="inline-block px-4 py-2 bg-white/60 border border-white/50 rounded-lg backdrop-blur-md shadow-sm">
            <p className="text-xs font-mono text-zinc-600 uppercase tracking-wider">
              Scope boundary: 7-day install only; anything beyond is a new tranche.
            </p>
          </div>
        </footer>

      </div>
    </div>
  );
}
