import React from 'react';

export const metadata = {
  title: "José Muanza | Projetos",
  description: "Página de projetos do meu site pessoal",
};

export default function ProjetosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>      
      <main className="grow">{children}</main>      
    </>
  );
}