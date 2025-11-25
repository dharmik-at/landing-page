"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
    Video, Globe, Image as ImageIcon, Database,
    ChevronRight, Sparkles
} from "lucide-react";
import { useState } from "react";

const solutions = [
    {
        title: "Meeting Intelligence",
        description: "Turn calls into actionable summaries.",
        icon: Video,
        href: "/solutions/meeting-intelligence",
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20"
    },
    {
        title: "Market Pulse",
        description: "Track competitors in real-time.",
        icon: Globe,
        href: "/solutions/market-pulse",
        color: "text-orange-400",
        bg: "bg-orange-500/10",
        border: "border-orange-500/20"
    },
    {
        title: "Visual Knowledge",
        description: "Chat with charts & blueprints.",
        icon: ImageIcon,
        href: "/solutions/visual-knowledge",
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20"
    },
    {
        title: "Unified Knowledge",
        description: "One search bar for everything.",
        icon: Database,
        href: "/solutions/unified-knowledge",
        color: "text-pink-400",
        bg: "bg-pink-500/10",
        border: "border-pink-500/20"
    }
];

export function SolutionsDropdown() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors flex items-center gap-1 py-2"
                onClick={() => setIsOpen(!isOpen)}
            >
                Solutions
                <ChevronRight className={`w-3 h-3 transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] pt-4 z-50"
                    >
                        <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl shadow-2xl backdrop-blur-xl overflow-hidden p-2 grid grid-cols-2 gap-2">
                            {solutions.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
                                >
                                    <div className={`p-2.5 rounded-lg ${item.bg} ${item.color} ${item.border} border group-hover:scale-110 transition-transform duration-300`}>
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                                            {item.title}
                                            <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-orange" />
                                        </div>
                                        <p className="text-xs text-gray-400 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </Link>
                            ))}

                            {/* Call to Action Area */}
                            <div className="col-span-2 mt-2 p-3 rounded-xl bg-gradient-to-r from-brand-orange/10 to-orange-600/10 border border-brand-orange/20 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="p-1.5 rounded-lg bg-brand-orange/20 text-brand-orange">
                                        <Sparkles className="w-4 h-4" />
                                    </div>
                                    <span className="text-sm font-medium text-brand-orange">See all use cases</span>
                                </div>
                                <span className="text-xs text-brand-orange/80 hover:text-brand-orange cursor-pointer transition-colors">
                                    View Gallery →
                                </span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
