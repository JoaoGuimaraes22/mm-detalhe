"use client";

import { useEffect, useState } from "react";

export default function QuoteBar({ dict }: { dict: { cta_quote: string; cta_call: string; phone: string } }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-2 inset-x-2 z-60 md:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-24"
      }`}
    >
      <div className="flex gap-1.5 rounded-xl bg-[#d4a853] p-1.5 shadow-2xl">
        <button
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          className="flex-1 cursor-pointer rounded-lg bg-[#0a0a0a] py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#1a1a1a]"
        >
          {dict.cta_quote}
        </button>
        <a
          href={`tel:${dict.phone}`}
          className="flex-1 cursor-pointer rounded-lg bg-white/90 py-2.5 text-center text-xs font-semibold text-[#0a0a0a] transition-colors hover:bg-white"
        >
          {dict.cta_call}
        </a>
      </div>
    </div>
  );
}
