import { Palette, Zap } from "lucide-react";

import { Card, CardProps,  } from "../../ui/card";
import { Section } from "../../ui/section";
import { cn } from "@/lib/utils";

interface ProjectsProps {
  title?: string | false;
  description?: string | false;
  projects?: CardProps[] | false;
  className?: string;
  id?: string;
}

export default function Projects({
  id = 'projects',
  title = "Proyectos",
  description = false,
  projects = [
    {
      title: "SISLAB",
      description: "CRM Personalizado para Laboratorios",
      variant: "glow-brand",
      button: {
        variant: "default",
        label: "Ver sitio",
        href: "https://www.sislab.life",
      },
      children: (
        <p className="text-sm text-muted-foreground">
          Transformamos operaciones con una plataforma segura y hecha a medida para laboratorios clínicos.
        </p>
      )
    },
    {
      title: "Enchanted Invites",
      description: "Una plataforma ágil y elegante para crear invitaciones personalizadas.",
      variant: "glow",
      button: {
        variant: "default",
        label: "Ver sitio",
        href: "#",
      },
      children: (
        <p className="text-sm text-muted-foreground">
          Diseña, personaliza y comparte invitaciones digitales elegantes para el día más especial de tu vida
        </p>
      )
    }
  ],
  className = "",
}: ProjectsProps) {
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

        {projects !== false && projects.length > 0 && (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card
                key={project.title}
                {...project}
              />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
} 