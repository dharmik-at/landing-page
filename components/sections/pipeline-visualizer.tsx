"use client";

import { motion } from "framer-motion";
import {
    Database, FileText, Globe, Zap, Layers, Cpu,
    Video, Mic, Sparkles, Box, Search, FileJson
} from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const pipelines = [
    {
        id: "unstructured",
        name: "Unstructured Data",
        description: "Financial reports, contracts, & legal docs",
        color: "#FF4F00", // Brand Orange
        steps: [
            { id: "p1-1", title: "Ingest", tool: "PDF/Docs", icon: FileText },
            { id: "p1-2", title: "Process", tool: "", icon: FileJson },
            { id: "p1-3", title: "Vectorize", tool: "OpenAI V3", icon: Cpu },
            { id: "p1-4", title: "Index", tool: "Pinecone", icon: Database },
        ]
    },
    {
        id: "multimedia",
        name: "Multimedia RAG",
        description: "Video archives, podcasts, & meetings",
        color: "#3B82F6", // Blue
        steps: [
            { id: "p2-1", title: "Ingest", tool: "MP4/WAV", icon: Video },
            { id: "p2-2", title: "Transcribe", tool: "", icon: Mic },
            { id: "p2-3", title: "Vectorize", tool: "Gemini 1.5", icon: Sparkles },
            { id: "p2-4", title: "Index", tool: "Weaviate", icon: Box },
        ]
    },
    {
        id: "web",
        name: "Web Intelligence",
        description: "Competitor analysis & market research",
        color: "#10B981", // Emerald
        steps: [
            { id: "p3-1", title: "Crawl", tool: "URL/Sitemap", icon: Globe },
            { id: "p3-2", title: "Scrape", tool: "", icon: Search },
            { id: "p3-3", title: "Embed", tool: "Cohere V3", icon: Layers },
            { id: "p3-4", title: "Index", tool: "Qdrant", icon: Database },
        ]
    }
];

import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

export function PipelineVisualizer() {
    const [activePipeline, setActivePipeline] = useState<string | null>(null);

    return (
        <section className="py-32 px-4 md:px-6 bg-white dark:bg-black relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <ScrollReveal className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl px-4 md:px-70 font-bold mb-6 text-gray-900 dark:text-white">
                        The <span className="text-brand-orange">Infrastructure</span> Matrix
                    </h2>
                    <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                        One platform, infinite possibilities. Orchestrate complex multi-modal pipelines
                        with a drag-and-drop interface.
                    </p>
                </ScrollReveal>

                <StaggerContainer className="flex flex-col gap-12">
                    {pipelines.map((pipeline, pIndex) => (
                        <StaggerItem
                            key={pipeline.id}
                            className={cn(
                                "relative transition-opacity duration-500",
                                activePipeline && activePipeline !== pipeline.id ? "opacity-30" : "opacity-100"
                            )}
                            onMouseEnter={() => setActivePipeline(pipeline.id)}
                            onMouseLeave={() => setActivePipeline(null)}
                        >
                            {/* Pipeline Header */}
                            <div className="flex items-center gap-4 mb-6 px-2">
                                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent" />
                                <div className="text-center">
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{pipeline.name}</h3>
                                    <p className="text-xs text-gray-500">{pipeline.description}</p>
                                </div>
                                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent" />
                            </div>

                            {/* Pipeline Track */}
                            <div className="relative">
                                {/* Animated Beam Background */}
                                <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 h-1 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full w-1/3 bg-gradient-to-r from-transparent via-current to-transparent opacity-50 blur-sm"
                                        style={{ color: pipeline.color }}
                                        animate={{ x: ["-100%", "400%"] }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "linear",
                                            delay: pIndex * 1.5 // Stagger animations
                                        }}
                                    />
                                </div>

                                {/* Steps Grid */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 relative z-10">
                                    {pipeline.steps.map((step, sIndex) => (
                                        <div key={step.id} className="group relative">
                                            <div className="relative p-4 rounded-xl bg-white/80 dark:bg-black/80 border border-black/10 dark:border-white/10 backdrop-blur-sm hover:border-black/30 dark:hover:border-white/30 transition-colors">
                                                {/* Connector Line (Visual only) */}
                                                {sIndex > 0 && (
                                                    <div className="absolute top-1/2 -left-4 md:-left-8 w-4 md:w-8 h-px bg-black/10 dark:bg-white/10" />
                                                )}

                                                <div className="flex flex-col items-center gap-3 text-center">
                                                    <div
                                                        className="w-10 h-10 rounded-lg flex items-center justify-center bg-black/5 dark:bg-white/5 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white group-hover:scale-110 transition-all duration-300"
                                                        style={{ color: activePipeline === pipeline.id ? pipeline.color : undefined }}
                                                    >
                                                        <step.icon className="w-5 h-5" />
                                                    </div>
                                                    <div>
                                                        <div className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">{step.title}</div>
                                                        <div className="text-sm font-bold text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white">{step.tool}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
