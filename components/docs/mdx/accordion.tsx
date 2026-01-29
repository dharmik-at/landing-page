"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
    FileText,
    Tag,
    Target,
    Tags,
    Scissors,
    Search,
    Puzzle,
    Clock,
    Building,
    Rocket,
    Database,
    ArrowRight,
    LucideIcon,
} from "lucide-react";

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
    "file-lines": FileText,
    scissors: Scissors,
    "magnifying-glass": Search,
    "puzzle-piece": Puzzle,
    clock: Clock,
    building: Building,
    tag: Tag,
    tags: Tags,
    bullseye: Target,
    rocket: Rocket,
    database: Database,
    "arrow-right": ArrowRight,
};

interface AccordionProps {
    title: string;
    icon?: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
}

export function Accordion({
    title,
    icon,
    children,
    defaultOpen = false,
}: AccordionProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const IconComponent = icon ? iconMap[icon] || FileText : null;

    return (
        <div className="border border-gray-200 dark:border-white/10 rounded-lg overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "flex items-center gap-3 w-full px-4 py-3 text-left",
                    "hover:bg-gray-50 dark:hover:bg-white/5 transition-colors",
                    isOpen && "bg-gray-50 dark:bg-white/5"
                )}
            >
                {IconComponent && (
                    <IconComponent className="w-4 h-4 text-brand-orange flex-shrink-0" />
                )}
                <span className="font-medium text-gray-900 dark:text-white flex-1">
                    {title}
                </span>
                <ChevronDown
                    className={cn(
                        "w-4 h-4 text-gray-500 transition-transform duration-200",
                        isOpen && "rotate-180"
                    )}
                />
            </button>
            <div
                className={cn(
                    "overflow-hidden transition-all duration-200",
                    isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <div className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-white/10">
                    {children}
                </div>
            </div>
        </div>
    );
}

interface AccordionGroupProps {
    children: React.ReactNode;
}

export function AccordionGroup({ children }: AccordionGroupProps) {
    return <div className="flex flex-col gap-2 my-6">{children}</div>;
}
