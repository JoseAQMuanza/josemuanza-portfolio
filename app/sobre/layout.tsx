import React from "react";

export const metadata = {
  title: "Sobre",
  description: "Página sobre mim do meu site pessoal",
  alternates: {
    canonical: "/sobre",
    languages: {
      "pt-PT": "/sobre",
      "en-US": "/en/about",
    },
  },
};

export default function AboutMeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="grow">{children}</main>;
}
