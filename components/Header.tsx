"use client";

import Link from "next/link";
import { useEffect, useEffectEvent, useState } from "react";

const navigation = [
  { label: "Servicos", href: "#servicos" },
  { label: "Metodo", href: "#metodo" },
  { label: "Produtos", href: "#produtos" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useEffectEvent(() => {
    setScrolled(window.scrollY > 20);
  });

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);

    window.addEventListener("resize", closeMenu);

    return () => {
      window.removeEventListener("resize", closeMenu);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#040812]/80 py-3 backdrop-blur-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="section-shell">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur-xl md:px-6">
          <Link
            href="/"
            className="font-display text-lg font-semibold tracking-[0.22em] text-white uppercase"
          >
            Bluhmwerk
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium tracking-[0.18em] text-white/68 uppercase transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link href="#contato" className="primary-link">
              Agendar conversa
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-white md:hidden"
            aria-expanded={menuOpen}
            aria-label="Abrir menu"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-px w-5 bg-white transition ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-px w-5 bg-white transition ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-px w-5 bg-white transition ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {menuOpen ? (
          <div className="mt-3 rounded-[28px] border border-white/10 bg-[#070d1d]/94 p-4 shadow-[0_24px_80px_rgba(4,8,18,0.48)] backdrop-blur-2xl md:hidden">
            <nav className="flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4 text-sm font-medium tracking-[0.2em] text-white/74 uppercase"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#contato"
                onClick={() => setMenuOpen(false)}
                className="primary-link mt-2 inline-flex justify-center"
              >
                Agendar conversa
              </Link>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}