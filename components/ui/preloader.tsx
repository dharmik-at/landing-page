"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import { useLoader } from "@/components/providers/loader-provider";
import { GridBackground } from "@/components/ui/grid-background";

const words = ["INITIALIZING", "LOADING ASSETS", "CONNECTING", "SYSTEM READY"];

export function Preloader() {
    const containerRef = useRef<HTMLDivElement>(null);
    const counterRef = useRef<HTMLSpanElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);
    const { setIsLoading } = useLoader();
    const [show, setShow] = useState(true);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: () => {
                    setShow(false);
                }
            });

            // Initial Setup
            gsap.set(".column", { yPercent: 0 });
            gsap.set(".loader-content", { opacity: 0, y: 20 });
            gsap.set(progressRef.current, { scaleX: 0, transformOrigin: "left" });
            gsap.set(".logo-container", { scale: 0.8, opacity: 0 });

            // Entrance
            tl.to(".logo-container", {
                scale: 1,
                opacity: 1,
                duration: 0.4,
                ease: "back.out(1.7)"
            })
                .to(".loader-content", {
                    opacity: 1,
                    y: 0,
                    duration: 0.3,
                    ease: "power3.out"
                }, "-=0.2");

            // Counter & Progress Animation
            tl.to({ val: 0 }, {
                val: 100,
                duration: 0.8,
                ease: "power2.inOut",
                onUpdate: function () {
                    const val = Math.round(this.targets()[0].val);
                    if (counterRef.current) {
                        counterRef.current.textContent = val.toString();
                    }
                    // Scramble Text Effect
                    if (textRef.current && val % 25 === 0 && val < 100) {
                        const wordIndex = Math.floor(val / 25);
                        if (wordIndex < words.length) {
                            textRef.current.innerText = words[wordIndex];
                        }
                    }
                }
            })
                .to(progressRef.current, {
                    scaleX: 1,
                    duration: 0.8,
                    ease: "power2.inOut"
                }, "<")

                // Final Text Update
                .set(textRef.current, { innerText: "SYSTEM READY" })

                // Signal content to mount
                .call(() => {
                    setIsLoading(false);
                })

                // Exit Animation (Staggered Columns)
                .to(".loader-content, .logo-container", {
                    opacity: 0,
                    scale: 0.9,
                    duration: 0.2,
                    ease: "power2.in"
                })
                .to(".column", {
                    yPercent: -100,
                    duration: 0.5,
                    stagger: {
                        each: 0.03,
                        from: "random"
                    },
                    ease: "power4.inOut"
                }, "-=0.1")
                .to(containerRef.current, {
                    display: "none",
                    duration: 0
                });

        }, containerRef);

        return () => ctx.revert();
    }, [setIsLoading]);

    if (!show) return null;

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center pointer-events-none overflow-hidden"
        >
            {/* Staggered Columns Background */}
            <div className="absolute inset-0 z-0 flex w-full h-full">
                {[...Array(10)].map((_, i) => (
                    <div
                        key={i}
                        className="column relative w-full h-full bg-background border-r border-black/5 dark:border-white/5 last:border-r-0"
                    >
                        {/* Add Grid Background inside columns so it moves with them */}
                        <div className="absolute inset-0 opacity-20">
                            <GridBackground />
                        </div>
                    </div>
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-12 w-full max-w-3xl px-6 md:px-12">

                {/* Logo Section */}
                <div className="logo-container flex flex-col items-center gap-6">
                    <div className="relative w-24 h-24 md:w-32 md:h-32">
                        <Image
                            src="/ingestiqlogo2.png"
                            alt="IngestIQ"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-tight text-foreground">
                        IngestIQ
                    </h1>
                </div>

                {/* Loader Section */}
                <div className="loader-content w-full flex flex-col gap-4">
                    <div className="flex justify-between items-end">
                        <div className="text-sm md:text-base font-mono text-muted-foreground uppercase tracking-[0.2em]" ref={textRef}>
                            INITIALIZING
                        </div>
                        <div className="text-4xl md:text-6xl font-bold font-heading text-brand-orange tabular-nums">
                            <span ref={counterRef}>0</span>%
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-[4px] bg-black/10 dark:bg-white/10 overflow-hidden rounded-full">
                        <div ref={progressRef} className="w-full h-full bg-brand-orange shadow-[0_0_20px_rgba(255,79,0,0.6)]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
