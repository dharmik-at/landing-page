"use client";

import { useState } from "react";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Input } from "@/components/ui/input";
import { Send, Check, X } from "lucide-react";

export function NewsletterForm() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to subscribe");
            }

            setStatus("success");
            setEmail("");
        } catch (error) {
            setStatus("error");
            setErrorMessage(error instanceof Error ? error.message : "Something went wrong");
        }
    };

    return (
        <div className="lg:col-span-1">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-6">Stay Updated</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Get the latest updates and resources.
            </p>

            {status === "success" ? (
                <div className="flex items-center gap-2 text-green-500 text-sm p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                    <Check className="w-4 h-4" />
                    <span>Subscribed! Check your email.</span>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 focus:border-brand-orange/50 text-gray-900 dark:text-white placeholder:text-gray-500"
                    />

                    {status === "error" && (
                        <div className="flex items-center gap-2 text-red-500 text-xs">
                            <X className="w-3 h-3" />
                            <span>{errorMessage}</span>
                        </div>
                    )}

                    <ShinyButton
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full text-white disabled:opacity-50"
                    >
                        {status === "loading" ? (
                            <span className="animate-pulse">Subscribing...</span>
                        ) : (
                            <>
                                Subscribe <Send className="w-3 h-3 ml-2" />
                            </>
                        )}
                    </ShinyButton>
                </form>
            )}
        </div>
    );
}
