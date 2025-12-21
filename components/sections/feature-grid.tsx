"use client";

import { motion } from "framer-motion";
import {
    Database, FileText, Image as ImageIcon, Mic, Video,
    Globe, HardDrive, Search, Cpu, Shield, Zap, Layers,
    FileAudio, FileVideo, Cloud, Server
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
    {
        category: "Ingestion Engine",
        description: "Connect to your data wherever it lives. Real-time sync and automatic updates.",
        items: [
            { name: "Audio Upload", icon: FileAudio, description: "MP3, WAV, M4A support" },
            { name: "File Upload", icon: FileText, description: "PDF, DOCX, TXT, CSV" },
            { name: "Google Drive", icon: HardDrive, description: "Docs, Sheets, Slides" },
            { name: "Image Upload", icon: ImageIcon, description: "OCR & Vision analysis" },
            { name: "S3 Source", icon: Cloud, description: "Direct bucket ingestion" },
            { name: "Video Upload", icon: FileVideo, description: "MP4, MOV, AVI" },
            { name: "Web Scrape", icon: Globe, description: "Crawl any website" },
        ]
    },
    {
        category: "Processing Pipeline",
        description: "Transform raw data into structured, queryable intelligence.",
        items: [
            { name: "OCR Engine", icon: Search, description: "Extract text from images/PDFs" },
            { name: "PII Redaction", icon: Shield, description: "Auto-remove sensitive data" },
            { name: "Semantic Chunking", icon: Layers, description: "Context-aware splitting" },
            { name: "Audio Transcription", icon: Mic, description: "Speaker diarization" },
            { name: "Video Analysis", icon: Video, description: "Scene detection & OCR" },
        ]
    },
    {
        category: "Retrieval & Search",
        description: "Enterprise-grade search capabilities across any destination.",
        items: [
            { name: "Dynamic Destinations", icon: Cloud, description: "Pinecone, Qdrant, Milvus, MongoDB, pgvector, Elastic" },
            { name: "MCP Server Integration", icon: Server, description: "Dedicated URLs for isolated KBs" },
            { name: "Specialized Agents", icon: Cpu, description: "Hyper-focused department-level bots" },
            { name: "Parallel Neural Search", icon: Zap, description: "Sub-100ms multi-KB querying" },
            { name: "Hybrid Retrieval", icon: Layers, description: "Keyword + Semantic fusion" },
        ]
    }
];

export function FeatureGrid() {
    return (
        <section className="py-24 px-4 md:px-8 bg-white dark:bg-black border-t border-black/10 dark:border-white/10">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                        Complete <span className="text-brand-orange">RAG Pipeline</span>
                    </h2>
                    <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                        Everything you need to build production-grade AI applications, from ingestion to retrieval.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {features.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col h-full p-8 rounded-2xl bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/5"
                        >
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{category.category}</h3>
                                <p className="text-gray-500 dark:text-gray-400">{category.description}</p>
                            </div>

                            <div className="space-y-4 flex-1">
                                {category.items.map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                                        <div className="p-2 rounded-lg bg-white dark:bg-black border border-black/5 dark:border-white/10 shrink-0">
                                            <item.icon className="w-5 h-5 text-brand-orange" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{item.name}</h4>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
