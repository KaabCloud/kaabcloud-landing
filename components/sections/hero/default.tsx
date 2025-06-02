import { ReactNode } from "react";
import { siteConfig } from "@/config/site";
import { Button, type ButtonProps } from "../../ui/button";
import Whatsapp from "@/components/logos/whatsapp";
import { Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { GlowButton } from "@/components/ui/glow-button";
import { Mockup, MockupFrame } from "@/components/ui/mockup";
import Glow from "@/components/ui/glow";
import { Section } from "@/components/ui/section";

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
    // <Screenshot
    //   srcLight="/app-light.png"
    //   srcDark="/app-dark.png"
    //   alt="Launch UI app screenshot"
    //   width={1248}
    //   height={765}
    //   className="w-full"
    // />

    <div className="relative w-full pt-12">
      <div className="animate-appear opacity-0 delay-700">
      <video
        width="100%"
        height="500"
        autoPlay
        loop
        muted
        controls
        className="rounded-xl border-0"
      >
        <source src="/videos/my-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
    </div>
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
      href: '#contact',
      text: "Contactanos",
      variant: "glow",
      icon: <Mail className="mr-2 size-4" />
    },
  ],
  className,
}: HeroProps) {
  return (
    <Section
      // id={id}
      className={cn(
        "group relative overflow-visible pb-0 sm:pb-0 md:pb-0",
        mockup !== false && "fade-bottom",
        className,
      )}
    >
      <div className="max-w-container mx-auto flex flex-col gap-12 pt-16 sm:gap-24">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          {/* {badge !== false && badge} */}
          <h1 className="animate-appear relative z-10 inline-block text-3xl leading-tight font-normal text-balance drop-shadow-2xl sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
            {title}
          </h1>
          <p className={cn(
            "text-sm animate-appear text-muted-foreground max-w-[740px] font-medium text-balance opacity-0 delay-100 sm:text-base",
            mockup === false ? "relative" : "relative z-10"
          )}>
            {description}
          </p>
          {buttons !== false && buttons.length > 0 && (
            <div className="animate-appear relative z-10 flex flex-col sm:flex-row justify-center gap-8 opacity-0 delay-300 items-center">
              {buttons.map((button, index) => (
                button.variant === "glow" ? (
                  <GlowButton
                    key={index}
                    size="lg"
                    className="w-full sm:w-auto"
                  >
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
                      { button.icon}
                      {button.text}
                      
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-3/5 opacity-80 transition-all duration-500 ease-in-out group-hover:translate-y-[-2rem] group-hover:opacity-100">
        <Glow variant="center" />
      </div>
    </Section>
  );
}
