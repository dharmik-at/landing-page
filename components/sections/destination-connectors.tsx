"use client";

import { cn } from "@/lib/utils";
import { PostgresIcon, PineconeIcon, S3Icon, MilvusIcon } from "@/components/ui/icons";

const destinations = [
    { name: "PgVector", icon: PostgresIcon, color: "text-blue-400" },
    { name: "Milvus", icon: MilvusIcon, color: "text-blue-500" },
    { name: "Pinecone", icon: PineconeIcon, color: "text-cyan-500" },
    { name: "S3 Vector Storage", icon: S3Icon, color: "text-orange-500" },
];

export function DestinationConnectors() {
    return (
        <section className="py-24 bg-[#0F0F0F] overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 mb-12">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-brand-orange">Destination</span> Connectors
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Sync your vectors where you need them. Support for leading vector databases and storage solutions.
                    </p>
                </div>
            </div>

            <div className="relative flex w-full overflow-hidden mask-gradient">
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
                <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0F0F0F] to-transparent z-10"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0F0F0F] to-transparent z-10"></div>
            </div>
        </section>
    );
}

function MarqueeCard({ dest }: { dest: typeof destinations[0] }) {
    return (
        <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/5 bg-[#111111] hover:border-brand-orange/50 hover:bg-white/5 transition-all duration-300 cursor-pointer mx-2"
        >
            <div className={cn("w-8 h-8 rounded-full bg-white/5 flex items-center justify-center", dest.color)}>
                <dest.icon className="w-4 h-4" />
            </div>
            <span className="font-medium text-sm text-gray-300 hover:text-white transition-colors">
                {dest.name}
            </span>
        </div>
    );
}
