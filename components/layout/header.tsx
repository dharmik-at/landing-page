"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

import { ProductDropdown } from "@/components/layout/product-dropdown";
import { SolutionsDropdown } from "@/components/layout/solutions-dropdown";

const navItems = [
    // Product is handled separately
    // Solutions is handled separately
    { name: "Developers", href: "/docs" },
    { name: "Contact", href: "#contact" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                isScrolled ? "bg-black/50 backdrop-blur-xl border-white/10 py-4" : "bg-transparent py-6"
            )}
        >
            <div className="container px-4 md:px-6 mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-brand-orange to-orange-500 text-white font-bold text-lg shadow-lg shadow-brand-orange/20 group-hover:shadow-brand-orange/40 transition-all">
                        Q
                    </div>
                    <span className="text-xl font-bold tracking-tight font-heading text-white">
                        IngestIQ
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <ProductDropdown />

                    <SolutionsDropdown />

                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <Link href="https://ingestiq.ai/">
                        <Button size="sm" className="rounded-full px-6 bg-white text-black hover:bg-gray-200 font-semibold">
                            Get Started
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-gray-400 hover:text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                >
                    <div className="container px-4 py-8 flex flex-col gap-6">
                        <Link
                            href="#features"
                            className="text-lg font-medium text-gray-300 hover:text-white flex items-center justify-between group"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Product
                            <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-orange" />
                        </Link>
                        <Link
                            href="#solutions"
                            className="text-lg font-medium text-gray-300 hover:text-white flex items-center justify-between group"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Solutions
                            <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-orange" />
                        </Link>
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-lg font-medium text-gray-300 hover:text-white flex items-center justify-between group"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                                <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-orange" />
                            </Link>
                        ))}
                        <div className="h-px bg-white/10 my-2" />
                        <Link href="https://ingestiq.ai/">
                            <Button className="w-full rounded-full bg-brand-orange hover:bg-brand-orange/90 text-white">
                                Get Started
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            )}
        </motion.header>
    );
}
