import FirstSection from "@/components/first-section";
import MainCard from "@/components/ui/main-card";

export default function AboutMePage() {
  return (
    <MainCard
      children={
        <>
          <FirstSection
            pageTitle="Sobre"
            pageSubtitle="Construindo produtos digitais com propósito"
            description="Sou desenvolvedor de software e estudante de Engenharia Informática. Vivo em Angola e foco em criar soluções digitais simples, rápidas e confiáveis. Trabalho com produtos web, integrações com APIs e experiências que conectam pessoas e negócios de forma clara."
          />
        </>
      }
    />
  );
}
