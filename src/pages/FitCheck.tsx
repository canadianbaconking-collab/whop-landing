import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function FitCheckPage() {
    const [formData, setFormData] = useState({
        name: '',
        communityLink: '',
        biggestIssue: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const mailtoLink = `mailto:hello@frostedlogic.com?subject=Fit Check&body=Name: ${encodeURIComponent(formData.name)}%0ACommunity Link: ${encodeURIComponent(formData.communityLink)}%0ABiggest Issue: ${encodeURIComponent(formData.biggestIssue)}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className="min-h-screen bg-slate-950 text-zinc-50 font-sans selection:bg-indigo-500/30 relative overflow-hidden flex items-center justify-center">
            {/* Premium Dark Background & Noise - matching Whop.tsx exactly */}
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

            <div className="relative z-10 w-full max-w-lg mx-auto px-6 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-zinc-900/40 border border-zinc-800/50 rounded-3xl p-8 sm:p-10 backdrop-blur-md shadow-xl shadow-black/20"
                >
                    <div className="text-center mb-10">
                        <h1 className="text-3xl sm:text-4xl font-medium mb-3 text-zinc-100 drop-shadow-sm">12-min Fit Check</h1>
                        <p className="text-zinc-400">Send a few details and I’ll reply with the best next step.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="block text-sm font-medium text-zinc-300">
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                required
                                className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all font-medium"
                                placeholder="Jane Doe"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="communityLink" className="block text-sm font-medium text-zinc-300">
                                Community link
                            </label>
                            <input
                                id="communityLink"
                                type="url"
                                required
                                className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all font-medium"
                                placeholder="https://..."
                                value={formData.communityLink}
                                onChange={(e) => setFormData({ ...formData, communityLink: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="biggestIssue" className="block text-sm font-medium text-zinc-300">
                                Biggest issue
                            </label>
                            <div className="relative">
                                <select
                                    id="biggestIssue"
                                    required
                                    className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all font-medium"
                                    value={formData.biggestIssue}
                                    onChange={(e) => setFormData({ ...formData, biggestIssue: e.target.value })}
                                >
                                    <option value="" disabled hidden>Select your biggest issue...</option>
                                    <option value="Onboarding confusion">Onboarding confusion</option>
                                    <option value="Repeat questions/support load">Repeat questions/support load</option>
                                    <option value="Churn/retention">Churn/retention</option>
                                    <option value="Refund/dispute friction">Refund/dispute friction</option>
                                    <option value="Not sure">Not sure</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-zinc-500">
                                    <ChevronDown className="w-4 h-4" />
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full px-8 py-4 bg-zinc-100 text-zinc-900 rounded-xl font-medium hover:bg-white transition-colors flex items-center justify-center gap-2 shadow-lg shadow-white/5"
                            >
                                Send Fit Check
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="text-center mt-6">
                            <a href="/" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                                &larr; Back to Home
                            </a>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
