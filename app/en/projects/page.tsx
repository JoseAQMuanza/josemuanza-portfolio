import { Suspense } from "react";
import FirstSection from "@/components/first-section";
import ProjectsList from "@/components/projects-list";
import ProjectsListSkeleton from "@/components/projects-list-skeleton";
import MainCard from "@/components/ui/main-card";

export const metadata = {
  title: "Projects",
  description: "Selected work and real-world products.",
  alternates: {
    canonical: "/en/projects",
    languages: {
      "pt-PT": "/projetos",
      "en-US": "/en/projects",
    },
  },
};

export default function ProjectsEnPage() {
  return (
    <MainCard
      variant="en"
      children={
        <>
          <FirstSection
            pageTitle="Projects"
            pageSubtitle="Real outcomes and product-focused work"
            description="A curated selection of projects built with a focus on performance, clarity, and user experience."
          />
          <Suspense fallback={<ProjectsListSkeleton />}>
            <ProjectsList
              detailBasePath="/en/projects"
              dateLocale="en-US"
              labels={{
                sectionTitle: "Featured projects",
                emptyTitle: "No projects available",
                emptySubtitle: "Update GitHub to show projects here.",
                descriptionFallback: "No description available.",
                githubLabel: "GitHub",
                updatedLabel: "Updated on",
              }}
            />
          </Suspense>
        </>
      }
    />
  );
}
