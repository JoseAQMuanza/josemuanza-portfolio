import React from "react";

export const metadata = {
  title: "Contato",
  description: "Fale comigo sobre seu projeto ou parceria.",
  alternates: {
    canonical: "/contato",
    languages: {
      "pt-PT": "/contato",
      "en-US": "/en/contact",
    },
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="grow">{children}</main>;
}
