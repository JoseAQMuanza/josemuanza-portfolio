import Header from "@/components/ui/header";
import "./css/style.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className="scroll-smooth">    
      <head>  
        <title>José Muanza | Portfólio Pessoal</title>  
        <meta name="description" content="Portfólio Pessoal - Desenvolvedor Web" />
        <meta name="keywords" content="José Muanza, Portfólio pessoal, Nextjs" />
        <meta name="author" content="José Muanza"/>   
        <link rel="icon" type="image/svg+xml" href="@/public/images/my-picture.png"/>             
      </head>

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
