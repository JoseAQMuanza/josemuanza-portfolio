"use client"

import FirstSection from "@/components/first-section";
import ListCard from "@/components/list-card";
import MainCard from "@/components/ui/main-card";
import { useState } from "react";

export default function ProjetosPage() {
  const [projects, setProjects] = useState(
    [
      { id: 1, cardTitle: "Projeto 1", description: "Descrição do Projeto 1." },
      { id: 3, cardTitle: "Projeto 2", description: "Descrição do Projeto 2." },
      { id: 2, cardTitle: "Projeto 3", description: "Descrição do Projeto 3." },
    ])

  return (
    <MainCard
      children={
        <>
          <FirstSection          
            pageTitle="Projetos"
            pageSubtitle="Meus Projetos"
            description="Uma breve descrição dos projetos que desenvolvi."/>
          
          <ListCard
            cardTitle="Projectos"
            projects={projects} />
        </>
      }
    />
  );
}
