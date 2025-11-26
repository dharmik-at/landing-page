"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Globe, Search, MessageSquare, FileText, Image as ImageIcon, Layout, ArrowRight, Sparkles, Bot } from "lucide-react";

export function WebIntelligenceAnimation() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });

        // Initial States
        gsap.set(".browser-window", { scale: 0.9, opacity: 0, rotateX: 10 });
        gsap.set(".url-text", { width: 0 });
        gsap.set(".web-content", { opacity: 1 });
        gsap.set(".floating-layer", { opacity: 0, scale: 0.8, y: 20 });
        gsap.set(".ai-scanner", { opacity: 0, scale: 0 });
        gsap.set(".chat-panel", { opacity: 0, scale: 0.9, y: 20 });
        gsap.set(".chat-bubble", { opacity: 0, x: -10 });
        gsap.set(".headline-text", { opacity: 0, y: 10 });

        // 1. OPENING (0.0–1.2s)
        tl.to(".browser-window", {
            scale: 1,
            opacity: 1,
            rotateX: 0,
            duration: 1.2,
            ease: "power3.out"
        })
            .to(".headline-text", {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.8");

        // 2. INPUT PHASE (1.2–3.0s)
        // Type URL
        tl.to(".url-text", {
            width: "100%",
            duration: 0.8,
            ease: "steps(20)"
        }, "1.2")
            // Ingest Pulse
            .to(".ingest-btn", {
                scale: 0.95,
                duration: 0.1,
                yoyo: true,
                repeat: 1
            }, "2.2")
            .to(".browser-window", {
                boxShadow: "0 0 30px rgba(10, 132, 255, 0.3)",
                duration: 0.4
            }, "2.3");

        // 3. SCRAPING & PROCESSING (3.0–5.5s)
        // Hide static content, show floating layers
        tl.to(".web-content", { opacity: 0, duration: 0.2 }, "3.0")
            .to(".floating-layer", {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "back.out(1.2)"
            }, "3.0")
            // Float them up
            .to(".floating-layer", {
                y: -50,
                z: 50,
                duration: 2,
                ease: "power1.inOut"
            }, "3.2");

        // AI Scanner appears
        tl.to(".ai-scanner", {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "elastic.out(1, 0.6)"
        }, "3.2");

        // Scan beam
        tl.to(".scan-beam", {
            top: "100%",
            opacity: 0,
            duration: 1.5,
            ease: "power1.inOut"
        }, "3.5");

        // Layers transform to chips (implied by scaling down and moving to center)
        tl.to(".floating-layer", {
            scale: 0,
            opacity: 0,
            x: 0,
            y: 0,
            duration: 0.6,
            stagger: 0.05,
            ease: "back.in(1.7)"
        }, "5.0");

        // 4. CONVERSION TO CHAT (5.5–7.5s)
        // Chat panel appears
        tl.to(".chat-panel", {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out"
        }, "5.5");

        // Chat bubbles appear
        tl.to(".chat-bubble", {
            opacity: 1,
            x: 0,
            duration: 0.4,
            stagger: 0.3,
            ease: "power2.out"
        }, "6.0");

        // 5. LOOP RESET (7.5–10.0s)
        // Dissolve chat
        tl.to([".chat-panel", ".ai-scanner"], {
            opacity: 0,
            scale: 1.1,
            filter: "blur(10px)",
            duration: 1.0
        }, "8.0")
            // Reset browser for loop
            .to(".browser-window", {
                opacity: 0,
                scale: 0.9,
                duration: 0.5
            }, "9.0");

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="relative w-full h-full overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/50 to-black/80 backdrop-blur-xl border border-white/10 shadow-2xl perspective-1000">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent opacity-50" />

            {/* Headline */}
            <div className="headline-text absolute top-6 left-0 right-0 text-center z-10 pointer-events-none px-4">
                <h3 className="text-lg md:text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white opacity-90">
                    Turn any website into a conversation
                </h3>
            </div>

            {/* 1. Holographic Browser Window */}
            <div className="browser-window absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[60%] bg-[#0F0F11]/80 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl perspective-1000 z-0">
                {/* Browser Bar */}
                <div className="h-8 border-b border-white/10 flex items-center px-3 gap-2 bg-white/5">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                    </div>
                    <div className="flex-1 h-6 bg-black/20 rounded-md flex items-center px-2 relative overflow-hidden">
                        <Globe className="w-3 h-3 text-gray-500 mr-2" />
                        <div className="url-text overflow-hidden whitespace-nowrap text-[10px] font-mono text-blue-300 w-0 border-r border-blue-400/50 pr-1">
                            https://ingestiq.ai/docs
                        </div>
                    </div>
                    <div className="ingest-btn w-6 h-6 rounded bg-blue-500/20 flex items-center justify-center cursor-pointer">
                        <ArrowRight className="w-3 h-3 text-blue-400" />
                    </div>
                </div>

                {/* Content Area */}
                <div className="relative flex-1 p-4 overflow-hidden">
                    {/* Static Content (Initial) */}
                    <div className="web-content space-y-3 opacity-50">
                        <div className="h-8 w-1/2 bg-white/10 rounded-lg" />
                        <div className="flex gap-3">
                            <div className="h-24 w-1/3 bg-white/5 rounded-lg" />
                            <div className="flex-1 space-y-2">
                                <div className="h-3 w-full bg-white/5 rounded" />
                                <div className="h-3 w-5/6 bg-white/5 rounded" />
                                <div className="h-3 w-4/6 bg-white/5 rounded" />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                            <div className="h-16 bg-white/5 rounded-lg" />
                            <div className="h-16 bg-white/5 rounded-lg" />
                            <div className="h-16 bg-white/5 rounded-lg" />
                        </div>
                    </div>

                    {/* Floating Layers (Scraping Phase) */}
                    <div className="absolute inset-0 p-4 pointer-events-none">
                        {[
                            { icon: Layout, top: "10%", left: "10%", color: "text-blue-300" },
                            { icon: ImageIcon, top: "40%", left: "60%", color: "text-purple-300" },
                            { icon: FileText, top: "60%", left: "20%", color: "text-green-300" },
                            { icon: Globe, top: "20%", left: "80%", color: "text-orange-300" },
                        ].map((item, i) => (
                            <div key={i} className="floating-layer absolute p-3 bg-black/40 backdrop-blur-xl border border-white/10 rounded-lg shadow-lg" style={{ top: item.top, left: item.left }}>
                                <item.icon className={`w-5 h-5 ${item.color}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* AI Scanner Core */}
            <div className="ai-scanner absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 z-20 flex items-center justify-center pointer-events-none">
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
                <div className="relative w-12 h-12 bg-black rounded-xl border border-blue-400 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                    <Bot className="w-6 h-6 text-blue-400" />
                </div>
                {/* Scan Beam */}
                <div className="scan-beam absolute top-[-50%] left-[-50%] right-[-50%] h-1 bg-blue-400/50 blur-sm shadow-[0_0_20px_rgba(59,130,246,1)]" />
            </div>

            {/* Chat Panel (Final State) */}
            <div className="chat-panel absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 z-30">
                <div className="bg-[#1c1c1e]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-2xl">
                    <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center">
                            <Sparkles className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-xs font-semibold text-white">IngestIQ Chat</span>
                    </div>

                    <div className="space-y-2">
                        <div className="chat-bubble self-end bg-blue-600/20 border border-blue-500/30 rounded-lg rounded-tr-none p-2 ml-8">
                            <p className="text-[10px] text-blue-100">Summarize the pricing page.</p>
                        </div>
                        <div className="chat-bubble self-start bg-white/5 border border-white/10 rounded-lg rounded-tl-none p-2 mr-4">
                            <p className="text-[10px] text-gray-300">
                                The Pro plan is $29/mo and includes unlimited scraping, API access, and priority support.
                            </p>
                        </div>
                        <div className="chat-bubble flex gap-1 mt-1 ml-1">
                            <div className="w-1 h-1 rounded-full bg-gray-500 animate-bounce" />
                            <div className="w-1 h-1 rounded-full bg-gray-500 animate-bounce delay-100" />
                            <div className="w-1 h-1 rounded-full bg-gray-500 animate-bounce delay-200" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
