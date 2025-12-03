"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Mic, FileText, Users, Clock, Sparkles, CheckCircle2, Activity, FileAudio, Zap, Calendar } from "lucide-react";

export function MeetingIntelligenceAnimation() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });

        // Initial State Setups
        gsap.set(".headline", { opacity: 0, scale: 0.98, filter: "blur(10px)" });
        gsap.set(".chaos-element", { opacity: 0, scale: 0 });
        gsap.set(".ai-orb", { scale: 0, opacity: 0 });
        gsap.set(".ai-ripple", { scale: 1, opacity: 0 });
        gsap.set(".summary-card", { opacity: 0, y: 40, rotateX: -10, scale: 0.9 });
        gsap.set(".summary-item", { opacity: 0, x: -20 });

        // 1. OPENING (0.0–1.2s)
        // Fade up headline
        tl.to(".headline", {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.2,
            ease: "power2.out"
        });

        // 2. CHAOS VISUALIZED (1.2–3.0s)
        // Show chaotic elements
        tl.to(".chaos-element", {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: {
                amount: 0.5,
                from: "random"
            },
            ease: "back.out(1.7)"
        }, "-=0.2");

        // Add some floating motion to chaos elements
        // We use a separate tween for the continuous floating to not block the main timeline, 
        // but for the specific 1.2-3.0s window we can just animate them slightly.
        tl.to(".chaos-element", {
            x: () => Math.random() * 40 - 20,
            y: () => Math.random() * 40 - 20,
            rotation: () => Math.random() * 20 - 10,
            duration: 2,
            ease: "sine.inOut"
        }, "<");

        // 3. AI ACTIVATION (3.0–4.0s)
        // Headline fades out
        tl.to(".headline", { opacity: 0, filter: "blur(10px)", duration: 0.5 }, "3.0");

        // Orb appears
        tl.to(".ai-orb", {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "elastic.out(1, 0.5)"
        }, "3.0");

        // Ripple effect
        tl.to(".ai-ripple", {
            scale: 2.5,
            opacity: 0,
            duration: 1.5,
            ease: "power2.out",
            stagger: 0.2
        }, "3.1");

        // 4. TRANSFORMATION (4.0–6.2s)
        // Suck elements in
        tl.to(".chaos-element", {
            x: 0,
            y: 0,
            scale: 0,
            opacity: 0,
            duration: 0.8,
            ease: "power4.in",
            stagger: {
                amount: 0.5,
                from: "center"
            }
        }, "3.8");

        // 5. OUTPUT SUMMARY CARD (6.2–8.0s)
        // Card slides in
        tl.to(".summary-card", {
            y: 0,
            opacity: 1,
            rotateX: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out"
        }, "4.5");

        // Bullets animate in
        tl.to(".summary-item", {
            x: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.15,
            ease: "power2.out"
        }, "5.0");

        // 6. LOOP RESET (8.0–10.0s)
        // Card dissolves
        tl.to(".summary-card", {
            opacity: 0,
            scale: 1.1,
            filter: "blur(20px)",
            duration: 1.0,
            ease: "power2.in"
        }, "8.5");

        // Orb fades out
        tl.to(".ai-orb", {
            scale: 0,
            opacity: 0,
            duration: 0.5
        }, "9.0");

    }, { scope: containerRef });

    // Chaos elements data
    const chaosElements = [
        { Icon: Mic, color: "text-blue-400", top: "15%", left: "20%" },
        { Icon: FileText, color: "text-indigo-400", top: "75%", left: "80%" },
        { Icon: Users, color: "text-blue-300", top: "25%", left: "85%" },
        { Icon: Clock, color: "text-purple-400", top: "80%", left: "15%" },
        { Icon: FileAudio, color: "text-sky-400", top: "45%", left: "10%" },
        { Icon: Activity, color: "text-blue-500", top: "10%", left: "60%" },
        { text: "Action Item", color: "text-white/60", top: "50%", left: "85%" },
        { text: "Deadline", color: "text-white/60", top: "20%", left: "40%" },
        { text: "Budget", color: "text-white/60", top: "65%", left: "70%" },
        { text: "Decision", color: "text-white/60", top: "85%", left: "45%" },
        { text: "Blocker", color: "text-white/60", top: "35%", left: "25%" },
    ];

    return (
        <div ref={containerRef} className="relative w-full h-full overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/50 to-black/80 backdrop-blur-xl border border-white/10 shadow-2xl">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-50" />



            {/* 2. Chaos Elements */}
            <div className="absolute inset-0 z-10">
                {chaosElements.map((item, i) => (
                    <div
                        key={i}
                        className={`chaos-element absolute flex items-center gap-2 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg`}
                        style={{ top: item.top, left: item.left }}
                    >
                        {item.Icon && <item.Icon className={`w-5 h-5 ${item.color}`} />}
                        {item.text && <span className="text-xs font-mono text-gray-300">{item.text}</span>}
                    </div>
                ))}
            </div>

            {/* 3. AI Core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center">
                <div className="ai-orb relative w-20 h-20 bg-black rounded-3xl border border-[#0A84FF] flex items-center justify-center shadow-[0_0_50px_rgba(10,132,255,0.6)]">
                    <div className="w-10 h-10 bg-gradient-to-tr from-[#0A84FF] to-[#6E63FF] rounded-xl animate-spin" />
                </div>
                {[1, 2, 3].map((_, i) => (
                    <div key={i} className="ai-ripple absolute inset-0 rounded-full border border-[#0A84FF]/30" />
                ))}
            </div>

            {/* 5. Summary Card */}
            <div className="summary-card absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 z-40">
                <div className="bg-[#1c1c1e]/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-2xl">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-5 border-b border-white/5 pb-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0A84FF] to-[#6E63FF] flex items-center justify-center shadow-lg">
                            <Sparkles className="w-4 h-4 text-white" />
                        </div>
                        <div>
                            <div className="text-sm font-semibold text-white">Actionable Summary</div>
                            <div className="text-[10px] text-gray-400">Just now • IngestIQ AI</div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                        <div className="summary-item flex items-start gap-3">
                            <div className="mt-0.5 w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                                <CheckCircle2 className="w-2.5 h-2.5 text-blue-400" />
                            </div>
                            <div>
                                <div className="text-[10px] font-medium text-blue-200 uppercase tracking-wide mb-0.5">Key Decision</div>
                                <div className="text-xs text-gray-300">Launch Q3 marketing campaign.</div>
                            </div>
                        </div>

                        <div className="summary-item flex items-start gap-3">
                            <div className="mt-0.5 w-4 h-4 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0">
                                <Zap className="w-2.5 h-2.5 text-indigo-400" />
                            </div>
                            <div>
                                <div className="text-[10px] font-medium text-indigo-200 uppercase tracking-wide mb-0.5">Action Item</div>
                                <div className="text-xs text-gray-300">Update slide deck by Friday.</div>
                            </div>
                        </div>

                        <div className="summary-item flex items-start gap-3">
                            <div className="mt-0.5 w-4 h-4 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                                <Users className="w-2.5 h-2.5 text-purple-400" />
                            </div>
                            <div>
                                <div className="text-[10px] font-medium text-purple-200 uppercase tracking-wide mb-0.5">Owner</div>
                                <div className="text-xs text-gray-300">Sarah M. & Engineering Team</div>
                            </div>
                        </div>

                        <div className="summary-item flex items-start gap-3">
                            <div className="mt-0.5 w-4 h-4 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                                <Calendar className="w-2.5 h-2.5 text-red-400" />
                            </div>
                            <div>
                                <div className="text-[10px] font-medium text-red-200 uppercase tracking-wide mb-0.5">Deadline</div>
                                <div className="text-xs text-gray-300">Oct 24, 2025</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
