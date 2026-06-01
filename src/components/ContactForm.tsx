"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const service = data.get("service") as string;
    const message = data.get("message") as string;
    const subject = encodeURIComponent(`Discovery call enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nService: ${service || "Not specified"}\n\nMessage:\n${message}`,
    );
    const mailto = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;

    const link = document.createElement("a");
    link.href = mailto;
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="rounded-2xl border border-rose-200 bg-rose-50 p-8 text-center"
        role="status"
      >
        <p className="font-semibold text-charcoal">Thank you for getting in touch.</p>
        <p className="mt-2 text-sm text-charcoal/75">
          Your email app should open shortly. If it does not, email us at{" "}
          <a href={`mailto:${siteConfig.email}`} className="font-medium text-rose-700 underline">
            {siteConfig.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative z-10 space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700">
          Your name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-2 w-full rounded-xl border border-rose-200 bg-white px-4 py-3 text-slate-800 shadow-sm transition focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-300/50"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-2 w-full rounded-xl border border-rose-200 bg-white px-4 py-3 text-slate-800 shadow-sm transition focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-300/50"
        />
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-slate-700">
          What support do you need?
        </label>
        <select
          id="service"
          name="service"
          className="mt-2 w-full rounded-xl border border-rose-200 bg-white px-4 py-3 text-slate-800 shadow-sm transition focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-300/50"
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
        <label htmlFor="message" className="block text-sm font-medium text-slate-700">
          Tell us about your business and goals
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 w-full resize-y rounded-xl border border-rose-200 bg-white px-4 py-3 text-slate-800 shadow-sm transition focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-300/50"
          placeholder="What would help you most right now?"
        />
      </div>
      <button
        type="submit"
        className="relative z-10 w-full cursor-pointer rounded-full bg-gradient-to-r from-rose-600 via-rose-500 to-rose-400 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-rose-600/30 transition hover:from-rose-700 hover:to-rose-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100"
      >
        Send Message — Book a Free Discovery Call
      </button>
      <p className="text-center text-xs text-slate-500">
        Prefer to call?{" "}
        <a href={`tel:${siteConfig.phone}`} className="font-medium text-rose-700 hover:underline">
          {siteConfig.phoneDisplay}
        </a>
      </p>
    </form>
  );
}
