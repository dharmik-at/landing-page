"use client";

import {
    FileAudio, Upload, HardDrive, FileSpreadsheet,
    Image, Database, Video, Globe
} from "lucide-react";
import { cn } from "@/lib/utils";

const sources = [
    { name: "Audio Upload", icon: FileAudio, color: "text-blue-400" },
    { name: "File Upload", icon: Upload, color: "text-emerald-400" },
    { name: "Google Drive", icon: HardDrive, color: "text-yellow-400" },
    { name: "Google Sheet", icon: FileSpreadsheet, color: "text-green-500" },
    { name: "Image Upload", icon: Image, color: "text-purple-400" },
    { name: "S3 Source", icon: Database, color: "text-orange-400" },
    { name: "Video Upload", icon: Video, color: "text-red-400" },
    { name: "Web Scrape", icon: Globe, color: "text-cyan-400" },
];

export function SourceConnectors() {
    return (
        <section className="py-24 bg-[#0A0A0A] border-y border-white/5 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 mb-12">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-brand-orange">Source</span> Connectors
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Ingest data from anywhere. Pre-built connectors for your files, drives, and web sources.
                    </p>
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
                <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10"></div>
            </div>
        </section>
    );
}

function MarqueeCard({ source }: { source: typeof sources[0] }) {
    return (
        <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/5 bg-[#111111] hover:border-brand-orange/50 hover:bg-white/5 transition-all duration-300 cursor-pointer mx-2"
        >
            <div className={cn("w-8 h-8 rounded-full bg-white/5 flex items-center justify-center", source.color)}>
                <source.icon className="w-4 h-4" />
            </div>
            <span className="font-medium text-sm text-gray-300 hover:text-white transition-colors">
                {source.name}
            </span>
        </div>
    );
}
