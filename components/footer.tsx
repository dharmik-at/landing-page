import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-glass-border bg-black/40 py-12 px-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-brand-orange rounded-md flex items-center justify-center">
                        <span className="text-white font-bold text-xs">I</span>
                    </div>
                    <span className="font-bold text-lg">IngestIQ</span>
                </div>

                <div className="flex gap-8 text-sm text-gray-400">
                    <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                    <Link href="#" className="hover:text-white transition-colors">Terms</Link>
                    <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
                    <Link href="#" className="hover:text-white transition-colors">GitHub</Link>
                </div>

                <div className="text-sm text-gray-500">
                    © 2025 AvestaLabs. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
