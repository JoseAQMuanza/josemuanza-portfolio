"use client"

import FirstSection from "@/components/first-section";
import ProjectsList from "@/components/projects-list";

import MainCard from "@/components/ui/main-card";

export default function ProjectsPage() {              
  return (
    <MainCard
      children={
        <>
          <FirstSection
            pageTitle="Projetos"
            pageSubtitle="Meus Projetos"
            description="Uma breve descrição dos Projetos que desenvolvi." />
          <ProjectsList/>          
        </>
      }
    />
  );
}
