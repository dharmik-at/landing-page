"use client";

import { motion } from "framer-motion";
import { History } from "lucide-react";
import { BlurReveal } from "@/components/ui/blur-reveal";

export default function ChangelogHero() {
    return (
        <section className="relative px-4 md:px-8 py-20 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-500/20 rounded-full blur-[120px] pointer-events-none opacity-50" />

            <div className="container mx-auto max-w-3xl text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-purple-600 dark:text-purple-400 mb-8 backdrop-blur-md"
                >
                    <History className="w-4 h-4" />
                    <span className="text-sm font-mono tracking-wide uppercase">Changelog</span>
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight"
                >
                    <BlurReveal delay={0.1} className="text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-600 dark:from-white dark:to-white/60" as="span">
                        What's New
                    </BlurReveal>
                </motion.h1>

                <motion.p
                    className="text-xl text-gray-500 dark:text-gray-400 mb-10 leading-relaxed"
                >
                    <BlurReveal delay={0.3} as="span">
                        We ship fast. Here's what we've been working on.
                    </BlurReveal>
                </motion.p>
            </div>
        </section>
    );
}
