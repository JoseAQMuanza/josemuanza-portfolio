import type { Metadata } from "next";
import { Sora, Space_Grotesk } from "next/font/google";
import Header from "@/components/ui/header";
import Analytics from "@/components/analytics";
import "./css/style.css";

const bodyFont = Sora({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

function resolveSiteUrl(raw?: string) {
  if (!raw || raw.trim().length === 0) {
    return "http://localhost:3000";
  }

  const value = raw.trim();

  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value;
  }

  if (value.startsWith("localhost")) {
    return `http://${value}`;
  }

  return `https://${value}`;
}

const siteUrl = resolveSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
const ogImage = "/og.svg";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "José Muanza | Portfólio Pessoal",
    template: "%s | José Muanza",
  },
  description:
    "Desenvolvedor web full-stack. Crio experiências digitais rápidas, funcionais e modernas para negócios e startups.",
  keywords: [
    "José Muanza",
    "Portfólio",
    "Desenvolvedor Web",
    "Next.js",
    "React",
    "Full-Stack",
  ],
  authors: [{ name: "José Muanza" }],
  alternates: {
    canonical: "/",
    languages: {
      "pt-PT": "/",
      "en-US": "/en",
    },
  },
  openGraph: {
    title: "José Muanza | Portfólio Pessoal",
    description:
      "Desenvolvedor web full-stack. Crio experiências digitais rápidas, funcionais e modernas.",
    url: "/",
    siteName: "José Muanza",
    locale: "pt_PT",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "José Muanza - Portfólio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "José Muanza | Portfólio Pessoal",
    description:
      "Desenvolvedor web full-stack. Crio experiências digitais rápidas, funcionais e modernas.",
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt"
      className={`${bodyFont.variable} ${displayFont.variable} scroll-smooth`}
    >
      <body className="font-[var(--font-body)] tracking-tight antialiased">
        <Header />
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
