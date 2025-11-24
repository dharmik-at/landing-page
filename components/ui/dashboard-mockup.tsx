"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import {
    Activity, Database, FileText,
    Search, Zap, MoreHorizontal,
    Share2, Bot, Cpu, BookOpen,
    FileAudio, Upload, HardDrive, FileSpreadsheet,
    Image, Video, Globe, Server, Sparkles, Network,
    Shield, Users, Plane, Play, Pause, Clock,
    ChevronRight, ArrowLeft, Settings
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
    PostgresIcon, PineconeIcon, S3Icon,
    GeminiIcon, AnthropicIcon, OpenAIIcon, MilvusIcon
} from "./icons";

// Data Definitions
const sources = [
    { name: "Audio Upload", icon: FileAudio, color: "text-blue-400" },
    { name: "File Upload", icon: Upload, color: "text-emerald-400" },
    { name: "Google Drive", icon: HardDrive, color: "text-yellow-400" },
    { name: "Google Sheet", icon: FileSpreadsheet, color: "text-green-500" },
    { name: "Image Upload", icon: Image, color: "text-purple-400" },
    { name: "S3 Source", icon: S3Icon, color: "text-orange-400" },
    { name: "Video Upload", icon: Video, color: "text-red-400" },
    { name: "Web Scrape", icon: Globe, color: "text-cyan-400" },
];

const destinations = [
    { name: "PgVector", icon: PostgresIcon, color: "text-blue-400" },
    { name: "Milvus", icon: MilvusIcon, color: "text-blue-500" },
    { name: "Pinecone", icon: PineconeIcon, color: "text-cyan-500" },
    { name: "S3 Vector Storage", icon: S3Icon, color: "text-orange-500" },
];

const parserModels = [
    { name: "Google Gemini", icon: GeminiIcon, color: "text-blue-400", description: "Multimodal reasoning & generation" },
    { name: "Anthropic", icon: AnthropicIcon, color: "text-orange-300", description: "Claude 3 Opus & Sonnet" },
    { name: "OpenAI", icon: OpenAIIcon, color: "text-green-400", description: "GPT-4 Turbo & GPT-3.5" },
];

const embeddingModels = [
    { name: "OpenAI Embeddings", icon: OpenAIIcon, color: "text-green-400", description: "text-embedding-3-small & large" },
];

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

type ViewState = 'source' | 'destination' | 'parser' | 'embedding' | 'kb';

import { BorderBeam } from "./border-beam";

