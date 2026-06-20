"use client";

import { useState, type FormEvent } from "react";
import { contactInfo } from "@/lib/contact";

type Status = "idle" | "submitting" | "success" | "error";

function buildMailto(values: {
  name: string;
  email: string;
  service: string;
  message: string;
}) {
  const subject = encodeURIComponent(
    `Discovery call enquiry from ${values.name}`,
  );
  const body = encodeURIComponent(
    `Name: ${values.name}\nEmail: ${values.email}\nService: ${values.service || "Not specified"}\n\nMessage:\n${values.message}`,
  );
  return `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [lastValues, setLastValues] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const values = {
      name: (data.get("name") as string) ?? "",
      email: (data.get("email") as string) ?? "",
      service: (data.get("service") as string) ?? "",
      message: (data.get("message") as string) ?? "",
    };
    setLastValues(values);
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error ?? "We could not send your message.");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-2xl border border-rose-200 bg-rose-50 p-8 text-center"
        role="status"
      >
        <p className="font-semibold text-charcoal">Thank you for getting in touch.</p>
        <p className="mt-2 text-sm text-charcoal/75">
          Your message has been sent — we&apos;ll reply within 1–2 working days.
        </p>
        <p className="mt-3 text-sm text-charcoal/75">
          Prefer email? Reach us directly at{" "}
          <a
            href={`mailto:${contactInfo.email}`}
            className="font-medium text-rose-700 underline"
          >
            {contactInfo.email}
          </a>
          .
        </p>
      </div>
    );
  }

  const isSubmitting = status === "submitting";

  return (
    <form onSubmit={handleSubmit} className="relative z-10 space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-charcoal/80">
          Your name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-2 w-full rounded-xl border border-rose-200 bg-white px-4 py-3 text-charcoal shadow-sm transition focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-300/50"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-charcoal/80">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-2 w-full rounded-xl border border-rose-200 bg-white px-4 py-3 text-charcoal shadow-sm transition focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-300/50"
        />
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-charcoal/80">
          What support do you need?
        </label>
        <select
          id="service"
          name="service"
          className="mt-2 w-full rounded-xl border border-rose-200 bg-white px-4 py-3 text-charcoal shadow-sm transition focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-300/50"
          defaultValue=""
        >
          <option value="" disabled>
            Select a service
          </option>
          <option value="Social media support">Social media support</option>
          <option value="Virtual assistant support">Virtual assistant support</option>
          <option value="Website design">Website design</option>
          <option value="A combination of services">A combination of services</option>
          <option value="Not sure yet">Not sure yet — let&apos;s chat</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-charcoal/80">
          Tell us about your business and goals
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 w-full resize-y rounded-xl border border-rose-200 bg-white px-4 py-3 text-charcoal shadow-sm transition focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-300/50"
          placeholder="What would help you most right now?"
        />
      </div>

      {status === "error" && (
        <div
          className="rounded-xl border border-rose-300 bg-rose-50 p-4 text-sm text-charcoal/80"
          role="alert"
        >
          {errorMessage}{" "}
          You can also email us directly at{" "}
          <a
            href={buildMailto(lastValues)}
            className="font-medium text-rose-700 underline"
          >
            {contactInfo.email}
          </a>
          .
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="relative z-10 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-gradient-to-r from-rose-600 via-rose-500 to-rose-400 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-rose-600/30 transition hover:from-rose-700 hover:to-rose-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting && (
          <span
            className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
            aria-hidden
          />
        )}
        {isSubmitting ? "Sending…" : "Send Message"}
      </button>
      <p className="text-center text-xs text-charcoal/60">
        Prefer to call?{" "}
        <a href={`tel:${contactInfo.phone}`} className="font-medium text-rose-700 hover:underline">
          {contactInfo.phoneDisplay}
        </a>
      </p>
    </form>
  );
}
