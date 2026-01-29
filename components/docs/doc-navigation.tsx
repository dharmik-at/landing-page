import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { NavPage } from "@/lib/docs-config";
import { cn } from "@/lib/utils";

interface DocNavigationProps {
    prev: NavPage | null;
    next: NavPage | null;
}

export function DocNavigation({ prev, next }: DocNavigationProps) {
    return (
        <nav className="flex justify-between items-center mt-16 pt-8 border-t border-gray-200 dark:border-white/10">
            {prev ? (
                <Link
                    href={prev.href}
                    className={cn(
                        "group flex items-center gap-3 p-4 rounded-xl",
                        "border border-gray-200 dark:border-white/10",
                        "hover:border-brand-orange/50 hover:bg-brand-orange/5",
                        "transition-all max-w-[45%]"
                    )}
                >
                    <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-brand-orange transition-colors flex-shrink-0" />
                    <div className="min-w-0">
                        <span className="block text-xs text-gray-500 dark:text-gray-400">
                            Previous
                        </span>
                        <span className="block font-medium text-gray-900 dark:text-white group-hover:text-brand-orange transition-colors truncate">
                            {prev.title}
                        </span>
                    </div>
                </Link>
            ) : (
                <div />
            )}

            {next ? (
                <Link
                    href={next.href}
                    className={cn(
                        "group flex items-center gap-3 p-4 rounded-xl text-right",
                        "border border-gray-200 dark:border-white/10",
                        "hover:border-brand-orange/50 hover:bg-brand-orange/5",
                        "transition-all max-w-[45%] ml-auto"
                    )}
                >
                    <div className="min-w-0">
                        <span className="block text-xs text-gray-500 dark:text-gray-400">
                            Next
                        </span>
                        <span className="block font-medium text-gray-900 dark:text-white group-hover:text-brand-orange transition-colors truncate">
                            {next.title}
                        </span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-brand-orange transition-colors flex-shrink-0" />
                </Link>
            ) : (
                <div />
            )}
        </nav>
    );
}
