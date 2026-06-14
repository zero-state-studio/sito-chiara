"use client";

import { useId, useRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { site } from "@/content/site";

type Status = "idle" | "sending" | "success" | "error" | "captcha";

// Web3Forms free shared hCaptcha sitekey (override with your own via env).
const HCAPTCHA_SITEKEY =
  process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY ??
  "50b2fe65-b00b-4b9e-ad62-3ba471098be2";

const fieldClass =
  "rounded-2xl border border-line bg-canvas/80 px-4 py-3 text-ink outline-none transition focus:border-brand placeholder:text-ink-soft/70";

export default function ContactBox({ bare = false }: { bare?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [token, setToken] = useState("");
  const captchaRef = useRef<HCaptcha>(null);
  const uid = useId();

  function resetCaptcha() {
    captchaRef.current?.resetCaptcha();
    setToken("");
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!token) {
      setStatus("captcha");
      return;
    }
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "");
    data.append("subject", `Nuovo contatto dal sito — ${site.name}`);
    data.append("from_name", "Sito Chiara Lodovici");
    data.append("h-captcha-response", token);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      resetCaptcha();
    }
  }

  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-peach px-6 py-8 shadow-[0_18px_50px_-24px_oklch(0.55_0.15_42/0.5)] ring-1 ring-brand/15 sm:px-9 sm:py-10">
      {!bare && (
        <>
          <h2 className="font-display text-4xl text-brand-deep sm:text-5xl">
            {site.contatti.title}
          </h2>
          <p className="mt-2 max-w-prose text-ink/85">{site.contatti.intro}</p>
        </>
      )}

      {status === "success" ? (
        <div className="mt-6 rounded-2xl bg-canvas/80 px-5 py-6" role="status">
          <p className="font-display text-2xl text-brand-deep">Grazie di cuore.</p>
          <p className="mt-1 text-ink/80">
            Il tuo messaggio è arrivato. Ti risponderò il prima possibile.
          </p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className={`grid gap-4 ${bare ? "" : "mt-6"}`}>
          {/* honeypot */}
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-1.5 text-sm font-medium" htmlFor={`${uid}-name`}>
              <span>Nome</span>
              <input
                id={`${uid}-name`}
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Come ti chiami"
                className={fieldClass}
              />
            </label>
            <label className="grid gap-1.5 text-sm font-medium" htmlFor={`${uid}-email`}>
              <span>Email</span>
              <input
                id={`${uid}-email`}
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="La tua email"
                className={fieldClass}
              />
            </label>
          </div>

          <label className="grid gap-1.5 text-sm font-medium" htmlFor={`${uid}-message`}>
            <span>Messaggio</span>
            <textarea
              id={`${uid}-message`}
              name="message"
              required
              rows={4}
              placeholder="Scrivimi pure quello che ti va di condividere"
              className={`${fieldClass} resize-y`}
            />
          </label>

          <HCaptcha
            ref={captchaRef}
            sitekey={HCAPTCHA_SITEKEY}
            onVerify={(t) => {
              setToken(t);
              setStatus((s) => (s === "captcha" ? "idle" : s));
            }}
            onExpire={() => setToken("")}
            onError={() => setToken("")}
          />

          <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-2">
            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-full bg-brand px-7 py-3 font-semibold text-ink shadow-sm transition hover:bg-brand-deep hover:text-canvas disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "Invio in corso…" : site.contatti.submit}
            </button>
            <span className="text-xs text-ink-soft">{site.contatti.formNote}</span>
          </div>

          {status === "captcha" && (
            <p className="text-sm font-medium text-brand-deep" role="alert">
              Completa la verifica anti-spam prima di inviare.
            </p>
          )}

          {status === "error" && (
            <p className="text-sm font-medium text-brand-deep" role="alert">
              Qualcosa è andato storto nell’invio. Riprova, oppure scrivimi a{" "}
              <a className="underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              .
            </p>
          )}
        </form>
      )}
    </div>
  );
}
