"use client";

import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import {
    Rocket,
    Book,
    Plug,
    Code,
    FileText,
    Scissors,
    Search,
    Puzzle,
    Clock,
    Building,
    FolderTree,
    TrendingUp,
    Tag,
    Tags,
    Target,
    Database,
    ArrowRight,
    Key,
    File,
    Upload,
    Settings,
    Shield,
    Zap,
    Sparkles,
    Terminal,
    Server,
    HardDrive,
    Globe,
    Video,
    BookOpen,
    Github,
    LucideIcon,
} from "lucide-react";

// Icon mapping from Mintlify icons to Lucide icons
const iconMap: Record<string, LucideIcon> = {
    rocket: Rocket,
    book: Book,
    plug: Plug,
    code: Code,
    "file-lines": FileText,
    scissors: Scissors,
    "magnifying-glass": Search,
    "puzzle-piece": Puzzle,
    clock: Clock,
    building: Building,
    "folder-tree": FolderTree,
    "chart-line": TrendingUp,
    tag: Tag,
    tags: Tags,
    bullseye: Target,
    database: Database,
    "arrow-right": ArrowRight,
    key: Key,
    file: File,
    upload: Upload,
    gear: Settings,
    shield: Shield,
    bolt: Zap,
    "wand-magic-sparkles": Sparkles,
    terminal: Terminal,
    server: Server,
    "hard-drive": HardDrive,
    globe: Globe,
    video: Video,
    "book-open": BookOpen,
    github: Github,
    "node-js": Terminal,
    docker: Server,
};

// Helper function to strip anchor tags from React children
function stripAnchors(children: React.ReactNode): React.ReactNode {
    return React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) {
            return child;
        }

        // Check if this element is an anchor (a) tag or Link component
        const elementType = child.type;
        const isAnchor =
            elementType === "a" ||
            (typeof elementType === "function" && elementType.name === "Anchor") ||
            elementType === Link;

        if (isAnchor) {
            // Replace anchor with a span, keeping its children
            const childProps = child.props as { children?: React.ReactNode };
            return <span>{stripAnchors(childProps.children)}</span>;
        }

        // Check for p tags and replace with div to avoid nesting issues
        if (elementType === "p") {
            const childProps = child.props as { children?: React.ReactNode; className?: string };
            return (
                <div className={childProps.className}>
                    {stripAnchors(childProps.children)}
                </div>
            );
        }

        // If the element has children, recursively process them
        const childProps = child.props as { children?: React.ReactNode };
        if (childProps.children) {
            return React.cloneElement(
                child,
                undefined,
                stripAnchors(childProps.children)
            );
        }

        return child;
    });
}

interface CardProps {
    title: string;
    icon?: string;
    href?: string;
    children?: React.ReactNode;
}

export function Card({ title, icon, href, children }: CardProps) {
    const IconComponent = icon ? iconMap[icon] || FileText : null;

    // If card has href, strip any anchor tags from children to prevent nesting
    const processedChildren = href ? stripAnchors(children) : children;

    // Fix internal links: MDX files use paths like "/quickstart" but we need "/docs/quickstart"
    let resolvedHref = href;
    if (href && !href.startsWith("http") && !href.startsWith("/docs")) {
        // Prepend /docs to relative internal links
        resolvedHref = `/docs${href.startsWith("/") ? href : `/${href}`}`;
    }

    const content = (
        <div
            className={cn(
                "group relative flex flex-col gap-2 p-5 rounded-xl",
                "border border-gray-200 dark:border-white/10",
                "bg-white/50 dark:bg-white/[0.02]",
                "hover:border-brand-orange/50 hover:bg-brand-orange/5",
                "transition-all duration-200",
                resolvedHref && "cursor-pointer"
            )}
        >
            {IconComponent && (
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-orange/10 text-brand-orange mb-2">
                    <IconComponent className="w-5 h-5" />
                </div>
            )}
            <span className="font-semibold text-gray-900 dark:text-white group-hover:text-brand-orange transition-colors">
                {title}
            </span>
            {processedChildren && (
                <div className="text-sm text-gray-600 dark:text-gray-400">{processedChildren}</div>
            )}
            {resolvedHref && (
                <ArrowRight className="absolute top-5 right-5 w-4 h-4 text-gray-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-brand-orange transition-all" />
            )}
        </div>
    );

    if (resolvedHref) {
        // External link
        if (resolvedHref.startsWith("http")) {
            return (
                <a href={resolvedHref} target="_blank" rel="noopener noreferrer" className="block no-underline">
                    {content}
                </a>
            );
        }
        // Internal link
        return <Link href={resolvedHref} className="block no-underline">{content}</Link>;
    }

    return content;
}

interface CardGroupProps {
    cols?: number;
    children: React.ReactNode;
}

export function CardGroup({ cols = 2, children }: CardGroupProps) {
    return (
        <div
            className={cn(
                "grid gap-4 my-6",
                cols === 2 && "grid-cols-1 md:grid-cols-2",
                cols === 3 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
                cols === 4 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
            )}
        >
            {children}
        </div>
    );
}
