import { Code, Palette, Zap } from "lucide-react";

import { Card } from "../../ui/card";
import { Section } from "../../ui/section";

export default function Cards() {
  return (
    <Section>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4 px-4 text-center sm:gap-8">
          <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            Beautiful Components
          </h2>
          <p className="text-md text-muted-foreground max-w-[600px] font-medium sm:text-xl">
            Explore our collection of beautifully designed components
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            title="Modern Design"
            description="Clean and modern components that look great on any device"
            icon={<Palette className="size-4" />}
            variant="glow"
            button={{
              variant: "glow",
              label: "Learn More",
              href: "#",
            }}
          >
            <p className="text-sm text-muted-foreground">
              Our components are designed with modern aesthetics in mind, ensuring
              your application looks professional and polished.
            </p>
          </Card>

          <Card
            title="Fast Performance"
            description="Optimized for speed and efficiency"
            icon={<Zap className="size-4" />}
            variant="glow-brand"
            button={{
              variant: "default",
              label: "Get Started",
              href: "#",
            }}
          >
            <p className="text-sm text-muted-foreground">
              Built with performance in mind, our components are lightweight and
              optimized for the best user experience.
            </p>
          </Card>

          <Card
            title="Easy to Use"
            description="Simple and intuitive components"
            icon={<Code className="size-4" />}
            variant="default"
            button={{
              label: "View Docs",
              href: "#",
            }}
          >
            <p className="text-sm text-muted-foreground">
              Designed to be developer-friendly, our components are easy to
              implement and customize to your needs.
            </p>
          </Card>
        </div>
      </div>
    </Section>
  );
} 