"use client";

import { motion } from "framer-motion";
import { SourceConnectors } from "@/components/sections/tech-marquee";
import { DestinationConnectors } from "@/components/sections/destination-connectors";
import { Button } from "@/components/ui/button";
import { Puzzle, ArrowRight } from "lucide-react";

export default function IntegrationsPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-brand-orange/30 pt-24">
            {/* Hero Section */}
            <section className="relative px-4 md:px-8 py-20 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none opacity-50" />

                <div className="container mx-auto max-w-5xl text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-400 mb-8 backdrop-blur-md"
                    >
                        <Puzzle className="w-4 h-4" />
                        <span className="text-sm font-mono tracking-wide uppercase">Integrations</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60"
                    >
                        Connect with your <br />
                        <span className="text-white">Favorite Tools</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto"
                    >
                        IngestIQ integrates seamlessly with your existing stack. From data sources to vector databases, we've got you covered.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <Button size="lg" className="rounded-full bg-white text-black hover:bg-gray-200 px-8 font-semibold text-base h-12">
                            View All Integrations
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full border-white/20 hover:bg-white/10 text-white px-8 text-base h-12 group">
                            Request Integration
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
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
            <section className="py-32 px-4 md:px-8 border-t border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-500/5" />
                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Missing a tool?</h2>
                    <p className="text-xl text-gray-400 mb-10">
                        We add new integrations every week. Let us know what you need.
                    </p>
                    <Button size="lg" className="rounded-full bg-blue-500 hover:bg-blue-600 text-white px-10 h-14 text-lg font-semibold shadow-lg shadow-blue-500/20">
                        Request Integration
                    </Button>
                </div>
            </section>
        </main>
    );
}
