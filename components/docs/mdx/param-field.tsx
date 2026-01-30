import { cn } from "@/lib/utils";

interface ParamFieldProps {
    path: string;
    type?: string;
    required?: boolean;
    default?: string;
    children: React.ReactNode;
    className?: string;
}

export function ParamField({
    path,
    type,
    required,
    default: defaultValue,
    children,
    className,
}: ParamFieldProps) {
    return (
        <div className={cn("my-4 border-b border-gray-100 dark:border-gray-800 pb-4 last:border-0", className)}>
            <div className="flex items-baseline gap-2 mb-1 font-mono text-sm">
                <span className="font-semibold text-gray-900 dark:text-white">{path}</span>
                {type && <span className="text-gray-500 dark:text-gray-400">{type}</span>}
                {required && (
                    <span className="text-brand-orange text-xs uppercase tracking-wider font-semibold">
                        required
                    </span>
                )}
                {defaultValue && (
                    <span className="text-gray-500 dark:text-gray-400">
                        default: {defaultValue}
                    </span>
                )}
            </div>
            <div className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                {children}
            </div>
        </div>
    );
}
