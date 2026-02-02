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
        const cwd = process.cwd();
        const path = await import("path");
        const fs = await import("fs");

        // Try multiple potential paths
        const searchPath = "ingestIqDocs";
        const docsPath = path.join(cwd, searchPath);
        const exists = fs.existsSync(docsPath);

        let dirListing = "";
        try {
            dirListing = fs.readdirSync(cwd).join(", ");
        } catch (e) {
            dirListing = "Error reading cwd";
        }

        let docsListing = "";
        if (exists) {
            try {
                docsListing = fs.readdirSync(docsPath).join(", ");
            } catch (e) {
                docsListing = "Error reading docs dir";
            }
        }

        return (
            <div className="py-16 px-4">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Documentation Not Found (Debug Mode)
                </h1>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto font-mono text-xs">
                    <p className="mb-2"><strong className="text-brand-orange">Process CWD:</strong> {cwd}</p>
                    <p className="mb-2"><strong className="text-brand-orange">Target Path:</strong> {docsPath}</p>
                    <p className="mb-2"><strong className="text-brand-orange">Exists:</strong> {exists ? "YES" : "NO"}</p>
                    <div className="mb-2">
                        <strong className="text-brand-orange">CWD Contents:</strong>
                        <div className="mt-1 p-2 bg-gray-200 dark:bg-gray-900 rounded break-all">
                            {dirListing}
                        </div>
                    </div>
                    <div className="mb-2">
                        <strong className="text-brand-orange">Docs Dir Contents:</strong>
                        <div className="mt-1 p-2 bg-gray-200 dark:bg-gray-900 rounded break-all">
                            {docsListing}
                        </div>
                    </div>
                </div>
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
