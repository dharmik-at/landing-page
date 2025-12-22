"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

import { useMemo } from "react";

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
    const transition = {
        duration: duration,
        delay: delay,
        ease: [0.25, 0.4, 0.25, 1] as const,
    };

    const variants = {
        hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
        visible: { opacity: 1, filter: "blur(0px)", y: 0 },
    };

    if (Component === "div") {
        return (
            <motion.div
                initial="hidden"
                animate="visible"
                transition={transition}
                variants={variants}
                className={cn("inline-block", className)}
            >
                {children}
            </motion.div>
        );
    }

    if (Component === "span") {
        return (
            <motion.span
                initial="hidden"
                animate="visible"
                transition={transition}
                variants={variants}
                className={cn("inline-block", className)}
            >
                {children}
            </motion.span>
        );
    }

    const MotionComponent = useMemo(() => motion(Component), [Component]);
    return (
        <MotionComponent
            initial="hidden"
            animate="visible"
            transition={transition}
            variants={variants}
            className={cn("inline-block", className)}
        >
            {children}
        </MotionComponent>
    );
};
