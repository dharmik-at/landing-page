import { cn } from "@/lib/utils";

interface StepsProps {
    children: React.ReactNode;
    className?: string;
}

export function Steps({ children, className }: StepsProps) {
    return (
        <div className={cn("ml-4 border-l border-gray-200 dark:border-gray-800 space-y-8 my-8", className)}>
            {children}
        </div>
    );
}

interface StepProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

export function Step({ title, children, className }: StepProps) {
    return (
        <div className={cn("relative pl-8", className)}>
            <div className="absolute -left-1.5 top-1 h-3 w-3 rounded-full border-2 border-white bg-gray-300 dark:border-gray-900 dark:bg-gray-700" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {title}
            </h3>
            <div className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {children}
            </div>
        </div>
    );
}
