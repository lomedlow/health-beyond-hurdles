import { NextResponse } from "next/server";

/**
 * Newsletter signup stub. Validates the payload and responds successfully so
 * the UI can be fully demoed end-to-end, but does not yet deliver anywhere.
 * Before launch, wire this up to a real provider (e.g. Resend, Mailchimp,
 * Buttondown) and persist/send the submission.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  const email =
    typeof body === "object" && body !== null && "email" in body
      ? String((body as { email: unknown }).email)
      : "";

  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!isValid) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
