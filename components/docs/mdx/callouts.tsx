import { AlertTriangle, CheckCircle, Info, AlertCircle, Lightbulb, Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface CalloutProps {
    children: React.ReactNode;
    className?: string;
}

export function Warning({ children, className }: CalloutProps) {
    return (
        <div
            className={cn(
                "flex gap-3 p-4 my-4 rounded-lg",
                "bg-amber-50 dark:bg-amber-500/10",
                "border border-amber-200 dark:border-amber-500/20",
                className
            )}
        >
            <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-amber-800 dark:text-amber-200">
                {children}
            </div>
        </div>
    );
}

export function CheckCallout({ children, className }: CalloutProps) {
    return (
        <div
            className={cn(
                "flex gap-3 p-4 my-4 rounded-lg",
                "bg-green-50 dark:bg-green-500/10",
                "border border-green-200 dark:border-green-500/20",
                className
            )}
        >
            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-green-800 dark:text-green-200">
                {children}
            </div>
        </div>
    );
}

// Alias for backwards compatibility
export { CheckCallout as Check };

export function Note({ children, className }: CalloutProps) {
    return (
        <div
            className={cn(
                "flex gap-3 p-4 my-4 rounded-lg",
                "bg-gray-50 dark:bg-gray-500/10",
                "border border-gray-200 dark:border-gray-500/20",
                className
            )}
        >
            <Info className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-gray-700 dark:text-gray-300">{children}</div>
        </div>
    );
}

export function Tip({ children, className }: CalloutProps) {
    return (
        <div
            className={cn(
                "flex gap-3 p-4 my-4 rounded-lg",
                "bg-blue-50 dark:bg-blue-500/10",
                "border border-blue-200 dark:border-blue-500/20",
                className
            )}
        >
            <Lightbulb className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-blue-800 dark:text-blue-200">{children}</div>
        </div>
    );
}

export function Caution({ children, className }: CalloutProps) {
    return (
        <div
            className={cn(
                "flex gap-3 p-4 my-4 rounded-lg",
                "bg-red-50 dark:bg-red-500/10",
                "border border-red-200 dark:border-red-500/20",
                className
            )}
        >
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-red-800 dark:text-red-200">{children}</div>
        </div>
    );
}

// Inline icons for tables and inline text - more professional than emojis
export function IconCheck() {
    return (
        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100 dark:bg-green-500/20">
            <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
        </span>
    );
}

export function IconCross() {
    return (
        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-500/20">
            <X className="w-3 h-3 text-gray-500 dark:text-gray-400" />
        </span>
    );
}

// Badge components for Required/Optional in tables
export function BadgeRequired() {
    return (
        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-brand-orange/10 text-brand-orange border border-brand-orange/20">
            Required
        </span>
    );
}

export function BadgeOptional() {
    return (
        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
            Optional
        </span>
    );
}

