"use client"

import FirstSection from "@/components/first-section";
import MainCard from "@/components/ui/main-card";

export default function AboutMePage() {

  return (
    <MainCard children={
      <>
        <FirstSection
          pageTitle="Sobre Mim"
          pageSubtitle="Sou eu, José Muanza"
          description="Desenvolvedor de software e estudante de Engenharia Informática, apaixonado por tecnologia e resolução de problemas. Vivo em Angola e tenho como foco criar soluções digitais que façam a diferença, com especial interesse em desenvolvimento web e tecnologia financeira. Meu objetivo é transformar desafios complexos em experiências simples, funcionais e significativas que conectem pessoas e ideias."
        />
      </>
    } />
  );
}
