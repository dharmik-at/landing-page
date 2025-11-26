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
import { MeetingIntelligenceAnimation } from "@/components/solutions/MeetingIntelligenceAnimation";
import { WebIntelligenceAnimation } from "@/components/solutions/WebIntelligenceAnimation";
import { VisualKnowledgeAnimation } from "@/components/solutions/VisualKnowledgeAnimation";
import { UnifiedKnowledgeAnimation } from "@/components/solutions/UnifiedKnowledgeAnimation";

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
                            className="w-full h-full relative cursor-pointer"
                        >
                            <MeetingIntelligenceAnimation />
                        </motion.div>
                    </Link>

                    {/* Card 2: Web Intelligence (Medium - 2x1) */}
                    <Link href="/solutions/web-intelligence" className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1 block">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.02 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="w-full h-full relative cursor-pointer"
                        >
                            <WebIntelligenceAnimation />
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
                            className="w-full h-full relative cursor-pointer"
                        >
                            <VisualKnowledgeAnimation />
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
                            className="w-full h-full relative cursor-pointer"
                        >
                            <UnifiedKnowledgeAnimation />
                        </motion.div>
                    </Link>

                </div>
            </div>
        </section>
    );
}
