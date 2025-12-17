import changelogData from "@/data/changelog.json";

export interface ChangelogItem {
    version: string;
    date: string;
    title: string;
    description: string;
    changes: { type: 'feature' | 'improvement' | 'fix'; text: string }[];
}

export function getChangelog(): ChangelogItem[] {
    return changelogData as ChangelogItem[];
}
