"use client";

import { useParams } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import {
    Video, Mic, Globe, Image as ImageIcon, FileText,
    Database, HardDrive, Search, ArrowRight, CheckCircle2,
    Zap, Shield, Clock, XCircle, TrendingUp, BarChart3,
    MessageSquare, Layers, Lock
} from "lucide-react";
import { useRef } from "react";

const solutionsData: Record<string, any> = {
    "meeting-intelligence": {
        title: "Meeting Intelligence",
        subtitle: "Turn hours of calls into actionable summaries.",
        description: "Stop taking notes. IngestIQ automatically records, transcribes, and extracts key decisions from your Zoom, Google Meet, and Teams calls.",
        icon: Video,
        color: "text-blue-400",
        gradient: "from-blue-500 to-purple-500",
        stats: [
            { label: "Time Saved / Week", value: "12 hrs" },
            { label: "Accuracy", value: "99.8%" },
            { label: "Integrations", value: "50+" }
        ],
        problem: {
            title: "The Manual Grind",
            points: [
                "Distracted by note-taking during critical calls",
                "Lost action items and forgotten follow-ups",
                "No searchable record of verbal decisions",
                "Hours wasted summarizing calls for the team"
            ]
        },
        solution: {
            title: "The IngestIQ Advantage",
            points: [
                "Full focus on the conversation, not the notes",
                "AI-extracted action items synced to Jira/Linear",
                "Instant semantic search across all past meetings",
                "Automated email summaries sent to stakeholders"
            ]
        },
        steps: [
            {
                title: "Connect Your Calendar",
                description: "Link Google or Outlook calendar. IngestIQ automatically joins scheduled calls.",
                icon: Clock
            },
            {
                title: "Real-time Transcription",
                description: "Our engine transcribes with speaker diarization in 30+ languages as you speak.",
                icon: Mic
            },
            {
                title: "AI Extraction",
                description: "LLMs identify decisions, blockers, and action items from the raw text.",
                icon: Zap
            },
            {
                title: "Sync & Act",
                description: "Summaries are pushed to Slack, CRM, and Project Management tools instantly.",
                icon: ArrowRight
            }
        ],
        features: [
            "Automatic Speaker Diarization",
            "Sentiment Analysis & Key Topics",
            "Action Item Extraction",
            "CRM Integration (Salesforce, HubSpot)"
        ],
        visual: "waveform"
    },
    "market-pulse": {
        title: "Market Pulse",
        subtitle: "Track competitors and news in real-time.",
        description: "Don't let the market surprise you. Monitor competitor pricing, news releases, and social sentiment 24/7 with our advanced web scraping engine.",
        icon: Globe,
        color: "text-orange-400",
        gradient: "from-orange-500 to-red-500",
        stats: [
            { label: "Data Sources", value: "10k+" },
            { label: "Latency", value: "< 5min" },
            { label: "Competitors", value: "Unlimited" }
        ],
        problem: {
            title: "Flying Blind",
            points: [
                "Manually checking competitor websites",
                "Missed pricing changes and product launches",
                "Delayed reaction to negative PR or reviews",
                "Scattered data across spreadsheets and emails"
            ]
        },
        solution: {
            title: "Total Market Visibility",
            points: [
                "Automated 24/7 monitoring of any URL",
                "Instant alerts for price drops or copy changes",
                "Sentiment analysis on social media & news",
                "Centralized dashboard for all market intel"
            ]
        },
        steps: [
            {
                title: "Define Targets",
                description: "Input competitor URLs, keywords, or social handles to monitor.",
                icon: Search
            },
            {
                title: "Smart Crawling",
                description: "Our headless browsers navigate complex sites, handling auth and captchas.",
                icon: Globe
            },
            {
                title: "Change Detection",
                description: "AI compares snapshots to identify meaningful changes (price, copy, features).",
                icon: TrendingUp
            },
            {
                title: "Insight Delivery",
                description: "Receive daily digests or instant alerts via Slack/Email.",
                icon: MessageSquare
            }
        ],
        features: [
            "Real-time Price Monitoring",
            "News & PR Aggregation",
            "Social Sentiment Analysis",
            "Competitor Product Change Detection"
        ],
        visual: "chart"
    },
    "visual-knowledge": {
        title: "Visual Knowledge",
        subtitle: "Chat with blueprints, charts, and diagrams.",
        description: "Unlock the 80% of data trapped in visual formats. Our multimodal AI parses complex PDFs, engineering blueprints, and financial charts with pixel-perfect accuracy.",
        icon: ImageIcon,
        color: "text-emerald-400",
        gradient: "from-emerald-500 to-cyan-500",
        stats: [
            { label: "Formats", value: "PDF, PNG, CAD" },
            { label: "Extraction Speed", value: "2s / page" },
            { label: "Accuracy", value: "99.5%" }
        ],
        problem: {
            title: "Trapped Data",
            points: [
                "Manual data entry from invoices and receipts",
                "Unsearchable technical diagrams and schematics",
                "Lost insights in slide decks and charts",
                "Slow retrieval of information from scanned docs"
            ]
        },
        solution: {
            title: "Pixel-Perfect Intelligence",
            points: [
                "Instant OCR for handwriting and tables",
                "Vector search across visual content",
                "Chat with complex engineering blueprints",
                "Automated data extraction to SQL/Excel"
            ]
        },
        steps: [
            {
                title: "Upload Documents",
                description: "Drag & drop PDFs, images, or connect a cloud folder.",
                icon: FileText
            },
            {
                title: "Vision Processing",
                description: "Multimodal models analyze layout, text, and visual elements.",
                icon: ImageIcon
            },
            {
                title: "Structure Extraction",
                description: "Tables, charts, and diagrams are converted to structured JSON.",
                icon: Layers
            },
            {
                title: "Interactive Query",
                description: "Ask questions like 'What is the total in Q3?' directly to the document.",
                icon: MessageSquare
            }
        ],
        features: [
            "OCR for Handwritten Text",
            "Table Structure Recognition",
            "Technical Diagram Parsing",
            "CAD File Support"
        ],
        visual: "scan"
    },
    "unified-knowledge": {
        title: "Unified Knowledge",
        subtitle: "One search bar for your entire company.",
        description: "Break down information silos. Connect Google Drive, Slack, Notion, and S3 into a single, secure knowledge graph that answers questions instantly.",
        icon: Database,
        color: "text-pink-400",
        gradient: "from-pink-500 to-rose-500",
        stats: [
            { label: "Connectors", value: "100+" },
            { label: "Setup Time", value: "10 mins" },
            { label: "Security", value: "SOC2 Type II" }
        ],
        problem: {
            title: "Information Silos",
            points: [
                "Wasting 20% of the week searching for files",
                "Duplicated work due to lack of visibility",
                "Outdated wikis and documentation",
                "Security risks from scattered data access"
            ]
        },
        solution: {
            title: "Universal Intelligence",
            points: [
                "Search across Slack, Drive, Jira, and more",
                "Answers grounded in your actual data",
                "Respects existing permission settings (RBAC)",
                "Always up-to-date with real-time sync"
            ]
        },
        steps: [
            {
                title: "Connect Sources",
                description: "One-click auth for GDrive, Slack, Notion, and 50+ other tools.",
                icon: Database
            },
            {
                title: "Index & Vectorize",
                description: "Data is chunked, embedded, and indexed in our secure vector store.",
                icon: HardDrive
            },
            {
                title: "Permission Sync",
                description: "We mirror your existing ACLs so users only see what they're allowed to.",
                icon: Lock
            },
            {
                title: "Ask Anything",
                description: "Use the search bar or API to query your entire knowledge base.",
                icon: Search
            }
        ],
        features: [
            "RBAC & SSO Security",
            "Real-time Indexing",
            "Citation & Source Linking",
            "Customizable Search Relevance"
        ],
        visual: "graph"
    }
};

