import { GitHubRepo } from "@/src/types/github";

export async function GET() {
  const username = process.env.GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  if (!username) {
    return Response.json(
      { error: "GITHUB_USERNAME não configurado" },
      { status: 500 }
    );
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
      return Response.json(
        { error: "Erro ao buscar repositórios" },
        { status: res.status }
      );
    }

    const data = (await res.json()) as GitHubRepo[];

    const filtered = data
      .filter((repo) => !repo.fork)
      .sort(
        (a, b) =>
          new Date(b.updated_at ?? 0).getTime() -
          new Date(a.updated_at ?? 0).getTime()
      );

    return Response.json(filtered);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Erro inesperado";

    if (message.includes("ENOTFOUND") || message.includes("fetch")) {
      return new Response(
        JSON.stringify({ error: "Erro de rede ao buscar repositórios" }),
        { status: 503 }
      );
    }

    return new Response(
      JSON.stringify({ error: "Erro inesperado ao buscar repositórios" }),
      { status: 500 }
    );
  }
}
