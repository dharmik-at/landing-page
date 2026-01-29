"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
    children: React.ReactNode;
    className?: string;
    language?: string;
}

export function CodeBlock({ children, className, language }: CodeBlockProps) {
    const [copied, setCopied] = useState(false);

    const getCodeContent = (): string => {
        if (typeof children === "string") return children;
        if (typeof children === "object" && children !== null) {
            // Handle pre > code structure
            const child = children as React.ReactElement<{ children?: React.ReactNode }>;
            if (child.props?.children) {
                if (typeof child.props.children === "string") {
                    return child.props.children;
                }
                // Recursively get text content
                return extractTextContent(child.props.children);
            }
        }
        return "";
    };

    const extractTextContent = (node: React.ReactNode): string => {
        if (typeof node === "string") return node;
        if (Array.isArray(node)) return node.map(extractTextContent).join("");
        if (typeof node === "object" && node !== null) {
            const element = node as React.ReactElement<{ children?: React.ReactNode }>;
            if (element.props?.children) {
                return extractTextContent(element.props.children);
            }
        }
        return "";
    };

    const handleCopy = async () => {
        const code = getCodeContent();
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // Detect language from className (e.g., "language-javascript")
    const detectedLang =
        language ||
        (typeof className === "string"
            ? className.match(/language-(\w+)/)?.[1]
            : null);

    return (
        <div className="relative group my-4">
            {/* Language badge */}
            {detectedLang && (
                <div className="absolute top-0 left-4 px-2 py-0.5 text-xs font-mono text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-b">
                    {detectedLang}
                </div>
            )}

            {/* Copy button */}
            <button
                onClick={handleCopy}
                className={cn(
                    "absolute top-2 right-2 p-2 rounded-lg",
                    "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700",
                    "opacity-0 group-hover:opacity-100 transition-opacity",
                    "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                )}
                title="Copy code"
            >
                {copied ? (
                    <Check className="w-4 h-4 text-green-500" />
                ) : (
                    <Copy className="w-4 h-4" />
                )}
            </button>

            {/* Code content */}
            <pre
                className={cn(
                    "p-4 pt-8 rounded-lg overflow-x-auto",
                    "bg-gray-50 dark:bg-gray-900",
                    "border border-gray-200 dark:border-gray-800",
                    "text-sm font-mono",
                    className
                )}
            >
                {children}
            </pre>
        </div>
    );
}

// Custom code element for inline code
export function InlineCode({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    // Don't apply inline styles to code blocks
    if (className?.includes("language-")) {
        return <code className={className}>{children}</code>;
    }

    return (
        <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-brand-orange text-sm font-mono">
            {children}
        </code>
    );
}
