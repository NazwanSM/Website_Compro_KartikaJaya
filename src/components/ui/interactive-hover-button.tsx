import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps {
    text?: string;
    href?: string;
    className?: string;
    onClick?: () => void;
}

const InteractiveHoverButton = React.forwardRef<
    HTMLElement,
    InteractiveHoverButtonProps
    >(({ text = "Button", href, className, onClick, ...props }, ref) => {
    const baseClasses = cn(
        "group relative w-46 cursor-pointer overflow-hidden rounded-full bg-base-white p-2 text-center font-semibold text-primary inline-block",
        className,
    );

    const content = (
        <>
            <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
                {text}
            </span>
            <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
                <span>{text}</span>
                <ArrowRight />
            </div>
            <div className="absolute left-[8%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-primary transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-primary"></div>
        </>
    );

    if (href) {
        return (
            <Link 
                href={href} 
                className={baseClasses}
                ref={ref as React.Ref<HTMLAnchorElement>}
            >
                {content}
            </Link>
        );
    }

    return (
        <button
            ref={ref as React.Ref<HTMLButtonElement>}
            className={baseClasses}
            onClick={onClick}
            {...props}
        >
            {content}
        </button>
    );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };
