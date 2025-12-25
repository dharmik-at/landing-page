"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, ArrowRight, Sparkles } from "lucide-react";
import { useState, MouseEvent } from "react";
import { cn } from "@/lib/utils";
import { BlurReveal } from "@/components/ui/blur-reveal";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: ""
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message');
            }

            setStatus('success');
            setFormData({ name: '', email: '', company: '', message: '' });
        } catch (error) {
            setStatus('error');
            setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
        }
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
        <section id="contact" className="relative py-32 overflow-hidden bg-white dark:bg-black selection:bg-brand-orange/30">
            {/* Ambient Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-orange/5 rounded-full blur-[120px] opacity-50" />
                <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] opacity-30" />
            </div>

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16 space-y-4">
                        <BlurReveal delay={0.2} inView className="w-full">
                            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Start the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-200">Revolution</span>
                            </h2>
                        </BlurReveal>
                        <BlurReveal delay={0.4} inView className="w-full">
                            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                                Ready to transform your data infrastructure? Initialize the protocol below.
                            </p>
                        </BlurReveal>
                    </div>

                    {/* Futuristic Form Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        onMouseMove={handleMouseMove}
                        className="group relative rounded-3xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10 p-1"
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

                        <div className="relative rounded-[22px] bg-white/50 dark:bg-black/50 backdrop-blur-xl p-8 md:p-12 overflow-hidden">


                            <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-xs font-mono text-brand-orange/80 uppercase tracking-wider ml-1">Identity</label>
                                        <Input
                                            type="text"
                                            placeholder="FULL NAME"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 focus:border-brand-orange/50 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 h-12 rounded-lg transition-all focus:bg-black/10 dark:focus:bg-white/10 focus-visible:ring-0 focus-visible:ring-offset-0"
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
                                            className="bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 focus:border-brand-orange/50 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 h-12 rounded-lg transition-all focus:bg-black/10 dark:focus:bg-white/10 focus-visible:ring-0 focus-visible:ring-offset-0"
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
                                        className="bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 focus:border-brand-orange/50 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 h-12 rounded-lg transition-all focus:bg-black/10 dark:focus:bg-white/10 focus-visible:ring-0 focus-visible:ring-offset-0"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-mono text-brand-orange/80 uppercase tracking-wider ml-1">Transmission</label>
                                    <Textarea
                                        placeholder="ENTER YOUR MESSAGE..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 focus:border-brand-orange/50 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 min-h-[150px] resize-none rounded-lg transition-all focus:bg-black/10 dark:focus:bg-white/10 focus-visible:ring-0 focus-visible:ring-offset-0"
                                        required
                                    />
                                </div>

                                {/* Success Message */}
                                {status === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-sm text-center"
                                    >
                                        ✓ Message sent successfully! We'll get back to you soon.
                                    </motion.div>
                                )}

                                {/* Error Message */}
                                {status === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm text-center"
                                    >
                                        ✕ {errorMessage || 'Failed to send message. Please try again.'}
                                    </motion.div>
                                )}

                                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
                                    <a
                                        href="mailto:dharmik.gohil@avestatechnologies.com"
                                        className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                                    >
                                        <Mail className="w-4 h-4" />
                                        {/* dharmik.gohil@avestatechnologies.com */}
                                    </a>

                                    <ShinyButton
                                        type="submit"
                                        disabled={status === 'loading'}
                                        className="w-full md:w-auto text-white font-bold py-6 px-8 rounded-xl shadow-lg shadow-brand-orange/20 hover:shadow-brand-orange/40 transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {status === 'loading' ? (
                                            <>
                                                <span className="animate-pulse">TRANSMITTING...</span>
                                            </>
                                        ) : (
                                            <>
                                                INITIATE SEQUENCE
                                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </ShinyButton>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
