import Link from "next/link";
import * as React from "react";

import { cn } from "@/lib/utils";

import { Button } from "./button";

export interface CardProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  variant?: "default" | "glow" | "glow-brand";
  className?: string;
  children?: React.ReactNode;
  image?: React.ReactNode;
  button?: {
    variant?: "glow" | "default";
    label: string;
    href: string;
  };
  imageVertical?: boolean;
  imageHorizontal?: boolean;
}

export function Card({
  title,
  description,
  icon,
  variant = "default",
  className = "",
  children,
  image,
  button,
  imageVertical = false,
  imageHorizontal = false,
}: CardProps) {
  return (
    <div
      className={cn(
        "relative flex overflow-hidden rounded-2xl p-8 shadow-xl",
        imageVertical ? "flex-row" : "flex-col gap-6",
        {
          "glass-1 to-transparent dark:glass-3": variant === "default",
          "glass-2 to-trasparent dark:glass-3 after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] dark:after:bg-foreground/30 after:blur-[72px]": variant === "glow",
          "glass-3 from-card/100 to-card/100 dark:glass-4 after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] after:bg-brand-foreground/70 after:blur-[72px]": variant === "glow-brand",
        },
        className
      )}
    >
      <hr
        className={cn(
          "via-foreground/60 absolute top-0 left-[10%] h-[1px] w-[80%] border-0 bg-linear-to-r from-transparent to-transparent",
          variant === "glow-brand" && "via-brand"
        )}
      />
      <div className={cn("flex flex-col gap-6 justify-center", imageVertical ? "w-1/2 pr-8" : "w-full")}>
        <div className="relative flex flex-col gap-2">
          <div className="flex items-center gap-2">
            {icon && <div className="text-muted-foreground">{icon}</div>}
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
        <div className="relative">{children}</div>
        {button && (
          <Button variant={button.variant || "default"} size="lg" asChild>
            <Link href={button.href}>{button.label}</Link>
          </Button>
        )}
      </div>
      {imageVertical && image && (
        <div className="w-1/2 flex items-center justify-center">
          {image}
        </div>
      )}
    </div>
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      data-slot="card-title"
      className={cn("leading-none font-semibold tracking-tight", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("p-6 pt-0", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    />
  );
}

export {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};