export default function SolutionPage() {
    const params = useParams();
    const slug = params.slug as string;
    const data = solutionsData[slug];
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    if (!data) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center text-white">
                Solution not found.
            </div>
        );
    }

    const Icon = data.icon;

    return (
        <main className="min-h-screen bg-black text-white pt-24 pb-20 overflow-hidden">
            {/* Hero Section */}
            <section className="relative px-4 md:px-8 py-20">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-brand-orange/10 to-transparent rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 ${data.color} mb-6`}>
                            <Icon className="w-4 h-4" />
                            <span className="text-sm font-medium">{data.title}</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                            {data.subtitle}
                        </h1>
                        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                            {data.description}
                        </p>

                        {/* Stats Banner */}
                        <div className="grid grid-cols-3 gap-4 mb-8 border-t border-white/10 pt-8">
                            {data.stats.map((stat: any, i: number) => (
                                <div key={i}>
                                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                                    <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Button size="lg" className="rounded-full bg-brand-orange hover:bg-brand-orange/90 text-white px-8">
                                Start Free Trial
                            </Button>
                            <Button size="lg" variant="outline" className="rounded-full border-white/10 hover:bg-white/5 text-white px-8">
                                Schedule Demo
                            </Button>
                        </div>
                    </motion.div>

                    {/* Visual Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative aspect-square rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden"
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${data.gradient} opacity-10`} />
                        <BorderBeam duration={15} colorFrom="#FF4F00" colorTo="#FF8F00" />

                        <div className="absolute inset-0 flex items-center justify-center">
                            {/* Abstract Visual Representation based on type */}
                            {data.visual === "waveform" && (
                                <div className="flex items-center gap-1">
                                    {[...Array(20)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="w-2 bg-blue-500 rounded-full"
                                            animate={{ height: [20, 60, 30, 80, 40, 20] }}
                                            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.05, ease: "easeInOut" }}
                                        />
                                    ))}
                                </div>
                            )}
                            {data.visual === "chart" && (
                                <div className="relative w-64 h-64">
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20" />
                                    <div className="absolute bottom-0 left-0 w-1 h-full bg-white/20" />
                                    <motion.path
                                        d="M0 200 Q 50 100 100 150 T 200 50"
                                        fill="none"
                                        stroke="#f97316"
                                        strokeWidth="4"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 2, ease: "easeInOut" }}
                                    />
                                    <motion.path
                                        d="M0 150 Q 50 200 100 100 T 200 180"
                                        fill="none"
                                        stroke="#fbbf24"
                                        strokeWidth="4"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
                                    />
                                </div>
                            )}
                            {data.visual === "scan" && (
                                <div className="relative w-64 h-64 bg-gray-800 rounded-lg flex items-center justify-center p-4">
                                    <FileText className="w-24 h-24 text-emerald-500 opacity-20 absolute" />
                                    <motion.div
                                        className="absolute top-0 left-0 w-full h-1 bg-emerald-400"
                                        initial={{ y: 0 }}
                                        animate={{ y: "100%" }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    />
                                    <div className="text-sm text-gray-300 text-center">
                                        <p>Document Scan in Progress...</p>
                                        <p className="text-xs text-gray-500 mt-1">Extracting text & visuals</p>
                                    </div>
                                </div>
                            )}
                            {data.visual === "graph" && (
                                <div className="relative w-64 h-64 flex items-center justify-center">
                                    <motion.div
                                        className="absolute w-24 h-24 rounded-full bg-pink-500/20"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: [0, 1, 0.8, 1.2, 1] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                    <motion.div
                                        className="absolute w-16 h-16 rounded-full bg-rose-500/20"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: [0, 1.2, 0.9, 1.1, 1] }}
                                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                                    />
                                    <Database className="w-20 h-20 text-pink-400 opacity-70" />
                                    <motion.div
                                        className="absolute w-2 h-2 rounded-full bg-white"
                                        initial={{ x: 0, y: 0 }}
                                        animate={{
                                            x: [0, 50, -50, 0, 70, -70, 0],
                                            y: [0, -30, 40, -20, 60, -10, 0]
                                        }}
                                        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                    />
                                </div>
                            )}
                            {/* Fallback for others */}
                            {(data.visual !== "waveform" && data.visual !== "chart" && data.visual !== "scan" && data.visual !== "graph") && (
                                <Icon className={`w-32 h-32 ${data.color} opacity-50`} />
                            )}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Problem vs Solution Section */}
            <section className="px-4 md:px-8 py-24 bg-white/5">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why the old way is broken</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Manual processes are slow, error-prone, and unscalable. See the difference IngestIQ makes.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* The Old Way */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl bg-red-500/5 border border-red-500/10 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-20">
                                <XCircle className="w-24 h-24 text-red-500" />
                            </div>
                            <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-2">
                                <XCircle className="w-5 h-5" /> The Old Way
                            </h3>
                            <ul className="space-y-4">
                                {data.problem.points.map((point: string, i: number) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-400">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-2" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* The IngestIQ Way */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl bg-emerald-500/5 border border-emerald-500/10 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-20">
                                <CheckCircle2 className="w-24 h-24 text-emerald-500" />
                            </div>
                            <h3 className="text-xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5" /> The IngestIQ Way
                            </h3>
                            <ul className="space-y-4">
                                {data.solution.points.map((point: string, i: number) => (
                                    <li key={i} className="flex items-start gap-3 text-white">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="px-4 md:px-8 py-24 relative" ref={containerRef}>
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">How it works</h2>
                        <p className="text-gray-400">From raw data to actionable intelligence in four simple steps.</p>
                    </div>

                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />

                        <div className="space-y-12 md:space-y-24">
                            {data.steps.map((step: any, i: number) => {
                                const StepIcon = step.icon;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                    >
                                        <div className="flex-1 text-left md:text-right">
                                            {i % 2 === 0 && (
                                                <>
                                                    <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                                                    <p className="text-gray-400">{step.description}</p>
                                                </>
                                            )}
                                        </div>

                                        <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-2xl bg-[#111] border border-white/10 flex items-center justify-center shadow-xl">
                                            <div className={`absolute inset-0 bg-gradient-to-br ${data.gradient} opacity-20 blur-lg`} />
                                            <StepIcon className={`w-6 h-6 ${data.color}`} />
                                            <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold border border-black">
                                                {i + 1}
                                            </div>
                                        </div>

                                        <div className="flex-1 text-left">
                                            {i % 2 !== 0 && (
                                                <>
                                                    <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                                                    <p className="text-gray-400">{step.description}</p>
                                                </>
                                            )}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="px-4 md:px-8 py-20 bg-white/5 border-t border-white/5">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold mb-4">Technical Capabilities</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {data.features.map((feature: string, i: number) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 rounded-2xl bg-black border border-white/10 hover:border-brand-orange/50 transition-colors group"
                            >
                                <div className={`w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 ${data.color} group-hover:scale-110 transition-transform`}>
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-bold text-white">{feature}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
