"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SourceConnectors } from "@/components/sections/tech-marquee";
import { DestinationConnectors } from "@/components/sections/destination-connectors";
import { Button } from "@/components/ui/button";
import { Puzzle, ArrowRight } from "lucide-react";
import { BlurReveal } from "@/components/ui/blur-reveal";

export default function IntegrationsPage() {
    return (
        <main className="min-h-screen text-gray-900 dark:text-white selection:bg-brand-orange/30 pt-24">
            {/* Hero Section */}
            <section className="relative px-4 md:px-8 py-20 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none opacity-50" />

                <div className="container mx-auto max-w-5xl text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-blue-600 dark:text-blue-400 mb-8 backdrop-blur-md"
                    >
                        <Puzzle className="w-4 h-4" />
                        <span className="text-sm font-mono tracking-wide uppercase">Integrations</span>
                    </motion.div>

                    <motion.h1
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
                    >
                        <BlurReveal delay={0.1} className="text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-600 dark:from-white dark:to-white/60" as="span">
                            Connect with your
                        </BlurReveal>
                        <br />
                        <BlurReveal delay={0.3} className="text-gray-900 dark:text-white" as="span">
                            Favorite Tools
                        </BlurReveal>
                    </motion.h1>

                    <motion.p
                        className="text-xl text-gray-500 dark:text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto"
                    >
                        <BlurReveal delay={0.5} as="span">
                            IngestIQ integrates seamlessly with your existing stack. From data sources to vector databases, we've got you covered.
                        </BlurReveal>
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <Link href="https://platform.ingestiq.ai/" target="_blank">
                            <Button size="lg" className="rounded-full bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 px-8 font-semibold text-base h-12">
                                View All Integrations
                            </Button>
                        </Link>
                        <Link href="/#contact">
                            <Button size="lg" variant="outline" className="rounded-full border-black/20 dark:border-white/20 hover:bg-black/10 dark:hover:bg-white/10 text-gray-900 dark:text-white px-8 text-base h-12 group">
                                Request Integration
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>

                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-10" />
            </section>

            {/* Source Connectors */}
            <SourceConnectors />

            {/* Destination Connectors */}
            <DestinationConnectors />

            {/* CTA Section */}
            <section className="py-32 px-4 md:px-8 border-t border-black/10 dark:border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-500/5" />
                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Missing a tool?</h2>
                    <p className="text-xl text-gray-500 dark:text-gray-400 mb-10">
                        We add new integrations every week. Let us know what you need.
                    </p>
                    <Link href="/#contact">
                        <Button size="lg" className="rounded-full bg-blue-500 hover:bg-blue-600 text-white px-10 h-14 text-lg font-semibold shadow-lg shadow-blue-500/20">
                            Request Integration
                        </Button>
                    </Link>
                </div>
            </section>
        </main>
    );
}
