"use client";

import { useState, createContext, useContext, Children, isValidElement } from "react";
import { cn } from "@/lib/utils";

interface TabsContextType {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

const TabsContext = createContext<TabsContextType | null>(null);

interface TabsProps {
    children: React.ReactNode;
    defaultValue?: string;
}

export function Tabs({ children, defaultValue }: TabsProps) {
    // Extract tab titles from children
    const childArray = Children.toArray(children);
    const tabTitles = childArray
        .filter(isValidElement)
        .map((child) => (child.props as { title?: string }).title || "Tab");

    const [activeTab, setActiveTab] = useState(defaultValue || tabTitles[0] || "");

    return (
        <TabsContext.Provider value={{ activeTab, setActiveTab }}>
            <div className="my-6">
                {/* Tab headers */}
                <div className="flex border-b border-gray-200 dark:border-white/10 mb-4 overflow-x-auto">
                    {tabTitles.map((title) => (
                        <button
                            key={title}
                            onClick={() => setActiveTab(title)}
                            className={cn(
                                "px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors",
                                "border-b-2 -mb-px",
                                activeTab === title
                                    ? "text-brand-orange border-brand-orange"
                                    : "text-gray-500 dark:text-gray-400 border-transparent hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
                            )}
                        >
                            {title}
                        </button>
                    ))}
                </div>
                {/* Tab content */}
                <div>
                    {childArray.filter(isValidElement).map((child) => {
                        const title = (child.props as { title?: string }).title || "Tab";
                        if (title !== activeTab) return null;
                        return (
                            <div key={title}>
                                {child}
                            </div>
                        );
                    })}
                </div>
            </div>
        </TabsContext.Provider>
    );
}

interface TabProps {
    title: string;
    children: React.ReactNode;
}

export function Tab({ children }: TabProps) {
    const context = useContext(TabsContext);
    if (!context) {
        return <div>{children}</div>;
    }
    return <div className="text-sm text-gray-600 dark:text-gray-400">{children}</div>;
}
