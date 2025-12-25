"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Flame, TrendingDown, Zap, CheckCircle2, RefreshCw } from "lucide-react";
import { BlurReveal } from "@/components/ui/blur-reveal";
import { cn } from "@/lib/utils";

export function RagVsFinetuning() {
    const [updates, setUpdates] = useState(10);
    const fineTuningCost = 5000 + (updates * 5000); // Base training + retrains
    const ragCost = 10 + (updates * 0.001); // Ingestion + updates

    return (
        <section className="py-32 px-4 md:px-8 bg-white dark:bg-[#050505] relative overflow-hidden transition-colors duration-300">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-orange/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Content & Slider */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-brand-orange mb-8 backdrop-blur-md"
                        >
                            <TrendingDown className="w-4 h-4" />
                            <span className="text-xs font-mono tracking-widest uppercase">The Economics</span>
                        </motion.div>

                        <BlurReveal delay={0.2} inView className="w-full">
                            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900 dark:text-white tracking-tight leading-[0.9]">
                                Stop paying the <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">
                                    Fine-Tuning Tax
                                </span>
                            </h2>
                        </BlurReveal>

                        <BlurReveal delay={0.4} inView className="w-full">
                            <p className="text-xl text-gray-500 dark:text-gray-400 mb-12 leading-relaxed max-w-xl">
                                Fine-tuning embeds knowledge into the model. When facts change, you pay to retrain.
                                <span className="text-gray-900 dark:text-white font-medium"> RAG keeps knowledge separate—updates are instant and free.</span>
                            </p>
                        </BlurReveal>

                        {/* Interactive Slider */}
                        <div className="p-8 rounded-3xl bg-gray-50 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-sm">
                            <div className="flex justify-between items-end mb-6">
                                <label className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    Policy Updates / Year
                                </label>
                                <div className="text-4xl font-bold text-gray-900 dark:text-white font-mono">
                                    {updates}
                                </div>
                            </div>

                            <input
                                type="range"
                                min="1"
                                max="50"
                                value={updates}
                                onChange={(e) => setUpdates(parseInt(e.target.value))}
                                className="w-full h-2 bg-black/10 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-orange hover:accent-orange-400 transition-all"
                            />
                            <div className="flex justify-between text-xs text-gray-400 dark:text-gray-500 mt-2 font-mono">
                                <span>1 Update</span>
                                <span>50 Updates</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: The Visualizer */}
                    <div className="relative">
                        {/* Fine-Tuning Card (The Bad) */}
                        <motion.div
                            layout
                            className="relative z-10 mb-4 p-8 rounded-3xl bg-gradient-to-br from-red-50 to-white dark:from-red-950/50 dark:to-black border border-red-200 dark:border-red-500/20 overflow-hidden group shadow-lg dark:shadow-none"
                        >
                            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <div className="text-red-600 dark:text-red-500 font-bold text-sm tracking-widest uppercase mb-1 flex items-center gap-2">
                                        <Flame className="w-4 h-4" /> Fine-Tuning
                                    </div>
                                    <div className="text-gray-500 dark:text-gray-400 text-sm">Slow & Expensive</div>
                                </div>
                                <div className="p-3 rounded-full bg-red-100 dark:bg-red-500/10 text-red-600 dark:text-red-500">
                                    <RefreshCw className="w-6 h-6 animate-spin-slow" />
                                </div>
                            </div>

                            <div className="flex items-baseline gap-1">
                                <span className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tighter">
                                    ${fineTuningCost.toLocaleString()}
                                </span>
                                <span className="text-gray-500 font-medium">/ year</span>
                            </div>

                            <div className="mt-6 h-2 w-full bg-red-100 dark:bg-red-900/30 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-red-500 dark:bg-red-600"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${Math.min((fineTuningCost / 250000) * 100, 100)}%` }}
                                    transition={{ type: "spring", stiffness: 50 }}
                                />
                            </div>
                        </motion.div>

                        {/* IngestIQ Card (The Good) */}
                        <motion.div
                            layout
                            className="relative z-20 p-8 rounded-3xl bg-gradient-to-br from-orange-50 to-white dark:from-brand-orange/20 dark:to-black border border-orange-200 dark:border-brand-orange/30 overflow-hidden shadow-2xl shadow-brand-orange/10"
                        >
                            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <div className="text-brand-orange font-bold text-sm tracking-widest uppercase mb-1 flex items-center gap-2">
                                        <Zap className="w-4 h-4" /> IngestIQ RAG
                                    </div>
                                    <div className="text-gray-500 dark:text-gray-400 text-sm">Instant & Free</div>
                                </div>
                                <div className="p-3 rounded-full bg-orange-100 dark:bg-brand-orange/10 text-brand-orange">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                            </div>

                            <div className="flex items-baseline gap-1">
                                <span className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tighter">
                                    ${ragCost.toFixed(2)}
                                </span>
                                <span className="text-gray-500 font-medium">/ year</span>
                            </div>

                            <div className="mt-6 h-2 w-full bg-orange-100 dark:bg-orange-900/30 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-brand-orange"
                                    initial={{ width: 0 }}
                                    animate={{ width: "1%" }} // Always tiny
                                />
                            </div>

                            <div className="mt-8 pt-6 border-t border-black/5 dark:border-white/10 flex items-center justify-between">
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                    Savings: <span className="text-green-600 dark:text-green-400 font-bold">${(fineTuningCost - ragCost).toLocaleString()}</span>
                                </div>
                                <div className="text-xs font-mono text-brand-orange bg-orange-100 dark:bg-brand-orange/10 px-2 py-1 rounded">
                                    99.9% CHEAPER
                                </div>
                            </div>
                        </motion.div>

                        {/* Connector Line */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-16 bg-gradient-to-b from-red-500/0 via-black/10 dark:via-white/20 to-brand-orange/0 -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
}


