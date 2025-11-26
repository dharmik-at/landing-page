"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Check, FileText, Globe, Play, Terminal, Folder } from "lucide-react";

const features = [
    {
        title: "Web Intelligence",
        subtitle: "Turn the Internet into Context",
        description: "Crawl, scrape, and parse any website with a single API call. Our intelligent agents handle dynamic content, auth walls, and rate limiting automatically.",
        points: ["Firecrawl Integration", "JavaScript Rendering", "Anti-Bot Bypass"],
        visual: (
            <div className="w-full h-full bg-[#0F0F0F] rounded-xl border border-white/10 overflow-hidden flex flex-col font-mono text-xs">
                <div className="h-8 bg-white/5 border-b border-white/5 flex items-center px-3 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20" />
                    <div className="ml-auto text-gray-500">bash</div>
                </div>
                <div className="p-4 text-gray-300 space-y-2">
                    <div><span className="text-green-500">➜</span> <span className="text-blue-400">ingestiq</span> crawl --url https://stripe.com/docs</div>
                    <div className="text-gray-500">Initializing crawler...</div>
                    <div className="text-gray-500">Found 1,240 pages.</div>
                    <div className="text-gray-500">Parsing HTML structure...</div>
                    <div><span className="text-green-500">✔</span> Extracted 450MB of clean text</div>
                    <div><span className="text-green-500">✔</span> Generated 12,500 vector embeddings</div>
                    <div className="animate-pulse">_</div>
                </div>
            </div>
        ),
    },
    {
        title: "Media RAG",
        subtitle: "Video & Audio Understanding",
        description: "Don't just transcribe. Understand. IngestIQ processes video and audio files, identifying speakers, key topics, and visual context for true multi-modal search.",
        points: ["Speaker Diarization", "Visual Scene Analysis", "Timestamped Citations"],
        visual: (
            <div className="w-full h-full bg-[#0F0F0F] rounded-xl border border-white/10 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                        <Play className="w-6 h-6 text-white fill-white" />
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent p-4 flex flex-col justify-end">
                    <div className="flex gap-1 mb-2">
                        {[...Array(20)].map((_, i) => (
                            <div key={i} className="flex-1 bg-brand-orange/50 rounded-full" style={{ height: Math.random() * 24 + 8 + 'px' }} />
                        ))}
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                        <span>02:14</span>
                        <span>14:30</span>
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: "Enterprise Connectors",
        subtitle: "Sync Your Knowledge Base",
        description: "Connect to Google Drive, Notion, Slack, and Jira in seconds. We handle the OAuth, permission syncing, and incremental updates so your data is always fresh.",
        points: ["Real-time Sync", "Permission Mirroring", "SOC2 Compliant"],
        visual: (
            <div className="w-full h-full bg-[#0F0F0F] rounded-xl border border-white/10 overflow-hidden p-6">
                <div className="space-y-3">
                    {[
                        { icon: Folder, name: "Engineering Docs", status: "Synced", color: "text-blue-400" },
                        { icon: Folder, name: "Q3 Financials", status: "Synced", color: "text-green-400" },
                        { icon: Folder, name: "Product Roadmap", status: "Syncing...", color: "text-yellow-400" },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
                            <div className="flex items-center gap-3">
                                <item.icon className={cn("w-5 h-5", item.color)} />
                                <span className="text-sm font-medium text-gray-200">{item.name}</span>
                            </div>
                            <span className="text-xs text-gray-500">{item.status}</span>
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
];

export function FeaturesDeepDive() {
    return (
        <section className="py-32 px-4 md:px-6 bg-noise">
            <div className="container mx-auto">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Built for <span className="text-brand-orange">Complexity</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Simple RAG is easy. Enterprise RAG requires handling messy data,
                        weird formats, and massive scale. We've solved it all.
                    </p>
                </div>

                <div className="space-y-32">
                    {features.map((feature, index) => (
                        <div key={index} className={cn("flex flex-col lg:flex-row items-center gap-16", index % 2 === 1 && "lg:flex-row-reverse")}>

                            {/* Text Content */}
                            <div className="flex-1 space-y-8">
                                <div>
                                    <h3 className="text-brand-orange font-mono text-sm mb-2 uppercase tracking-wider">{feature.subtitle}</h3>
                                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{feature.title}</h2>
                                    <p className="text-lg text-gray-400 leading-relaxed">{feature.description}</p>
                                </div>

                                <ul className="space-y-4">
                                    {feature.points.map((point, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-300">
                                            <div className="w-6 h-6 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0">
                                                <Check className="w-3.5 h-3.5 text-brand-orange" />
                                            </div>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Visual Content */}
                            <div className="flex-1 w-full aspect-video lg:aspect-square max-h-[400px]">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                    viewport={{ once: true }}
                                    className="w-full h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-2 shadow-2xl"
                                >
                                    {feature.visual}
                                </motion.div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
