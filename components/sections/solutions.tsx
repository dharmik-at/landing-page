"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { BorderBeam } from "@/components/ui/border-beam";
import {
    Video, Mic, Globe, Image as ImageIcon, FileText,
    Database, HardDrive, Search, BarChart3,
    MessageSquare, Zap, Shield, Sparkles,
    Play, Pause, AudioWaveform
} from "lucide-react";
import { useState, useEffect } from "react";

export function Solutions() {
    return (
        <section className="py-24 px-4 md:px-8 bg-black relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-64 w-96 h-96 bg-brand-orange/10 rounded-full blur-[128px]" />
                <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
                    >
                        Real-World <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500">Solutions</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-400 max-w-2xl mx-auto"
                    >
                        Transform raw data into actionable intelligence. Solve complex business problems with a unified RAG platform.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[300px]">

                    {/* Card 1: Meeting Intelligence (Large - 2x2 on desktop) */}
                    <Link href="/solutions/meeting-intelligence" className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 block">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.02 }}
                            viewport={{ once: true }}
                            className="w-full h-full relative group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <BorderBeam duration={12} delay={0} colorFrom="#3b82f6" colorTo="#8b5cf6" />

                            <div className="p-8 h-full flex flex-col relative z-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                        <Video className="w-6 h-6" />
                                    </div>
                                    <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                                        <Mic className="w-6 h-6" />
                                    </div>
                                    <span className="text-sm font-medium text-gray-400 ml-auto">Video & Audio</span>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2">Meeting Intelligence</h3>
                                <p className="text-gray-400 mb-8">Turn hours of calls into actionable summaries. Extract key decisions, action items, and sentiment automatically.</p>

                                {/* Visual: Audio Waveform & Transcript */}
                                <div className="flex-1 relative rounded-xl bg-black/40 border border-white/5 p-4 overflow-hidden">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                            <span className="text-xs text-gray-400">Processing Recording...</span>
                                        </div>
                                        <span className="text-xs font-mono text-gray-500">00:42:15</span>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex gap-3">
                                            <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-[10px] text-blue-400">A</div>
                                            <div className="flex-1 space-y-1">
                                                <div className="h-2 w-3/4 bg-white/10 rounded-full" />
                                                <div className="h-2 w-1/2 bg-white/10 rounded-full" />
                                            </div>
                                        </div>
                                        <div className="flex gap-3">
                                            <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-[10px] text-purple-400">B</div>
                                            <div className="flex-1 space-y-1">
                                                <div className="h-2 w-full bg-white/10 rounded-full" />
                                                <div className="h-2 w-5/6 bg-white/10 rounded-full" />
                                            </div>
                                        </div>

                                        {/* Action Item Highlight */}
                                        <div className="mt-4 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                                            <div className="flex items-center gap-2 text-xs font-medium text-emerald-400 mb-1">
                                                <Sparkles className="w-3 h-3" /> Action Item Detected
                                            </div>
                                            <div className="text-sm text-gray-300">"Schedule follow-up review for Q3 roadmap by next Tuesday."</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </Link>

                    {/* Card 2: Market Pulse (Medium - 2x1) */}
                    <Link href="/solutions/market-pulse" className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1 block">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.02 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="w-full h-full relative group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <BorderBeam duration={10} delay={2} colorFrom="#f97316" colorTo="#ef4444" />

                            <div className="p-6 h-full flex flex-col relative z-10">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
                                        <Globe className="w-6 h-6" />
                                    </div>
                                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-white/5 text-gray-400 border border-white/5">Web Scrape</span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2">Market Pulse</h3>
                                <p className="text-sm text-gray-400 mb-4">Track competitors and news in real-time. Stay ahead of market shifts.</p>

                                <div className="flex-1 flex items-end gap-2">
                                    <div className="flex-1 p-3 rounded-lg bg-black/40 border border-white/5">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-4 h-4 rounded bg-white/10" />
                                            <div className="h-2 w-16 bg-white/10 rounded" />
                                        </div>
                                        <div className="space-y-1">
                                            <div className="h-1.5 w-full bg-white/5 rounded" />
                                            <div className="h-1.5 w-2/3 bg-white/5 rounded" />
                                        </div>
                                    </div>
                                    <div className="flex-1 p-3 rounded-lg bg-brand-orange/10 border border-brand-orange/20 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-1">
                                            <div className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
                                        </div>
                                        <div className="text-xs font-bold text-brand-orange mb-1">+12.5%</div>
                                        <div className="text-[10px] text-gray-400">Competitor Growth</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </Link>

                    {/* Card 3: Visual Knowledge (Small - 1x1) */}
                    <Link href="/solutions/visual-knowledge" className="col-span-1 block">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.02 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="w-full h-full relative group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <BorderBeam duration={10} delay={4} colorFrom="#10b981" colorTo="#06b6d4" />

                            <div className="p-6 h-full flex flex-col relative z-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                        <ImageIcon className="w-5 h-5" />
                                    </div>
                                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                                        <FileText className="w-5 h-5" />
                                    </div>
                                </div>

                                <h3 className="text-lg font-bold text-white mb-2">Visual Knowledge</h3>
                                <p className="text-xs text-gray-400 mb-4">Chat with blueprints, charts, and diagrams.</p>

                                <div className="flex-1 relative rounded-lg bg-black/40 border border-white/5 overflow-hidden flex items-center justify-center">
                                    <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-px opacity-20">
                                        {Array.from({ length: 36 }).map((_, i) => (
                                            <div key={i} className="bg-white/10" />
                                        ))}
                                    </div>
                                    <div className="relative z-10 p-2 bg-emerald-500/10 border border-emerald-500/30 rounded text-[10px] text-emerald-400">
                                        Table Detected
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </Link>

                    {/* Card 4: Unified Knowledge (Small - 1x1) */}
                    <Link href="/solutions/unified-knowledge" className="col-span-1 block">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.02 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="w-full h-full relative group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <BorderBeam duration={10} delay={6} colorFrom="#ec4899" colorTo="#f43f5e" />

                            <div className="p-6 h-full flex flex-col relative z-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-pink-500/10 text-pink-400 border border-pink-500/20">
                                        <Database className="w-5 h-5" />
                                    </div>
                                    <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/20">
                                        <HardDrive className="w-5 h-5" />
                                    </div>
                                </div>

                                <h3 className="text-lg font-bold text-white mb-2">Unified Knowledge</h3>
                                <p className="text-xs text-gray-400 mb-4">One search bar for your entire company.</p>

                                <div className="flex-1 flex items-center justify-center">
                                    <div className="relative w-full">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-24 h-24 rounded-full border border-white/5 animate-[spin_10s_linear_infinite]" />
                                            <div className="absolute w-16 h-16 rounded-full border border-white/10 animate-[spin_7s_linear_infinite_reverse]" />
                                        </div>
                                        <div className="relative z-10 bg-[#111] border border-white/10 rounded-lg p-2 flex items-center gap-2 shadow-xl">
                                            <Search className="w-3 h-3 text-gray-400" />
                                            <div className="h-1.5 w-12 bg-white/10 rounded-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </Link>

                </div>
            </div>
        </section>
    );
}
