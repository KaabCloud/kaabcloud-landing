import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
  className?: string;
}

const GlowButton = forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <div className="relative group">
        <div className="absolute -inset-0.5 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-shimmer"></div>
        </div>
        <button
          ref={ref}
          className={cn(
            "relative px-4 py-2 bg-black rounded-lg leading-none flex items-center justify-center gap-2",
            "text-white font-medium",
            "transition-colors duration-200",
            "hover:text-white",
            size === "sm" && "text-sm px-3 py-1.5",
            size === "lg" && "text-lg px-6 py-2",
            variant === "outline" && "bg-transparent border border-white/20",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

GlowButton.displayName = "GlowButton";

export { GlowButton }; 