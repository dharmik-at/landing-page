"use client";

import { cn } from "@/lib/utils";
import {
    OpenAIIcon, GoogleIcon, CohereIcon, AWSIcon,
    VoyageIcon, MistralIcon, JinaIcon, OllamaIcon
} from "@/components/ui/icons";

const models = [
    { name: "OpenAI Embeddings", icon: OpenAIIcon, color: "text-green-400", description: "text-embedding-3-small & large" },
    { name: "Google Gecko", icon: GoogleIcon, color: "text-blue-400", description: "Multimodal embedding models" },
    { name: "Cohere Embed", icon: CohereIcon, color: "text-purple-400", description: "High-performance English & Multilingual" },
    { name: "Amazon Titan", icon: AWSIcon, color: "text-orange-400", description: "Titan Embeddings G1 - Text" },
    { name: "Voyage AI", icon: VoyageIcon, color: "text-emerald-400", description: "State-of-the-art retrieval models" },
    { name: "Mistral Embed", icon: MistralIcon, color: "text-yellow-400", description: "Efficient open-weight embeddings" },
    { name: "Jina Embeddings", icon: JinaIcon, color: "text-cyan-400", description: "8k context length support" },
    { name: "Ollama", icon: OllamaIcon, color: "text-white", description: "Local embedding models (Llama 3, etc.)" },
];

import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function EmbeddingModels() {
    return (
        <section className="py-24 bg-[#0F0F0F] overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 mb-12">
                <ScrollReveal className="text-center" width="100%">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-brand-orange">Embedding</span> Models
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        High-performance vector embeddings for semantic search and retrieval.
                    </p>
                </ScrollReveal>
            </div>

            <ScrollReveal className="relative flex w-full overflow-hidden mask-gradient" width="100%" delay={0.2}>
                <div className="flex animate-marquee-reverse whitespace-nowrap hover:pause gap-8 min-w-full">
                    {models.map((model, i) => (
                        <MarqueeCard key={`1-${i}`} model={model} />
                    ))}
                    {models.map((model, i) => (
                        <MarqueeCard key={`2-${i}`} model={model} />
                    ))}
                </div>

                {/* Gradient Masks */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0F0F0F] to-transparent z-10"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0F0F0F] to-transparent z-10"></div>
            </ScrollReveal>
        </section>
    );
}

function MarqueeCard({ model }: { model: typeof models[0] }) {
    return (
        <div
            className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl border border-white/5 bg-[#111111] hover:border-brand-orange/50 hover:bg-white/5 transition-all duration-300 cursor-pointer mx-2"
        >
            <div className={cn("w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0", model.color)}>
                <model.icon className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
                <h3 className="text-lg font-bold text-gray-300 hover:text-white transition-colors">
                    {model.name}
                </h3>
                <p className="text-xs text-gray-500 whitespace-normal max-w-[200px]">
                    {model.description}
                </p>
            </div>
        </div>
    );
}
