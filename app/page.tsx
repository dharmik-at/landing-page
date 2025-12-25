import Image from "next/image";
import { Hero } from "@/components/sections/hero";
import { Solutions } from "@/components/sections/solutions";
import { DestinationConnectors } from "@/components/sections/destination-connectors";
import { AIModels } from "@/components/sections/ai-models";
import { EmbeddingModels } from "@/components/sections/embedding-models";
import { KnowledgeBases } from "@/components/sections/knowledge-bases";
import { PipelineVisualizer } from "@/components/sections/pipeline-visualizer";
import { Contact } from "@/components/sections/contact";
import { ProblemSection } from "@/components/sections/problem-section";
import { HowItWorks } from "@/components/sections/how-it-works";
import { RagVsFinetuning } from "@/components/sections/rag-vs-finetuning";
import { SecuritySection } from "@/components/sections/security-section";
import { SourceConnectors } from "@/components/sections/source-connectors";

export default function Home() {
    return (
        <main className="min-h-screen text-foreground selection:bg-brand-orange/30">
            <Hero />
            <ProblemSection />
            <HowItWorks />
            <Solutions />
            <RagVsFinetuning />
            <SecuritySection />
            <SourceConnectors />
            <DestinationConnectors />
            <AIModels />
            <EmbeddingModels />
            <KnowledgeBases />
            <PipelineVisualizer />
            <Contact />
        </main>
    );
}
