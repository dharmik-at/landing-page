"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlurRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
}

export const BlurReveal = ({
    children,
    className,
    delay = 0,
    duration = 0.8,
    as: Component = "div",
}: BlurRevealProps & { as?: any }) => {
    const MotionComponent = motion(Component);
    return (
        <MotionComponent
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{
                duration: duration,
                delay: delay,
                ease: [0.25, 0.4, 0.25, 1], // Smooth cubic-bezier
            }}
            className={cn("inline-block", className)}
        >
            {children}
        </MotionComponent>
    );
};
