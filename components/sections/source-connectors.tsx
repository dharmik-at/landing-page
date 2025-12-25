"use client";

import {
    FileAudio, Upload, HardDrive, FileSpreadsheet,
    Image, Database, Video, Globe
} from "lucide-react";
import { cn } from "@/lib/utils";
import { BlurReveal } from "@/components/ui/blur-reveal";

const sources = [
    { name: "Audio Upload", icon: FileAudio, color: "text-blue-400" },
    { name: "PDF, DOCX, TXT", icon: Upload, color: "text-emerald-400" },
    { name: "Google Drive", icon: HardDrive, color: "text-yellow-400" },
    { name: "Google Sheet", icon: FileSpreadsheet, color: "text-green-500" },
    { name: "Image Upload", icon: Image, color: "text-purple-400" },
    // { name: "S3 Source", icon: Database, color: "text-orange-400" },
    { name: "Video Upload", icon: Video, color: "text-red-400" },
    { name: "Web Scrape", icon: Globe, color: "text-cyan-400" },
];

export function SourceConnectors() {
    return (
        <section className="py-24 bg-white dark:bg-[#0A0A0A] border-y border-black/5 dark:border-white/5 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 mb-12">
                <div className="text-center">
                    <BlurReveal delay={0.2} inView className="w-full">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                            <span className="text-brand-orange">Source</span> Connectors
                        </h2>
                    </BlurReveal>
                    <BlurReveal delay={0.4} inView className="w-full">
                        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                            Ingest data from anywhere. Pre-built connectors for your files, drives, and web sources.
                        </p>
                    </BlurReveal>
                </div>
            </div>

            <div className="relative flex w-full overflow-hidden mask-gradient">
                <div className="flex animate-marquee whitespace-nowrap hover:pause gap-8 min-w-full">
                    {sources.map((source, i) => (
                        <MarqueeCard key={`1-${i}`} source={source} />
                    ))}
                    {sources.map((source, i) => (
                        <MarqueeCard key={`2-${i}`} source={source} />
                    ))}
                    {sources.map((source, i) => (
                        <MarqueeCard key={`3-${i}`} source={source} />
                    ))}
                </div>

                {/* Gradient Masks */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-[#0A0A0A] to-transparent z-10"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-[#0A0A0A] to-transparent z-10"></div>
            </div>
        </section>
    );
}

function MarqueeCard({ source }: { source: typeof sources[0] }) {
    return (
        <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-black/5 dark:border-white/5 bg-gray-50 dark:bg-[#111111] hover:border-brand-orange/50 hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 cursor-pointer mx-2"
        >
            <div className={cn("w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center", source.color)}>
                <source.icon className="w-4 h-4" />
            </div>
            <span className="font-medium text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                {source.name}
            </span>
        </div>
    );
}
