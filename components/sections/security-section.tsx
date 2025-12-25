"use client";

import { motion } from "framer-motion";
import { Shield, Database, Server, Lock, Globe, CheckCircle, FileText } from "lucide-react";
import { BlurReveal } from "@/components/ui/blur-reveal";
import { cn } from "@/lib/utils";

export function SecuritySection() {
    return (
        <section className="py-32 px-4 md:px-8 bg-white dark:bg-black relative overflow-hidden transition-colors duration-300">
            {/* Cyber Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-24">
                    <div className="flex justify-center mb-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 backdrop-blur-md"
                        >
                            <Shield className="w-4 h-4" />
                            <span className="text-xs font-mono tracking-widest uppercase">Zero-Custody Architecture</span>
                        </motion.div>
                    </div>

                    <BlurReveal delay={0.2} inView className="w-full">
                        <h2 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900 dark:text-white tracking-tight">
                            We are the highway, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 dark:from-blue-400 dark:via-cyan-400 dark:to-blue-400 animate-gradient-x">
                                not the parking lot.
                            </span>
                        </h2>
                    </BlurReveal>

                    <BlurReveal delay={0.4} inView className="w-full">
                        <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Your data flows through our processing engine directly to <span className="text-gray-900 dark:text-white font-bold">YOUR</span> database.
                            We never store your vectors.
                        </p>
                    </BlurReveal>
                </div>

                {/* The Data Highway Visualization */}
                <div className="relative h-[400px] w-full max-w-5xl mx-auto mb-24 hidden md:block">
                    {/* Road */}
                    <div className="absolute top-1/2 left-0 w-full h-24 -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-100 dark:via-blue-900/20 to-transparent blur-xl" />
                    <div className="absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-400/50 dark:via-blue-500/50 to-transparent" />

                    {/* Moving Data Packets */}
                    <DataPacket delay={0} />
                    <DataPacket delay={1.5} />
                    <DataPacket delay={3} />

                    {/* Nodes */}
                    <div className="absolute top-1/2 left-[10%] -translate-y-1/2 flex flex-col items-center gap-4">
                        <div className="w-20 h-20 rounded-2xl bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/10 flex items-center justify-center shadow-xl dark:shadow-2xl z-10 relative">
                            <Database className="w-8 h-8 text-gray-400 dark:text-gray-500" />
                            <div className="absolute -bottom-2 w-full h-1 bg-blue-500/50 blur-md" />
                        </div>
                        <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">Source</div>
                    </div>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-20">
                        <div className="w-32 h-32 rounded-full bg-white dark:bg-black border border-blue-100 dark:border-blue-500/30 flex items-center justify-center shadow-[0_0_50px_-12px_rgba(59,130,246,0.5)] relative overflow-hidden">
                            <div className="absolute inset-0 bg-blue-50 dark:bg-blue-500/10 animate-pulse" />
                            <Shield className="w-12 h-12 text-blue-500 dark:text-blue-400 relative z-10" />
                            {/* Scanning Effect */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-blue-400/50 blur-[2px] animate-scan" />
                        </div>
                        <div className="text-xs font-mono text-blue-600 dark:text-blue-400 uppercase tracking-widest bg-blue-50 dark:bg-blue-500/10 px-3 py-1 rounded-full border border-blue-100 dark:border-blue-500/20">
                            Processing (In-Memory)
                        </div>
                    </div>

                    <div className="absolute top-1/2 right-[10%] -translate-y-1/2 flex flex-col items-center gap-4">
                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-black border border-blue-200 dark:border-blue-500/50 flex items-center justify-center shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)] z-10 relative">
                            <Server className="w-10 h-10 text-blue-500 dark:text-blue-400" />
                            <div className="absolute -inset-1 bg-blue-500/20 blur-lg -z-10" />
                        </div>
                        <div className="text-xs font-mono text-blue-600 dark:text-blue-400 uppercase tracking-widest font-bold">Your Vault</div>
                    </div>
                </div>

                {/* Security Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <SecurityCard
                        title="Data Residency"
                        desc="Data stays in your region (EU, US, etc.)"
                        icon={Globe}
                    />
                    <SecurityCard
                        title="GDPR & HIPAA Ready"
                        desc="No vendor holds your sensitive data"
                        icon={Shield}
                    />
                    <SecurityCard
                        title="Zero Lock-in"
                        desc="You own the vectors, always."
                        icon={Lock}
                    />
                </div>
            </div>
        </section>
    );
}

function DataPacket({ delay }: { delay: number }) {
    return (
        <motion.div
            className="absolute top-1/2 left-[10%] -translate-y-1/2 w-12 h-1 bg-blue-400 rounded-full shadow-[0_0_15px_2px_rgba(96,165,250,0.8)] z-0"
            initial={{ x: 0, opacity: 0 }}
            animate={{
                x: ["0%", "400%", "800%"], // Move across screen
                opacity: [0, 1, 1, 0]
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                delay: delay,
                ease: "linear"
            }}
        />
    );
}

function SecurityCard({ title, desc, icon: Icon }: { title: string, desc: string, icon: any }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group p-8 rounded-3xl bg-gray-50 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 transition-colors duration-300"
        >
            <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300 border border-blue-100 dark:border-blue-500/20">
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
        </motion.div>
    );
}
