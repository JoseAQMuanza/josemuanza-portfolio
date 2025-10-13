import React from 'react';

export const metadata = {
  title: "José Muanza | Sobre",
  description: "Página sobre mim do meu site pessoal",
};

export default function AboutMeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (    
    <main className="grow">{children}</main>        
  );
}