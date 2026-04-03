import Image from "next/image";
import { Suspense } from "react";
import MiniCircleText from "../mini-circle-text";
import MyPicture from "@/public/images/my-picture.png";
import HireButton from "./hire-button";
import MainCard from "./main-card";
import ProjectsList from "../projects-list";
import ProjectsListSkeleton from "../projects-list-skeleton";
import CaseStudies from "../case-studies";

export default function HomeCardEn() {
  return (
    <MainCard
      variant="en"
      children={
        <>
          <section className="space-y-8">
            <section className="flex items-center justify-between px-2">
              <MiniCircleText text="Available for new partnerships" />
              <span className="pill hidden sm:inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold">
                Open to projects
              </span>
            </section>

            <section className="flex flex-col items-center text-center gap-4">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full accent-gradient blur-lg opacity-60"></div>
                <Image
                  src={MyPicture}
                  alt="José Muanza"
                  width={112}
                  height={112}
                  className="relative rounded-full border border-[var(--color-border)]"
                  priority
                />
              </div>
              <div className="space-y-2">
                <h1 className="font-display text-3xl font-semibold text-white">
                  José Muanza
                </h1>
                <p className="text-sm text-[var(--color-muted-2)]">
                  Full-Stack Web Developer
                </p>
                <p className="text-base text-[var(--color-muted)]">
                  I help startups and local businesses build fast, reliable web
                  experiences with a strong identity.
                </p>
              </div>
              <HireButton />
            </section>
          </section>

          <CaseStudies
            title="Case Studies"
            subtitle="Real outcomes focused on performance and clarity."
            ctaLabel="View project"
            statusLabel="Case Study: In Progress"
            items={[
              {
                title: "ISPEKA Management System",
                summary:
                  "Full digitization of academic processes for Instituto Superior Politécnico Kalandula de Angola.",
                outcome:
                  "Replaced manual workflows with a centralized digital flow, improving administrative efficiency.",
                stack: ["React", "Node.js", "PostgreSQL"],
              },
              {
                title: "Task Management Dashboard",
                summary:
                  "High-performance task management app focused on UX and productivity.",
                outcome:
                  "Achieved top performance and accessibility scores with a smooth experience across devices.",
                stack: ["React", "TypeScript", "Tailwind CSS"],
              },
            ]}
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
