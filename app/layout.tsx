import '@/app/globals.css';

import type { Metadata } from 'next';

import { ThemeProvider } from '@/components/contexts/theme-provider';
import { inter } from '@/lib/fonts';

export const metadata: Metadata = {
  title: "KaabCloud | Desarrollo de Software a Medida y Transformación Digital",
  description:
    "Impulsa tu negocio con soluciones digitales personalizadas. Desarrollo de software, marketing digital con IA, digitalización y consultoría tecnológica para empresas.",
  keywords: [
    "desarrollo de software a medida",
    "transformación digital",
    "consultoría tecnológica",
    "marketing digital con IA",
    "digitalización de procesos",
    "automatización de procesos",
    "presencia en línea",
    "software personalizado",
    "KaabCloud"
  ],
  openGraph: {
    title: "KaabCloud | Soluciones Digitales Personalizadas para Empresas",
    description:
      "Moderniza tu empresa con software inteligente, marketing digital con inteligencia artificial y digitalización de procesos. Consultoría tecnológica para el crecimiento.",
    url: "https://kaabcloud.com",
    type: "website",
    images: [
      {
        url: "/og.png", // imagen optimizada para OG (1200x630 px)
        width: 605,
        height: 387,
        alt: "KaabCloud - Soluciones digitales personalizadas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KaabCloud | Desarrollo de Software a Medida y Marketing Digital con IA",
    description:
      "Impulsa tu negocio con tecnología avanzada y personalizada. Consultoría, automatización y presencia digital para empresas.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon-kaabcloud.svg",
    apple: "/favicon-kaabcloud.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" style={{ colorScheme: 'dark' }} className="dark">
      <body
        className={`${inter.className} bg-background antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
