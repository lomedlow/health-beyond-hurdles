"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const t = useTranslations("contactPage.form");
  const [status, setStatus] = useState<Status>("idle");
  const [values, setValues] = useState({
    name: "",
    email: "",
    interest: "general",
    message: "",
  });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("bad_response");
      setStatus("success");
      setValues({ name: "", email: "", interest: "general", message: "" });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl bg-surface-muted p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-brand-600" />
        <p className="font-display text-xl font-semibold">{t("successTitle")}</p>
        <p className="max-w-sm text-sm text-muted-foreground">{t("successBody")}</p>
        <Button variant="outline" size="sm" onClick={() => setStatus("idle")}>
          {t("sendAnother")}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-2xl bg-surface-muted p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
            {t("name")}
          </label>
          <input
            id="name"
            required
            value={values.name}
            onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
            className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
            {t("email")}
          </label>
          <input
            id="email"
            type="email"
            required
            value={values.email}
            onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
            className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
        </div>
      </div>

      <div>
        <label htmlFor="interest" className="mb-1.5 block text-sm font-medium text-foreground">
          {t("interest")}
        </label>
        <select
          id="interest"
          value={values.interest}
          onChange={(e) => setValues((v) => ({ ...v, interest: e.target.value }))}
          className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-500"
        >
          <option value="general">{t("interestOptions.general")}</option>
          <option value="volunteer">{t("interestOptions.volunteer")}</option>
          <option value="partner">{t("interestOptions.partner")}</option>
          <option value="funder">{t("interestOptions.funder")}</option>
          <option value="participant">{t("interestOptions.participant")}</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
          {t("message")}
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={values.message}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-500"
        />
      </div>

      {status === "error" && (
        <p className="text-sm font-medium text-accent-coral">{t("error")}</p>
      )}

      <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? t("sending") : t("send")}
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}
