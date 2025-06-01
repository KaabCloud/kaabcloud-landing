import * as React from "react";

import { cn } from "@/lib/utils";

interface SectionProps extends React.ComponentProps<"section"> {
  id?: string;
  className?: string;
}

function Section({ className, id, ...props }: SectionProps) {
  return (
    <section
      id={id}
      data-slot="section"
      className={cn(
        "bg-background text-foreground px-4 py-12 sm:py-24 md:py-32",
        className,
      )}
      {...props}
    />
  );
}

export { Section };
