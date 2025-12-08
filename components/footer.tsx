import Link from "next/link";
import { Linkedin, Twitter, Youtube, Instagram } from "lucide-react";

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

                <div className="flex gap-6 text-sm text-gray-400 items-center">
                    <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                    <Link href="#" className="hover:text-white transition-colors">Terms</Link>
                    <div className="w-px h-4 bg-gray-700 mx-2"></div>
                    <Link href="https://linkedin.com/company/avestalabs" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Linkedin size={20} /></Link>
                    <Link href="https://x.com/avestalabs" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Twitter size={20} /></Link>
                    <Link href="https://www.youtube.com/channel/UCHCxoLxwAy1FCXkdch7Ex0Q" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Youtube size={20} /></Link>
                    <Link href="https://www.instagram.com/avestalabs.ai/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Instagram size={20} /></Link>
                </div>

                <div className="text-sm text-gray-500">
                    © 2025 AvestaLabs. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
