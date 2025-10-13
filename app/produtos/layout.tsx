import React from 'react';

export const metadata = {
  title: "José Muanza | Produtos",
  description: "Página de produtos do meu site pessoal",
};

export default function ProdutosLayout({
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