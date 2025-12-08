"use client";

export function GridBackground() {
    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none">
            <div className="absolute inset-0 bg-white dark:bg-[#050505]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white dark:from-black dark:via-transparent dark:to-black" />
        </div>
    );
}
