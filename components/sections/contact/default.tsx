import { cn } from "@/lib/utils";
import { Button } from "../../ui/button";
import { Section } from "../../ui/section";

interface ContactProps {
  title?: string;
  description?: string;
  className?: string;
}

export default function Contact({
  title = "Contact Us",
  description = "Get in touch with our team. We're here to help you with your business needs.",
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
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                placeholder="Your phone number"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              placeholder="your.email@example.com"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              placeholder="How can we help you?"
            />
          </div>
          
          <Button type="submit" size="lg" className="w-full sm:w-auto">
            Send Message
          </Button>
        </form>
      </div>
    </Section>
  );
} 