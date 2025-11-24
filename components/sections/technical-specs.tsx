"use client";

import { motion } from "framer-motion";
import {
    FileText, FileSpreadsheet, Globe, Youtube, Music, Video,
    HardDrive, Database, Slack, MessageSquare, Server,
    Cpu, Code, Box, Layers, Share2, Shield, Lock, Eye, Search
} from "lucide-react";
import { cn } from "@/lib/utils";

const specs = [
    {
        category: "Input Sources",
        icon: HardDrive,
        items: [
            { name: "PDF (Text & Scanned)", icon: FileText },
            { name: "DOCX / PPTX / XLSX", icon: FileSpreadsheet },
            { name: "HTML / Web Crawl", icon: Globe },
            { name: "YouTube (Video/Shorts)", icon: Youtube },
            { name: "MP4 / MP3 / WAV", icon: Video },
            { name: "Google Drive / Docs", icon: HardDrive },
            { name: "Notion Pages / DBs", icon: Database },
            { name: "Slack Channels", icon: Slack },
            { name: "Zendesk Tickets", icon: MessageSquare },
            { name: "PostgreSQL / MySQL", icon: Server },
        ]
    },
    {
        category: "Embedding Models",
        icon: Cpu,
        items: [
            { name: "OpenAI text-embedding-3", icon: Cpu },
            { name: "Cohere Embed v3", icon: Layers },
            { name: "Google Gecko", icon: Code },
            { name: "HuggingFace (Local)", icon: Box },
            { name: "Voyage AI", icon: Share2 },
            { name: "Jina AI", icon: Search },
        ]
    },
    {
        category: "Vector Databases",
        icon: Database,
        items: [
            { name: "Pinecone (Serverless)", icon: Database },
            { name: "Weaviate (Cloud/Local)", icon: Server },
            { name: "Milvus", icon: Layers },
            { name: "Qdrant", icon: Box },
            { name: "ChromaDB", icon: Database },
            { name: "pgvector", icon: Server },
        ]
    },
    {
        category: "Output Formats",
        icon: Code,
        items: [
            { name: "JSON Structure", icon: Code },
            { name: "Markdown", icon: FileText },
            { name: "Clean Text", icon: FileText },
            { name: "Semantic Chunks", icon: Layers },
            { name: "Vector Embeddings", icon: Cpu },
            { name: "Knowledge Graph", icon: Share2 },
        ]
    },
];

// Helper component for the "Scanner" effect
const Scanner = () => (
    <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-orange/10 to-transparent -skew-x-12"
        initial={{ x: "-100%" }}
        whileHover={{ x: "200%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
    />
);

// Helper component for the "Border Beam" effect
const BorderBeam = () => (
    <div className="absolute inset-0 rounded-xl pointer-events-none overflow-hidden">
        <div className="absolute -inset-[100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#FF4F00_50%,#00000000_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
);

import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

export function TechnicalSpecs() {
    return (
        <section className="py-32 px-4 md:px-6 bg-black relative overflow-hidden">
            {/* Circuit Background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="w-full h-full" width="100%" height="100%">
                    <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                        <path d="M10 10 h80 v80 h-80 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        <path d="M50 10 v80 M10 50 h80" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        <circle cx="50" cy="50" r="2" fill="currentColor" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#circuit)" />
                </svg>
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <ScrollReveal className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Technical <span className="text-brand-orange">Specifications</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Built for developers who need granular control. Full support for the modern AI stack.
                    </p>
                </ScrollReveal>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {specs.map((category, catIndex) => (
                        <StaggerItem
                            key={category.category}
                            className="space-y-6"
                        >
                            <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                                <div className="p-2 rounded-lg bg-brand-orange/10 text-brand-orange">
                                    <category.icon className="w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                                    {category.category}
                                </h3>
                            </div>

                            <div className="grid gap-3">
                                {category.items.map((item, i) => (
                                    <motion.div
                                        key={item.name}
                                        className="group relative overflow-hidden p-3 rounded-xl bg-white/5 border border-white/10 transition-colors"
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <Scanner />
                                        <BorderBeam />
                                        <div className="relative z-10 flex items-center gap-3 bg-black/50 rounded-lg p-1">
                                            <item.icon className="w-4 h-4 text-gray-500 group-hover:text-brand-orange transition-colors" />
                                            <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                                                {item.name}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                {/* Security Badge */}
                <ScrollReveal
                    className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-white/5 to-transparent border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8"
                >
                    <div className="flex items-center gap-6">
                        <div className="p-4 rounded-full bg-green-500/10 border border-green-500/20">
                            <Shield className="w-8 h-8 text-green-500" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-white mb-2">Enterprise Grade Security</h4>
                            <p className="text-gray-400">Your data never leaves your VPC unless you want it to.</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        {["SOC2 Type II", "GDPR Ready", "HIPAA", "ISO 27001"].map((badge) => (
                            <div key={badge} className="flex items-center gap-2 px-4 py-2 rounded-full bg-black border border-white/10 text-sm font-mono text-gray-400">
                                <Lock className="w-3 h-3" />
                                {badge}
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
