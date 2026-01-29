import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { mdxComponents } from "@/components/docs/mdx-components";

const DOCS_DIRECTORY = path.join(process.cwd(), "ingestIqDocs");

export interface DocMeta {
    title: string;
    description: string;
    [key: string]: unknown;
}

export interface DocContent {
    content: React.ReactElement;
    meta: DocMeta;
    headings: Heading[];
}

export interface Heading {
    level: number;
    text: string;
    slug: string;
}

// Get the file path for a doc slug
function getDocFilePath(slug: string): string {
    // Handle index page
    if (!slug || slug === "index") {
        return path.join(DOCS_DIRECTORY, "index.mdx");
    }
    return path.join(DOCS_DIRECTORY, `${slug}.mdx`);
}

// Check if a doc exists
export function docExists(slug: string): boolean {
    const filePath = getDocFilePath(slug);
    return fs.existsSync(filePath);
}

// Extract headings from MDX content for table of contents
function extractHeadings(content: string): Heading[] {
    const headingRegex = /^(#{2,4})\s+(.+)$/gm;
    const headings: Heading[] = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
        const level = match[1].length;
        const text = match[2].trim();
        // Create slug from text (similar to rehype-slug)
        const slug = text
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-");

        headings.push({ level, text, slug });
    }

    return headings;
}

// Load and compile MDX content
export async function getMdxContent(slug: string): Promise<DocContent | null> {
    const filePath = getDocFilePath(slug);

    if (!fs.existsSync(filePath)) {
        return null;
    }

    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { content: rawContent, data } = matter(fileContent);

    const headings = extractHeadings(rawContent);

    const { content } = await compileMDX({
        source: rawContent,
        components: mdxComponents,
        options: {
            parseFrontmatter: false,
            mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypeSlug],
            },
        },
    });

    return {
        content,
        meta: {
            title: (data.title as string) || "Documentation",
            description: (data.description as string) || "",
            ...data,
        },
        headings,
    };
}

// Get raw MDX file content (for metadata extraction without compilation)
export function getDocMeta(slug: string): DocMeta | null {
    const filePath = getDocFilePath(slug);

    if (!fs.existsSync(filePath)) {
        return null;
    }

    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
        title: (data.title as string) || "Documentation",
        description: (data.description as string) || "",
        ...data,
    };
}
