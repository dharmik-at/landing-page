"use client";

import { cn } from "@/lib/utils";
import { GeminiIcon, AnthropicIcon, OpenAIIcon } from "@/components/ui/icons";

const models = [
    { name: "Google Gemini", icon: GeminiIcon, color: "text-blue-400", description: "Multimodal reasoning & generation" },
    { name: "Anthropic", icon: AnthropicIcon, color: "text-orange-300", description: "Claude 3 Opus & Sonnet" },
    { name: "OpenAI", icon: OpenAIIcon, color: "text-green-400", description: "GPT-4 Turbo & GPT-3.5" },
];

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { BlurReveal } from "@/components/ui/blur-reveal";

export function AIModels() {
    return (
        <section className="py-24 bg-white dark:bg-[#0A0A0A] border-y border-black/5 dark:border-white/5 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 mb-12">
                <div className="text-center">
                    <BlurReveal delay={0.2} inView className="w-full">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                            <span className="text-brand-orange">Parser</span> Models
                        </h2>
                    </BlurReveal>
                    <BlurReveal delay={0.4} inView className="w-full">
                        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                            State-of-the-art LLMs for intelligent document parsing and extraction.
                        </p>
                    </BlurReveal>
                </div>
            </div>

            <ScrollReveal className="relative flex w-full overflow-hidden mask-gradient" width="100%" delay={0.2}>
                <div className="flex animate-marquee-slow whitespace-nowrap hover:pause gap-8 min-w-full">
                    {models.map((model, i) => (
                        <MarqueeCard key={`1-${i}`} model={model} />
                    ))}
                    {models.map((model, i) => (
                        <MarqueeCard key={`2-${i}`} model={model} />
                    ))}
                    {models.map((model, i) => (
                        <MarqueeCard key={`3-${i}`} model={model} />
                    ))}
                    {models.map((model, i) => (
                        <MarqueeCard key={`4-${i}`} model={model} />
                    ))}
                </div>

                {/* Gradient Masks */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-[#0A0A0A] to-transparent z-10"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-[#0A0A0A] to-transparent z-10"></div>
            </ScrollReveal>
        </section>
    );
}

function MarqueeCard({ model }: { model: typeof models[0] }) {
    return (
        <div
            className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl border border-black/5 dark:border-white/5 bg-gray-50 dark:bg-[#111111] hover:border-brand-orange/50 hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 cursor-pointer mx-2"
        >
            <div className={cn("w-10 h-10 rounded-xl bg-black/5 dark:bg-white/5 flex items-center justify-center shrink-0", model.color)}>
                <model.icon className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
                <h3 className="text-lg font-bold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                    {model.name}
                </h3>
                <p className="text-xs text-gray-500 whitespace-normal max-w-[200px]">
                    {model.description}
                </p>
            </div>
        </div>
    );
}
