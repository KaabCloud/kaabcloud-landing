import { ArrowDown, Mail } from "lucide-react";
import { ReactNode } from "react";

import Whatsapp from "@/components/logos/whatsapp";
import Glow from "@/components/ui/glow";
import { GlowButton } from "@/components/ui/glow-button";
import { Mockup, MockupFrame } from "@/components/ui/mockup";
import Screenshot from "@/components/ui/screenshot";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { Button, type ButtonProps } from "../../ui/button";

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
  title = "Impulse su negocio con una solución digital avanzada y personalizada",
  description = "En KaabCloud, ayudamos a las empresas a modernizarse con software inteligente y tecnología de vanguardia.",
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
  // badge = (
  //   <Badge variant="outline" className="animate-appear">
  //     <span className="text-muted-foreground">
  //       New version of Launch UI is out!
  //     </span>
  //     <a href={siteConfig.getStartedUrl} className="flex items-center gap-1">
  //       Get started
  //       <ArrowRightIcon className="size-3" />
  //     </a>
  //   </Badge>
  // ),

  buttons = [
    {
      href: "https://wa.me/4443778124?text='Hola, me interesa una consultoría gratuita:'",
      text: "Consultoria gratuita",
      variant: "default",
      icon: <Whatsapp className="mr-2 size-4" />
    },
    {
      href: siteConfig.links.github,
      text: "Contactanos",
      variant: "glow",
      icon: <Mail className="mr-2 size-4" />
    },
  ],
  className,
}: HeroProps) {
  return (
    <Section
  className={cn(
    "group h-screen relative overflow-visible pb-0 sm:pb-0 md:pb-0",
    mockup !== false && "fade-bottom",
    className,
  )}
>
  {/* Video de fondo */}
  <video
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
    src="/videos/background-video.mp4"
    autoPlay
    loop
    muted
    playsInline
  />

  {/* Capa negra con opacidad */}
  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-65 z-0" />

  {/* Contenido principal */}
  <div className="relative z-10 max-w-container mx-auto flex flex-col gap-12 pt-16 sm:gap-24">
    <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
      <h1 className="animate-appear text-3xl leading-tight font-normal text-white drop-shadow-2xl sm:text-4xl md:text-5xl">
        {title}
      </h1>
      <p className={cn(
        "text-sm animate-appear  max-w-4xl font-medium text-balance opacity-0 delay-100 sm:text-base",
        mockup === false ? "relative" : "relative z-10"
      )}>
        {description}
      </p>
      {buttons !== false && buttons.length > 0 && (
        <div className="animate-appear relative z-10 flex flex-col sm:flex-row justify-center gap-8 opacity-0 delay-300 items-center pt-12">
          {buttons.map((button, index) => (
            button.variant === "glow" ? (
              <GlowButton key={index} size="lg" className="w-full sm:w-auto">
          <a href={button.href} className="flex items-center gap-2">
            {button.icon}
            {button.text}
          </a>
              </GlowButton>
            ) : (
              <Button
          key={index}
          variant={button.variant || "default"}
          size="lg"
          asChild
          className="w-full sm:w-auto"
              >
          <a href={button.href} className="flex items-center gap-2">
            {button.icon}
            {button.text}
          </a>
              </Button>
            )
          ))}
          
        </div>
      )}
      {/* GIF de flecha para scroll en versión móvil */}
      <div className=" mt-8">
              <button
                className="mt-8 inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors animate-bounce px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full"
              >
                <span className="text-base font-light">Ver detalles</span>
                <ArrowDown className='h-8' />
              </button>
          </div>
      {mockup !== false && (
        <div className="relative w-full pt-12">
          <MockupFrame className="animate-appear opacity-0 delay-700" size="small">
            <Mockup className="bg-background/90 w-full rounded-xl border-0" type="responsive">
              {mockup}
            </Mockup>
          </MockupFrame>
          <Glow variant="top" className="animate-appear-zoom opacity-0 delay-1000" />
        </div>
      )}
    </div>
  </div>

  
</Section>

  );
}