export function DashboardMockup() {
    const [activeView, setActiveView] = useState<ViewState>('source');
    const [selectedKBId, setSelectedKBId] = useState<string | null>(null);
    const [activeKBTab, setActiveKBTab] = useState("pipelines");

    const selectedKB = knowledgeBases.find(kb => kb.id === selectedKBId);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full h-full bg-[#0A0A0A] rounded-xl border border-white/10 shadow-2xl flex font-sans relative"
            style={{ transformStyle: "preserve-3d" }}
        >
            {/* Glossy Reflection Overlay */}
            <div
                className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-50"
                style={{ transform: "translateZ(50px)" }}
            />

            {/* Futuristic Border Beam */}
            <div style={{ transform: "translateZ(60px)" }} className="absolute inset-0 pointer-events-none z-50">
                <BorderBeam duration={8} borderWidth={2} colorFrom="#FF4F00" colorTo="#FF8F00" />
            </div>

            {/* Sidebar Layer */}
            <motion.div
                className="w-64 border-r border-white/5 bg-[#0A0A0A] flex flex-col rounded-l-xl"
                style={{ transform: "translateZ(20px)" }}
            >
                <div className="p-6 flex items-center gap-3">
                    <div className="w-8 h-8 bg-brand-orange rounded-lg flex items-center justify-center text-white shadow-lg shadow-brand-orange/20">
                        <Zap className="w-5 h-5 fill-current" />
                    </div>
                    <span className="font-bold text-lg text-white tracking-tight">IngestIQ</span>
                </div>

                <div className="flex-1 px-3 py-4 space-y-6 overflow-y-auto custom-scrollbar">
                    <div>
                        <div className="px-3 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Connectors</div>
                        <div className="space-y-1">
                            <SidebarItem
                                icon={Share2}
                                label="Source Connectors"
                                onClick={() => setActiveView('source')}
                            />
                            <SidebarItem
                                icon={Database}
                                label="Destination Connectors"
                                onClick={() => setActiveView('destination')}
                            />
                        </div>
                    </div>

                    <div>
                        <div className="px-3 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">AI Models</div>
                        <div className="space-y-1">
                            <SidebarItem
                                icon={Bot}
                                label="Parser Models"
                                onClick={() => setActiveView('parser')}
                            />
                            <SidebarItem
                                icon={Cpu}
                                label="Embedding Models"
                                onClick={() => setActiveView('embedding')}
                            />
                        </div>
                    </div>

                    <div>
                        <div className="px-3 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Knowledge</div>
                        <div className="space-y-1">
                            <SidebarItem
                                icon={BookOpen}
                                label="Knowledge Bases"
                                onClick={() => setActiveView('kb')}
                            />
                        </div>
                    </div>
                </div>

                <div className="p-4 border-t border-white/5">
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500" />
                        <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium text-white truncate">Enterprise Team</div>
                            <div className="text-xs text-gray-500 truncate">Pro Plan</div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Main Content Layer */}
            <motion.div
                className="flex-1 flex flex-col bg-[#0F0F0F] min-w-0 rounded-r-xl"
                style={{ transform: "translateZ(30px)" }}
            >
                {/* Header Layer */}
                <motion.header
                    className="h-16 border-b border-white/5 flex items-center justify-between px-8 bg-[#0F0F0F] rounded-tr-xl"
                    style={{ transform: "translateZ(40px)" }}
                >
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-400">Pipeline Status</span>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Operational
                        </span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer">
                        <Search className="w-4 h-4" />
                    </div>
                </motion.header>

                {/* Dynamic Content Area */}
                <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
                    <AnimatePresence mode="wait">
                        {activeView === 'source' && (
                            <motion.div
                                key="source"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="space-y-6"
                            >
                                <h2 className="text-2xl font-bold text-white">Source Connectors</h2>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {sources.map((source) => (
                                        <div
                                            key={source.name}
                                            className="group p-6 rounded-xl border border-white/5 bg-[#111111] hover:border-brand-orange/50 hover:bg-white/5 transition-all duration-300 flex flex-col items-center justify-center gap-4 cursor-pointer"
                                        >
                                            <div className={cn("w-12 h-12 rounded-full bg-white/5 flex items-center justify-center transition-transform group-hover:scale-110", source.color)}>
                                                <source.icon className="w-6 h-6" />
                                            </div>
                                            <span className="font-medium text-gray-300 group-hover:text-white transition-colors text-center">
                                                {source.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {activeView === 'destination' && (
                            <motion.div
                                key="destination"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="space-y-6"
                            >
                                <h2 className="text-2xl font-bold text-white">Destination Connectors</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {destinations.map((dest) => (
                                        <div
                                            key={dest.name}
                                            className="group p-6 rounded-xl border border-white/5 bg-[#111111] hover:border-brand-orange/50 hover:bg-white/5 transition-all duration-300 flex flex-col items-center justify-center gap-4 cursor-pointer"
                                        >
                                            <div className={cn("w-12 h-12 rounded-full bg-white/5 flex items-center justify-center transition-transform group-hover:scale-110", dest.color)}>
                                                <dest.icon className="w-6 h-6" />
                                            </div>
                                            <div className="text-center">
                                                <div className="font-medium text-gray-300 group-hover:text-white transition-colors">
                                                    {dest.name}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {activeView === 'parser' && (
                            <motion.div
                                key="parser"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="space-y-6"
                            >
                                <h2 className="text-2xl font-bold text-white">Parser Models</h2>
                                <div className="grid grid-cols-1 gap-6">
                                    {parserModels.map((model) => (
                                        <div
                                            key={model.name}
                                            className="relative p-6 rounded-xl border border-white/5 bg-[#111111] hover:border-brand-orange/50 hover:bg-white/5 transition-all duration-300 flex items-center gap-6 group cursor-pointer"
                                        >
                                            <div className={cn("w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 transition-transform group-hover:scale-110", model.color)}>
                                                <model.icon className="w-6 h-6" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-1">
                                                    <h3 className="text-lg font-bold text-gray-300 group-hover:text-white transition-colors">
                                                        {model.name}
                                                    </h3>
                                                </div>
                                                <p className="text-sm text-gray-500">{model.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {activeView === 'embedding' && (
                            <motion.div
                                key="embedding"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="space-y-6"
                            >
                                <h2 className="text-2xl font-bold text-white">Embedding Models</h2>
                                <div className="grid grid-cols-1 gap-6">
                                    {embeddingModels.map((model) => (
                                        <div
                                            key={model.name}
                                            className="relative p-6 rounded-xl border border-white/5 bg-[#111111] hover:border-brand-orange/50 hover:bg-white/5 transition-all duration-300 flex items-center gap-6 group cursor-pointer"
                                        >
                                            <div className={cn("w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 transition-transform group-hover:scale-110", model.color)}>
                                                <model.icon className="w-6 h-6" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-1">
                                                    <h3 className="text-lg font-bold text-gray-300 group-hover:text-white transition-colors">{model.name}</h3>
                                                </div>
                                                <p className="text-sm text-gray-500">{model.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {activeView === 'kb' && (
                            <motion.div
                                key="kb"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="h-full flex flex-col"
                            >
                                {!selectedKB ? (
                                    <>
                                        <h2 className="text-2xl font-bold text-white mb-6">Knowledge Bases</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {knowledgeBases.map((kb) => (
                                                <div
                                                    key={kb.id}
                                                    onClick={() => setSelectedKBId(kb.id)}
                                                    className="group cursor-pointer p-5 rounded-xl border border-white/5 bg-[#111111] hover:border-brand-orange/50 hover:bg-white/5 transition-all duration-300 flex flex-col"
                                                >
                                                    <div className="flex items-start justify-between mb-4">
                                                        <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center bg-white/5 text-brand-orange")}>
                                                            <Sparkles className="w-5 h-5" />
                                                        </div>
                                                        {/* <div className={cn("px-2 py-0.5 rounded text-[10px] font-medium border", kb.bg, kb.color, kb.border)}>
                                                            Active
                                                        </div> */}
                                                    </div>
                                                    <h3 className="font-bold text-white mb-1 group-hover:text-brand-orange transition-colors">
                                                        {kb.name}
                                                    </h3>
                                                    <p className="text-xs text-gray-500 mb-3 line-clamp-2">
                                                        {kb.description}
                                                    </p>
                                                    <div className="flex items-center text-xs text-gray-400 group-hover:text-white transition-colors mt-auto">
                                                        View Details <ChevronRight className="w-3 h-3 ml-1" />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <div className="flex flex-col h-full">
                                        <div className="flex items-center gap-3 mb-6">
                                            <button
                                                onClick={() => setSelectedKBId(null)}
                                                className="p-1.5 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition-colors"
                                            >
                                                <ChevronRight className="w-5 h-5 rotate-180" />
                                            </button>
                                            <div>
                                                <h3 className="font-bold text-white">{selectedKB.name}</h3>
                                                <div className="text-xs text-gray-500">ID: {selectedKB.id}-8cc...</div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-1 border-b border-white/5 mb-4">
                                            {[
                                                { id: "pipelines", label: "Pipelines", icon: Activity },
                                                { id: "documents", label: "Documents", icon: FileText },
                                                { id: "search", label: "Search", icon: Search },
                                                { id: "mcp", label: "MCP", icon: Server },
                                            ].map((tab) => (
                                                <button
                                                    key={tab.id}
                                                    onClick={() => setActiveKBTab(tab.id)}
                                                    className={cn(
                                                        "flex items-center gap-2 px-3 py-2 text-xs font-medium border-b-2 transition-colors",
                                                        activeKBTab === tab.id
                                                            ? "border-brand-orange text-white"
                                                            : "border-transparent text-gray-500 hover:text-gray-300"
                                                    )}
                                                >
                                                    <tab.icon className="w-3 h-3" />
                                                    {tab.label}
                                                </button>
                                            ))}
                                        </div>

                                        <div className="flex-1 overflow-y-auto custom-scrollbar">
                                            {activeKBTab === "pipelines" && (
                                                <div className="space-y-3">
                                                    {selectedKB.pipelines.map((pipeline, i) => (
                                                        <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-white/5 bg-[#111111]">
                                                            <div className="flex items-center gap-3">
                                                                <div className={cn(
                                                                    "w-8 h-8 rounded flex items-center justify-center",
                                                                    pipeline.status === "Running" ? "bg-green-500/10 text-green-500" : "bg-gray-500/10 text-gray-500"
                                                                )}>
                                                                    <Activity className="w-4 h-4" />
                                                                </div>
                                                                <div>
                                                                    <div className="text-sm font-medium text-white">{pipeline.name}</div>
                                                                    <div className="text-[10px] text-gray-500 flex items-center gap-1">
                                                                        <Clock className="w-3 h-3" /> {pipeline.schedule}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <span className={cn(
                                                                "px-2 py-0.5 rounded text-[10px] font-medium border",
                                                                pipeline.status === "Running"
                                                                    ? "bg-green-500/10 text-green-500 border-green-500/20"
                                                                    : "bg-gray-500/10 text-gray-500 border-gray-500/20"
                                                            )}>
                                                                {pipeline.status}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {activeKBTab === "documents" && (
                                                <div className="space-y-1">
                                                    <div className="grid grid-cols-4 text-[10px] font-medium text-gray-500 px-3 pb-2">
                                                        <div className="col-span-2">Name</div>
                                                        <div>Status</div>
                                                        <div>Date</div>
                                                    </div>
                                                    {selectedKB.documents.map((doc, i) => (
                                                        <div key={i} className="grid grid-cols-4 items-center p-2 rounded hover:bg-white/5 transition-colors border-b border-white/5 last:border-0">
                                                            <div className="col-span-2 flex items-center gap-2">
                                                                <FileText className="w-3 h-3 text-gray-500" />
                                                                <span className="text-xs text-gray-300 truncate pr-2">{doc.name}</span>
                                                            </div>
                                                            <div>
                                                                <span className={cn(
                                                                    "px-1.5 py-0.5 rounded text-[10px] font-medium border",
                                                                    doc.status === "Indexed"
                                                                        ? "bg-green-500/10 text-green-500 border-green-500/20"
                                                                        : "bg-blue-500/10 text-blue-500 border-blue-500/20"
                                                                )}>
                                                                    {doc.status}
                                                                </span>
                                                            </div>
                                                            <div className="text-[10px] text-gray-500">{doc.date}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {activeKBTab === "search" && (
                                                <div className="mt-4">
                                                    <div className="relative">
                                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                                        <input
                                                            type="text"
                                                            placeholder="Ask a question..."
                                                            className="w-full bg-[#111111] border border-white/10 rounded-lg py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-brand-orange/50"
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                            {activeKBTab === "mcp" && (
                                                <div className="mt-4 p-4 rounded-xl border border-white/10 bg-[#111111]">
                                                    <h4 className="text-sm font-medium text-white mb-3">MCP Server</h4>
                                                    <div className="text-xs text-gray-300 font-mono bg-black/50 p-2 rounded border border-white/5 break-all">
                                                        https://api.ingestiq.ai/mcp/v1/server/{selectedKB.id}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </motion.div>
    );
}

function SidebarItem({ icon: Icon, label, active, onClick }: { icon: any, label: string, active?: boolean, onClick?: () => void }) {
    return (
        <div
            onClick={onClick}
            className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer",
                active
                    ? "bg-white/10 text-white"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
            )}
        >
            <Icon className="w-4 h-4" />
            {label}
        </div>
    );
}

function StatCard({ label, value, trend, trendGood, icon: Icon }: { label: string, value: string, trend: string, trendGood?: boolean, icon: any }) {
    return (
        <div className="p-5 rounded-xl border border-white/5 bg-[#111111] hover:border-white/10 transition-colors group">
            <div className="flex items-start justify-between mb-4">
                <div className="p-2 rounded-lg bg-white/5 text-gray-400 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                </div>
                <span className={cn(
                    "text-xs font-medium px-1.5 py-0.5 rounded",
                    trendGood || trend.startsWith('+')
                        ? "bg-emerald-500/10 text-emerald-500"
                        : "bg-emerald-500/10 text-emerald-500" // Defaulting to green for positive vibes in mockup
                )}>
                    {trend}
                </span>
            </div>
            <div className="text-2xl font-bold text-white mb-1">{value}</div>
            <div className="text-xs text-gray-500">{label}</div>
        </div>
    );
}

function JobRow({ name, source, status, time, icon: Icon, active }: { name: string, source: string, status: string, time: string, icon: any, active?: boolean }) {
    return (
        <div className="p-4 flex items-center gap-4 hover:bg-white/[0.02] transition-colors">
            <div className={cn(
                "w-10 h-10 rounded-lg flex items-center justify-center border",
                active ? "bg-blue-500/10 border-blue-500/20 text-blue-500" : "bg-white/5 border-white/5 text-gray-400"
            )}>
                <Icon className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-white truncate">{name}</div>
                <div className="text-xs text-gray-500">{source}</div>
            </div>
            <div className="flex items-center gap-4">
                <span className={cn(
                    "px-2.5 py-0.5 rounded-full text-xs font-medium border",
                    status === "Completed"
                        ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
                        : "bg-blue-500/10 text-blue-500 border-blue-500/20"
                )}>
                    {status}
                </span>
                <span className="text-xs text-gray-500 w-12 text-right">{time}</span>
            </div>
        </div>
    );
}
