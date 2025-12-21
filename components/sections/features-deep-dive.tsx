"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Check, Image as ImageIcon, Database, Search, Server } from "lucide-react";

// ... existing imports (if any)


const features = [
    {
        title: "Dynamic Destination & Unified Search",
        subtitle: "Enterprise-Scale Neural Retrieval",
        description: "Break free from vendor lock-in. IngestIQ allows you to route data to any combination of vector databases while maintaining a single, unified search interface. Query across your entire organization's knowledge base in parallel, regardless of the underlying storage architecture.",
        points: [
            "Multi-Destination Routing: Sync data to Pinecone, Qdrant, Milvus, and more simultaneously.",
            "Parallel Neural Search: Query multiple knowledge bases in parallel with sub-100ms latency.",
            "Schema Agnostic: Automatically handles different metadata schemas across different providers.",
            "Vendor Agnostic: Switch providers or add new ones without changing your application code.",
            "Organization-Level Intelligence: Search across departments, projects, and legacy silos in one go."
        ],
        visual: (
            <div className="w-full h-full bg-white dark:bg-[#0F0F0F] rounded-xl border border-black/10 dark:border-white/10 overflow-hidden relative p-8 flex flex-col justify-center">
                {/* Central Query Node */}
                <div className="relative z-20 flex justify-center mb-12">
                    <motion.div
                        animate={{
                            boxShadow: ["0 0 0 0px rgba(255,79,0,0.2)", "0 0 0 20px rgba(255,79,0,0)", "0 0 0 0px rgba(255,79,0,0.2)"]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-20 h-20 rounded-2xl bg-brand-orange flex items-center justify-center shadow-lg shadow-brand-orange/20"
                    >
                        <Search className="w-10 h-10 text-white" />
                    </motion.div>
                </div>

                {/* Destination Nodes */}
                <div className="grid grid-cols-3 gap-4 relative z-20">
                    {[
                        { name: "Pinecone", icon: Database, color: "text-blue-500" },
                        { name: "Qdrant", icon: Database, color: "text-green-500" },
                        { name: "Milvus", icon: Database, color: "text-purple-500" },
                        { name: "MongoDB", icon: Database, color: "text-emerald-500" },
                        { name: "pgvector", icon: Database, color: "text-indigo-500" },
                        { name: "Elastic", icon: Database, color: "text-yellow-500" },
                    ].map((db, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center gap-2 p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5"
                        >
                            <db.icon className={cn("w-6 h-6", db.color)} />
                            <span className="text-[10px] font-mono text-gray-500">{db.name}</span>

                            {/* Connection Line Animation */}
                            <motion.div
                                animate={{
                                    opacity: [0.2, 1, 0.2],
                                    scaleY: [1, 1.2, 1]
                                }}
                                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                                className="absolute -top-8 w-px h-8 bg-gradient-to-b from-brand-orange/50 to-transparent"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Background Pulse */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-[300px] h-[300px] bg-brand-orange/5 rounded-full blur-3xl" />
                </div>
            </div>
        ),
    },
    {
        title: "Specialized Agents with MCP Servers",
        subtitle: "Targeted Accuracy for Every Department",
        description: "Isolate your data into department-specific knowledge bases like HR, Finance, or Legal. Expose each knowledge base via a dedicated MCP server URL to build hyper-focused agents or combine multiple servers for a unified, high-precision chatbot experience.",
        points: [
            "Dedicated MCP URLs: Unique endpoints for HR, Policies, Financials, and more.",
            "Multi-Server Orchestration: Connect one or many MCP servers to a single chatbot.",
            "Departmental Data Isolation: Ensure agents only access the data they are authorized for.",
            "High-Precision Retrieval: Targeted querying leads to more accurate and relevant answers.",
            "Agentic Infrastructure: Build specialized bots for every team in your organization."
        ],
        visual: (
            <div className="w-full h-full bg-white dark:bg-[#0F0F0F] rounded-xl border border-black/10 dark:border-white/10 overflow-hidden relative p-8 flex flex-col justify-center">
                {/* Chatbot Node */}
                <div className="relative z-20 flex justify-center mb-12">
                    <motion.div
                        animate={{
                            scale: [1, 1.05, 1],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="w-20 h-20 rounded-full bg-brand-orange flex items-center justify-center shadow-lg shadow-brand-orange/20"
                    >
                        <div className="w-10 h-10 text-white flex items-center justify-center font-bold text-2xl">AI</div>
                    </motion.div>
                </div>

                {/* MCP Server Nodes */}
                <div className="flex justify-around relative z-20">
                    {[
                        { name: "HR MCP", color: "text-blue-500" },
                        { name: "Finance MCP", color: "text-green-500" },
                        { name: "Legal MCP", color: "text-purple-500" },
                    ].map((mcp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="flex flex-col items-center gap-2"
                        >
                            <div className={cn("p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5", mcp.color)}>
                                <Server className="w-6 h-6" />
                            </div>
                            <span className="text-[10px] font-mono text-gray-500">{mcp.name}</span>

                            {/* Connection Line */}
                            <motion.div
                                animate={{
                                    height: [0, 48, 48],
                                    opacity: [0, 1, 0]
                                }}
                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                                className="absolute -top-12 w-px bg-brand-orange/30"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        ),
    },
];

export function FeaturesDeepDive() {
    return (
        <section className="py-32 px-4 md:px-6 bg-noise dark:bg-noise">
            <div className="container mx-auto">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                        Built for <span className="text-brand-orange">Complexity</span>
                    </h2>
                    <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
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
                                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{feature.title}</h2>
                                    <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">{feature.description}</p>
                                </div>

                                <ul className="space-y-4">
                                    {feature.points.map((point, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
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
                                    className="w-full h-full rounded-2xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-sm p-2 shadow-2xl"
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
