import { DocsHorizontalTabs, DocsSidebarNav, MobileSidebar } from "@/components/docs/docs-sidebar";

export default function DocsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen pt-20">
            {/* Horizontal Tabs at Top */}
            <div className="border-b border-gray-200 dark:border-white/10 bg-white/50 dark:bg-gray-950/50 backdrop-blur-sm sticky top-16 z-30">
                <div className="container mx-auto px-4 lg:px-8">
                    <DocsHorizontalTabs />
                </div>
            </div>

            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex gap-8 lg:gap-12">
                    {/* Desktop Sidebar - Now just shows the navigation for current tab */}
                    <div className="hidden lg:block w-64 flex-shrink-0">
                        <div className="sticky top-36 max-h-[calc(100vh-10rem)] overflow-y-auto py-6 pr-4">
                            <DocsSidebarNav />
                        </div>
                    </div>

                    {/* Main Content */}
                    <main className="flex-1 min-w-0 py-8">{children}</main>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <MobileSidebar />
        </div>
    );
}
