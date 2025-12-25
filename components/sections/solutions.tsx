"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
    Video, Globe, Image as ImageIcon, Database,
    ArrowRight
} from "lucide-react";
import { MeetingIntelligenceAnimation } from "@/components/solutions/MeetingIntelligenceAnimation";
import { WebIntelligenceAnimation } from "@/components/solutions/WebIntelligenceAnimation";
import { VisualKnowledgeAnimation } from "@/components/solutions/VisualKnowledgeAnimation";
import { UnifiedKnowledgeAnimation } from "@/components/solutions/UnifiedKnowledgeAnimation";
import { BlurReveal } from "@/components/ui/blur-reveal";

export function Solutions() {
    return (
        <section className="py-12 md:py-24 px-4 md:px-8 bg-white dark:bg-black relative overflow-hidden" id="solutions">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-64 w-96 h-96 bg-brand-orange/10 rounded-full blur-[128px]" />
                <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-10 md:mb-16">
                    <div className="text-center mb-10 md:mb-16">
                        <BlurReveal delay={0.2} inView className="w-full">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 tracking-tight">
                                Real-World <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500">Solutions</span>
                            </h2>
                        </BlurReveal>
                        <BlurReveal delay={0.4} inView className="w-full">
                            <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                                Transform raw data into actionable intelligence. Solve complex business problems with a unified RAG platform.
                            </p>
                        </BlurReveal>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(300px,auto)] md:auto-rows-[350px]">

                    {/* Card 1: Meeting Intelligence (Large - 2x2 on desktop) */}
                    <Link href="/solutions/meeting-intelligence" className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2 block group">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.01 }}
                            viewport={{ once: true }}
                            className="w-full h-full min-h-[300px] relative overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 bg-gray-50 dark:bg-[#0A0A0A]"
                        >
                            <MeetingIntelligenceAnimation />

                            {/* Static Overlay */}
                            <div className="absolute top-6 left-6 md:top-8 md:left-8 z-50 pointer-events-none">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-500 dark:text-blue-400">
                                        <Video className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">Meeting Intelligence</h3>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 max-w-sm text-base md:text-lg leading-relaxed">
                                    Turn hours of calls into actionable summaries and insights.
                                </p>
                            </div>

                            {/* Hover Arrow */}
                            <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="p-3 rounded-full bg-black/10 dark:bg-white/10 backdrop-blur-md border border-black/20 dark:border-white/20 text-gray-900 dark:text-white">
                                    <ArrowRight className="w-5 h-5 -rotate-45" />
                                </div>
                            </div>
                        </motion.div>
                    </Link>

                    {/* Card 2: Web Intelligence (Medium - 2x1) */}
                    <Link href="/solutions/web-intelligence" className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1 block group">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.01 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="w-full h-full min-h-[300px] relative overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 bg-gray-50 dark:bg-[#0A0A0A]"
                        >
                            <WebIntelligenceAnimation />

                            <div className="absolute top-6 left-6 md:top-8 md:left-8 z-50 pointer-events-none">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-500 dark:text-orange-400">
                                        <Globe className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">Web Intelligence</h3>
                                </div>
                                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-xs">
                                    Turn any website into a conversation.
                                </p>
                            </div>
                        </motion.div>
                    </Link>

                    {/* Card 3: Visual Knowledge (Small - 1x1) */}
                    <Link href="/solutions/visual-knowledge" className="col-span-1 block group">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.01 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="w-full h-full min-h-[300px] relative overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 bg-gray-50 dark:bg-[#0A0A0A]"
                        >
                            <VisualKnowledgeAnimation />

                            <div className="absolute top-6 left-6 z-20 pointer-events-none">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="p-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-500 dark:text-purple-400">
                                        <ImageIcon className="w-4 h-4" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Visual Knowledge</h3>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Chat with blueprints & charts.
                                </p>
                            </div>
                        </motion.div>
                    </Link>

                    {/* Card 4: Unified Knowledge (Small - 1x1) */}
                    <Link href="/solutions/unified-knowledge" className="col-span-1 block group">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.01 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="w-full h-full min-h-[300px] relative overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 bg-gray-50 dark:bg-[#0A0A0A]"
                        >
                            <UnifiedKnowledgeAnimation />

                            <div className="absolute top-6 left-6 z-20 pointer-events-none">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="p-1.5 rounded-lg bg-pink-500/10 border border-pink-500/20 text-pink-500 dark:text-pink-400">
                                        <Database className="w-4 h-4" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Unified Knowledge</h3>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    One search bar for everything.
                                </p>
                            </div>
                        </motion.div>
                    </Link>

                </div>
            </div>
        </section>
    );
}
