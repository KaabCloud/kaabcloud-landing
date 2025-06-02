import Image from 'next/image';

import { cn } from '@/lib/utils';

import { Card, CardProps } from '../../ui/card';
import { Section } from '../../ui/section';

interface ProjectsProps {
  title?: string | false;
  description?: string | false;
  projects?: CardProps[] | false;
  className?: string;
  id?: string;
}

export default function Projects({
  id = 'projects',
  title = 'Proyectos',
  description = false,
  projects = [
    {
      title: 'SISLAB',
      description: 'CRM Personalizado para Laboratorios',
      variant: 'glow-brand',
      button: {
        variant: 'default',
        label: 'Ver sitio',
        href: 'https://www.sislab.life',
      },
      children: (
        <p className="text-sm text-muted-foreground">
          Transformamos operaciones con una plataforma segura y hecha a medida
          para laboratorios clínicos.
        </p>
      ),
      image: (
        <Image
          className="p-[6px] bg-transparent border-2 border-gray-100/25 rounded-[42px] backdrop-blur-lg transition-all duration-700 ease-out hover:scale-105"
          src="/sislab-app-dark.png"
          alt="Dispositivo Movil"
          height={455}
          width={265}
          style={{ objectFit: 'contain' }}
        />
      ),
    },
    {
      title: 'AZZ Cristal',
      description:
        'Impulsamos la presencia digital de una cristalería con un sitio web elegante y funcional.',
      variant: 'glow',
      button: {
        variant: 'default',
        label: 'Ver sitio',
        href: 'https://azz-cristal.kaabcloud.com/',
      },
      children: (
        <div>
          <p className="text-sm text-muted-foreground">
            Diseñado a medida para destacar sus proyectos y facilitar el
            contacto con nuevos clientes.
          </p>
          <Image
            className="mx-auto m-8 rounded-[42px] backdrop-blur-lg transition-all duration-700 ease-out hover:scale-105"
            src="/azz-cristal-overview.jpg"
            alt="Dispositivo Movil"
            height={265}
            width={455}
            style={{ objectFit: 'contain' }}
          />
        </div>
      ),
    },
  ],
  className = '',
}: ProjectsProps) {
  return (
    <Section className={cn(className)} id={id}>
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-12">
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
          <div className="grid grid-cols-1 gap-8 w-full">
            {projects.map((project) => (
              <Card key={project.title} {...project} />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
