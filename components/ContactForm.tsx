"use client";

import { FormEvent, useState } from "react";

const initialValues = {
  name: "",
  company: "",
  email: "",
  message: "",
  honeypot: "",
};

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        setStatus("success");
        setValues(initialValues);
        return;
      }

      const data = (await res.json().catch(() => null)) as
        | { error?: string }
        | null;

      if (data?.error === "not_configured") {
        const subject = encodeURIComponent(
          `[Briefing] ${values.company || values.name}`,
        );
        const body = encodeURIComponent(
          `Nome: ${values.name}\nEmpresa: ${values.company}\nE-mail: ${values.email}\n\n${values.message}`,
        );
        window.location.href = `mailto:comercial@bluhmwerk.com?subject=${subject}&body=${body}`;
        setStatus("success");
        setValues(initialValues);
        return;
      }

      setStatus("error");
      setErrorMessage(
        data?.error === "invalid_email"
          ? "E-mail inválido. Confira e tente de novo."
          : "Não consegui enviar agora. Tenta de novo em alguns segundos ou nos chame no WhatsApp.",
      );
    } catch {
      setStatus("error");
      setErrorMessage(
        "Falha de rede. Tenta de novo ou usa o WhatsApp/e-mail aí ao lado.",
      );
    }
  };

  return (
    <div className="surface-card p-6 md:p-8">
      <div className="mb-7">
        <span className="eyebrow">Briefing inicial</span>
        <h3 className="mt-5 font-display text-2xl font-semibold leading-tight text-white md:text-3xl">
          Conte o que você precisa construir.
        </h3>
        <p className="mt-3 max-w-[32rem] text-sm leading-7 text-white/58">
          Resposta estimada em até 1 dia útil. Para projetos urgentes, fale
          direto com o comercial pelo WhatsApp ou telefone ao lado.
        </p>
      </div>

      <form className="grid gap-4" onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.honeypot}
          onChange={(event) =>
            setValues((current) => ({ ...current, honeypot: event.target.value }))
          }
          name="website"
          aria-hidden="true"
          className="absolute left-[-9999px] h-px w-px opacity-0"
        />

        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2">
            <span className="text-[0.7rem] uppercase tracking-[0.22em] text-white/42">
              Nome
            </span>
            <input
              type="text"
              required
              value={values.name}
              onChange={(event) =>
                setValues((current) => ({
                  ...current,
                  name: event.target.value,
                }))
              }
              placeholder="Seu nome"
              className="form-input"
            />
          </label>

          <label className="space-y-2">
            <span className="text-[0.7rem] uppercase tracking-[0.22em] text-white/42">
              Empresa
            </span>
            <input
              type="text"
              value={values.company}
              onChange={(event) =>
                setValues((current) => ({
                  ...current,
                  company: event.target.value,
                }))
              }
              placeholder="Nome da empresa"
              className="form-input"
            />
          </label>
        </div>

        <label className="space-y-2">
          <span className="text-[0.7rem] uppercase tracking-[0.22em] text-white/42">
            E-mail corporativo
          </span>
          <input
            type="email"
            required
            value={values.email}
            onChange={(event) =>
              setValues((current) => ({
                ...current,
                email: event.target.value,
              }))
            }
            placeholder="voce@empresa.com"
            className="form-input"
          />
        </label>

        <label className="space-y-2">
          <span className="text-[0.7rem] uppercase tracking-[0.22em] text-white/42">
            Contexto e objetivo
          </span>
          <textarea
            required
            value={values.message}
            onChange={(event) =>
              setValues((current) => ({
                ...current,
                message: event.target.value,
              }))
            }
            placeholder="Descreva a operação, o problema e o resultado esperado."
            rows={5}
            className="form-input min-h-[150px] resize-none"
          />
        </label>

        <div className="mt-2 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading" ? "Enviando..." : "Enviar briefing"}
            {status !== "loading" ? <span aria-hidden="true">→</span> : null}
          </button>
          <p
            className={`text-xs ${
              status === "success"
                ? "text-[var(--signal)]"
                : status === "error"
                  ? "text-[var(--alert)]"
                  : "text-white/48"
            }`}
            aria-live="polite"
          >
            {status === "success"
              ? "Briefing recebido — respondemos em até 1 dia útil."
              : status === "error"
                ? errorMessage
                : "Os dados saem do navegador só quando você clica em enviar."}
          </p>
        </div>
      </form>
    </div>
  );
}
