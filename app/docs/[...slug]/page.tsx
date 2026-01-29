import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMdxContent, getDocMeta, docExists } from "@/lib/mdx-utils";
import { getAllDocSlugs, getAdjacentPages } from "@/lib/docs-config";
import { TableOfContents } from "@/components/docs/table-of-contents";
import { DocNavigation } from "@/components/docs/doc-navigation";

interface PageProps {
    params: Promise<{ slug: string[] }>;
}

// Generate static paths for all docs
export async function generateStaticParams() {
    const slugs = getAllDocSlugs();
    return slugs.map((slug) => ({
        slug: slug.split("/"),
    }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const slugPath = slug.join("/");
    const meta = getDocMeta(slugPath);

    if (!meta) {
        return {
            title: "Not Found",
            description: "Page not found",
        };
    }

    return {
        title: meta.title,
        description: meta.description,
    };
}

export default async function DocPage({ params }: PageProps) {
    const { slug } = await params;
    const slugPath = slug.join("/");

    // Check if doc exists
    if (!docExists(slugPath)) {
        notFound();
    }

    const doc = await getMdxContent(slugPath);

    if (!doc) {
        notFound();
    }

    const { prev, next } = getAdjacentPages(slugPath);

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
