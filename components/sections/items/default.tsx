import {
  BlocksIcon,
  EclipseIcon,
  FastForwardIcon,
  LanguagesIcon,
  MonitorSmartphoneIcon,
  RocketIcon,
  ScanFaceIcon,
  SquarePenIcon,
} from "lucide-react";
import { ReactNode } from "react";

import { Item, ItemDescription,ItemIcon, ItemTitle } from "../../ui/item";
import { Section } from "../../ui/section";

interface ItemProps {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ItemsProps {
  title?: string;
  items?: ItemProps[] | false;
  className?: string;
}

export default function Items({
  title = "Nuestros servicios",
  items = [
    {
      title: "🛠 Desarrollo de Software a Medida",
      description: "Creamos soluciones digitales totalmente personalizadas que se adaptan a las necesidades específicas de tu empresa."
    },
    {
      title: "🤖 Marketing Digital con Herramientas de IA",
      description: "Impulsa tus ventas y posicionamiento utilizando campañas inteligentes potenciadas por inteligencia artificial."
    },
    {
      title: "🔄 Transformación Digital / Digitalización de Procesos",
      description:
        "Modernizamos tus operaciones con tecnología que optimiza tiempos, reduce errores y mejora la eficiencia.",
    },
    {
      title: "🧠 Diagnóstico para Automatización de Procesos",
      description: "Analizamos tus flujos actuales y detectamos oportunidades para automatizar tareas repetitivas y acelerar resultados."
    },
    {
      title: "💼 Consultoría Tecnológica Empresarial",
      description: "Te asesoramos estratégicamente para que tomes decisiones tecnológicas que impulsen el crecimiento de tu negocio."
    },
    {
      title: "🌐 Presencia de tu Negocio en Línea",
      description: "Diseñamos y desarrollamos tu sitio web para que tengas visibilidad profesional y efectiva en internet."
    },
  ],
  className,
}: ItemsProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {items.map((item, index) => (
              <Item key={index}>
                <ItemTitle className="flex items-center gap-2">
                  <ItemIcon>{item.icon}</ItemIcon>
                  {item.title}
                </ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
              </Item>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
