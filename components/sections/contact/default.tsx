'use client';
import { useState } from 'react';

import { createLeadMessage } from '@/lib/actions/lead-message.actions';
import { cn } from '@/lib/utils';

import { Button } from '../../ui/button';
import { Section } from '../../ui/section';

interface ContactProps {
  title?: string;
  description?: string;
  className?: string;
  id?: string;
}

export default function Contact({
  id = 'contact',
  title = '¿Listo para construir algo juntos?',
  description = 'Nos encantaría conocer tu proyecto. Creamos soluciones poderosas, útiles y rápidas',
  className,
}: ContactProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget; // ← referencia directa y segura al form

    setIsLoading(true);
    setError(null);
    setSuccess(false);

    const formData = new FormData(form);
    const data = {
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    try {
      const result = await createLeadMessage(data);
      if (result.error) {
        setError(result.error);
      } else {
        setSuccess(true);
        form.reset(); // ← usamos la referencia guardada
      }
    } catch (err) {
      setError(
        `Ocurrió un error al enviar el mensaje. Por favor intenta de nuevo. Mensaje: ${err}`
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Section
      className={cn('group relative overflow-hidden', className)}
      id={id}
    >
      <div className="max-w-container relative z-10 mx-auto flex flex-col items-center gap-6 text-center sm:gap-8">
        <h2 className="max-w-[640px] text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          {title}
        </h2>
        <p className="text-muted-foreground max-w-[600px] text-balance">
          {description}
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-[600px] space-y-6"
        >
          {error && (
            <div className="rounded-md bg-destructive/15 p-3 text-sm text-destructive">
              {error}
            </div>
          )}

          {success && (
            <div className="rounded-md bg-green-500/15 p-3 text-sm text-green-500">
              ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo
              pronto.
            </div>
          )}

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
                disabled={isLoading}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
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
                disabled={isLoading}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
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
              disabled={isLoading}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
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
              disabled={isLoading}
              rows={4}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
              placeholder="Cuentamos sobre tu proyecto o idea que quieras realizar."
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full sm:w-auto hover:cursor-pointer"
            disabled={isLoading}
          >
            {isLoading ? 'Enviando...' : 'Enviar mensaje'}
          </Button>
        </form>
      </div>
    </Section>
  );
}
