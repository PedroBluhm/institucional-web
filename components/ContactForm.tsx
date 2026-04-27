"use client";

import { FormEvent, startTransition, useState } from "react";

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

    startTransition(() => {
      setSubmitted(true);
      setValues(initialValues);
    });
  };

  return (
    <div className="glass-panel p-5 md:p-7">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.24em] text-white/42">
          Briefing inicial
        </p>
        <h3 className="mt-4 text-3xl font-semibold text-white">
          Conte o que voce precisa construir.
        </h3>
        <p className="mt-3 max-w-[34rem] text-sm leading-7 text-white/58">
          Preencha os campos abaixo para estruturar um primeiro contato. O
          formulario esta preparado como front-end e pode ser conectado depois
          ao seu CRM, e-mail ou API.
        </p>
      </div>

      <form className="grid gap-4" onSubmit={handleSubmit}>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2">
            <span className="text-xs uppercase tracking-[0.22em] text-white/42">
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
            <span className="text-xs uppercase tracking-[0.22em] text-white/42">
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
          <span className="text-xs uppercase tracking-[0.22em] text-white/42">
            E-mail
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
          <span className="text-xs uppercase tracking-[0.22em] text-white/42">
            Mensagem
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
            placeholder="Descreva o produto, problema operacional ou oportunidade que voce quer resolver."
            rows={6}
            className="form-input min-h-[170px] resize-none"
          />
        </label>

        <div className="mt-2 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <button type="submit" className="primary-link justify-center">
            Enviar briefing
          </button>
          <p className="text-sm text-white/48">
            {submitted
              ? "Mensagem registrada no front-end. Conecte agora esse formulario ao seu endpoint preferido."
              : "Resposta estimada: ate 1 dia util."}
          </p>
        </div>
      </form>
    </div>
  );
}