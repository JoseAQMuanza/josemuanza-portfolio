"use client";

import { useState } from "react";
import MainCard from "@/components/ui/main-card";
import MiniCircleText from "@/components/mini-circle-text";

export default function ContactEnPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          company: formData.get("company"),
          message: formData.get("message"),
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setMessage("Message sent. I will reply soon!");
      form.reset();
    } catch (error) {
      const fallback = "Failed to send message";
      const message = error instanceof Error ? error.message : fallback;
      setStatus("error");
      setMessage(message || fallback);
    }
  }

  return (
    <MainCard
      variant="en"
      children={
        <section className="space-y-6">
          <MiniCircleText text="Contact" />
          <div className="space-y-2">
            <h1 className="font-display text-3xl font-semibold text-white">
              Let’s talk about your project
            </h1>
            <p className="text-base text-[var(--color-muted)]">
              Share your needs and I’ll reply with ideas, budget, or next steps.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="card-surface rounded-2xl p-6 space-y-4"
          >
            <div className="grid gap-4">
              <input
                name="name"
                required
                placeholder="Your name"
                className="w-full rounded-xl border border-[var(--color-border)] bg-[rgba(15,23,42,0.6)] px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[rgba(91,140,255,0.5)]"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Your email"
                className="w-full rounded-xl border border-[var(--color-border)] bg-[rgba(15,23,42,0.6)] px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[rgba(91,140,255,0.5)]"
              />
              <input
                name="company"
                placeholder="Company or project (optional)"
                className="w-full rounded-xl border border-[var(--color-border)] bg-[rgba(15,23,42,0.6)] px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[rgba(91,140,255,0.5)]"
              />
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me a bit about what you need"
                className="w-full rounded-xl border border-[var(--color-border)] bg-[rgba(15,23,42,0.6)] px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[rgba(91,140,255,0.5)]"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-full px-5 py-3 text-sm font-semibold text-white accent-gradient shadow-[0_12px_30px_rgba(91,140,255,0.35)] transition-all duration-300 hover:scale-[1.01] disabled:opacity-60"
            >
              {status === "loading" ? "Sending..." : "Send message"}
            </button>

            {message && (
              <p
                className={`text-sm ${
                  status === "success" ? "text-emerald-300" : "text-rose-300"
                }`}
              >
                {message}
              </p>
            )}
          </form>
        </section>
      }
    />
  );
}
