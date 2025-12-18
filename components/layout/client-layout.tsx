"use client";

import { ReactNode, useEffect, useState } from "react";
import { LoaderProvider, useLoader } from "@/components/providers/loader-provider";
import { Preloader } from "@/components/ui/preloader";

function LoaderWrapper({ children }: { children: ReactNode }) {
    const { isLoading } = useLoader();
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        if (!isLoading) {
            // Small delay to ensure preloader exit animation overlaps with content appearance
            // or simply mount immediately if we want animations to start exactly now.
            setShowContent(true);
        }
    }, [isLoading]);

    return (
        <>
            <Preloader />
            {/* 
        We mount children only when content is ready to be shown.
        However, to allow a smooth reveal (preloader fading out revealing content),
        the content must be mounted slightly BEFORE the preloader is fully gone.
        
        But the user's issue is that animations run in the background.
        So we mount them when isLoading becomes false (which happens inside Preloader just before reveal).
      */}
            {showContent && <div className="animate-in fade-in duration-700">{children}</div>}
        </>
    );
}

export function AppWrapper({ children }: { children: ReactNode }) {
    return (
        <LoaderProvider>
            <LoaderWrapper>{children}</LoaderWrapper>
        </LoaderProvider>
    );
}
