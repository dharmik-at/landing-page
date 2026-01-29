"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import type { Heading } from "@/lib/mdx-utils";

interface TableOfContentsProps {
    headings: Heading[];
    className?: string;
}

export function TableOfContents({ headings, className }: TableOfContentsProps) {
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-100px 0px -66%",
                threshold: 0,
            }
        );

        // Observe all heading elements
        headings.forEach((heading) => {
            const element = document.getElementById(heading.slug);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, [headings]);

    if (headings.length === 0) {
        return null;
    }

    // Filter to only show h2 and h3
    const visibleHeadings = headings.filter(
        (h) => h.level === 2 || h.level === 3
    );

    if (visibleHeadings.length === 0) {
        return null;
    }

    return (
        <nav className={cn("space-y-1", className)}>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
                On this page
            </h4>
            <ul className="space-y-2">
                {visibleHeadings.map((heading) => (
                    <li
                        key={heading.slug}
                        style={{
                            paddingLeft: heading.level === 3 ? "1rem" : "0",
                        }}
                    >
                        <a
                            href={`#${heading.slug}`}
                            onClick={(e) => {
                                e.preventDefault();
                                const element = document.getElementById(heading.slug);
                                if (element) {
                                    element.scrollIntoView({ behavior: "smooth" });
                                    setActiveId(heading.slug);
                                }
                            }}
                            className={cn(
                                "block text-sm transition-colors",
                                activeId === heading.slug
                                    ? "text-brand-orange font-medium"
                                    : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                            )}
                        >
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
