"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navigation = [
  { label: "Quem somos", href: "/#quem-somos" },
  { label: "Nossas soluções", href: "/#solucoes" },
  { label: "Cases", href: "/cases" },
  { label: "Método", href: "/#metodo" },
  { label: "Contato", href: "/#contato" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#040810]/85 py-2 backdrop-blur-2xl"
          : "bg-transparent py-4"
      }`}
    >
      <div className="section-shell">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(244,246,250,0.96),rgba(232,237,245,0.92))] px-4 py-2.5 shadow-[0_18px_40px_rgba(2,6,15,0.45)] backdrop-blur-xl md:px-5">
          <Link
            href="/"
            className="group inline-flex items-center"
            aria-label="Bluhmwerk Tecnologia - Início"
          >
            <Image
              src="/assets/BluhmwerkLogo.png"
              alt="Bluhmwerk Tecnologia"
              width={2008}
              height={591}
              priority
              className="h-10 w-auto object-contain transition group-hover:opacity-90 md:h-11"
            />
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[0.78rem] font-medium tracking-[0.02em] text-[#0E1A2C]/72 transition hover:text-[#0E1A2C]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/#contato"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0E1A2C] px-5 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_12px_28px_rgba(14,26,44,0.35)] transition hover:-translate-y-px hover:bg-[#1B2A3D]"
            >
              Entre em contato
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0E1A2C]/15 bg-white/40 text-[#0E1A2C] md:hidden"
            aria-expanded={menuOpen}
            aria-label="Abrir menu"
          >
            <span className="relative block h-3.5 w-4">
              <span
                className={`absolute left-0 top-0 h-px w-4 bg-[#0E1A2C] transition ${
                  menuOpen ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[6px] h-px w-4 bg-[#0E1A2C] transition ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[12px] h-px w-4 bg-[#0E1A2C] transition ${
                  menuOpen ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {menuOpen ? (
          <div className="mt-3 rounded-[24px] border border-white/10 bg-[#070D1B]/95 p-3 shadow-[0_24px_80px_rgba(2,6,15,0.55)] backdrop-blur-2xl md:hidden">
            <nav className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3.5 text-sm font-medium text-white/82"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/#contato"
                onClick={() => setMenuOpen(false)}
                className="btn-primary mt-2 justify-center"
              >
                Entre em contato
              </Link>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
