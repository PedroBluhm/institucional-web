"use client";

import { useEffect, useState } from "react";
import { whatsappLink } from "@/lib/site";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 360);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Bluhmwerk pelo WhatsApp"
      className={`fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_44px_rgba(37,211,102,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1DBA59] md:bottom-6 md:right-6 ${
        visible ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-3"
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        aria-hidden="true"
        fill="currentColor"
      >
        <path d="M19.11 17.62c-.31-.16-1.84-.91-2.13-1.01-.29-.11-.49-.16-.7.16-.21.31-.81 1.01-.99 1.22-.18.21-.37.23-.68.08-.31-.16-1.32-.49-2.51-1.55-.93-.83-1.55-1.85-1.74-2.16-.18-.31-.02-.48.14-.63.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.11-.21.05-.39-.03-.55-.08-.16-.7-1.69-.96-2.31-.25-.6-.5-.52-.7-.53-.18-.01-.39-.01-.6-.01s-.55.08-.84.39-1.1 1.07-1.1 2.62 1.13 3.04 1.29 3.25c.16.21 2.22 3.4 5.39 4.65 3.18 1.25 3.18.83 3.76.78.57-.05 1.84-.75 2.1-1.48.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.6-.36ZM12 22a10 10 0 1 1 9.39-13.49l-1.06 3.93 4.06-1.07A10 10 0 0 1 12 22Z" />
      </svg>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
