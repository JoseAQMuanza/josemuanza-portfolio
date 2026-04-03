import React from "react";

export const metadata = {
  title: "Contact",
  description: "Get in touch with José Muanza.",
  alternates: {
    canonical: "/en/contact",
    languages: {
      "pt-PT": "/contato",
      "en-US": "/en/contact",
    },
  },
};

export default function ContactEnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="grow">{children}</main>;
}
