"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-obsidian/80 backdrop-blur-md border-b border-glass-border"
        >
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-brand-orange rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">I</span>
                </div>
                <span className="text-xl font-bold tracking-tight text-white">IngestIQ</span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
                <Link href="#features" className="hover:text-white transition-colors">Features</Link>
                <Link href="#pipeline" className="hover:text-white transition-colors">Pipeline</Link>
                <Link href="#docs" className="hover:text-white transition-colors">Docs</Link>
                <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
            </div>

            <div className="flex items-center gap-4">
                <Link href="https://github.com/avestalabs/ingestiq" className="text-gray-400 hover:text-white transition-colors hidden sm:block">
                    GitHub
                </Link>
                <Button variant="default" size="sm">
                    Get Started
                </Button>
            </div>
        </motion.nav>
    );
}
