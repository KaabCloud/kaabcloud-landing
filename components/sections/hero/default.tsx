import { ArrowRightIcon } from "lucide-react";
import { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import Github from "../../logos/github";
import { Badge } from "../../ui/badge";
import { Button, type ButtonProps } from "../../ui/button";
import Glow from "../../ui/glow";
import { GlowButton } from "../../ui/glow-button";
import { Mockup, MockupFrame } from "../../ui/mockup";
import Screenshot from "../../ui/screenshot";
import { Section } from "../../ui/section";

interface HeroButtonProps {
  href: string;
  text: string;
  variant?: ButtonProps["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
}

interface HeroProps {
  title?: string;
  description?: string;
  mockup?: ReactNode | false;
  badge?: ReactNode | false;
  buttons?: HeroButtonProps[] | false;
  className?: string;
  id?: string;
}

export default function Hero({
  id = 'hero',
  title = "Give your big idea the design it deserves",
  description = "Professionally designed blocks and templates built with React, Shadcn/ui and Tailwind that will help your product stand out.",
  mockup = (
    <Screenshot
      srcLight="/app-light.png"
      srcDark="/app-dark.png"
      alt="Launch UI app screenshot"
      width={1248}
      height={765}
      className="w-full"
    />
  ),
  badge = (
    <Badge variant="outline" className="animate-appear">
      <span className="text-muted-foreground">
        New version of Launch UI is out!
      </span>
      <a href={siteConfig.getStartedUrl} className="flex items-center gap-1">
        Get started
        <ArrowRightIcon className="size-3" />
      </a>
    </Badge>
  ),
  buttons = [
    {
      href: siteConfig.getStartedUrl,
      text: "Get Started",
      variant: "default",
    },
    {
      href: siteConfig.links.github,
      text: "Github",
      variant: "glow",
      icon: <Github className="mr-2 size-4" />,
    },
  ],
  className,
}: HeroProps) {
  return (
    <Section
      id={id}
      className={cn(
        "group relative overflow-visible pb-0 sm:pb-0 md:pb-0",
        mockup !== false && "fade-bottom",
        className,
      )}
    >
      <div className="max-w-container mx-auto flex flex-col gap-12 pt-16 sm:gap-24">
        <div className={cn(
          "flex flex-col items-center gap-6 text-center sm:gap-12",
          mockup === false && "relative z-10"
        )}>
          {badge !== false && badge}
          <h1 className={cn(
            "animate-appear inline-block text-3xl leading-tight font-normal text-balance text-white drop-shadow-2xl sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight",
            mockup === false ? "relative" : "relative z-10"
          )}>
            {title}
          </h1>
          <p className={cn(
            "text-sm animate-appear text-muted-foreground max-w-[740px] font-medium text-balance opacity-0 delay-100 sm:text-base",
            mockup === false ? "relative" : "relative z-10"
          )}>
            {description}
          </p>
          {buttons !== false && buttons.length > 0 && (
            <div className={cn(
              "animate-appear flex justify-center gap-4 opacity-0 delay-300 items-center",
              mockup === false ? "relative" : "relative z-10"
            )}>
              {buttons.map((button, index) => (
                button.variant === "glow" ? (
                  <GlowButton
                    key={index}
                    size="lg"
                  >
                    <a href={button.href} className="flex items-center gap-2">
                      {button.icon}
                      {button.text}
                      {button.iconRight}
                    </a>
                  </GlowButton>
                ) : (
                  <Button
                    key={index}
                    variant={button.variant || "default"}
                    size="lg"
                    asChild
                  >
                    <a href={button.href} className="flex items-center gap-2">
                      {button.icon}
                      {button.text}
                      {button.iconRight}
                    </a>
                  </Button>
                )
              ))}
            </div>
          )}
          {mockup !== false && (
            <div className="relative w-full pt-12">
              <MockupFrame
                className="animate-appear opacity-0 delay-700"
                size="small"
              >
                <Mockup
                  type="responsive"
                  className="bg-background/90 w-full rounded-xl border-0"
                >
                  {mockup}
                </Mockup>
              </MockupFrame>
              <Glow
                variant="top"
                className="animate-appear-zoom opacity-0 delay-1000"
              />
            </div>
          )}
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 h-full w-full translate-y-[1rem] opacity-80 transition-all duration-500 ease-in-out group-hover:translate-y-[-2rem] group-hover:opacity-100">
        <Glow variant="center" />
      </div>
    </Section>
  );
}
