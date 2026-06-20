import { NextResponse } from "next/server";
import { contactInfo } from "@/lib/contact";

type ContactPayload = {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const service = body.service?.trim() || "Not specified";
  const message = body.message?.trim();

  if (!name || !email || !message || !isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please provide your name, a valid email and a message." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;

  // If no email provider is configured yet, fail gracefully so the UI can
  // offer the mailto fallback instead of pretending the message was sent.
  if (!apiKey) {
    console.warn(
      "RESEND_API_KEY is not set — contact form submission was not emailed.",
    );
    return NextResponse.json(
      { error: "Email service is not configured yet." },
      { status: 503 },
    );
  }

  // TODO: Send the email via Resend (https://resend.com).
  // Install the SDK with `npm install resend`, then replace the fetch below
  // with the official client if preferred:
  //
  //   import { Resend } from "resend";
  //   const resend = new Resend(apiKey);
  //   await resend.emails.send({ ... });
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // TODO: Use a verified sender domain in Resend.
        from: "Creativa VA Website <onboarding@resend.dev>",
        to: [contactInfo.email],
        reply_to: email,
        subject: `Discovery call enquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`,
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("Resend error:", detail);
      return NextResponse.json(
        { error: "We could not send your message. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
