"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Twitter, Linkedin, Send, Youtube, Instagram } from "lucide-react";

const footerLinks = {
    Product: [
        { name: "Features", href: "/features" },
        { name: "Integrations", href: "/integrations" },
        { name: "Changelog", href: "/changelog" },
        { name: "Docs", href: "/docs" },
    ],
    Solutions: [
        { name: "Meeting Intelligence", href: "/solutions/meeting-intelligence" },
        { name: "Web Intelligence", href: "/solutions/web-intelligence" },
        { name: "Visual Knowledge", href: "/solutions/visual-knowledge" },
        { name: "Unified Knowledge", href: "/solutions/unified-knowledge" },
    ],
    Company: [
        { name: "Developers", href: "/docs" },
        { name: "Contact", href: "#contact" },
    ],
};

export function Footer() {
    return (
        <footer className="relative bg-white dark:bg-black border-t border-black/10 dark:border-white/10 pt-20 pb-24 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-brand-orange to-orange-500 text-white font-bold text-lg">
                                Q
                            </div>
                            <span className="text-xl font-bold font-heading text-gray-900 dark:text-white">
                                IngestIQ
                            </span>
                        </Link>
                        <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-sm leading-relaxed">
                            The complete infrastructure for RAG. Connect, process, and vectorize your enterprise data with a single API.
                        </p>
                        <div className="flex gap-4">
                            <Link href="https://x.com/avestalabs" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="https://linkedin.com/company/avestalabs" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link href="https://www.youtube.com/channel/UCHCxoLxwAy1FCXkdch7Ex0Q" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                                <Youtube className="w-5 h-5" />
                            </Link>
                            <Link href="https://www.instagram.com/avestalabs.ai/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                                <Instagram className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Links Columns */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category} className="lg:col-span-1">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-6">{category}</h3>
                            <ul className="space-y-4">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-gray-500 dark:text-gray-400 hover:text-brand-orange transition-colors text-sm">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Newsletter Column */}
                    <div className="lg:col-span-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-6">Stay Updated</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                            Get the latest updates and resources.
                        </p>
                        <div className="flex flex-col gap-3">
                            <Input
                                placeholder="Enter your email"
                                className="bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 focus:border-brand-orange/50 text-gray-900 dark:text-white placeholder:text-gray-500"
                            />
                            <Button className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white">
                                Subscribe <Send className="w-3 h-3 ml-2" />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-black/10 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-0">
                        <p className="text-sm text-gray-500">
                            © {new Date().getFullYear()} All rights reserved.
                        </p>
                        <span className="hidden md:inline mx-4 text-gray-300 dark:text-gray-700">|</span>
                        <p className="text-sm text-gray-500 flex items-center gap-1">
                            Cooked at <a href="https://avestalabs.ai/" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-brand-orange transition-colors font-medium">Avestalabs</a>
                        </p>
                    </div>
                    <div className="flex gap-8">
                        <Link href="#" className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="#" className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                            Cookie Settings
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
