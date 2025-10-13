"use client"

import FirstSection from "@/components/first-section";
import ListCard from "@/components/list-card";
import MainCard from "@/components/ui/main-card";
import { useState } from "react"

export default function ProductsPage() {
  const [projects, setProjects] = useState(
    [
      { id: 1, cardTitle: "Produto 1", description: "Descrição do Produto 1." },
      { id: 3, cardTitle: "Produto 2", description: "Descrição do Produto 2." },
      { id: 2, cardTitle: "Produto 3", description: "Descrição do Produto 3." },
    ])

  return (
    <MainCard
      children={
        <>
          <FirstSection
            pageTitle="Produtos"
            pageSubtitle="Meus Produtos"
            description="Uma breve descrição dos Produtos que desenvolvi."/>
          
          <ListCard
            cardTitle="Produto"
            projects={projects} />
        </>
      }
    />
  );
}
