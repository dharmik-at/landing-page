"use client";

import { useParams, useRouter } from "next/navigation";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import {
    Video, Mic, Globe, Image as ImageIcon, FileText,
    Database, HardDrive, Search, ArrowRight, CheckCircle2,
    Zap, Shield, Clock, XCircle, TrendingUp, BarChart3,
    MessageSquare, Layers, Lock, Cpu, Activity, Scan,
    Users, Sparkles
} from "lucide-react";
import { MeetingIntelligenceAnimation } from "@/components/solutions/MeetingIntelligenceAnimation";
import { WebIntelligenceAnimation } from "@/components/solutions/WebIntelligenceAnimation";
import { VisualKnowledgeAnimation } from "@/components/solutions/VisualKnowledgeAnimation";
import { UnifiedKnowledgeAnimation } from "@/components/solutions/UnifiedKnowledgeAnimation";
import { BlurReveal } from "@/components/ui/blur-reveal";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const solutionsData: Record<string, any> = {
    "meeting-intelligence": {
        title: "Meeting Intelligence",
        subtitle: "Turn hours of calls into actionable summaries.",
        description: "Stop taking notes. IngestIQ automatically records, transcribes, and extracts key decisions from your Zoom, Google Meet, and Teams calls.",
        icon: Video,
        color: "text-blue-400",
        borderColor: "border-blue-500/50",
        shadowColor: "shadow-blue-500/20",
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
    "web-intelligence": {
        title: "Web Intelligence",
        subtitle: "Turn any website into a conversation.",
        description: "Don't just browse. Interact. Submit any URL or sitemap, and IngestIQ instantly scrapes, processes, and indexes the content, allowing you to chat with websites, documentation, and wikis as if they were your own data.",
        icon: Globe,
        color: "text-orange-400",
        borderColor: "border-orange-500/50",
        shadowColor: "shadow-orange-500/20",
        gradient: "from-orange-500 to-red-500",
        stats: [
            { label: "Setup Time", value: "Instant" },
            { label: "Capacity", value: "Unlimited" },
            { label: "Sync", value: "Auto-Refresh" }
        ],
        problem: {
            title: "The Static Web",
            points: [
                "Wasting hours searching through documentation",
                "Manually copy-pasting content into AI tools",
                "Broken or outdated internal wikis",
                "No programmatic access to public web data"
            ]
        },
        solution: {
            title: "The Interactive Web",
            points: [
                "Instant scraping of dynamic JS websites",
                "Chat interface for any URL or Sitemap",
                "API access to queried web data",
                "Automatic re-crawling to keep data fresh"
            ]
        },
        steps: [
            {
                title: "Add URLs",
                description: "Paste a link or upload a sitemap. We support any public domain.",
                icon: Search
            },
            {
                title: "Smart Crawl",
                description: "Our headless browsers handle JS rendering, navigation, and auth.",
                icon: Globe
            },
            {
                title: "Index & Vectorize",
                description: "Content is chunked and embedded for semantic search.",
                icon: Layers
            },
            {
                title: "Chat & Query",
                description: "Ask questions and get answers with citations from the source.",
                icon: MessageSquare
            }
        ],
        features: [
            "Sitemap Support",
            "JavaScript Rendering",
            "Scheduled Re-crawls",
            "Citations & Sources"
        ],
        visual: "chart"
    },
    "visual-knowledge": {
        title: "Visual Knowledge",
        subtitle: "Chat with blueprints, charts, and diagrams.",
        description: "Unlock the 80% of data trapped in visual formats. Our multimodal AI parses complex PDFs, engineering blueprints, and financial charts with pixel-perfect accuracy.",
        icon: ImageIcon,
        color: "text-emerald-400",
        borderColor: "border-emerald-500/50",
        shadowColor: "shadow-emerald-500/20",
        gradient: "from-emerald-500 to-cyan-500",
        stats: [
            { label: "Formats", value: "PDF, PNG" },
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

        ],
        visual: "scan"
    },
    "unified-knowledge": {
        title: "Unified Knowledge",
        subtitle: "One search bar for your entire company.",
        description: "Break down information silos. Connect Google Drive, Slack, Notion, and S3 into a single, secure knowledge graph that answers questions instantly.",
        icon: Database,
        color: "text-pink-400",
        borderColor: "border-pink-500/50",
        shadowColor: "shadow-pink-500/20",
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
    const router = useRouter();
    const params = useParams();
    const slug = params.slug as string;
    const data = solutionsData[slug];

    // Refs for GSAP
    const containerRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLDivElement>(null);
    const stepsRef = useRef<HTMLDivElement>(null);
    const progressLineRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!data) return;

        // 1. Snappier Hero Animation Timeline
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        tl.from(".hero-badge", { y: -20, opacity: 0, duration: 0.6 })
            .from(".hero-stats", { scale: 0.9, opacity: 0, duration: 0.6 }, "-=0.6")
            .from(".hero-buttons", { y: 20, opacity: 0, duration: 0.6 }, "-=0.5")
            .from(".hero-visual", { scale: 0.5, opacity: 0, rotationY: 45, duration: 1.2, ease: "elastic.out(1, 0.75)" }, "-=1");

        // 2. Hero Visual Parallax
        const heroSection = heroRef.current;
        if (heroSection) {
            heroSection.addEventListener("mousemove", (e) => {
                const x = (e.clientX / window.innerWidth - 0.5) * 30;
                const y = (e.clientY / window.innerHeight - 0.5) * 30;
                gsap.to(".hero-visual", {
                    rotationY: x,
                    rotationX: -y,
                    duration: 1.5,
                    ease: "power2.out"
                });
            });
        }

        // 3. Abstract Visual Animations (Continuous & Dynamic)
        if (data.visual === "waveform") {
            gsap.to(".visual-bar", {
                height: "random(10, 100)",
                duration: 0.4,
                repeat: -1,
                yoyo: true,
                stagger: {
                    each: 0.05,
                    from: "center",
                    grid: "auto"
                },
                ease: "power1.inOut"
            });
        }

        // 4. ScrollTrigger for "How it Works" Progress Line
        if (stepsRef.current && progressLineRef.current) {
            gsap.fromTo(progressLineRef.current,
                { scaleY: 0 },
                {
                    scaleY: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: stepsRef.current,
                        start: "top center",
                        end: "bottom center",
                        scrub: true
                    }
                }
            );
        }

        // 5. Reveal Steps on Scroll with 3D Flip
        const steps = gsap.utils.toArray(".step-card");
        steps.forEach((step: any, i) => {
            gsap.from(step, {
                opacity: 0,
                y: 50,
                rotationX: -15,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: step,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            });
        });

        // 6. 3D Tilt Effect for Cards
        const tiltCards = document.querySelectorAll(".tilt-card");
        tiltCards.forEach((card: any) => {
            card.addEventListener("mousemove", (e: any) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -5; // Max 5deg
                const rotateY = ((x - centerX) / centerX) * 5;

                gsap.to(card, {
                    perspective: 1000,
                    rotateX: rotateX,
                    rotateY: rotateY,
                    scale: 1.02,
                    duration: 0.4,
                    ease: "power2.out"
                });
            });
            card.addEventListener("mouseleave", () => {
                gsap.to(card, {
                    rotateX: 0,
                    rotateY: 0,
                    scale: 1,
                    duration: 0.6,
                    ease: "elastic.out(1, 0.5)"
                });
            });
        });

        // 7. Magnetic Hover Effect for Buttons
        const buttons = document.querySelectorAll(".magnetic-btn");
        buttons.forEach((btn) => {
            btn.addEventListener("mousemove", (e: any) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.3, ease: "power2.out" });
            });
            btn.addEventListener("mouseleave", () => {
                gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
            });
        });

    }, { scope: containerRef, dependencies: [slug] });

    if (!data) {
        return (
            <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center text-gray-900 dark:text-white">
                Solution not found.
            </div>
        );
    }

    const Icon = data.icon;

    return (
        <main ref={containerRef} className="min-h-screen text-gray-900 dark:text-white pt-24 pb-20 overflow-hidden font-sans selection:bg-brand-orange/30">

            {/* Hero Section */}
            <section ref={heroRef} className="relative px-4 md:px-8 py-20 z-10 [perspective:1000px]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-orange/20 rounded-full blur-[120px] pointer-events-none opacity-50" />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className={`hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 ${data.color} mb-8 backdrop-blur-md`}>
                            <Icon className="w-4 h-4" />
                            <span className="text-sm font-mono tracking-wide uppercase">{data.title}</span>
                        </div>
                        <h1 className="hero-title text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                            <BlurReveal delay={0.2} className="text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-600 dark:from-white dark:to-white/60" as="span">
                                {data.subtitle}
                            </BlurReveal>
                        </h1>
                        <p className="hero-desc text-xl text-gray-500 dark:text-gray-400 mb-10 leading-relaxed max-w-xl">
                            <BlurReveal delay={0.4} as="span">
                                {data.description}
                            </BlurReveal>
                        </p>

                        {/* HUD Stats */}
                        <div className="hero-stats grid grid-cols-3 gap-px bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/10 rounded-2xl overflow-hidden mb-10 backdrop-blur-sm">
                            {data.stats.map((stat: any, i: number) => (
                                <div key={i} className="bg-white/40 dark:bg-black/40 p-6 flex flex-col items-center justify-center text-center group hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                                    <div className={`text-2xl font-bold text-gray-900 dark:text-white mb-1 ${data.color}`}>{stat.value}</div>
                                    <div className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <div className="hero-buttons flex flex-wrap gap-4">
                            <Button size="lg" className="magnetic-btn h-12 rounded-full bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 px-8 font-semibold text-base" onClick={() => router.push("/#contact")}>
                                Contact Us
                            </Button>
                            {/* <Button size="lg" variant="outline" className="magnetic-btn h-12 rounded-full border-black/20 dark:border-white/20 hover:bg-black/10 dark:hover:bg-white/10 text-gray-900 dark:text-white px-8 text-base">
                                Schedule Demo
                            </Button> */}
                        </div>
                    </div>

                    {/* Visual Placeholder */}
                    <div className="hero-visual relative aspect-square [perspective:1000px] group">
                        <div className={`absolute inset-0 bg-gradient-to-br ${data.gradient} opacity-10 blur-[100px] transition-opacity duration-500 group-hover:opacity-20`} />

                        {/* Main Container Frame */}
                        <div className="relative h-full w-full rounded-3xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/80 backdrop-blur-2xl overflow-hidden shadow-2xl [transform-style:preserve-3d] group-hover:[transform:rotateX(2deg)_rotateY(-2deg)] transition-transform duration-500 ease-out">
                            {/* Background Grid */}
                            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/20 dark:via-white/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/20 dark:via-white/20 to-transparent" />

                            {/* Window Controls */}
                            <div className="absolute top-4 right-4 flex gap-2 z-20">
                                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                                <div className="w-2 h-2 rounded-full bg-green-500/50" />
                            </div>

                            <BorderBeam duration={8} colorFrom="#ffffff" colorTo={data.color.split('-')[1]} />

                            {/* ------------------------------------------------------------------
                                VISUAL 1: MEETING INTELLIGENCE (High-Fidelity Animation)
                                Concept: Chaos -> AI Core -> Structured Summary
                               ------------------------------------------------------------------ */}
                            {data.visual === "waveform" && (
                                <div className="absolute inset-0">
                                    <MeetingIntelligenceAnimation />
                                </div>
                            )}

                            {/* ------------------------------------------------------------------
                                VISUAL 2: WEB INTELLIGENCE (Process: URL -> Scan -> Data -> Chat)
                               ------------------------------------------------------------------ */}
                            {data.visual === "chart" && (
                                <div className="absolute inset-0">
                                    <WebIntelligenceAnimation />
                                </div>
                            )}

                            {/* ------------------------------------------------------------------
                                VISUAL 3: VISUAL KNOWLEDGE (Process: Scan -> Table -> JSON)
                               ------------------------------------------------------------------ */}
                            {data.visual === "scan" && (
                                <div className="absolute inset-0">
                                    <VisualKnowledgeAnimation />
                                </div>
                            )}

                            {/* ------------------------------------------------------------------
                                VISUAL 4: UNIFIED KNOWLEDGE (Process: Sources -> Core -> Result)
                               ------------------------------------------------------------------ */}
                            {data.visual === "graph" && (
                                <div className="absolute inset-0">
                                    <UnifiedKnowledgeAnimation />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem vs Solution Section - Holographic Cards */}
            <section className="px-4 md:px-8 py-32 z-10 relative">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Evolution of Intelligence</h2>
                        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                            Upgrade from manual workflows to autonomous AI agents.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 [perspective:1000px]">
                        {/* The Old Way */}
                        <div className="tilt-card step-card group relative p-8 rounded-3xl bg-gray-50 dark:bg-[#0A0A0A] border border-black/5 dark:border-white/5 overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-900/10 via-transparent to-transparent opacity-50" />
                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300">Legacy Process</h3>
                                    <XCircle className="w-8 h-8 text-red-500/50" />
                                </div>
                                <ul className="space-y-6">
                                    {data.problem.points.map((point: string, i: number) => (
                                        <li key={i} className="flex items-start gap-4 text-gray-500 group-hover:text-gray-400 transition-colors">
                                            <div className="w-1.5 h-1.5 rounded-full bg-red-900/50 mt-2.5" />
                                            <span className="text-lg">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* The IngestIQ Way */}
                        <div className={`tilt-card step-card group relative p-8 rounded-3xl bg-white dark:bg-[#0A0A0A] border ${data.borderColor} overflow-hidden shadow-2xl ${data.shadowColor}`}>
                            <div className={`absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] ${data.gradient.replace('from-', 'from-').replace('to-', 'via-transparent to-transparent')} opacity-10`} />
                            <BorderBeam duration={10} size={300} colorFrom="transparent" colorTo="var(--foreground)" />

                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">IngestIQ AI</h3>
                                    <div className={`p-2 rounded-lg bg-black/5 dark:bg-white/5 ${data.color}`}>
                                        <Zap className="w-6 h-6" />
                                    </div>
                                </div>
                                <ul className="space-y-6">
                                    {data.solution.points.map((point: string, i: number) => (
                                        <li key={i} className="flex items-start gap-4 text-gray-700 dark:text-gray-200">
                                            <div className={`w-1.5 h-1.5 rounded-full ${data.color.replace('text-', 'bg-')} mt-2.5 shadow-[0_0_10px_currentColor]`} />
                                            <span className="text-lg">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section - Fixed Alignment */}
            <section className="px-4 md:px-8 py-32 relative z-10" ref={stepsRef}>
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">System Architecture</h2>
                        <p className="text-gray-500 dark:text-gray-400">Autonomous processing pipeline.</p>
                    </div>

                    <div className="relative">
                        {/* Central Progress Line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-black/10 dark:bg-white/10 -translate-x-1/2 hidden md:block">
                            <div
                                ref={progressLineRef}
                                className={`w-full h-full bg-gradient-to-b ${data.gradient} origin-top`}
                            />
                        </div>

                        <div className="space-y-24 [perspective:1000px]">
                            {data.steps.map((step: any, i: number) => {
                                const StepIcon = step.icon;
                                const isEven = i % 2 === 0;
                                return (
                                    <div key={i} className="relative flex items-center justify-between md:justify-center">
                                        {/* Left Content (Text for Even, Empty for Odd) */}
                                        <div className={`tilt-card step-card hidden md:block w-1/2 pr-12 text-right ${!isEven ? 'invisible' : ''}`}>
                                            <div>
                                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                                                <p className="text-gray-500 dark:text-gray-400">{step.description}</p>
                                            </div>
                                        </div>

                                        {/* Center Icon */}
                                        <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-2xl bg-white dark:bg-[#0A0A0A] border border-black/10 dark:border-white/10 flex items-center justify-center shadow-2xl group hover:scale-110 transition-transform duration-300 cursor-default">
                                            <div className={`absolute inset-0 bg-gradient-to-br ${data.gradient} opacity-0 group-hover:opacity-20 transition-opacity rounded-2xl blur-md`} />
                                            <StepIcon className={`w-6 h-6 ${data.color}`} />
                                            <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-white dark:bg-[#0A0A0A] border border-black/10 dark:border-white/10 flex items-center justify-center text-[10px] font-mono font-bold text-gray-500">
                                                0{i + 1}
                                            </div>
                                        </div>

                                        {/* Right Content (Text for Odd, Empty for Even) */}
                                        <div className={`tilt-card step-card flex-1 md:w-1/2 pl-8 md:pl-12 text-left ${isEven ? 'hidden md:invisible md:block' : ''}`}>
                                            <div>
                                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                                                <p className="text-gray-500 dark:text-gray-400">{step.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Capabilities Grid */}
            <section className="px-4 md:px-8 py-24 bg-black/[0.02] dark:bg-white/[0.02] border-t border-black/5 dark:border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Core Capabilities</h2>
                        <div className="h-px flex-1 bg-black/10 dark:bg-white/10 ml-8" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 [perspective:1000px]">
                        {data.features.map((feature: string, i: number) => (
                            <div
                                key={i}
                                className="tilt-card step-card group p-6 rounded-xl bg-white dark:bg-black border border-black/10 dark:border-white/10 hover:border-brand-orange/30 dark:hover:border-white/20 transition-all hover:bg-black/[0.02] dark:hover:bg-white/[0.02]"
                            >
                                <div className={`w-10 h-10 rounded-lg bg-black/5 dark:bg-white/5 flex items-center justify-center mb-4 ${data.color} group-hover:scale-110 transition-transform duration-500`}>
                                    <Cpu className="w-5 h-5" />
                                </div>
                                <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wide mb-2">{feature}</h3>
                                <div className={`h-0.5 w-8 ${data.color.replace('text-', 'bg-')} opacity-50`} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
