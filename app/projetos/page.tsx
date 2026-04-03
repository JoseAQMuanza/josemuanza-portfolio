import { Suspense } from "react";
import FirstSection from "@/components/first-section";
import ProjectsList from "@/components/projects-list";
import ProjectsListSkeleton from "@/components/projects-list-skeleton";
import MainCard from "@/components/ui/main-card";

export default function ProjectsPage() {
  return (
    <MainCard
      children={
        <>
          <FirstSection
            pageTitle="Projetos"
            pageSubtitle="Resultados práticos e produtos reais"
            description="Uma seleção dos projetos que construí, sempre com foco em performance, clareza e experiência do usuário."
          />
          <Suspense fallback={<ProjectsListSkeleton />}>
            <ProjectsList />
          </Suspense>
        </>
      }
    />
  );
}
