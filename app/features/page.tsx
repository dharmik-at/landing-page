"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FeaturesDeepDive } from "@/components/sections/features-deep-dive";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Button } from "@/components/ui/button";
import { Zap, ArrowRight } from "lucide-react";

export default function FeaturesPage() {
    return (
        <main className="min-h-screen text-gray-900 dark:text-white selection:bg-brand-orange/30 pt-24">
            {/* Hero Section */}
            <section className="relative px-4 md:px-8 py-20 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-orange/20 rounded-full blur-[120px] pointer-events-none opacity-50" />

                <div className="container mx-auto max-w-5xl text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-brand-orange mb-8 backdrop-blur-md"
                    >
                        <Zap className="w-4 h-4" />
                        <span className="text-sm font-mono tracking-wide uppercase">Platform Features</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-600 dark:from-white dark:to-white/60"
                    >
                        Everything you need to build <br />
                        <span className="text-gray-900 dark:text-white">Enterprise RAG</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-gray-500 dark:text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto"
                    >
                        From ingestion to retrieval, IngestIQ provides the complete infrastructure for building production-grade AI applications.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <Link href="https://platform.ingestiq.ai" target="_blank">
                            <Button size="lg" className="rounded-full bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 px-8 font-semibold text-base h-12">
                                Start Building
                            </Button>
                        </Link>
                        <Link href="/docs">
                            <Button size="lg" variant="outline" className="rounded-full border-black/20 hover:bg-black/5 text-gray-900 dark:border-white/20 dark:hover:bg-white/10 dark:text-white px-8 text-base h-12 group">
                                View Documentation
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>

                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-10" />
            </section>

            {/* Feature Grid Section */}
            <FeatureGrid />

            {/* Features Deep Dive Section */}
            <FeaturesDeepDive />

            {/* CTA Section */}
            <section className="py-32 px-4 md:px-8 border-t border-black/10 dark:border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-orange/5" />
                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Ready to ingest?</h2>
                    <p className="text-xl text-gray-500 dark:text-gray-400 mb-10">
                        Join hundreds of engineering teams building the next generation of AI apps.
                    </p>
                    <Link href="https://platform.ingestiq.ai/" target="_blank">
                        <Button size="lg" className="rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white px-10 h-14 text-lg font-semibold shadow-lg shadow-brand-orange/20">
                            Start Building
                        </Button>
                    </Link>
                </div>
            </section>
        </main>
    );
}
