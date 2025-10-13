"use client"

import FirstSection from "@/components/first-section";
import ListCard from "@/components/list-card";
import MainCard from "@/components/ui/main-card";
import { useState } from "react";

export default function AboutMePage() {


  const [projects, setProjects] = useState(
    [
      { id: 1, cardTitle: "Projeto 1", description: "Descrição do projecto 1." },
      { id: 3, cardTitle: "Projeto 1", description: "Descrição do projecto 2." },
      { id: 2, cardTitle: "Projeto 1", description: "Descrição do projecto 3." },
    ])

  const [produtos, setProdutos] = useState(
    [
      { id: 1, cardTitle: "Produtos 1", description: "Descrição do Produtos 1." },
      { id: 3, cardTitle: "Produtos 2", description: "Descrição do Produtos 2." },
      { id: 2, cardTitle: "Produtos 3", description: "Descrição do Produtos 3." },
    ])

  return (
    <MainCard children={
      <>
        <FirstSection
          pageTitle="Sobre Mim"
          pageSubtitle="Sou eu, José Muanza"
          description="Desenvolvedor de software e estudante de Engenharia Informática, apaixonado por tecnologia e resolução de problemas. Vivo em Angola e tenho como foco criar soluções digitais que façam a diferença, com especial interesse em desenvolvimento web e tecnologia financeira. Meu objetivo é transformar desafios complexos em experiências simples, funcionais e significativas que conectem pessoas e ideias."
        />
        <ListCard
          cardTitle="Projectos"
          projects={projects} />
        <ListCard
          cardTitle="Produtos"
          projects={produtos} />

      </>
    } />
  );
}
