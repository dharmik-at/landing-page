"use client";

import { useState } from "react";
import {
    Database, Search, FileText, Settings,
    Play, Pause, Clock, MoreHorizontal,
    ChevronRight, ArrowLeft, Shield, Users, Plane
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const knowledgeBases = [
    {
        id: "compliance",
        name: "Compliance Knowledgebase",
        description: "Regulatory documents, SOC2 policies, and GDPR guidelines.",
        icon: Shield,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20",
        pipelines: [
            { name: "SOC2_Policy_Sync", status: "Running", schedule: "Every 6h" },
            { name: "GDPR_Guidelines_Update", status: "Idle", schedule: "Manual" }
        ],
        documents: [
            { name: "SOC2_Type_II_Report.pdf", status: "Indexed", date: "2h ago" },
            { name: "Data_Privacy_Policy_v4.docx", status: "Indexed", date: "1d ago" },
            { name: "Audit_Logs_Q3.csv", status: "Processing", date: "Just now" }
        ]
    },
    {
        id: "hr",
        name: "HR Knowledgebase",
        description: "Employee handbooks, benefits info, and onboarding materials.",
        icon: Users,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
        pipelines: [
            { name: "Workday_Sync_Daily", status: "Running", schedule: "Every 24h" },
            { name: "Notion_Wiki_Import", status: "Idle", schedule: "Manual" }
        ],
        documents: [
            { name: "Employee_Handbook_2024.pdf", status: "Indexed", date: "5h ago" },
            { name: "Benefits_Guide_US.pdf", status: "Indexed", date: "2d ago" },
            { name: "Onboarding_Checklist.docx", status: "Indexed", date: "3d ago" }
        ]
    },
    {
        id: "travel",
        name: "Travel Knowledgebase",
        description: "Travel policies, expense guidelines, and booking procedures.",
        icon: Plane,
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20",
        pipelines: [
            { name: "Concur_Expense_Sync", status: "Running", schedule: "Every 12h" },
            { name: "Travel_Policy_Webscrape", status: "Idle", schedule: "Weekly" }
        ],
        documents: [
            { name: "Global_Travel_Policy.pdf", status: "Indexed", date: "1w ago" },
            { name: "Expense_Reimbursement_FAQ.pdf", status: "Indexed", date: "1w ago" },
            { name: "Preferred_Hotels_List.xlsx", status: "Indexed", date: "2w ago" }
        ]
    }
];

import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

export function KnowledgeBases() {
    const [selectedKBId, setSelectedKBId] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState("pipelines");

    const selectedKB = knowledgeBases.find(kb => kb.id === selectedKBId);

    return (
        <section className="py-24 bg-[#0A0A0A] border-t border-white/5 min-h-[800px]">
            <div className="container mx-auto px-4 md:px-6">
                <ScrollReveal className="text-center px-4 md:px-116 mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-brand-orange">Knowledge</span> Bases
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Manage your RAG corpus with granular control. Specialized knowledge bases for every department.
                    </p>
                </ScrollReveal>

                <div className="max-w-6xl mx-auto">
                    <AnimatePresence mode="wait">
                        {!selectedKB ? (
                            <StaggerContainer
                                key="grid"
                                exit={{ opacity: 0, y: -20 }}
                                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                            >
                                {knowledgeBases.map((kb) => (
                                    <StaggerItem
                                        key={kb.id}
                                        onClick={() => setSelectedKBId(kb.id)}
                                        className="group cursor-pointer p-6 rounded-xl border border-white/5 bg-[#111111] hover:border-brand-orange/50 hover:bg-white/5 transition-all duration-300 flex flex-col items-center text-center relative"
                                    >
                                        <div className={cn("absolute top-4 right-4 px-2 py-1 rounded text-xs font-medium border", kb.bg, kb.color, kb.border)}>
                                            Active
                                        </div>

                                        <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-6", kb.bg, kb.color)}>
                                            <kb.icon className="w-6 h-6" />
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-orange transition-colors">
                                            {kb.name}
                                        </h3>
                                        <p className="text-sm text-gray-500 mb-4 flex-1">
                                            {kb.description}
                                        </p>
                                        <div className="flex items-center text-sm text-gray-400 group-hover:text-white transition-colors mt-auto">
                                            View Details <ChevronRight className="w-4 h-4 ml-1" />
                                        </div>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="rounded-xl border border-white/10 bg-[#0F0F0F] overflow-hidden shadow-2xl"
                            >
                                {/* Header */}
                                <div className="border-b border-white/5 p-4 flex items-center gap-4 bg-[#111111]">
                                    <button
                                        onClick={() => setSelectedKBId(null)}
                                        className="p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition-colors"
                                    >
                                        <ArrowLeft className="w-5 h-5" />
                                    </button>
                                    <div>
                                        <h3 className="font-bold text-white">{selectedKB.name}</h3>
                                        <div className="text-xs text-gray-500">ID: {selectedKB.id}-8cc-4372...</div>
                                    </div>
                                </div>

                                {/* Tabs */}
                                <div className="flex items-center gap-1 px-4 border-b border-white/5 bg-[#111111]">
                                    {[
                                        { id: "pipelines", label: "Pipelines", icon: Play },
                                        { id: "documents", label: "Documents", icon: FileText },
                                        { id: "search", label: "Search", icon: Search },
                                        { id: "mcp", label: "MCP", icon: Settings },
                                    ].map((tab) => (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={cn(
                                                "flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors",
                                                activeTab === tab.id
                                                    ? "border-brand-orange text-white"
                                                    : "border-transparent text-gray-500 hover:text-gray-300"
                                            )}
                                        >
                                            <tab.icon className="w-4 h-4" />
                                            {tab.label}
                                        </button>
                                    ))}
                                </div>

                                {/* Content */}
                                <div className="p-6 min-h-[400px] bg-[#0A0A0A]">
                                    {activeTab === "pipelines" && (
                                        <div className="space-y-4">
                                            {selectedKB.pipelines.map((pipeline, i) => (
                                                <PipelineRow
                                                    key={i}
                                                    name={pipeline.name}
                                                    status={pipeline.status}
                                                    schedule={pipeline.schedule}
                                                />
                                            ))}
                                        </div>
                                    )}

                                    {activeTab === "documents" && (
                                        <div className="space-y-2">
                                            <div className="hidden md:grid grid-cols-4 text-xs font-medium text-gray-500 px-4 pb-2">
                                                <div className="col-span-2">Name</div>
                                                <div>Status</div>
                                                <div>Date</div>
                                            </div>
                                            {selectedKB.documents.map((doc, i) => (
                                                <DocumentRow
                                                    key={i}
                                                    name={doc.name}
                                                    status={doc.status}
                                                    date={doc.date}
                                                />
                                            ))}
                                        </div>
                                    )}

                                    {activeTab === "search" && (
                                        <div className="max-w-2xl mx-auto mt-8">
                                            <div className="relative">
                                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                                <input
                                                    type="text"
                                                    placeholder={`Ask a question about ${selectedKB.name.toLowerCase()}...`}
                                                    className="w-full bg-[#111111] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-brand-orange/50"
                                                />
                                            </div>
                                            <div className="mt-8 text-center text-gray-500 text-sm">
                                                Try searching for "Summarize the latest policy changes"
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === "mcp" && (
                                        <div className="max-w-2xl mx-auto space-y-6">
                                            <div className="p-4 rounded-xl border border-white/10 bg-[#111111]">
                                                <h4 className="font-medium text-white mb-2">MCP Server Configuration</h4>
                                                <div className="space-y-4">
                                                    <div>
                                                        <label className="block text-xs text-gray-500 mb-1">Server URL</label>
                                                        <div className="text-sm text-gray-300 font-mono bg-black/50 p-2 rounded border border-white/5">
                                                            https://api.ingestiq.ai/mcp/v1/server/{selectedKB.id}
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-sm text-gray-300">Enable Context Awareness</span>
                                                        <div className="w-10 h-6 rounded-full bg-brand-orange p-1 cursor-pointer">
                                                            <div className="w-4 h-4 rounded-full bg-white ml-auto" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}

function PipelineRow({ name, status, schedule }: { name: string, status: string, schedule: string }) {
    return (
        <div className="flex items-center justify-between p-4 rounded-lg border border-white/5 bg-[#111111] hover:border-white/10 transition-colors">
            <div className="flex items-center gap-4">
                <div className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center",
                    status === "Running" ? "bg-green-500/10 text-green-500" : "bg-gray-500/10 text-gray-500"
                )}>
                    {status === "Running" ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
                </div>
                <div>
                    <div className="font-medium text-white">{name}</div>
                    <div className="text-xs text-gray-500 flex items-center gap-2">
                        <Clock className="w-3 h-3" /> {schedule}
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <span className={cn(
                    "px-2.5 py-0.5 rounded-full text-xs font-medium border",
                    status === "Running"
                        ? "bg-green-500/10 text-green-500 border-green-500/20"
                        : "bg-gray-500/10 text-gray-500 border-gray-500/20"
                )}>
                    {status}
                </span>
                <button className="p-2 hover:bg-white/5 rounded-lg text-gray-500 hover:text-white transition-colors">
                    <MoreHorizontal className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}

function DocumentRow({ name, status, date }: { name: string, status: string, date: string }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 items-center p-3 rounded-lg hover:bg-white/5 transition-colors border-b border-white/5 last:border-0 gap-2 md:gap-0">
            <div className="col-span-1 md:col-span-2 flex items-center gap-3">
                <FileText className="w-4 h-4 text-gray-500 shrink-0" />
                <span className="text-sm text-gray-300 truncate">{name}</span>
            </div>
            <div className="flex items-center justify-between md:justify-start md:contents">
                <div className="md:col-span-1">
                    <span className={cn(
                        "px-2 py-0.5 rounded text-[10px] font-medium border",
                        status === "Indexed"
                            ? "bg-green-500/10 text-green-500 border-green-500/20"
                            : "bg-blue-500/10 text-blue-500 border-blue-500/20"
                    )}>
                        {status}
                    </span>
                </div>
                <div className="text-xs text-gray-500 md:col-span-1 text-right md:text-left">{date}</div>
            </div>
        </div>
    );
}
