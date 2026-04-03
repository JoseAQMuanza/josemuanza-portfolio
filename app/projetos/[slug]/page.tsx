import { notFound } from "next/navigation";
import Link from "next/link";
import MainCard from "@/components/ui/main-card";
import MiniCircleText from "@/components/mini-circle-text";
import { GitHubRepo } from "@/src/types/github";

async function getRepo(slug: string): Promise<GitHubRepo | null> {
  const username = process.env.GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  if (!username) return null;

  const res = await fetch(
    `https://api.github.com/repos/${username}/${slug}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        ...(token ? { Authorization: `token ${token}` } : {}),
      },
      next: { revalidate: 60 * 10 },
    }
  );

  if (!res.ok) return null;
  return (await res.json()) as GitHubRepo;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const repo = await getRepo(slug);
  if (!repo) return { title: "Projeto não encontrado" };

  return {
    title: repo.name,
    description: repo.description || "Detalhes do projeto",
    alternates: {
      canonical: `/projetos/${slug}`,
      languages: {
        "pt-PT": `/projetos/${slug}`,
        "en-US": `/en/projects/${slug}`,
      },
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const repo = await getRepo(slug);

  if (!repo) {
    notFound();
  }

  const updated = repo.updated_at ? new Date(repo.updated_at) : null;

  return (
    <MainCard
      children={
        <div className="space-y-6">
          <MiniCircleText text="Detalhes do projeto" />

          <div className="space-y-3">
            <h1 className="font-display text-3xl font-semibold text-white">
              {repo.name}
            </h1>
            <p className="text-base text-[var(--color-muted)]">
              {repo.description || "Sem descrição disponível."}
            </p>
          </div>

          <div className="grid gap-3 text-sm text-[var(--color-muted-2)]">
            {repo.language && <div>Linguagem principal: {repo.language}</div>}
            {typeof repo.stargazers_count === "number" && (
              <div>Estrelas: {repo.stargazers_count}</div>
            )}
            {typeof repo.forks_count === "number" && (
              <div>Forks: {repo.forks_count}</div>
            )}
            {updated && (
              <div>
                Atualizado em {updated.toLocaleDateString("pt-PT")}
              </div>
            )}
          </div>

          {repo.topics && repo.topics.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {repo.topics.map((topic) => (
                <span
                  key={topic}
                  className="px-3 py-1 rounded-full border border-[var(--color-border)] text-xs text-[var(--color-muted-2)]"
                >
                  {topic}
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold text-white accent-gradient shadow-[0_12px_30px_rgba(91,140,255,0.35)]"
            >
              Ver no GitHub
            </Link>
            {repo.homepage && (
              <Link
                href={repo.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold text-white border border-[var(--color-border)] bg-[rgba(21,27,54,0.6)]"
              >
                Ver demo
              </Link>
            )}
            <Link
              href="/projetos"
              className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold text-[var(--color-text)] border border-[var(--color-border)]"
            >
              Voltar para projetos
            </Link>
          </div>
        </div>
      }
    />
  );
}
