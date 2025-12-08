"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Search, Database, HardDrive, MessageSquare, FileText, Sparkles, Share2, File, CheckCircle2 } from "lucide-react";

export function UnifiedKnowledgeAnimation() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });

        // Initial States
        gsap.set(".headline-text", { opacity: 0, y: 10 });
        gsap.set(".search-bar-container", { opacity: 0, scale: 0.9, y: 20 });
        gsap.set(".silo-tile", { opacity: 0, scale: 0 });
        gsap.set(".connection-line", { drawSVG: "0%" }); // Will simulate with stroke-dasharray if drawSVG not available, or just scale/width
        gsap.set(".ai-orb", { opacity: 0, scale: 0 });
        gsap.set(".knowledge-graph", { opacity: 0, scale: 0.5 });
        gsap.set(".graph-node", { scale: 0 });
        gsap.set(".graph-edge", { opacity: 0 });
        gsap.set(".search-text", { width: 0 });
        gsap.set(".answer-panel", { opacity: 0, height: 0 });
        gsap.set(".answer-content", { opacity: 0 });

        // 1. OPENING (0.0–1.3s)
        tl.to(".headline-text", { opacity: 1, y: 0, duration: 1, ease: "power2.out" })
            .to(".search-bar-container", { opacity: 1, scale: 1, y: 0, duration: 1, ease: "power3.out" }, "<0.2");

        // 2. SILOED DATA APPEAR (1.3–3.0s)
        // Move search bar up slightly to make room
        tl.to(".search-bar-container", { y: -40, duration: 0.8, ease: "power2.inOut" }, "1.3");

        // Silos appear in corners
        tl.to(".silo-tile", {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.5)"
        }, "1.5");

        // Jitter effect (fragmentation)
        tl.to(".silo-tile", {
            x: "random(-5, 5)",
            y: "random(-5, 5)",
            duration: 0.2,
            repeat: 3,
            yoyo: true,
            ease: "sine.inOut"
        }, "2.1");

        // 3. CONNECTING EVERYTHING (3.0–5.0s)
        // Orb appears
        tl.to(".ai-orb", { opacity: 1, scale: 1, duration: 0.5, ease: "elastic.out(1, 0.5)" }, "3.0");

        // Connection lines grow from center to tiles
        // We'll simulate this by scaling lines or revealing them
        tl.to(".connection-line-path", {
            strokeDashoffset: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.inOut"
        }, "3.2");

        // Tiles stabilize (reset jitter) and glow
        tl.to(".silo-tile", {
            x: 0,
            y: 0,
            boxShadow: "0 0 20px rgba(10, 132, 255, 0.4)",
            borderColor: "#0A84FF",
            duration: 0.5
        }, "3.5");

        // Tiles move to center
        tl.to(".silo-tile", {
            left: "50%",
            top: "50%",
            xPercent: -50,
            yPercent: -50,
            scale: 0.5,
            opacity: 0,
            duration: 0.8,
            ease: "power3.in"
        }, "4.2");

        // Lines retract
        tl.to(".connection-line-path", {
            opacity: 0,
            duration: 0.3
        }, "4.8");

        // 4. KNOWLEDGE GRAPH FORMATION (5.0–7.0s)
        // Graph expands from center
        tl.to(".knowledge-graph", { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.2)" }, "5.0");
        tl.to(".graph-node", { scale: 1, duration: 0.4, stagger: { amount: 0.5, from: "center" } }, "5.0");
        tl.to(".graph-edge", { opacity: 0.3, duration: 0.5 }, "5.4");

        // 5. INTELLIGENT SEARCH OUTPUT (7.0–8.8s)
        // Graph collapses into search bar
        tl.to([".knowledge-graph", ".ai-orb"], {
            scale: 0,
            opacity: 0,
            duration: 0.6,
            ease: "power2.in"
        }, "7.0");

        // Search bar moves back down
        tl.to(".search-bar-container", { y: 0, duration: 0.6, ease: "power2.out" }, "7.2");

        // Typing text
        tl.to(".search-text", { width: "100%", duration: 0.8, ease: "steps(30)" }, "7.5");

        // Answer panel expands
        tl.to(".answer-panel", {
            opacity: 1,
            height: "auto",
            duration: 0.6,
            ease: "power3.out"
        }, "8.0");

        tl.to(".answer-content", { opacity: 1, duration: 0.4 }, "8.3");

        // 6. LOOP RESET (8.8–10.0s)
        // Dissolve answer
        tl.to([".answer-panel", ".search-bar-container", ".headline-text"], {
            opacity: 0,
            filter: "blur(10px)",
            duration: 0.8
        }, "9.0");

        // Reset props for loop (set immediately after fade out)
        tl.set(".silo-tile", {
            left: (i) => ["15%", "85%", "15%", "85%"][i],
            top: (i) => ["20%", "20%", "80%", "80%"][i],
            xPercent: 0,
            yPercent: 0,
            scale: 0,
            opacity: 0,
            boxShadow: "none",
            borderColor: "rgba(255,255,255,0.1)"
        }, "9.9");

        tl.set(".connection-line-path", { strokeDashoffset: 100, opacity: 1 }, "9.9");
        tl.set(".search-text", { width: 0 }, "9.9");
        tl.set(".answer-panel", { height: 0, opacity: 0 }, "9.9");
        tl.set(".answer-content", { opacity: 0 }, "9.9");

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="relative w-full h-full overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50/50 to-white/80 dark:from-gray-900/50 dark:to-black/80 backdrop-blur-xl border border-black/10 dark:border-white/10 shadow-2xl perspective-1000">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent opacity-50" />



            {/* Connection Lines Layer (SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                {/* Lines from center (50%, 50%) to corners roughly */}
                <line className="connection-line-path" x1="50%" y1="55%" x2="15%" y2="25%" stroke="#0A84FF" strokeWidth="1" strokeDasharray="100" strokeDashoffset="100" pathLength="100" />
                <line className="connection-line-path" x1="50%" y1="55%" x2="85%" y2="25%" stroke="#0A84FF" strokeWidth="1" strokeDasharray="100" strokeDashoffset="100" pathLength="100" />
                <line className="connection-line-path" x1="50%" y1="55%" x2="15%" y2="85%" stroke="#0A84FF" strokeWidth="1" strokeDasharray="100" strokeDashoffset="100" pathLength="100" />
                <line className="connection-line-path" x1="50%" y1="55%" x2="85%" y2="85%" stroke="#0A84FF" strokeWidth="1" strokeDasharray="100" strokeDashoffset="100" pathLength="100" />
            </svg>

            {/* Silo Tiles */}
            <div className="absolute inset-0 z-20 pointer-events-none">
                {[
                    { Icon: HardDrive, label: "Drive", top: "25%", left: "15%", color: "text-blue-400" },
                    { Icon: MessageSquare, label: "Slack", top: "25%", left: "85%", color: "text-purple-400" },
                    { Icon: FileText, label: "Notion", top: "85%", left: "15%", color: "text-gray-200" },
                    { Icon: Database, label: "S3", top: "85%", left: "85%", color: "text-red-400" },
                ].map((item, i) => (
                    <div
                        key={i}
                        className="silo-tile absolute w-10 h-10 bg-white/80 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-lg flex items-center justify-center shadow-lg"
                        style={{ top: item.top, left: item.left, transform: "translate(-50%, -50%)" }}
                    >
                        <item.Icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                ))}
            </div>

            {/* AI Core Orb */}
            <div className="ai-orb absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 z-15 flex items-center justify-center pointer-events-none">
                <div className="absolute inset-0 bg-purple-500/30 rounded-full blur-xl animate-pulse" />
                <div className="relative w-6 h-6 bg-white dark:bg-black rounded-full border border-purple-400 flex items-center justify-center shadow-[0_0_30px_rgba(110,99,255,0.6)]">
                    <Sparkles className="w-3 h-3 text-purple-400 animate-spin-slow" />
                </div>
            </div>

            {/* Knowledge Graph */}
            <div className="knowledge-graph absolute inset-0 z-15 flex items-center justify-center pointer-events-none">
                <div className="relative w-48 h-48 top-[5%]">
                    {/* Edges */}
                    <svg className="absolute inset-0 w-full h-full">
                        <line className="graph-edge" x1="50%" y1="50%" x2="30%" y2="30%" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                        <line className="graph-edge" x1="50%" y1="50%" x2="70%" y2="30%" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                        <line className="graph-edge" x1="50%" y1="50%" x2="30%" y2="70%" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                        <line className="graph-edge" x1="50%" y1="50%" x2="70%" y2="70%" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                        <line className="graph-edge" x1="30%" y1="30%" x2="70%" y2="30%" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                        <line className="graph-edge" x1="30%" y1="70%" x2="70%" y2="70%" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                    </svg>
                    {/* Nodes */}
                    {[
                        { top: "50%", left: "50%", size: "w-3 h-3", color: "bg-gray-900 dark:bg-white" },
                        { top: "30%", left: "30%", size: "w-1.5 h-1.5", color: "bg-blue-400" },
                        { top: "30%", left: "70%", size: "w-1.5 h-1.5", color: "bg-purple-400" },
                        { top: "70%", left: "30%", size: "w-1.5 h-1.5", color: "bg-green-400" },
                        { top: "70%", left: "70%", size: "w-1.5 h-1.5", color: "bg-red-400" },
                    ].map((node, i) => (
                        <div
                            key={i}
                            className={`graph-node absolute rounded-full ${node.size} ${node.color} shadow-[0_0_10px_currentColor]`}
                            style={{ top: node.top, left: node.left, transform: "translate(-50%, -50%)" }}
                        />
                    ))}
                </div>
            </div>

            {/* Search Bar & Answer */}
            <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] z-30 flex flex-col items-center">
                <div className="search-bar-container w-full bg-white/80 dark:bg-black/40 backdrop-blur-xl border border-black/20 dark:border-white/20 rounded-full h-8 flex items-center px-2 gap-2 shadow-2xl relative z-20">
                    <Search className="w-3 h-3 text-gray-400" />
                    <div className="flex-1 h-full flex items-center overflow-hidden">
                        <div className="search-text text-[10px] text-gray-900 dark:text-white whitespace-nowrap overflow-hidden border-r border-gray-900/50 dark:border-white/50 pr-1">
                            Q3 Revenue?
                        </div>
                    </div>
                </div>

                <div className="answer-panel w-[95%] bg-white/95 dark:bg-[#1c1c1e]/95 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-b-xl -mt-3 pt-5 pb-2 px-3 shadow-xl overflow-hidden z-10">
                    <div className="answer-content space-y-2">
                        <div className="flex items-start gap-2">
                            <div className="mt-0.5 w-3 h-3 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                                <Sparkles className="w-2 h-2 text-purple-400" />
                            </div>
                            <div>
                                <div className="text-[9px] font-semibold text-purple-600 dark:text-purple-200 mb-0.5">Summary</div>
                                <div className="text-[9px] text-gray-600 dark:text-gray-300 leading-tight">
                                    Revenue up 15%.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
