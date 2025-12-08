"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
    Zap, Puzzle, CreditCard, History, Book,
    ChevronRight
} from "lucide-react";
import { useState } from "react";

const productItems = [
    {
        title: "Features",
        description: "Explore the power of IngestIQ.",
        icon: Zap,
        href: "/features",
        color: "text-yellow-400",
        gradient: "from-yellow-500/20 to-orange-500/20",
        border: "group-hover:border-yellow-500/50"
    },
    {
        title: "Integrations",
        description: "Connect with your favorite tools.",
        icon: Puzzle,
        href: "/integrations",
        color: "text-blue-400",
        gradient: "from-blue-500/20 to-indigo-500/20",
        border: "group-hover:border-blue-500/50"
    },

    {
        title: "Changelog",
        description: "See what's new and improved.",
        icon: History,
        href: "/changelog",
        color: "text-purple-400",
        gradient: "from-purple-500/20 to-pink-500/20",
        border: "group-hover:border-purple-500/50"
    },
    {
        title: "Docs",
        description: "Guides, references, and API docs.",
        icon: Book,
        href: "/docs",
        color: "text-cyan-400",
        gradient: "from-cyan-500/20 to-sky-500/20",
        border: "group-hover:border-cyan-500/50"
    }
];

export function ProductDropdown() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button
                className={`text-sm font-medium transition-colors flex items-center gap-1 py-2 ${isOpen ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                Product
                <ChevronRight className={`w-3 h-3 transition-transform duration-200 ${isOpen ? "rotate-90 text-brand-orange" : ""}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 w-[640px] pt-4 z-50"
                    >
                        <div className="relative bg-white dark:bg-[#050505] border border-black/10 dark:border-white/10 rounded-2xl shadow-2xl backdrop-blur-xl overflow-hidden">
                            {/* Grid Background Effect */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

                            <div className="relative p-2 grid grid-cols-2 gap-2">
                                {productItems.map((item) => (
                                    <Link
                                        key={item.title}
                                        href={item.href}
                                        className="group relative flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-black/5 dark:hover:bg-white/[0.03] border border-transparent hover:border-black/10 dark:hover:border-white/10 overflow-hidden"
                                    >
                                        {/* Hover Gradient Background */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                        <div className={`relative p-2.5 rounded-lg bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 ${item.border} group-hover:scale-110 transition-transform duration-300`}>
                                            <item.icon className={`w-5 h-5 ${item.color}`} />
                                        </div>

                                        <div className="relative">
                                            <div className="text-sm font-bold text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white mb-1 flex items-center gap-2 transition-colors">
                                                {item.title}
                                                <ChevronRight className={`w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ${item.color}`} />
                                            </div>
                                            <p className="text-xs text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-400 leading-relaxed transition-colors">
                                                {item.description}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
