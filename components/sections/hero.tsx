"use client";

import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { DashboardMockup } from "@/components/ui/dashboard-mockup";
import { useEffect, useRef } from "react";

export function Hero() {
    const ref = useRef<HTMLDivElement>(null);

    // Mouse position state
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring animation
    const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

    // Transform mouse position to rotation
    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXFromCenter = e.clientX - rect.left - width / 2;
        const mouseYFromCenter = e.clientY - rect.top - height / 2;

        x.set(mouseXFromCenter / width);
        y.set(mouseYFromCenter / height);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section
            className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-32 pb-20 bg-noise perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={ref}
        >
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-orange/10 rounded-full blur-[120px] opacity-50" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            </div>

            <div className="container relative z-10 px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left: Content */}
                    <div className="flex-1 text-center lg:text-left pointer-events-none lg:pointer-events-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
                            </span>
                            <span className="text-xs font-medium text-gray-300 tracking-wide uppercase">Enterprise RAG Platform 2.0</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[0.9]"
                        >
                            The Stripe for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-400">
                                RAG
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-2xl md:text-3xl font-medium text-white mb-6"
                        >
                            Your Data, Your Intelligence.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
                        >
                            Stop building data pipelines from scratch. IngestIQ provides the complete
                            infrastructure to connect, process, and vectorize your enterprise data
                            at scale.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pointer-events-auto"
                        >
                            <Button size="lg" className="h-14 px-8 text-base rounded-full">
                                Start Building <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                            <Button variant="secondary" size="lg" className="h-14 px-8 text-base rounded-full bg-white/5 border-white/10 hover:bg-white/10">
                                <Play className="mr-2 w-4 h-4 fill-current" /> Watch Demo
                            </Button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-50 grayscale"
                        >
                            {/* Simple logos for social proof */}
                            <div className="text-sm font-semibold">ACME Corp</div>
                            <div className="text-sm font-semibold">Globex</div>
                            <div className="text-sm font-semibold">Soylent</div>
                            <div className="text-sm font-semibold">Umbrella</div>
                        </motion.div>
                    </div>

                    {/* Right: Dashboard Mockup (3D Tilt) */}
                    <motion.div
                        className="flex-1 w-full max-w-[800px] lg:max-w-none"
                        style={{
                            rotateX,
                            rotateY,
                            transformStyle: "preserve-3d",
                        }}
                    >
                        <DashboardMockup />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
