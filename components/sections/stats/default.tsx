import { siteConfig } from "@/config/site";

import { Section } from "../../ui/section";

interface StatItemProps {
  label?: string;
  value: string | number;
  suffix?: string;
  description?: string;
}

interface StatsProps {
  items?: StatItemProps[] | false;
  className?: string;
  id?: string;
}

export default function Stats({
  id = 'stats',
  items = [
    {
      label: "Mas de ",
      value: 10000,
      description: "Horas de desarrollo",
    },
    {
      label: "Mas de",
      value: 10,
      description: " Herramientas tecnológicas y servicios digitales para tu negocio",
    },
    {
      label: "Mas de",
      value: 4,
      description: " Años de desarrollo de software de alta exigencia",
    }
  ],
  className,
}: StatsProps) {
  return (
    <Section className={className} id={id}>
      <h2 className="mb-20 text-center text-3xl font-bold sm:text-4xl md:text-5xl">
        Nuestros números
      </h2>
      <div className="container mx-auto max-w-[960px]">
        {items !== false && items.length > 0 && (
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 text-center">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-5 text-center"
              >
                {item.label && (
                  <div className="text-muted-foreground text-lg font-semibold">
                    {item.label}
                  </div>
                )}
                <div className="flex items-baseline gap-2">
                  <div className="from-foreground to-foreground dark:to-brand bg-linear-to-r bg-clip-text text-5xl font-bold text-transparent drop-shadow-[2px_1px_24px_var(--brand-foreground)] transition-all duration-300 sm:text-6xl md:text-7xl">
                    {typeof item.value === 'number' ? item.value.toLocaleString() : item.value}
                  </div>
                  {item.suffix && (
                    <div className="text-brand text-3xl font-bold">
                      {item.suffix}
                    </div>
                  )}
                </div>
                {item.description && (
                  <div className="text-muted-foreground text-base font-medium">
                    {item.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
