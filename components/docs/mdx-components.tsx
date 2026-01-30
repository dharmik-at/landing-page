import Link from "next/link";
import Image from "next/image";
import { Card, CardGroup } from "./mdx/card";
import { Accordion, AccordionGroup } from "./mdx/accordion";
import { Tabs, Tab } from "./mdx/tabs";
import { Steps, Step } from "./mdx/steps";
import { Warning, Check, Note, Tip, Caution, IconCheck, IconCross, BadgeRequired, BadgeOptional } from "./mdx/callouts";
import { CodeBlock, InlineCode } from "./mdx/code-block";
import { ParamField } from "./mdx/param-field";
import { Mermaid } from "./mdx/mermaid";
import { cn } from "@/lib/utils";
import type { MDXComponents } from "mdx/types";

// Custom pre component that handles mermaid diagrams
function Pre({
    children,
    ...props
}: React.HTMLAttributes<HTMLPreElement> & { children?: React.ReactNode }) {
    // Check if this is a mermaid code block
    const child = children as React.ReactElement<{ className?: string; children?: string }> | undefined;
    if (child?.props?.className?.includes("language-mermaid")) {
        const mermaidCode = child?.props?.children || "";
        return <Mermaid chart={typeof mermaidCode === "string" ? mermaidCode : ""} />;
    }

    return <CodeBlock {...props}>{children}</CodeBlock>;
}

// Custom anchor component
function Anchor({
    href,
    children,
    ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
    if (!href) return <span {...props}>{children}</span>;

    // External links
    if (href.startsWith("http")) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-orange hover:underline"
                {...props}
            >
                {children}
            </a>
        );
    }

    // Internal links - fix paths from MDX that use relative paths like "/quickstart"
    let resolvedHref = href;
    if (!href.startsWith("/docs") && !href.startsWith("#")) {
        // Prepend /docs to relative internal links (but not anchor links)
        resolvedHref = `/docs${href.startsWith("/") ? href : `/${href}`}`;
    }

    return (
        <Link href={resolvedHref} className="text-brand-orange hover:underline" {...props}>
            {children}
        </Link>
    );
}

// Custom table components
function Table({ children, ...props }: React.HTMLAttributes<HTMLTableElement>) {
    return (
        <div className="my-6 overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
            <table
                className="w-full text-sm border-collapse"
                {...props}
            >
                {children}
            </table>
        </div>
    );
}

function Thead({ children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) {
    return (
        <thead className="bg-gray-50 dark:bg-gray-900" {...props}>
            {children}
        </thead>
    );
}

function Th({ children, ...props }: React.HTMLAttributes<HTMLTableCellElement>) {
    return (
        <th
            className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800"
            {...props}
        >
            {children}
        </th>
    );
}

function Td({ children, ...props }: React.HTMLAttributes<HTMLTableCellElement>) {
    return (
        <td
            className="px-4 py-3 text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-gray-800"
            {...props}
        >
            {children}
        </td>
    );
}

function Tr({ children, ...props }: React.HTMLAttributes<HTMLTableRowElement>) {
    return (
        <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/50" {...props}>
            {children}
        </tr>
    );
}

// Heading components with anchor links
function createHeading(level: 1 | 2 | 3 | 4 | 5 | 6) {
    const HeadingComponent = ({
        children,
        id,
        ...props
    }: React.HTMLAttributes<HTMLHeadingElement>) => {
        const Tag = `h${level}` as const;
        const sizes: Record<number, string> = {
            1: "text-4xl font-bold mt-8 mb-4",
            2: "text-2xl font-bold mt-8 mb-4",
            3: "text-xl font-semibold mt-6 mb-3",
            4: "text-lg font-semibold mt-4 mb-2",
            5: "text-base font-semibold mt-4 mb-2",
            6: "text-sm font-semibold mt-4 mb-2",
        };

        return (
            <Tag
                id={id}
                className={cn(
                    sizes[level],
                    "text-gray-900 dark:text-white group scroll-mt-24"
                )}
                {...props}
            >
                {children}
                {id && (
                    <a
                        href={`#${id}`}
                        className="ml-2 opacity-0 group-hover:opacity-100 text-brand-orange"
                        aria-label="Link to this section"
                    >
                        #
                    </a>
                )}
            </Tag>
        );
    };
    HeadingComponent.displayName = `Heading${level}`;
    return HeadingComponent;
}

// Custom image component
function DocImage({
    src,
    alt,
    ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) {
    if (!src || typeof src !== "string") return null;

    // Handle relative paths
    const imageSrc = src.startsWith("/")
        ? `/images${src}`
        : src;

    return (
        <span className="block my-6">
            <Image
                src={imageSrc}
                alt={alt || "Documentation image"}
                width={800}
                height={400}
                className="rounded-lg border border-gray-200 dark:border-gray-800"
                {...(props as Omit<React.ComponentProps<typeof Image>, "src" | "alt">)}
            />
        </span>
    );
}

// MDX components mapping
export const mdxComponents: MDXComponents = {
    // Custom components from Mintlify
    Card,
    CardGroup,
    Accordion,
    AccordionGroup,
    Tabs,
    Tab,
    Steps,
    Step,
    Warning,
    Check,
    Note,
    Tip,
    Caution,
    ParamField,
    // Inline icons and badges for tables/lists (replacing emojis)
    IconCheck,
    IconCross,
    BadgeRequired,
    BadgeOptional,

    // HTML element overrides
    h1: createHeading(1),
    h2: createHeading(2),
    h3: createHeading(3),
    h4: createHeading(4),
    h5: createHeading(5),
    h6: createHeading(6),
    p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
        <p className="my-4 text-gray-600 dark:text-gray-400 leading-relaxed" {...props}>
            {children}
        </p>
    ),
    a: Anchor,
    pre: Pre,
    code: InlineCode,
    table: Table,
    thead: Thead,
    th: Th,
    td: Td,
    tr: Tr,
    img: DocImage,
    ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
        <ul className="my-4 ml-6 list-disc text-gray-600 dark:text-gray-400 space-y-2" {...props}>
            {children}
        </ul>
    ),
    ol: ({ children, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
        <ol className="my-4 ml-6 list-decimal text-gray-600 dark:text-gray-400 space-y-2" {...props}>
            {children}
        </ol>
    ),
    li: ({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
        <li className="leading-relaxed" {...props}>{children}</li>
    ),
    blockquote: ({ children, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
        <blockquote
            className="my-4 pl-4 border-l-4 border-brand-orange text-gray-600 dark:text-gray-400 italic"
            {...props}
        >
            {children}
        </blockquote>
    ),
    hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
        <hr className="my-8 border-gray-200 dark:border-gray-800" {...props} />
    ),
    strong: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
        <strong className="font-semibold text-gray-900 dark:text-white" {...props}>
            {children}
        </strong>
    ),
};
