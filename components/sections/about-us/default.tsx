import { cn } from "@/lib/utils";

import { Section } from "../../ui/section";

interface AboutUsProps {
  title?: string | false;
  description?: string | false;
  className?: string;
  id?: string;
}

export default function AboutUs({
  id = 'about-us',
  title = "Convertimos ideas en productos digitales funcionales.",
  description = "En KaabCloud creemos que la tecnología no solo debe estar al alcance de las grandes corporaciones. Nuestra misión es que todas las empresas, sin importar su tamaño, tengan acceso a soluciones digitales inteligentes, personalizadas y escalables, que les permitan competir, innovar y crecer.",
  className = "",
}: AboutUsProps) {
  return (
    <Section className={cn(className)} id={id}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        {(title || description) && (
          <div className="flex flex-col items-center gap-4 px-4 text-center sm:gap-8">
            {title && (
              <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-md text-muted-foreground max-w-[600px] font-medium sm:text-xl">
                {description}
              </p>
            )}
          </div>
        )}
      </div>
    </Section>
  );
}
