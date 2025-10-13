import Header from "@/components/ui/header";
import "./css/style.css";

export const metadata = {
  title: "José Muanza | Portfólio Pessoal",
  description: "Portfólio Pessoal - Desenvolvedor Web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className="scroll-smooth">      
      <body
        className="font-sans tracking-tight bg-neutral-900 text-white antialiased"
      >
        <Header />
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
