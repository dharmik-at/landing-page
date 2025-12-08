"use client";

import { motion } from "framer-motion";
import { Book, Code, Terminal, FileText, Zap, Puzzle, Shield, Search } from "lucide-react";
import Link from "next/link";

const categories = [
    {
        title: "Getting Started",
        icon: Zap,
        color: "text-yellow-400",
        description: "Quickstart guides and core concepts.",
        links: ["Introduction", "Quickstart", "Architecture", "API Keys"]
    },
    {
        title: "Guides",
        icon: Book,
        color: "text-blue-400",
        description: "Step-by-step tutorials for common use cases.",
        links: ["Building a Chatbot", "Indexing PDFs", "Web Scraping", "Slack Bot"]
    },
    {
        title: "API Reference",
        icon: Code,
        color: "text-purple-400",
        description: "Detailed API endpoints and SDK documentation.",
        links: ["Authentication", "Ingestion API", "Retrieval API", "Python SDK"]
    },
    {
        title: "Integrations",
        icon: Puzzle,
        color: "text-green-400",
        description: "Connect IngestIQ with your tools.",
        links: ["Google Drive", "Notion", "Slack", "Postgres"]
    },
    {
        title: "Security",
        icon: Shield,
        color: "text-red-400",
        description: "Data privacy, encryption, and compliance.",
        links: ["SOC2 Compliance", "Data Encryption", "RBAC", "Private Cloud"]
    },
    {
        title: "Concepts",
        icon: FileText,
        color: "text-cyan-400",
        description: "Deep dive into RAG, vectors, and embeddings.",
        links: ["Vector Embeddings", "Chunking Strategies", "Hybrid Search", "Reranking"]
    }
];

export default function DocsPage() {
    return (
        <main className="min-h-screen text-gray-900 dark:text-white selection:bg-brand-orange/30 pt-24">
            {/* Hero Section */}
            <section className="relative px-4 md:px-8 py-20 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none opacity-50" />

                <div className="container mx-auto max-w-5xl text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-cyan-600 dark:text-cyan-400 mb-8 backdrop-blur-md"
                    >
                        <Terminal className="w-4 h-4" />
                        <span className="text-sm font-mono tracking-wide uppercase">Documentation</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-600 dark:from-white dark:to-white/60"
                    >
                        Build with IngestIQ
                    </motion.h1>

                    <div className="max-w-xl mx-auto relative mb-10">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                            <Search className="w-5 h-5 text-gray-500" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search documentation..."
                            className="w-full h-12 pl-12 pr-4 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-500 focus:outline-none focus:border-brand-orange/50 focus:bg-white dark:focus:bg-white/10 transition-all"
                        />
                    </div>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="px-4 md:px-8 pb-32">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories.map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group p-6 rounded-2xl bg-gray-50 dark:bg-[#0A0A0A] border border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/10 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-all"
                            >
                                <div className={`w-10 h-10 rounded-lg bg-black/5 dark:bg-white/5 flex items-center justify-center mb-4 ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                                    <category.icon className="w-5 h-5" />
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{category.title}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 h-10">{category.description}</p>

                                <ul className="space-y-2">
                                    {category.links.map((link, i) => (
                                        <li key={i}>
                                            <Link href="#" className="text-sm text-gray-500 hover:text-brand-orange transition-colors flex items-center gap-2">
                                                <div className="w-1 h-1 rounded-full bg-black/20 dark:bg-white/20" />
                                                {link}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
