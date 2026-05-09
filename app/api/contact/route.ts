import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  company?: string;
  email?: string;
  message?: string;
  honeypot?: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  if (body.honeypot) {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();
  const company = body.company?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json({ error: "missing_fields" }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? site.contact.email;
  const from =
    process.env.CONTACT_FROM_EMAIL ?? "Bluhmwerk Site <site@bluhmwerk.com>";

  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY ausente");
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  const resend = new Resend(apiKey);

  const subject = `[Site] Novo briefing — ${company || name}`;

  const html = `
    <div style="font-family: system-ui, sans-serif; line-height: 1.6; color: #0E1A2C;">
      <h2 style="margin:0 0 16px 0;">Novo briefing pelo site</h2>
      <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
      <p><strong>Empresa:</strong> ${escapeHtml(company || "—")}</p>
      <p><strong>E-mail:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
      <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0;">
      <p><strong>Mensagem:</strong></p>
      <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject,
      html,
    });

    if (error) {
      console.error("[contact] resend error", error);
      return NextResponse.json({ error: "send_failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] unexpected", err);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }
}
