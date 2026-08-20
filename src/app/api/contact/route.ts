import { NextResponse } from "next/server";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  interest?: unknown;
  message?: unknown;
};

/**
 * Contact form stub. Validates the payload and responds successfully so the
 * UI can be fully demoed end-to-end, but does not yet deliver anywhere.
 * Before launch, wire this up to a real provider (e.g. Resend) and/or store
 * submissions.
 */
export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!name || !emailValid || !message) {
    return NextResponse.json({ error: "invalid_fields" }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
