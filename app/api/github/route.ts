export async function GET() {
  const username = process.env.GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos`, {
      headers: {
        Authorization: `token ${token}`,
      },
      next: { revalidate: 60 * 10 }
    });

    if (!res.ok) {
      return Response.json(
        { error: 'Erro ao buscar repositórios' },
        { status: res.status });
    }

    const data = await res.json();

    const filtered = data
      .filter((repo: any) => !repo.fork)
      .sort((a: any, b: any) =>
        new Date(b.updated_at).getTime() -
        new Date(a.updated_at).getTime());

    return Response.json(filtered);

  } catch (error: any) {
    if (error.cause?.code === "ENOTFOUND" || error.message.includes("fetch")) {

      return new Response(
        JSON.stringify({ error: 'Erro de rede ao buscar repositórios' }), { status: 503 });
    }
  }
}
