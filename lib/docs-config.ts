// Documentation navigation configuration parsed from docs.json

export interface NavPage {
    title: string;
    slug: string;
    href: string;
}

export interface NavGroup {
    group: string;
    pages: NavPage[];
}

export interface NavTab {
    tab: string;
    groups: NavGroup[];
}

export interface DocsConfig {
    name: string;
    tabs: NavTab[];
    anchors: { anchor: string; href: string; icon: string }[];
}

// Map of page slugs to their titles (extracted from frontmatter)
const pageTitles: Record<string, string> = {
    "index": "Documentation",
    "quickstart": "Quick Start",
    "development": "Development",
    "core-concepts/knowledge-bases": "Knowledge Bases",
    "core-concepts/pipelines": "Pipelines",
    "core-concepts/documents": "Documents",
    "core-concepts/connectors": "Connectors",
    "connectors/file-upload": "File Upload",
    "connectors/web-scraping": "Web Scraping",
    "connectors/google-drive": "Google Drive",
    "connectors/video": "Video",
    "ai-processing/ai-models": "AI Models",
    "ai-processing/semantic-chunking": "Semantic Chunking",
    "ai-processing/embeddings": "Embeddings",
    "ai-processing/custom-prompts": "Custom Prompts",
    "integrations/mcp-server": "MCP Server",
    "api-reference/introduction": "API Introduction",
    "api-reference/authentication": "Authentication",
    "api-reference/knowledge-bases": "Knowledge Bases API",
    "api-reference/pipelines": "Pipelines API",
    "api-reference/documents": "Documents API",
    "api-reference/search": "Search API",
    "self-hosting/requirements": "Requirements",
    "self-hosting/configuration": "Configuration",
    "self-hosting/architecture": "Architecture",
    "self-hosting/deployment": "Deployment",
};

function createNavPage(slug: string): NavPage {
    const href = slug === "index" ? "/docs" : `/docs/${slug}`;
    return {
        title: pageTitles[slug] || slug,
        slug,
        href,
    };
}

export const docsConfig: DocsConfig = {
    name: "IngestIQ",
    tabs: [
        {
            tab: "Getting Started",
            groups: [
                {
                    group: "Introduction",
                    pages: [
                        createNavPage("index"),
                        createNavPage("quickstart"),
                        createNavPage("development"),
                    ],
                },
            ],
        },
        {
            tab: "Core Concepts",
            groups: [
                {
                    group: "Platform",
                    pages: [
                        createNavPage("core-concepts/knowledge-bases"),
                        createNavPage("core-concepts/pipelines"),
                        createNavPage("core-concepts/documents"),
                        createNavPage("core-concepts/connectors"),
                    ],
                },
            ],
        },
        {
            tab: "Data Connectors",
            groups: [
                {
                    group: "Source Connectors",
                    pages: [
                        createNavPage("connectors/file-upload"),
                        createNavPage("connectors/web-scraping"),
                        createNavPage("connectors/google-drive"),
                        createNavPage("connectors/video"),
                    ],
                },
            ],
        },
        {
            tab: "AI & Processing",
            groups: [
                {
                    group: "AI Configuration",
                    pages: [
                        createNavPage("ai-processing/ai-models"),
                        createNavPage("ai-processing/semantic-chunking"),
                        createNavPage("ai-processing/embeddings"),
                        createNavPage("ai-processing/custom-prompts"),
                    ],
                },
            ],
        },
        {
            tab: "Integrations",
            groups: [
                {
                    group: "MCP",
                    pages: [createNavPage("integrations/mcp-server")],
                },
            ],
        },
        {
            tab: "API Reference",
            groups: [
                {
                    group: "Overview",
                    pages: [createNavPage("api-reference/introduction")],
                },
                {
                    group: "Endpoints",
                    pages: [
                        createNavPage("api-reference/authentication"),
                        createNavPage("api-reference/knowledge-bases"),
                        createNavPage("api-reference/pipelines"),
                        createNavPage("api-reference/documents"),
                        createNavPage("api-reference/search"),
                    ],
                },
            ],
        },
        {
            tab: "Self-Hosting",
            groups: [
                {
                    group: "Deployment",
                    pages: [
                        createNavPage("self-hosting/requirements"),
                        createNavPage("self-hosting/configuration"),
                        createNavPage("self-hosting/architecture"),
                        createNavPage("self-hosting/deployment"),
                    ],
                },
            ],
        },
    ],
    anchors: [
        {
            anchor: "GitHub",
            href: "https://github.com/avesta-hq/ingestiq-backend",
            icon: "github",
        },
        {
            anchor: "Community",
            href: "https://x.com/avestalabs",
            icon: "x-twitter",
        },
    ],
};

// Get all doc slugs for static generation
export function getAllDocSlugs(): string[] {
    const slugs: string[] = [];
    for (const tab of docsConfig.tabs) {
        for (const group of tab.groups) {
            for (const page of group.pages) {
                if (page.slug !== "index") {
                    slugs.push(page.slug);
                }
            }
        }
    }
    return slugs;
}

// Find which tab a slug belongs to
export function getTabForSlug(slug: string): string | null {
    for (const tab of docsConfig.tabs) {
        for (const group of tab.groups) {
            for (const page of group.pages) {
                if (page.slug === slug) {
                    return tab.tab;
                }
            }
        }
    }
    return null;
}

// Get previous and next pages for navigation
export function getAdjacentPages(currentSlug: string): {
    prev: NavPage | null;
    next: NavPage | null;
} {
    const allPages: NavPage[] = [];
    for (const tab of docsConfig.tabs) {
        for (const group of tab.groups) {
            allPages.push(...group.pages);
        }
    }

    const currentIndex = allPages.findIndex((p) => p.slug === currentSlug);
    return {
        prev: currentIndex > 0 ? allPages[currentIndex - 1] : null,
        next: currentIndex < allPages.length - 1 ? allPages[currentIndex + 1] : null,
    };
}
