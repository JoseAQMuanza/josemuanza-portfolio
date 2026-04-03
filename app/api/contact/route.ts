export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    return Response.json(
      {
        error:
          "Configuração de e-mail ausente. Verifique RESEND_API_KEY, CONTACT_TO_EMAIL e CONTACT_FROM_EMAIL.",
      },
      { status: 500 }
    );
  }

  const body = await request.json();
  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const company = String(body.company || "").trim();
  const message = String(body.message || "").trim();

  if (!name || !email || !message) {
    return Response.json(
      { error: "Nome, e-mail e mensagem são obrigatórios." },
      { status: 400 }
    );
  }

  const subject = `Novo contato de ${name}`;
  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.6">
      <h2>Novo contato pelo portfólio</h2>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>Empresa:</strong> ${company || "Não informado"}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${message}</p>
    </div>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject,
      html,
      reply_to: email,
    }),
  });

  if (!res.ok) {
    const errorText = await res.text();
    return Response.json(
      { error: `Erro ao enviar e-mail: ${errorText}` },
      { status: 500 }
    );
  }

  return Response.json({ ok: true });
}
