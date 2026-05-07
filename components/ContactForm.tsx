"use client";

import { FormEvent, useState } from "react";

const initialValues = {
  name: "",
  company: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `[Briefing] ${values.company || values.name}`,
    );
    const body = encodeURIComponent(
      `Nome: ${values.name}\nEmpresa: ${values.company}\nE-mail: ${values.email}\n\n${values.message}`,
    );

    window.location.href = `mailto:comercial@bluhmwerk.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setValues(initialValues);
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
          direto com o comercial pelo telefone abaixo.
        </p>
      </div>

      <form className="grid gap-4" onSubmit={handleSubmit}>
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
          <button type="submit" className="btn-primary">
            Enviar briefing
            <span aria-hidden="true">→</span>
          </button>
          <p className="text-xs text-white/48">
            {submitted
              ? "Cliente de e-mail aberto com o briefing pronto."
              : "Os dados não saem do navegador até você confirmar o envio."}
          </p>
        </div>
      </form>
    </div>
  );
}
