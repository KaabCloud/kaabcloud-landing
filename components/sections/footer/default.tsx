import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import LaunchUI from "../../logos/launch-ui";
import {
  Footer,
  FooterBottom,
  FooterColumn,
  FooterContent,
} from "../../ui/footer";
import { ModeToggle } from "../../ui/mode-toggle";

interface FooterLink {
  text: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logo?: ReactNode;
  name?: string;
  columns?: FooterColumnProps[];
  copyright?: string;
  policies?: FooterLink[];
  showModeToggle?: boolean;
  className?: string;
}

export default function FooterSection({
  logo = <LaunchUI />,
  name = "KaabCloud",
  columns = [
    {
      title: "Servicios",
      links: [
        { text: "Proyectos", href: "#projects" },
        { text: "Estadísticas", href: "#stats" },
        { text: "FAQ", href: "#faq" },
      ],
    },
    {
      title: "Compañía",
      links: [
        { text: "Sobre Nosotros", href: "#about" },
        { text: "Contacto", href: "#contact" },
      ],
    },
    {
      title: "Redes Sociales",
      links: [
        { text: "LinkedIn", href: "https://www.linkedin.com/company/kaabcloud" },
        { text: "Facebook", href: "https://www.facebook.com/profile.php?id=61577010023224" },
        { text: "Instagram", href: "https://www.instagram.com/kaabcloud/" },
        { text: "Email", href: "mailto:contact@kaabcloud.com" },
      ],
    },
  ],
  copyright = "© 2024 KaabCloud. Todos los derechos reservados",
  policies = [
    { text: "Política de Privacidad", href: "/privacy" },
    { text: "Términos de Servicio", href: "/terms" },
  ],
  showModeToggle = true,
  className,
}: FooterProps) {
  return (
    <footer className={cn("bg-background w-full px-4", className)}>
      <div className="max-w-container mx-auto">
        <Footer>
          <FooterContent>
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="flex items-center gap-2">
                {logo}
                <h3 className="text-xl font-bold">{name}</h3>
              </div>
            </FooterColumn>
            {columns.map((column, index) => (
              <FooterColumn key={index}>
                <h3 className="text-md pt-1 font-semibold">{column.title}</h3>
                {column.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {link.text}
                  </a>
                ))}
              </FooterColumn>
            ))}
          </FooterContent>
          <FooterBottom>
            <div>{copyright}</div>
            <div className="flex items-center gap-4">
              {policies.map((policy, index) => (
                <a 
                  key={index} 
                  href={policy.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {policy.text}
                </a>
              ))}
              {showModeToggle && <ModeToggle />}
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
