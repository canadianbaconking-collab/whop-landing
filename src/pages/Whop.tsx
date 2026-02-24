import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Calendar, MessageSquare, Map, Zap, ShieldAlert, BarChart3, BookOpen, ChevronDown } from 'lucide-react';

function DeliverablesAccordion({ items }: { items: React.ReactNode[] }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mt-3">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-zinc-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded px-1 -ml-1 py-0.5"
        aria-expanded={isOpen}
      >
        Deliverables
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div 
        className={`grid transition-all duration-200 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0 mt-0'}`}
      >
        <div className="overflow-hidden">
          <ul className="space-y-1.5 text-sm text-zinc-500 list-disc pl-4 marker:text-zinc-700">
            {items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const loopNodes = [
  { label: 'JOIN', icon: Zap, color: 'indigo' },
  { label: 'ORIENTED', icon: Map, color: 'zinc' },
  { label: 'FIRST WIN', icon: CheckCircle2, color: 'emerald' },
  { label: 'ROUTED', icon: ArrowRight, color: 'zinc' },
  { label: 'WEEKLY CADENCE', icon: Calendar, color: 'zinc' },
  { label: 'RE-ENGAGE', icon: MessageSquare, color: 'zinc' },
  { label: 'RETAINED', icon: ShieldAlert, color: 'emerald' },
];

export default function WhopPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-zinc-50 font-sans selection:bg-indigo-500/30 relative overflow-hidden">
      {/* Premium Dark Background & Noise */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        
        {/* SVG Noise Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        />

        {/* Soft Spotlight */}
        <div className="absolute top-[-20%] left-[20%] w-[60%] h-[60%] bg-indigo-500/10 blur-[120px] rounded-full" />

        {/* Frosted Glass Shards */}
        <div className="absolute top-[10%] left-[-5%] w-64 h-64 bg-white/[0.02] backdrop-blur-md border border-white/5 rotate-12 skew-x-12 rounded-3xl" />
        <div className="absolute top-[40%] right-[-10%] w-80 h-80 bg-white/[0.02] backdrop-blur-md border border-white/5 -rotate-12 skew-y-12 rounded-full" />
        <div className="absolute bottom-[-5%] left-[15%] w-96 h-48 bg-white/[0.02] backdrop-blur-md border border-white/5 rotate-45 rounded-2xl" />
        <div className="absolute bottom-[20%] right-[10%] w-48 h-48 bg-white/[0.02] backdrop-blur-md border border-white/5 -rotate-45 skew-x-12 rounded-xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 sm:py-32">
        
        {/* 1) Hero */}
        <header className="text-center max-w-3xl mx-auto mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800/50 text-sm text-zinc-400 mb-6 shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Accepting new installs
            </div>

            <h1 className="text-5xl sm:text-7xl font-medium tracking-tight mb-8 leading-[1.1] text-zinc-50 drop-shadow-sm">
              Onboarding + retention loop <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500">installed in 7 days.</span>
            </h1>
            <p className="text-lg sm:text-xl text-zinc-400 mb-8 leading-relaxed max-w-2xl mx-auto font-medium">
              A fixed-scope install that makes new members 'get it' fast, reduces support drag, and creates a repeatable weekly cadence.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="mailto:hello@frostedlogic.com?subject=MAP" 
                className="w-full sm:w-auto px-8 py-4 bg-zinc-100 text-zinc-900 rounded-xl font-medium hover:bg-white transition-colors flex items-center justify-center gap-2 shadow-lg shadow-white/5"
              >
                Reply MAP
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="{{BOOKING_URL}}" 
                className="w-full sm:w-auto px-8 py-4 bg-zinc-900/80 text-zinc-100 border border-zinc-800 rounded-xl font-medium hover:bg-zinc-800 transition-colors flex items-center justify-center shadow-sm backdrop-blur-sm"
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
            className="group flex items-center gap-3 px-6 py-4 bg-zinc-900/40 border border-zinc-800/50 rounded-2xl hover:bg-zinc-900/60 transition-all backdrop-blur-md shadow-sm"
          >
            <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center group-hover:scale-110 transition-transform text-zinc-300">
              <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-current border-b-[6px] border-b-transparent ml-1" />
            </div>
            <span className="font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors">
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
          <div className="bg-zinc-900/40 border border-zinc-800/50 rounded-3xl p-8 sm:p-12 backdrop-blur-md shadow-xl shadow-black/20">
            <div className="mb-12 text-center">
              <h2 className="text-2xl font-medium mb-4 text-zinc-100">The Loop Map</h2>
              <p className="text-zinc-500">Visualizing the member journey from Day 0 to retained.</p>
            </div>
            
            {/* Placeholder SVG for Loop Map */}
            <div className="w-full aspect-auto py-12 sm:py-16 bg-zinc-950 rounded-2xl border border-zinc-800/80 flex items-center justify-center relative overflow-hidden mb-12 shadow-inner">
              {/* Abstract diagram representation */}
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
              
              <div className="w-full overflow-x-auto px-6 sm:px-12 relative z-10 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <div className="flex items-center justify-between min-w-[700px] w-full gap-2 mx-auto">
                  {loopNodes.map((node, i) => (
                    <React.Fragment key={i}>
                      <div className="flex flex-col items-center gap-3 shrink-0 w-20">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shadow-sm ${
                          node.color === 'indigo' ? 'bg-indigo-500/20 border border-indigo-500/30 text-indigo-400' :
                          node.color === 'emerald' ? 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-400' :
                          'bg-zinc-800 border border-zinc-700 text-zinc-300'
                        }`}>
                          <node.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <span className="text-[9px] sm:text-[10px] font-medium text-zinc-500 uppercase tracking-wider text-center leading-tight">
                          {node.label}
                        </span>
                      </div>
                      
                      {i < loopNodes.length - 1 && (
                        <div className="flex-1 h-px bg-zinc-800 relative min-w-[20px]">
                          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-0 h-0 border-t-[3px] border-t-transparent border-l-[4px] border-l-zinc-700 border-b-[3px] border-b-transparent" />
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* How it works 3-step strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-zinc-800/50">
              <div className="flex flex-col">
                <span className="text-sm font-mono text-indigo-400 mb-2">01 / Day 1</span>
                <h3 className="font-medium text-zinc-200 mb-1">Audit & Map</h3>
                <p className="text-sm text-zinc-500 mb-2">We map your current flow and identify the friction points.</p>
                <p className="text-xs text-zinc-600 italic">Inputs: invite + current onboarding copy + your ‘Aha’ action + top support questions.</p>
                <DeliverablesAccordion items={[
                  "Inventory: current onboarding messages + channel/role routing",
                  "“Aha” definition: what a new member must do in week 1",
                  "Loop map before → after (1 page)",
                  "Draft: Day 0 / Day 1 / Day 3 message sequence"
                ]} />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-mono text-zinc-400 mb-2">02 / Day 3</span>
                <h3 className="font-medium text-zinc-200 mb-1">Build & Install</h3>
                <p className="text-sm text-zinc-500">Sequences, routing, and deflection kits are implemented.</p>
                <DeliverablesAccordion items={[
                  "Day 0/1/3 onboarding messages installed + linked to “Start here”",
                  "Routing: channels/roles pinned + reduced confusion paths",
                  "Support deflection: FAQ + canned replies/macros live",
                  "Weekly cadence: value drop + inactivity nudge(s) configured"
                ]} />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-mono text-emerald-400 mb-2">03 / Day 7</span>
                <h3 className="font-medium text-zinc-200 mb-1">Handoff & Launch</h3>
                <p className="text-sm text-zinc-500">Operator doc delivered. The new loop goes live.</p>
                <DeliverablesAccordion items={[
                  "Operator handoff doc (how to run it weekly)",
                  "Tracking sheet + Day-7 checkpoint notes",
                  "“What to watch” metrics (activation + support drag signals)",
                  <span key="opt">Next tranche suggestions <em className="text-zinc-600">(optional; clearly separate)</em></span>
                ]} />
              </div>
            </div>
          </div>
        </motion.section>

        {/* 2) "What you get" */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-medium mb-4 text-zinc-100 drop-shadow-sm">What you get</h2>
            <p className="text-zinc-400 font-medium">Everything needed to reduce churn and increase week-1 activation — installed for you.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
            {[
              { icon: Map, title: "Loop map", desc: "Before/after visualization of your member journey." },
              { icon: MessageSquare, title: "Day 0/1/3 sequence", desc: "Automated onboarding messages installed and tested." },
              { icon: Calendar, title: "Weekly value drop", desc: "Plus inactivity nudges to re-engage slipping members." },
              { icon: Zap, title: "\"Start here\" structure", desc: "Clear routing for channels and roles to reduce confusion." },
              { icon: ShieldAlert, title: "Support deflection kit", desc: "FAQ + canned replies/macros to reduce support drag." },
              { icon: BarChart3, title: "Simple tracking", desc: "Day-7 checkpoint to measure onboarding success." },
            ].map((feature, i) => (
              <div key={i} className="bg-zinc-900/30 border border-zinc-800/50 rounded-2xl p-6 hover:bg-zinc-900/50 transition-colors backdrop-blur-md shadow-lg shadow-black/10">
                <feature.icon className="w-6 h-6 text-zinc-400 mb-4" />
                <h3 className="font-medium text-zinc-200 mb-2">{feature.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
          
          {/* Full-width row for Operator handoff doc */}
          <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-2xl p-6 sm:p-8 hover:bg-zinc-900/50 transition-colors backdrop-blur-md shadow-lg shadow-black/10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-12 h-12 rounded-xl bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center shrink-0">
              <BookOpen className="w-6 h-6 text-zinc-400" />
            </div>
            <div>
              <h3 className="font-medium text-zinc-200 mb-2 text-lg">Operator handoff doc</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">The exact playbook for your team to run the loop. Includes all templates, routing rules, and maintenance schedules to ensure the system keeps working long after the install.</p>
            </div>
          </div>

          {/* Scope Boundary Pill */}
          <div className="mt-12 text-center">
            <span className="inline-block px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-lg text-sm font-mono text-indigo-300">
              Fixed scope (7 days): I install your onboarding + retention loop (messages, structure, nudges, tracking). Anything beyond is a new tranche.
            </span>
          </div>
        </motion.section>

        {/* 5) CTA Footer */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-medium mb-8 text-zinc-100 drop-shadow-sm">Ready to fix your retention?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a 
              href="mailto:hello@frostedlogic.com?subject=MAP" 
              className="w-full sm:w-auto px-8 py-4 bg-zinc-100 text-zinc-900 rounded-xl font-medium hover:bg-white transition-colors flex items-center justify-center gap-2 shadow-lg shadow-white/5"
            >
              Reply MAP
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="{{BOOKING_URL}}" 
              className="w-full sm:w-auto px-8 py-4 bg-zinc-900/80 text-zinc-100 border border-zinc-800 rounded-xl font-medium hover:bg-zinc-800 transition-colors flex items-center justify-center shadow-sm backdrop-blur-sm"
            >
              Book a 12-min fit check
            </a>
          </div>
          <p className="text-sm text-zinc-500 font-medium">
            If you reply 'MAP', I'll send the 1-page loop map + the Day 0/1/3 message sequence.
          </p>
        </motion.section>

      </div>
    </div>
  );
}
