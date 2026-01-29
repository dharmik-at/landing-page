"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface MermaidProps {
    chart: string;
    className?: string;
}

export function Mermaid({ chart, className }: MermaidProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [svg, setSvg] = useState<string>("");
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const renderChart = async () => {
            if (!containerRef.current) return;

            try {
                // Dynamically import mermaid
                const mermaid = (await import("mermaid")).default;

                // Initialize mermaid with theme
                const isDark = document.documentElement.classList.contains("dark");
                mermaid.initialize({
                    startOnLoad: false,
                    theme: isDark ? "dark" : "default",
                    themeVariables: isDark
                        ? {
                            primaryColor: "#FF4F00",
                            primaryTextColor: "#fff",
                            primaryBorderColor: "#FF4F00",
                            lineColor: "#888",
                            secondaryColor: "#333",
                            tertiaryColor: "#222",
                        }
                        : {
                            primaryColor: "#FF4F00",
                            primaryTextColor: "#000",
                            primaryBorderColor: "#FF4F00",
                            lineColor: "#666",
                            secondaryColor: "#f4f4f4",
                            tertiaryColor: "#f9f9f9",
                        },
                    securityLevel: "loose",
                    fontFamily: "inherit",
                });

                // Generate unique ID for the diagram
                const id = `mermaid-${Math.random().toString(36).slice(2)}`;

                // Render the diagram
                const { svg } = await mermaid.render(id, chart);
                setSvg(svg);
                setError(null);
            } catch (err) {
                console.error("Mermaid rendering error:", err);
                setError(err instanceof Error ? err.message : "Failed to render diagram");
            }
        };

        renderChart();
    }, [chart]);

    // Re-render on theme change
    useEffect(() => {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (
                    mutation.type === "attributes" &&
                    mutation.attributeName === "class"
                ) {
                    // Theme changed, re-render
                    setSvg("");
                }
            });
        });

        observer.observe(document.documentElement, { attributes: true });
        return () => observer.disconnect();
    }, []);

    if (error) {
        return (
            <div className="p-4 my-4 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 rounded-lg">
                <p className="text-sm text-red-600 dark:text-red-400">
                    Failed to render diagram: {error}
                </p>
                <pre className="mt-2 text-xs text-gray-600 dark:text-gray-400 overflow-x-auto">
                    {chart}
                </pre>
            </div>
        );
    }

    return (
        <div
            ref={containerRef}
            className={cn(
                "my-6 p-4 rounded-lg overflow-x-auto",
                "bg-gray-50 dark:bg-gray-900",
                "border border-gray-200 dark:border-gray-800",
                className
            )}
        >
            {svg ? (
                <div
                    className="flex justify-center [&_svg]:max-w-full"
                    dangerouslySetInnerHTML={{ __html: svg }}
                />
            ) : (
                <div className="flex items-center justify-center py-8 text-gray-500">
                    Loading diagram...
                </div>
            )}
        </div>
    );
}

// Wrapper component for code blocks with mermaid language
export function MermaidCodeBlock({ children }: { children: string }) {
    return <Mermaid chart={children} />;
}
