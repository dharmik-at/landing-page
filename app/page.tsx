import Image from "next/image";
import { Hero } from "@/components/sections/hero";
import { Solutions } from "@/components/sections/solutions";
import { SourceConnectors } from "@/components/sections/tech-marquee"; // Renamed export
import { DestinationConnectors } from "@/components/sections/destination-connectors";
import { AIModels } from "@/components/sections/ai-models";
import { EmbeddingModels } from "@/components/sections/embedding-models";
import { KnowledgeBases } from "@/components/sections/knowledge-bases";
import { Security } from "@/components/sections/technical-specs";
import { FeaturesDeepDive } from "@/components/sections/features-deep-dive";
import { PipelineVisualizer } from "@/components/sections/pipeline-visualizer";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-brand-orange/30">
      <Hero />
      <Solutions />
      <SourceConnectors />
      <DestinationConnectors />
      <AIModels />
      <EmbeddingModels />
      <KnowledgeBases />
      <PipelineVisualizer />
      <FeaturesDeepDive />
      <Security />
      <Contact />
    </main>
  );
}
