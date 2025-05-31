import { Palette, Zap } from "lucide-react";

import { Card } from "../../ui/card";
import { Section } from "../../ui/section";

export default function Projects() {
  return (
    <Section>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4 px-4 text-center sm:gap-8">
          <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            Proyectos
          </h2>
          {/* <p className="text-md text-muted-foreground max-w-[600px] font-medium sm:text-xl">
            Explore our collection of beautifully designed components
          </p> */}
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            title="SISLAB"
            description="CRM Personalizado para Laboratorios"
            variant="glow-brand"
            button={{
              variant: "default",
              label: "Ver sitio",
              href: "https://www.sislab.life",
            }}
          >
            <p className="text-sm text-muted-foreground">
              Transformamos operaciones con una plataforma segura y hecha a medida para laboratorios clínicos.
            </p>
          </Card>
          <Card
            title="Enchanted Invites"
            description="Una plataforma ágil y elegante para crear invitaciones personalizadas."
            variant="glow"
            button={{
              variant: "default",
              label: "Ver sitio",
              href: "#",
            }}
          >
            <p className="text-sm text-muted-foreground">
              Diseña, personaliza y comparte invitaciones digitales elegantes para el día más especial de tu vida
            </p>
          </Card>
        </div>
      </div>
    </Section>
  );
} 