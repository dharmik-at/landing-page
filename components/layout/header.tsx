"use client";

import Image from "next/image";
import Link from "next/link";
import { ShinyButton } from "@/components/ui/shiny-button";
import { motion } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { usePathname } from "next/navigation";

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
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const getHref = (href: string) => {
        if (href.startsWith("#") && pathname !== "/") {
            return `/${href}`;
        }
        return href;
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                isScrolled ? "bg-white/50 dark:bg-black/50 backdrop-blur-xl border-black/5 dark:border-white/10 py-4" : "bg-transparent py-6"
            )}
        >
            <div className="container px-4 md:px-6 mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative flex h-8 w-8 items-center justify-center">
                        <Image
                            src="/ingestiqlogo2.png"
                            alt="IngestIQ Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="text-xl font-bold tracking-tight font-heading text-foreground">
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
                            href={getHref(item.href)}
                            className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-foreground dark:hover:text-white transition-colors relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <AnimatedThemeToggler className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-foreground dark:hover:text-white transition-colors" />
                    <Link href="https://platform.ingestiq.ai/" target="_blank" rel="noopener noreferrer">
                        <ShinyButton className="rounded-full px-6 font-semibold">
                            Get Started
                        </ShinyButton>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <AnimatedThemeToggler className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-foreground dark:hover:text-white transition-colors" />
                    <button
                        className="p-2 text-gray-600 dark:text-gray-400 hover:text-foreground dark:hover:text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-black/5 dark:border-white/10 overflow-hidden"
                >
                    <div className="container px-4 py-8 flex flex-col gap-6">
                        <Link
                            href={getHref("#features")}
                            className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-foreground dark:hover:text-white flex items-center justify-between group"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Product
                            <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-orange" />
                        </Link>
                        <Link
                            href={getHref("#solutions")}
                            className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-foreground dark:hover:text-white flex items-center justify-between group"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Solutions
                            <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-orange" />
                        </Link>
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={getHref(item.href)}
                                className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-foreground dark:hover:text-white flex items-center justify-between group"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                                <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-orange" />
                            </Link>
                        ))}
                        <div className="h-px bg-black/5 dark:bg-white/10 my-2" />
                        <Link href="https://platform.ingestiq.ai/" target="_blank" rel="noopener noreferrer">
                            <ShinyButton className="w-full rounded-full text-white">
                                Get Started
                            </ShinyButton>
                        </Link>
                    </div>
                </motion.div>
            )}
        </motion.header>
    );
}
