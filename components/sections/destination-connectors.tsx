"use client";

import { cn } from "@/lib/utils";
import { PostgresIcon, PineconeIcon, S3Icon, MilvusIcon } from "@/components/ui/icons";

const destinations = [
    { name: "PgVector", icon: PostgresIcon, color: "text-blue-400" },
    { name: "Milvus", icon: MilvusIcon, color: "text-blue-500" },
    { name: "Pinecone", icon: PineconeIcon, color: "text-cyan-500" },
    { name: "S3 Vector Storage", icon: S3Icon, color: "text-orange-500" },
];

import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function DestinationConnectors() {
    return (
        <section className="py-24 bg-gray-50 dark:bg-[#0F0F0F] overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 mb-12">
                <ScrollReveal className="text-center" width="100%">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                        <span className="text-brand-orange">Destination</span> Connectors
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                        Sync your vectors where you need them. Support for leading vector databases and storage solutions.
                    </p>
                </ScrollReveal>
            </div>

            <ScrollReveal className="relative flex w-full overflow-hidden mask-gradient" width="100%" delay={0.2}>
                <div className="flex animate-marquee-reverse whitespace-nowrap hover:pause gap-8 min-w-full">
                    {destinations.map((dest, i) => (
                        <MarqueeCard key={`1-${i}`} dest={dest} />
                    ))}
                    {destinations.map((dest, i) => (
                        <MarqueeCard key={`2-${i}`} dest={dest} />
                    ))}
                    {destinations.map((dest, i) => (
                        <MarqueeCard key={`3-${i}`} dest={dest} />
                    ))}
                    {destinations.map((dest, i) => (
                        <MarqueeCard key={`4-${i}`} dest={dest} />
                    ))}
                </div>

                {/* Gradient Masks */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 dark:from-[#0F0F0F] to-transparent z-10"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 dark:from-[#0F0F0F] to-transparent z-10"></div>
            </ScrollReveal>
        </section>
    );
}

function MarqueeCard({ dest }: { dest: typeof destinations[0] }) {
    return (
        <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-black/5 dark:border-white/5 bg-white dark:bg-[#111111] hover:border-brand-orange/50 hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 cursor-pointer mx-2"
        >
            <div className={cn("w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center", dest.color)}>
                <dest.icon className="w-4 h-4" />
            </div>
            <span className="font-medium text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                {dest.name}
            </span>
        </div>
    );
}
