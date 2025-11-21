"use client";

import { motion } from "framer-motion";
import { Globe, Video, FileText, HardDrive, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
    {
        title: "Web Intelligence",
        description: "Turn dynamic websites into clean Markdown. Handles JS-heavy sites, auth, and complex layouts.",
        icon: Globe,
        className: "md:col-span-2",
        gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
        title: "Media RAG",
        description: "First-class video & audio support. Automated transcription, speaker diarization, and timestamp linking.",
        icon: Video,
        className: "md:col-span-1",
        gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
        title: "Smart Documents",
        description: "Layout-aware PDF processing. Preserves tables, headers, and structure for better context.",
        icon: FileText,
        className: "md:col-span-1",
        gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
        title: "Enterprise Connectors",
        description: "Native integrations for Google Drive, Sheets, and Notion. Recursively syncs folders and permissions.",
        icon: HardDrive,
        className: "md:col-span-2",
        gradient: "from-orange-500/20 to-red-500/20",
    },
];

export function FeaturesGrid() {
    return (
        <section id="features" className="py-24 px-4 md:px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Universal <span className="text-brand-orange">Ingestion</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl">
                        One API to handle every data type. We take care of the parsing, chunking,
                        and embedding so you don't have to.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={cn(
                                "group relative overflow-hidden rounded-3xl border border-glass-border bg-obsidian p-8 hover:border-brand-orange/30 transition-colors",
                                feature.className
                            )}
                        >
                            <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500", feature.gradient)} />

                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <feature.icon className="w-6 h-6 text-white" />
                                </div>

                                <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                                    {feature.title}
                                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-gray-400" />
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
