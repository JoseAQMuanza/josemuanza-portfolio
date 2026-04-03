import React from "react";

export const metadata = {
  title: "English",
  description: "English version of José Muanza's portfolio.",
  alternates: {
    canonical: "/en",
    languages: {
      "pt-PT": "/",
      "en-US": "/en",
    },
  },
};

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="grow">{children}</main>;
}
