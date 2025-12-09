"use client";

import Link from "next/link";
import { ShinyButton } from "@/components/ui/shiny-button";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 bg-obsidian/80 backdrop-blur-md border-b border-glass-border"
        >
            <div className="px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-brand-orange rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xl">I</span>
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white">IngestIQ</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
                    <Link href="#features" className="hover:text-white transition-colors">Features</Link>
                    <Link href="#pipeline" className="hover:text-white transition-colors">Pipeline</Link>
                    <Link href="#docs" className="hover:text-white transition-colors">Docs</Link>
                    <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <Link href="https://github.com/avestalabs/ingestiq" className="text-gray-400 hover:text-white transition-colors hidden sm:block">
                        GitHub
                    </Link>
                    <ShinyButton>
                        Get Started
                    </ShinyButton>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-gray-400 hover:text-white p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-white/5 bg-black/95 backdrop-blur-xl overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-6 text-base font-medium text-gray-400">
                            <Link href="#features" className="hover:text-white transition-colors py-2" onClick={() => setIsOpen(false)}>Features</Link>
                            <Link href="#pipeline" className="hover:text-white transition-colors py-2" onClick={() => setIsOpen(false)}>Pipeline</Link>
                            <Link href="#docs" className="hover:text-white transition-colors py-2" onClick={() => setIsOpen(false)}>Docs</Link>
                            <Link href="#contact" className="hover:text-white transition-colors py-2" onClick={() => setIsOpen(false)}>Contact</Link>
                            <div className="pt-6 border-t border-white/5 flex flex-col gap-4">
                                <Link href="https://github.com/avestalabs/ingestiq" className="hover:text-white transition-colors py-2" onClick={() => setIsOpen(false)}>
                                    GitHub
                                </Link>
                                <Link href="https://ingestiq.ai/" onClick={() => setIsOpen(false)} className="w-full">
                                    <ShinyButton className="w-full justify-center text-base py-3">
                                        Get Started
                                    </ShinyButton>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
