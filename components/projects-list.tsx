import Link from "next/link";
import Image from "next/image";
import MiniCircleText from "./mini-circle-text";
import notFoundImage from "@/public/images/my-picture-not-found.png";
import { GitHubRepo } from "@/src/types/github";

type ProjectsListLabels = {
  sectionTitle: string;
  emptyTitle: string;
  emptySubtitle: string;
  descriptionFallback: string;
  githubLabel: string;
  updatedLabel: string;
};

type ProjectsListProps = {
  labels?: Partial<ProjectsListLabels>;
  detailBasePath?: string;
  dateLocale?: string;
};

const defaultLabels: ProjectsListLabels = {
  sectionTitle: "Projetos em destaque",
  emptyTitle: "Sem projetos disponíveis",
  emptySubtitle: "Atualize o GitHub para aparecer aqui.",
  descriptionFallback: "Sem descrição disponível.",
  githubLabel: "GitHub",
  updatedLabel: "Atualizado em",
};

async function getRepos(): Promise<GitHubRepo[]> {
  const username = process.env.GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  if (!username) {
    return [];
  }

  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos`, {
      headers: {
        Accept: "application/vnd.github+json",
        ...(token ? { Authorization: `token ${token}` } : {}),
      },
      next: { revalidate: 60 * 10 },
    });

    if (!res.ok) {
      return [];
    }

    const data = (await res.json()) as GitHubRepo[];

    return data
      .filter((repo) => !repo.fork)
      .sort(
        (a, b) =>
          new Date(b.updated_at ?? 0).getTime() -
          new Date(a.updated_at ?? 0).getTime()
      );
  } catch {
    return [];
  }
}

export default async function ProjectsList({
  labels,
  detailBasePath = "/projetos",
  dateLocale = "pt-PT",
}: ProjectsListProps) {
  const projects = await getRepos();
  const copy = { ...defaultLabels, ...labels };

  return (
    <section className="card-surface rounded-2xl p-6 space-y-4">
      <MiniCircleText text={copy.sectionTitle} />

      {projects.length === 0 && (
        <article className="rounded-2xl border border-[var(--color-border)] bg-[rgba(21,27,54,0.6)] p-5">
          <div className="flex items-center space-x-3">
            <Image
              src={notFoundImage}
              alt="Sem projetos"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <h3 className="text-lg font-semibold text-white">
                {copy.emptyTitle}
              </h3>
              <p className="text-sm">{copy.emptySubtitle}</p>
            </div>
          </div>
        </article>
      )}

      {projects.length > 0 && (
        <div className="grid gap-4">
          {projects.map((project) => {
            const updated = project.updated_at
              ? new Date(project.updated_at)
              : null;
            const detailHref = `${detailBasePath}/${encodeURIComponent(
              project.name
            )}`;

            return (
              <article
                key={project.id}
                className="rounded-2xl border border-[var(--color-border)] bg-[rgba(21,27,54,0.6)] p-5 transition-all duration-200 hover:translate-y-[-2px] hover:border-[rgba(91,140,255,0.5)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <Link
                      href={detailHref}
                      className="text-lg font-semibold text-white hover:text-[var(--color-accent)]"
                    >
                      {project.name}
                    </Link>
                    <p className="text-sm">
                      {project.description || copy.descriptionFallback}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--color-muted-2)]">
                      {project.language && (
                        <span className="inline-flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]"></span>
                          {project.language}
                        </span>
                      )}
                      {typeof project.stargazers_count === "number" && (
                        <span>★ {project.stargazers_count}</span>
                      )}
                      {updated && (
                        <span>
                          {copy.updatedLabel} {updated.toLocaleDateString(dateLocale)}
                        </span>
                      )}
                    </div>
                  </div>

                  <Link
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-white border border-[var(--color-border)] rounded-full px-3 py-1 transition-all duration-200 hover:border-[rgba(91,140,255,0.6)]"
                  >
                    {copy.githubLabel}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
