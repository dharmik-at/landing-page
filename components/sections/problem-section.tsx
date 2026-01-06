"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { AlertTriangle, ArrowRight, CheckCircle2, Clock, Database, Lock, Zap, Layers, FileText, DollarSign, Brain } from "lucide-react";
import { cn } from "@/lib/utils";
import { BlurReveal } from "@/components/ui/blur-reveal";
import { MouseEvent, useEffect, useState } from "react";

const anxieties = [
    {
        icon: Clock,
        title: "Building RAG takes forever",
        pain: "6+ months to build pipelines",
        solution: "Deploy in Minutes with zero code",
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
        colSpan: "col-span-1 md:col-span-2",
        delay: 0.1
    },
    {
        icon: Database,
        title: "Scattered Knowledge",
        pain: "No single source of truth for your org",
        solution: "One unified home for all company data",
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20",
        colSpan: "col-span-1",
        delay: 0.2
    },
    {
        icon: Layers,
        title: "Vector DB Lock-in",
        pain: "Stuck with one expensive vendor",
        solution: "Route to any DB instantly",
        color: "text-orange-500",
        bg: "bg-orange-500/10",
        border: "border-orange-500/20",
        colSpan: "col-span-1",
        delay: 0.3
    },
    {
        icon: Brain,
        title: "Hallucinations",
        pain: "Liability risks from wrong answers",
        solution: "Grounded, accurate retrieval",
        color: "text-red-500",
        bg: "bg-red-500/10",
        border: "border-red-500/20",
        colSpan: "col-span-1 md:col-span-2",
        delay: 0.4
    },
    {
        icon: DollarSign,
        title: "Fine-Tuning Tax",
        pain: "$41k/year to retrain models",
        solution: "Update docs instantly for pennies",
        color: "text-pink-500",
        bg: "bg-pink-500/10",
        border: "border-pink-500/20",
        colSpan: "col-span-1",
        delay: 0.5
    },
    {
        icon: FileText,
        title: "Messy Data",
        pain: "PDFs, tables & images break RAG",
        solution: "Perfect extraction for any format",
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20",
        colSpan: "col-span-1 md:col-span-2",
        delay: 0.6
    }
];

export function ProblemSection() {
    return (
        <section className="py-32 px-4 md:px-8 bg-white dark:bg-black relative overflow-hidden transition-colors duration-300">
            {/* Ambient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,79,0,0.05),transparent_70%)]" />
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="text-center mb-20">
                    <div className="flex justify-center mb-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-500 dark:text-gray-400 backdrop-blur-md"
                        >
                            <AlertTriangle className="w-4 h-4 text-brand-orange" />
                            <span className="text-xs font-mono tracking-widest uppercase">The Bottleneck</span>
                        </motion.div>
                    </div>

                    <BlurReveal delay={0.2} inView className="w-full">
                        <h2 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900 dark:text-white tracking-tight">
                            Why is building AI <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-500 animate-gradient-x">
                                so painful?
                            </span>
                        </h2>
                    </BlurReveal>

                    <BlurReveal delay={0.4} inView className="w-full">
                        <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Engineering teams are drowning in maintenance, broken pipelines, and
                            spiraling costs. <span className="text-gray-900 dark:text-white font-medium">It doesn't have to be this way.</span>
                        </p>
                    </BlurReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
                    {anxieties.map((item, index) => (
                        <SpotlightCard key={index} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function SpotlightCard({ item }: { item: any }) {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        setRotate(Math.random() * 4 - 2);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20, rotate: rotate }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            whileHover={{ scale: 1.02, rotate: 0, zIndex: 10 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: item.delay }}
            className={cn(
                "group relative rounded-3xl border border-black/5 dark:border-white/10 bg-white dark:bg-white/5 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-black/5 dark:hover:shadow-brand-orange/10 hover:-translate-y-1",
                item.colSpan
            )}
            onMouseMove={handleMouseMove}
        >
            {/* Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            650px circle at ${mouseX}px ${mouseY}px,
                            rgba(255,79,0,0.05),
                            transparent 80%
                        )
                    `,
                }}
            />

            {/* Texture Overlay */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] dark:opacity-20 mix-blend-overlay pointer-events-none" />

            <div className="relative h-full p-8 flex flex-col justify-between z-10">
                <div className="mb-8">
                    <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110", item.color.replace('text-', 'bg-').replace('500', '500/10').replace('600', '600/10'))}>
                        <item.icon className={cn("w-6 h-6", item.color)} />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">{item.title}</h3>

                    <div className="flex items-start gap-2 mb-4">
                        <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <p className="text-red-600/80 dark:text-red-400/80 font-medium text-sm leading-relaxed">
                            {item.pain}
                        </p>
                    </div>
                </div>

                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 ease-out opacity-0 group-hover:opacity-100">
                    <div className="pt-4 border-t border-black/5 dark:border-white/10">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-bold uppercase tracking-wide">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Solved
                        </div>
                        <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm font-medium">
                            {item.solution}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
