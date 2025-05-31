import { cn } from "@/lib/utils";
import { Button } from "../../ui/button";
import { Section } from "../../ui/section";

interface ContactProps {
  title?: string;
  description?: string;
  className?: string;
}

export default function Contact({
  title = "¿Listo para construir algo juntos?",
  description = "Nos encantaría conocer tu proyecto. Creamos soluciones poderosas, útiles y rápidas",
  className,
}: ContactProps) {
  return (
    <Section className={cn("group relative overflow-hidden", className)}>
      <div className="max-w-container relative z-10 mx-auto flex flex-col items-center gap-6 text-center sm:gap-8">
        <h2 className="max-w-[640px] text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          {title}
        </h2>
        <p className="text-muted-foreground max-w-[600px] text-balance">
          {description}
        </p>
        
        <form className="w-full max-w-[600px] space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                placeholder="Jonh Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Teléfono
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                placeholder="4441234567"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Correo
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              placeholder="tu.corre@ejemplo.com"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              placeholder="Cuentamos sobre tu proyecto o idea que quieras realizar."
            />
          </div>
          
          <Button type="submit" size="lg" className="w-full sm:w-auto hover:cursor-pointer">
            Enviar mensaje
          </Button>
        </form>
      </div>
    </Section>
  );
} 