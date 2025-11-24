"use client";

import { motion, useInView, UseInViewOptions, HTMLMotionProps } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    duration?: number;
    viewport?: UseInViewOptions;
    yOffset?: number;
}

export function ScrollReveal({
    children,
    width = "fit-content",
    delay = 0,
    duration = 0.5,
    viewport = { once: true, margin: "-100px" },
    yOffset = 40,
    className,
    ...props
}: ScrollRevealProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: yOffset }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
            style={{ width }}
            {...props}
        >
            {children}
        </motion.div>
    );
}

export function StaggerContainer({
    children,
    delayChildren = 0,
    staggerChildren = 0.1,
    className,
    viewport = { once: true, margin: "-100px" },
    ...props
}: ScrollRevealProps & { delayChildren?: number; staggerChildren?: number }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        delayChildren,
                        staggerChildren,
                    },
                },
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}

export function StaggerItem({ children, className, yOffset = 20, ...props }: ScrollRevealProps) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: yOffset },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}
