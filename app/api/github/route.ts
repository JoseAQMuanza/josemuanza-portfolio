export async function GET() {
  const username = process.env.GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  const res = await fetch(`https://api.github.com/users/${username}/repos`, {
    headers: {
      Authorization: `token ${token}`,
    },
  });

  if (!res.ok) {
    return new Response(JSON.stringify({ error: 'Falha ao buscar repositórios' }), { status: 500 });
  }

  let data;

  if (!res.ok) {
   data = []
  } else if (res.ok) { data = await res.json();}  

  interface Repo {
    fork: boolean;
    updated_at: string;
  }

  const filtered = (data as Repo[])
    .filter(repo => !repo.fork)
    .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());

  return Response.json(filtered);
}
