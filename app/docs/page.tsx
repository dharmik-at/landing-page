import { Metadata } from "next";
import { getMdxContent, getDocMeta } from "@/lib/mdx-utils";
import { getAdjacentPages } from "@/lib/docs-config";
import { TableOfContents } from "@/components/docs/table-of-contents";
import { DocNavigation } from "@/components/docs/doc-navigation";

export async function generateMetadata(): Promise<Metadata> {
    const meta = getDocMeta("index");
    return {
        title: meta?.title || "Documentation",
        description: meta?.description || "IngestIQ Documentation",
    };
}

export default async function DocsHomePage() {
    const doc = await getMdxContent("index");

    if (!doc) {
        return (
            <div className="text-center py-16">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Documentation Not Found
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                    The documentation index page could not be loaded.
                </p>
            </div>
        );
    }

    const { prev, next } = getAdjacentPages("index");

    return (
        <div className="flex gap-8 lg:gap-12">
            {/* Main Content */}
            <article className="flex-1 min-w-0">
                {/* Header */}
                <header className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        {doc.meta.title}
                    </h1>
                    {doc.meta.description && (
                        <p className="text-xl text-gray-600 dark:text-gray-400">
                            {doc.meta.description}
                        </p>
                    )}
                </header>

                {/* Content */}
                <div className="prose-content">{doc.content}</div>

                {/* Navigation */}
                <DocNavigation prev={prev} next={next} />
            </article>

            {/* Table of Contents */}
            <aside className="hidden xl:block w-56 flex-shrink-0">
                <div className="sticky top-24">
                    <TableOfContents headings={doc.headings} />
                </div>
            </aside>
        </div>
    );
}
