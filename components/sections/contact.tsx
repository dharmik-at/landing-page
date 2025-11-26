"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, ArrowRight, Sparkles } from "lucide-react";
import { useState, MouseEvent } from "react";
import { cn } from "@/lib/utils";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    // Mouse tracking for spotlight effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <section id="contact" className="relative py-32 overflow-hidden bg-black selection:bg-brand-orange/30">
            {/* Ambient Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-orange/5 rounded-full blur-[120px] opacity-50" />
                <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] opacity-30" />
            </div>

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16 space-y-4">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-bold tracking-tight text-white"
                        >
                            Start the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-200">Revolution</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-gray-400 max-w-2xl mx-auto"
                        >
                            Ready to transform your data infrastructure? Initialize the protocol below.
                        </motion.p>
                    </div>

                    {/* Futuristic Form Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        onMouseMove={handleMouseMove}
                        className="group relative rounded-3xl bg-white/[0.02] border border-white/10 p-1"
                    >
                        {/* Spotlight Effect */}
                        <motion.div
                            className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                            style={{
                                background: useMotionTemplate`
                                    radial-gradient(
                                        650px circle at ${mouseX}px ${mouseY}px,
                                        rgba(255, 255, 255, 0.1),
                                        transparent 80%
                                    )
                                `,
                            }}
                        />

                        <div className="relative rounded-[22px] bg-black/50 backdrop-blur-xl p-8 md:p-12 overflow-hidden">


                            <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-xs font-mono text-brand-orange/80 uppercase tracking-wider ml-1">Identity</label>
                                        <Input
                                            type="text"
                                            placeholder="FULL NAME"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="bg-white/5 border-white/10 focus:border-brand-orange/50 text-white placeholder:text-gray-600 h-12 rounded-lg transition-all focus:bg-white/10 focus-visible:ring-0 focus-visible:ring-offset-0"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-mono text-brand-orange/80 uppercase tracking-wider ml-1">Coordinates</label>
                                        <Input
                                            type="email"
                                            placeholder="EMAIL ADDRESS"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="bg-white/5 border-white/10 focus:border-brand-orange/50 text-white placeholder:text-gray-600 h-12 rounded-lg transition-all focus:bg-white/10 focus-visible:ring-0 focus-visible:ring-offset-0"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-mono text-brand-orange/80 uppercase tracking-wider ml-1">Organization</label>
                                    <Input
                                        type="text"
                                        placeholder="COMPANY NAME (OPTIONAL)"
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        className="bg-white/5 border-white/10 focus:border-brand-orange/50 text-white placeholder:text-gray-600 h-12 rounded-lg transition-all focus:bg-white/10 focus-visible:ring-0 focus-visible:ring-offset-0"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-mono text-brand-orange/80 uppercase tracking-wider ml-1">Transmission</label>
                                    <Textarea
                                        placeholder="ENTER YOUR MESSAGE..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="bg-white/5 border-white/10 focus:border-brand-orange/50 text-white placeholder:text-gray-600 min-h-[150px] resize-none rounded-lg transition-all focus:bg-white/10 focus-visible:ring-0 focus-visible:ring-offset-0"
                                        required
                                    />
                                </div>

                                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
                                    <a
                                        href="mailto:hello@ingestiq.com"
                                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                                    >
                                        <Mail className="w-4 h-4" />
                                        hello@ingestiq.com
                                    </a>

                                    <Button
                                        type="submit"
                                        className="w-full md:w-auto bg-gradient-to-r from-brand-orange to-orange-600 hover:from-brand-orange/90 hover:to-orange-600/90 text-white font-bold py-6 px-8 rounded-xl shadow-lg shadow-brand-orange/20 hover:shadow-brand-orange/40 transition-all group"
                                    >
                                        INITIATE SEQUENCE
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
