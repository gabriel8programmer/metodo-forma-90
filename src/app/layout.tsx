import type { Metadata } from "next";
import { Oswald, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://metodo-forma-90.vercel.app"),
  title: "Método Forma 90 | Treino Personalizado e Consultoria Online",
  description:
    "Treinos personalizados e acompanhamento online para quem busca mais organização, consistência e evolução.",
  keywords: [
    "Método Forma 90",
    "consultoria de treino online",
    "personal trainer online",
    "treino personalizado",
    "musculação",
    "treino em casa",
    "Lucas Andrade personal",
  ],
  authors: [{ name: "Lucas Andrade • Método Forma 90" }],
  openGraph: {
    title: "Método Forma 90 | Treino Personalizado e Consultoria Online",
    description:
      "Treinos personalizados e acompanhamento online para quem busca mais organização, consistência e evolução.",
    type: "website",
    locale: "pt_BR",
    siteName: "Método Forma 90",
    images: [
      {
        url: "/images/hero-athlete.jpg",
        width: 1200,
        height: 675,
        alt: "Método Forma 90 — Consultoria de treino online com acompanhamento personalizado",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Método Forma 90 | Treino Personalizado e Consultoria Online",
    description:
      "Treinos personalizados e acompanhamento online para quem busca mais organização, consistência e evolução.",
    images: ["/images/hero-athlete.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${oswald.variable} ${dmSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0B0D0F] text-[#F5F5F5] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
