"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    Link2, Cpu, Database, MessageSquare,
    ArrowRight, FileText, Globe, Slack, BrainCircuit, Share2, Search, Layers, Zap
} from "lucide-react";
import { cn } from "@/lib/utils";
import { BlurReveal } from "@/components/ui/blur-reveal";

const steps = [
    {
        id: "01",
        title: "Connect",
        desc: "Link your data sources in clicks. Notion, Drive, Slack, or any website.",
        icon: Link2,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20"
    },
    {
        id: "02",
        title: "Process",
        desc: "AI chunks documents, extracts meaning, and generates embeddings.",
        icon: Cpu,
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20"
    },
    {
        id: "03",
        title: "Store",
        desc: "Vectors are routed to your preferred database (Pinecone, Qdrant, etc).",
        icon: Database,
        color: "text-orange-500",
        bg: "bg-orange-500/10",
        border: "border-orange-500/20"
    },
    {
        id: "04",
        title: "Serve",
        desc: "Query via unified API or deploy specialized MCP agents instantly.",
        icon: MessageSquare,
        color: "text-green-500",
        bg: "bg-green-500/10",
        border: "border-green-500/20"
    }
];

export function HowItWorks() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    return (
        <section ref={containerRef} className="py-32 px-4 md:px-8 bg-white dark:bg-[#050505] relative overflow-hidden transition-colors duration-300">
            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="text-center mb-24">
                    <div className="flex justify-center mb-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-500 dark:text-gray-400 backdrop-blur-md"
                        >
                            <span className="text-xs font-mono tracking-widest uppercase">The Pipeline</span>
                        </motion.div>
                    </div>

                    <BlurReveal delay={0.2} inView className="w-full">
                        <h2 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900 dark:text-white tracking-tight">
                            From Raw Data to <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-500 animate-gradient-x">
                                Intelligence
                            </span>
                        </h2>
                    </BlurReveal>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line (Track) */}
                    <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-black/5 dark:bg-white/5 -translate-x-1/2 rounded-full" />

                    {/* Vertical Line (Fill) */}
                    <motion.div
                        className="absolute left-[28px] md:left-1/2 top-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-brand-orange -translate-x-1/2 rounded-full origin-top"
                        style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
                    />

                    <div className="space-y-24 md:space-y-32">
                        {steps.map((step, index) => (
                            <PipelineStep
                                key={index}
                                step={step}
                                index={index}
                                isLast={index === steps.length - 1}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function PipelineStep({ step, index, isLast }: { step: any, index: number, isLast: boolean }) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(
                "relative flex items-center gap-8 md:gap-16",
                isEven ? "md:flex-row" : "md:flex-row-reverse"
            )}
        >
            {/* Icon Node (Center) */}
            <div className="absolute left-[28px] md:left-1/2 -translate-x-1/2 z-10">
                <div className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center border-4 border-white dark:border-[#050505] shadow-xl relative overflow-hidden bg-white dark:bg-[#111]",
                    step.border
                )}>
                    <div className={cn("absolute inset-0 opacity-20", step.bg)} />
                    <step.icon className={cn("w-6 h-6 relative z-10", step.color)} />
                </div>
            </div>

            {/* Content Card */}
            <div className={cn(
                "flex-1 ml-16 md:ml-0",
                isEven ? "md:text-right" : "md:text-left"
            )}>
                <div className={cn(
                    "p-8 rounded-3xl bg-gray-50 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 transition-colors duration-300 group",
                    isEven ? "md:mr-8" : "md:ml-8"
                )}>
                    <div className={cn(
                        "text-xs font-mono font-bold tracking-widest uppercase mb-2",
                        step.color
                    )}>
                        Step {step.id}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-brand-orange transition-colors">
                        {step.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                        {step.desc}
                    </p>
                </div>
            </div>

            {/* Empty Spacer for alternating layout */}
            <div className="hidden md:block flex-1" />
        </motion.div>
    );
}
