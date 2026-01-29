"use client";

import { useState, useEffect, createContext, useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight, Menu, X, Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { docsConfig, type NavTab, type NavGroup } from "@/lib/docs-config";

// Shared context for active tab state
const DocsTabContext = createContext<{
    activeTab: string;
    setActiveTab: (tab: string) => void;
}>({
    activeTab: "",
    setActiveTab: () => { },
});

// Provider component to be used at layout level
export function DocsTabProvider({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [activeTab, setActiveTab] = useState<string>("");

    // Determine active tab based on current path
    useEffect(() => {
        const currentSlug = pathname === "/docs" ? "index" : pathname.replace("/docs/", "");

        for (const tab of docsConfig.tabs) {
            for (const group of tab.groups) {
                for (const page of group.pages) {
                    if (page.slug === currentSlug) {
                        setActiveTab(tab.tab);
                        return;
                    }
                }
            }
        }
        // Default to first tab
        if (!activeTab && docsConfig.tabs.length > 0) {
            setActiveTab(docsConfig.tabs[0].tab);
        }
    }, [pathname, activeTab]);

    return (
        <DocsTabContext.Provider value={{ activeTab, setActiveTab }}>
            {children}
        </DocsTabContext.Provider>
    );
}

// Horizontal tabs bar that goes at the top
export function DocsHorizontalTabs() {
    const pathname = usePathname();
    const [activeTab, setActiveTab] = useState<string>("");

    // Determine active tab based on current path
    useEffect(() => {
        const currentSlug = pathname === "/docs" ? "index" : pathname.replace("/docs/", "");

        for (const tab of docsConfig.tabs) {
            for (const group of tab.groups) {
                for (const page of group.pages) {
                    if (page.slug === currentSlug) {
                        setActiveTab(tab.tab);
                        return;
                    }
                }
            }
        }
        // Default to first tab
        if (!activeTab && docsConfig.tabs.length > 0) {
            setActiveTab(docsConfig.tabs[0].tab);
        }
    }, [pathname, activeTab]);

    // Get the first page of the tab for navigation
    const getTabHref = (tab: NavTab) => {
        if (tab.groups.length > 0 && tab.groups[0].pages.length > 0) {
            return tab.groups[0].pages[0].href;
        }
        return "/docs";
    };

    return (
        <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-hide">
            {docsConfig.tabs.map((tab) => (
                <Link
                    key={tab.tab}
                    href={getTabHref(tab)}
                    className={cn(
                        "px-4 py-2 text-sm font-medium rounded-full transition-all border whitespace-nowrap",
                        activeTab === tab.tab
                            ? "bg-brand-orange border-brand-orange text-white"
                            : "bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-800"
                    )}
                >
                    {tab.tab}
                </Link>
            ))}
        </div>
    );
}

// Sidebar navigation that shows pages for the current tab
export function DocsSidebarNav({ className }: { className?: string }) {
    const pathname = usePathname();
    const [activeTab, setActiveTab] = useState<string>("");
    const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set());

    // Determine active tab based on current path
    useEffect(() => {
        const currentSlug = pathname === "/docs" ? "index" : pathname.replace("/docs/", "");

        for (const tab of docsConfig.tabs) {
            for (const group of tab.groups) {
                for (const page of group.pages) {
                    if (page.slug === currentSlug) {
                        setActiveTab(tab.tab);
                        setExpandedGroups((prev) => new Set([...prev, group.group]));
                        return;
                    }
                }
            }
        }
        // Default to first tab
        if (!activeTab && docsConfig.tabs.length > 0) {
            setActiveTab(docsConfig.tabs[0].tab);
        }
    }, [pathname, activeTab]);

    const toggleGroup = (group: string) => {
        setExpandedGroups((prev) => {
            const next = new Set(prev);
            if (next.has(group)) {
                next.delete(group);
            } else {
                next.add(group);
            }
            return next;
        });
    };

    const currentTab = docsConfig.tabs.find((t) => t.tab === activeTab);

    return (
        <aside className={cn("flex flex-col h-full", className)}>
            {/* Navigation Groups */}
            <nav className="flex-1 overflow-y-auto space-y-4">
                {currentTab?.groups.map((group) => (
                    <div key={group.group}>
                        <button
                            onClick={() => toggleGroup(group.group)}
                            className="flex items-center gap-2 w-full px-2 py-1.5 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                        >
                            {expandedGroups.has(group.group) ? (
                                <ChevronDown className="w-3 h-3" />
                            ) : (
                                <ChevronRight className="w-3 h-3" />
                            )}
                            {group.group}
                        </button>

                        {expandedGroups.has(group.group) && (
                            <ul className="mt-1 space-y-0.5">
                                {group.pages.map((page) => {
                                    const isActive =
                                        pathname === page.href ||
                                        (page.slug === "index" && pathname === "/docs");

                                    return (
                                        <li key={page.slug}>
                                            <Link
                                                href={page.href}
                                                className={cn(
                                                    "block px-4 py-2 text-sm rounded-lg transition-colors",
                                                    isActive
                                                        ? "bg-brand-orange/10 text-brand-orange font-medium"
                                                        : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5"
                                                )}
                                            >
                                                {page.title}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </div>
                ))}
            </nav>

            {/* Anchors/External Links */}
            <div className="pt-4 border-t border-gray-200 dark:border-white/10 space-y-2">
                {docsConfig.anchors.map((anchor) => (
                    <a
                        key={anchor.anchor}
                        href={anchor.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-2 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
                    >
                        {anchor.icon === "github" && <Github className="w-4 h-4" />}
                        {anchor.icon === "x-twitter" && (
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        )}
                        {anchor.anchor}
                        <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
                    </a>
                ))}
            </div>
        </aside>
    );
}

// Keep the old DocsSidebar for backwards compatibility (combines both)
interface DocsSidebarProps {
    className?: string;
}

export function DocsSidebar({ className }: DocsSidebarProps) {
    return (
        <div className={className}>
            <DocsSidebarNav />
        </div>
    );
}

// Mobile sidebar wrapper
export function MobileSidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Close sidebar on navigation
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <>
            {/* Mobile menu button */}
            <button
                onClick={() => setIsOpen(true)}
                className="lg:hidden fixed bottom-6 right-6 z-40 p-4 bg-brand-orange text-white rounded-full shadow-lg hover:bg-brand-orange-hover transition-colors"
                aria-label="Open navigation"
            >
                <Menu className="w-6 h-6" />
            </button>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar drawer */}
            <div
                className={cn(
                    "lg:hidden fixed inset-y-0 left-0 z-50 w-80 bg-white dark:bg-gray-950 shadow-xl transform transition-transform duration-300",
                    isOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-white/10">
                    <span className="font-bold text-lg">Documentation</span>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>
                <div className="p-4 h-[calc(100vh-65px)] overflow-y-auto">
                    <DocsSidebar />
                </div>
            </div>
        </>
    );
}
