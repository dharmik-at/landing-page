"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FileText, Image as ImageIcon, BarChart3, Box, Scan, Sparkles, MessageSquare, ArrowRight } from "lucide-react";

export function VisualKnowledgeAnimation() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });

        // Initial States
        gsap.set(".headline-text", { opacity: 0, y: 10 });
        gsap.set(".bg-blueprint", { opacity: 0, scale: 1.1 });
        gsap.set(".pdf-thumbnail", { opacity: 0, scale: 0.5, y: 50 });
        gsap.set(".doc-viewer", { opacity: 0, scale: 0.9 });
        gsap.set(".doc-layer", { opacity: 0, x: 50 });
        gsap.set(".scan-beam", { opacity: 0, top: "-10%" });
        gsap.set(".data-chip", { opacity: 0, scale: 0 });
        gsap.set(".ai-orb", { opacity: 0, scale: 0 });
        gsap.set(".chat-panel", { opacity: 0, scale: 0.9, y: 20 });
        gsap.set(".chat-msg", { opacity: 0, x: -10 });

        // 1. OPENING VIEW (0.0–1.2s)
        tl.to(".headline-text", { opacity: 1, y: 0, duration: 1, ease: "power2.out" })
            .to(".bg-blueprint", { opacity: 0.1, scale: 1, duration: 2, ease: "power1.out" }, "<");

        // 2. FILE DROP (1.2–2.4s)
        // Thumbnail enters
        tl.to(".pdf-thumbnail", { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: "back.out(1.5)" }, "1.2")
            // Expands to viewer
            .to(".pdf-thumbnail", { opacity: 0, scale: 1.5, duration: 0.4 }, "1.8")
            .to(".doc-viewer", { opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" }, "1.8")
            // Layers slide in
            .to(".doc-layer", {
                opacity: 1,
                x: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out"
            }, "2.0");

        // 3. AI VISION / SCANNING (2.4–5.0s)
        // Beam appears and scans
        tl.to(".scan-beam", { opacity: 1, duration: 0.2 }, "2.4")
            .to(".scan-beam", { top: "110%", duration: 2.0, ease: "linear" }, "2.4");

        // Elements glow as scanned (simulated by opacity/color change)
        tl.to(".blueprint-path", { stroke: "#0A84FF", strokeWidth: 2, duration: 0.5, stagger: 0.1 }, "2.6")
            .to(".chart-bar", { fill: "#6E63FF", duration: 0.5, stagger: 0.1 }, "3.0")
            .to(".schematic-box", { borderColor: "#0A84FF", boxShadow: "0 0 10px rgba(10,132,255,0.5)", duration: 0.5, stagger: 0.1 }, "3.4");

        // 4. DATA EXTRACTION (5.0–7.0s)
        // Orb appears
        tl.to(".ai-orb", { opacity: 1, scale: 1, duration: 0.6, ease: "elastic.out(1, 0.6)" }, "4.8");

        // Chips extract from layers
        tl.to(".data-chip", {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            stagger: 0.1,
            ease: "back.out(1.7)"
        }, "5.0")
            // Chips move to orb
            .to(".data-chip", {
                x: 0, // Move to center (relative to their parent, we might need absolute positioning logic or just center them visually)
                y: 0, // Assuming we position them absolutely relative to container for the 'suck in' effect, or we just fade them out into the orb
                scale: 0,
                opacity: 0,
                duration: 0.8,
                stagger: 0.05,
                ease: "power2.in"
            }, "5.8");

        // 5. CONVERSATIONAL OUTPUT (7.0–8.8s)
        // Viewer fades out/blurs
        tl.to(".doc-viewer", { opacity: 0.2, filter: "blur(5px)", duration: 0.5 }, "6.8");

        // Chat panel emerges
        tl.to(".chat-panel", { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "power3.out" }, "7.0");

        // Messages appear
        tl.to(".chat-msg", {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.3,
            ease: "power2.out"
        }, "7.5");

        // 6. LOOP RESET (8.8–10.0s)
        tl.to([".chat-panel", ".ai-orb", ".headline-text", ".bg-blueprint"], {
            opacity: 0,
            duration: 1.0
        }, "9.0")
            .to(".doc-viewer", { opacity: 0, duration: 0.5 }, "9.0");

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="relative w-full h-full overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50/50 to-white/80 dark:from-gray-900/50 dark:to-black/80 backdrop-blur-xl border border-black/10 dark:border-white/10 shadow-2xl perspective-1000">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-50" />

            {/* Background Blueprint Parallax */}
            <div className="bg-blueprint absolute inset-0 opacity-10 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 400 400">
                    <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                    <circle cx="200" cy="200" r="100" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="5,5" />
                    <line x1="0" y1="0" x2="400" y2="400" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                    <line x1="400" y1="0" x2="0" y2="400" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                </svg>
            </div>



            {/* 2. File Drop Thumbnail */}
            <div className="pdf-thumbnail absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-20 bg-white/80 dark:bg-white/10 backdrop-blur-md border border-black/10 dark:border-white/20 rounded-lg flex items-center justify-center shadow-2xl z-20">
                <FileText className="w-8 h-8 text-blue-400" />
                <div className="absolute bottom-2 left-2 right-2 h-0.5 bg-white/20 rounded" />
                <div className="absolute bottom-3 left-2 right-5 h-0.5 bg-white/20 rounded" />
            </div>

            {/* 3. Document Viewer */}
            <div className="doc-viewer absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[60%] bg-white/90 dark:bg-[#0F0F11]/90 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col z-10">
                {/* Header */}
                <div className="h-6 border-b border-black/10 dark:border-white/10 flex items-center px-2 gap-1.5 bg-black/5 dark:bg-white/5">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
                    <div className="ml-1 text-[6px] text-gray-400 font-mono">blueprint_v2.pdf</div>
                </div>

                <div className="flex-1 relative p-2 grid grid-cols-2 gap-2 overflow-hidden">
                    {/* Layer 1: Blueprint */}
                    <div className="doc-layer col-span-1 bg-blue-900/10 border border-blue-500/20 rounded-lg p-2 relative overflow-hidden">
                        <div className="absolute top-1 left-1 text-[6px] text-blue-400 uppercase tracking-widest">Schematic A</div>
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                            <circle className="blueprint-path" cx="50" cy="50" r="30" fill="none" stroke="rgba(59,130,246,0.3)" strokeWidth="1" />
                            <rect className="blueprint-path" x="20" y="20" width="60" height="60" fill="none" stroke="rgba(59,130,246,0.3)" strokeWidth="1" />
                            <line className="blueprint-path" x1="50" y1="20" x2="50" y2="80" stroke="rgba(59,130,246,0.3)" strokeWidth="1" />
                            <line className="blueprint-path" x1="20" y1="50" x2="80" y2="50" stroke="rgba(59,130,246,0.3)" strokeWidth="1" />
                        </svg>
                        {/* Chip extracting */}
                        <div className="data-chip absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white text-[6px] px-1.5 py-0.5 rounded shadow-lg">Dimensions</div>
                    </div>

                    {/* Layer 2: Chart */}
                    <div className="doc-layer col-span-1 bg-purple-900/10 border border-purple-500/20 rounded-lg p-2 relative flex items-end justify-between gap-1 overflow-hidden">
                        <div className="absolute top-1 left-1 text-[6px] text-purple-400 uppercase tracking-widest">Q3 Trends</div>
                        {[30, 50, 40, 70, 60].map((h, i) => (
                            <div key={i} className="chart-bar w-full bg-purple-500/30 rounded-t-sm" style={{ height: `${h}%` }} />
                        ))}
                        {/* Chip extracting */}
                        <div className="data-chip absolute top-1/3 left-1/2 -translate-x-1/2 bg-purple-500 text-white text-[6px] px-1.5 py-0.5 rounded shadow-lg">Growth +15%</div>
                    </div>

                    {/* Layer 3: Diagram */}
                    <div className="doc-layer col-span-2 h-20 bg-green-900/10 border border-green-500/20 rounded-lg p-2 relative flex items-center justify-around overflow-hidden">
                        <div className="absolute top-1 left-1 text-[6px] text-green-400 uppercase tracking-widest">Flow Logic</div>
                        <div className="schematic-box w-8 h-8 border border-green-500/30 rounded flex items-center justify-center">
                            <Box className="w-4 h-4 text-green-500/50" />
                        </div>
                        <ArrowRight className="w-3 h-3 text-green-500/30" />
                        <div className="schematic-box w-8 h-8 border border-green-500/30 rounded flex items-center justify-center">
                            <Box className="w-4 h-4 text-green-500/50" />
                        </div>
                        <ArrowRight className="w-3 h-3 text-green-500/30" />
                        <div className="schematic-box w-8 h-8 border border-green-500/30 rounded flex items-center justify-center">
                            <Box className="w-4 h-4 text-green-500/50" />
                        </div>
                        {/* Chip extracting */}
                        <div className="data-chip absolute bottom-2 right-1/3 bg-green-500 text-white text-[6px] px-1.5 py-0.5 rounded shadow-lg">Process Flow</div>
                    </div>

                    {/* Scan Beam */}
                    <div className="scan-beam absolute left-0 right-0 h-0.5 bg-blue-400 shadow-[0_0_15px_rgba(59,130,246,1)] z-20" />
                </div>
            </div>

            {/* 4. AI Orb */}
            <div className="ai-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 z-30 flex items-center justify-center pointer-events-none">
                <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-xl animate-pulse" />
                <div className="relative w-10 h-10 bg-white dark:bg-black rounded-full border border-blue-400 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.6)]">
                    <Sparkles className="w-5 h-5 text-blue-400 animate-spin-slow" />
                </div>
            </div>

            {/* 5. Chat Panel */}
            <div className="chat-panel absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] z-40">
                <div className="bg-white/95 dark:bg-[#1c1c1e]/95 backdrop-blur-2xl border border-black/10 dark:border-white/10 rounded-xl p-3 shadow-2xl">
                    <div className="flex items-center gap-2 mb-2 border-b border-black/5 dark:border-white/5 pb-2">
                        <div className="w-5 h-5 rounded-md bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                            <MessageSquare className="w-2.5 h-2.5 text-white" />
                        </div>
                        <span className="text-[10px] font-semibold text-gray-900 dark:text-white">Visual Intelligence</span>
                    </div>

                    <div className="space-y-1.5">
                        <div className="chat-msg self-end bg-blue-600/20 border border-blue-500/30 rounded-lg rounded-tr-none p-1.5 ml-4">
                            <p className="text-[8px] text-blue-800 dark:text-blue-100">Summarize the Q3 trend.</p>
                        </div>
                        <div className="chat-msg self-start bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg rounded-tl-none p-1.5 mr-2">
                            <p className="text-[8px] text-gray-600 dark:text-gray-300">
                                Revenue grew by <span className="text-green-600 dark:text-green-400 font-bold">+15%</span> in Q3.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
