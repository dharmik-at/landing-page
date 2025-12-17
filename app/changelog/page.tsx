import { getChangelog } from "@/lib/changelog";
import ChangelogList from "@/components/changelog-list";
import ChangelogHero from "@/components/changelog-hero";

export const metadata = {
    title: "Changelog - IngestIQ",
    description: "See what's new in IngestIQ.",
};

export default function ChangelogPage() {
    const changelog = getChangelog();

    return (
        <main className="min-h-screen text-gray-900 dark:text-white selection:bg-brand-orange/30 pt-24">
            <ChangelogHero />

            {/* Timeline Section */}
            <section className="px-4 md:px-8 pb-32">
                <div className="container mx-auto max-w-3xl relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-0 top-0 bottom-0 w-px bg-black/10 dark:bg-white/10" />

                    <ChangelogList items={changelog} />
                </div>
            </section>
        </main>
    );
}

