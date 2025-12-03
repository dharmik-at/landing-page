"use client";

import { motion } from "framer-motion";
import { History, Star, Zap, Bug } from "lucide-react";

const changelog = [
    {
        version: "v1.2.0",
        date: "October 24, 2023",
        title: "Visual Knowledge & PDF Parsing",
        description: "Introduced our new multimodal parsing engine capable of understanding charts, diagrams, and blueprints in PDFs.",
        changes: [
            { type: "feature", text: "Visual Knowledge API released" },
            { type: "improvement", text: "Improved OCR accuracy by 40%" },
            { type: "fix", text: "Fixed table extraction issues in multi-column PDFs" }
        ]
    },
    {
        version: "v1.1.5",
        date: "October 10, 2023",
        title: "Notion & Slack Connectors",
        description: "Added native integrations for Notion and Slack, allowing you to ingest your team's knowledge base instantly.",
        changes: [
            { type: "feature", text: "Notion Connector (Beta)" },
            { type: "feature", text: "Slack Connector (Beta)" },
            { type: "improvement", text: "Faster initial sync for Google Drive" }
        ]
    },
    {
        version: "v1.1.0",
        date: "September 28, 2023",
        title: "Web Intelligence Update",
        description: "Major upgrade to our web crawler. Now supports JavaScript rendering and complex auth flows.",
        changes: [
            { type: "feature", text: "Headless browser support" },
            { type: "improvement", text: "Rate limiting handling" },
            { type: "fix", text: "Fixed encoding issues with non-UTF8 sites" }
        ]
    },
    {
        version: "v1.0.0",
        date: "September 1, 2023",
        title: "IngestIQ Launch",
        description: "The first release of IngestIQ. Unified RAG infrastructure for everyone.",
        changes: [
            { type: "feature", text: "Core API release" },
            { type: "feature", text: "Dashboard v1" },
            { type: "feature", text: "Python SDK" }
        ]
    }
];

export default function ChangelogPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-brand-orange/30 pt-24">
            {/* Hero Section */}
            <section className="relative px-4 md:px-8 py-20 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-500/20 rounded-full blur-[120px] pointer-events-none opacity-50" />

                <div className="container mx-auto max-w-3xl text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-purple-400 mb-8 backdrop-blur-md"
                    >
                        <History className="w-4 h-4" />
                        <span className="text-sm font-mono tracking-wide uppercase">Changelog</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60"
                    >
                        What's New
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-gray-400 mb-10 leading-relaxed"
                    >
                        We ship fast. Here's what we've been working on.
                    </motion.p>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="px-4 md:px-8 pb-32">
                <div className="container mx-auto max-w-3xl relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-0 top-0 bottom-0 w-px bg-white/10" />

                    <div className="space-y-16">
                        {changelog.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative pl-20 md:pl-12"
                            >
                                {/* Dot */}
                                <div className="absolute left-[29px] md:left-[-3px] top-1.5 w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_currentColor]" />

                                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                                    <span className="font-mono text-sm text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20 w-fit">
                                        {item.version}
                                    </span>
                                    <span className="text-sm text-gray-500">{item.date}</span>
                                </div>

                                <h2 className="text-2xl font-bold text-white mb-2">{item.title}</h2>
                                <p className="text-gray-400 mb-6 leading-relaxed">{item.description}</p>

                                <div className="space-y-3">
                                    {item.changes.map((change, i) => (
                                        <div key={i} className="flex items-start gap-3 text-sm">
                                            <div className={`mt-0.5 shrink-0 ${change.type === 'feature' ? 'text-green-400' :
                                                    change.type === 'improvement' ? 'text-blue-400' :
                                                        'text-red-400'
                                                }`}>
                                                {change.type === 'feature' && <Star className="w-4 h-4" />}
                                                {change.type === 'improvement' && <Zap className="w-4 h-4" />}
                                                {change.type === 'fix' && <Bug className="w-4 h-4" />}
                                            </div>
                                            <span className="text-gray-300">{change.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
