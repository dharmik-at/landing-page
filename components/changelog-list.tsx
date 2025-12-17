"use client";

import { motion } from "framer-motion";
import { History, Star, Zap, Bug } from "lucide-react";
import { ChangelogItem } from "@/lib/changelog";

interface ChangelogListProps {
    items: ChangelogItem[];
}

export default function ChangelogList({ items }: ChangelogListProps) {
    if (items.length === 0) {
        return (
            <div className="text-center py-20">
                <p className="text-xl text-gray-500 dark:text-gray-400">No release notes found.</p>
            </div>
        );
    }

    return (
        <div className="space-y-16">
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-20 md:pl-12"
                >
                    {/* Dot */}
                    <div className="absolute left-[29px] md:left-[-3px] top-1.5 w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_currentColor]" />

                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                        <span className="font-mono text-sm text-purple-600 dark:text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20 w-fit">
                            {item.version}
                        </span>
                        <span className="text-sm text-gray-500">{item.date}</span>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{item.description}</p>

                    <div className="space-y-3">
                        {item.changes.map((change, i) => (
                            <div key={i} className="flex items-start gap-3 text-sm">
                                <div className={`mt-0.5 shrink-0 ${change.type === 'feature' ? 'text-green-500 dark:text-green-400' :
                                    change.type === 'improvement' ? 'text-blue-500 dark:text-blue-400' :
                                        'text-red-500 dark:text-red-400'
                                    }`}>
                                    {change.type === 'feature' && <Star className="w-4 h-4" />}
                                    {change.type === 'improvement' && <Zap className="w-4 h-4" />}
                                    {change.type === 'fix' && <Bug className="w-4 h-4" />}
                                </div>
                                <span className="text-gray-700 dark:text-gray-300">{change.text}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
