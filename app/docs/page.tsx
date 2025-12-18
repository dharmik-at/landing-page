"use client";

import { motion } from "framer-motion";
import { Construction, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function DocsPage() {
    return (
        <main className="min-h-screen text-gray-900 dark:text-white selection:bg-brand-orange/30 pt-24 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-orange/20 rounded-full blur-[120px] pointer-events-none opacity-50" />

            <div className="container mx-auto max-w-5xl text-center relative z-10 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-brand-orange mb-8 backdrop-blur-md"
                >
                    <Construction className="w-4 h-4" />
                    <span className="text-sm font-mono tracking-wide uppercase">Under Construction</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-600 dark:from-white dark:to-white/60"
                >
                    Documentation <br />
                    Coming Soon
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10"
                >
                    We're working hard to bring you comprehensive documentation for IngestIQ.
                    Stay tuned for detailed guides, API references, and more.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 dark:bg-white text-white dark:text-black font-medium hover:opacity-90 transition-opacity"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
