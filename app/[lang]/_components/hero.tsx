"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

type Dict = {
  title_line1: string;
  title_line2: string;
  tagline: string;
  cta: string;
  cta_secondary: string;
  stats: { value: string; label: string }[];
  ticker: { text: string }[];
};

export default function Hero({ dict }: { dict: Dict }) {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 200]);
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Quadruple ticker items for seamless loop
  const tickerItems = [...dict.ticker, ...dict.ticker, ...dict.ticker, ...dict.ticker];

  return (
    <>
      <section
        id="home"
        ref={sectionRef}
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a0a0a]"
      >
        {/* Parallax background image */}
        <motion.div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          style={{ y: bgY }}
        >
          <div className="absolute inset-0" style={{ top: "-15%", bottom: "-15%" }}>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src="/hero/hero-video.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>

        {/* Dark overlay gradient */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-[#0a0a0a]/40" />

        {/* Subtle gold radial glow */}
        <div
          className="pointer-events-none absolute inset-0 opacity-15"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 50% 55%, rgba(212,168,83,0.2) 0%, transparent 70%)",
          }}
        />

        {/* Main content */}
        <motion.div
          className="relative z-10 mx-auto max-w-5xl px-6 py-28 text-center"
          style={{ opacity: contentOpacity }}
        >
          {/* Title */}
          <h1 className="overflow-hidden">
            <span
              className="block text-6xl font-black uppercase tracking-wide text-white sm:text-7xl lg:text-8xl"
              style={
                visible
                  ? { animation: "hero-up 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s both" }
                  : { opacity: 0 }
              }
            >
              {dict.title_line1}
            </span>
            <span
              className="block text-6xl font-black uppercase tracking-wide sm:text-7xl lg:text-8xl"
              style={
                visible
                  ? {
                      animation: "hero-up 0.9s cubic-bezier(0.16,1,0.3,1) 0.25s both",
                      color: "#d4a853",
                    }
                  : { opacity: 0 }
              }
            >
              {dict.title_line2}
            </span>
          </h1>

          {/* Gold divider */}
          <div
            className="mx-auto mt-6 mb-6 h-0.5 w-20 bg-[#d4a853]"
            style={
              visible
                ? { animation: "hero-scale-x 0.8s cubic-bezier(0.16,1,0.3,1) 0.45s both" }
                : { opacity: 0 }
            }
          />

          {/* Tagline */}
          <p
            className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-[#94a3b8] sm:text-lg md:text-xl"
            style={
              visible
                ? { animation: "hero-up 0.9s cubic-bezier(0.16,1,0.3,1) 0.55s both" }
                : { opacity: 0 }
            }
          >
            {dict.tagline}
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            style={
              visible
                ? { animation: "hero-up 0.9s cubic-bezier(0.16,1,0.3,1) 0.7s both" }
                : { opacity: 0 }
            }
          >
            <button
              onClick={() => scrollTo("contact")}
              className="cursor-pointer rounded-lg bg-[#d4a853] px-10 py-4 text-sm font-bold uppercase tracking-widest text-[#0a0a0a] shadow-lg shadow-[#d4a853]/20 transition-all hover:bg-[#c49a48] hover:shadow-[#d4a853]/35 hover:scale-[1.02] active:scale-[0.98]"
            >
              {dict.cta}
            </button>
            <button
              onClick={() => scrollTo("services")}
              className="cursor-pointer rounded-lg border-2 border-[#d4a853]/30 px-10 py-4 text-sm font-bold uppercase tracking-widest text-[#d4a853] transition-all hover:border-[#d4a853]/60 hover:bg-[#d4a853]/5"
            >
              {dict.cta_secondary}
            </button>
          </div>

          {/* Stats row */}
          {dict.stats.length > 0 && (
            <div className="mt-20 flex flex-col items-center justify-center gap-10 sm:flex-row sm:gap-16">
              {dict.stats.map((stat, i) => (
                <div
                  key={i}
                  className="text-center"
                  style={
                    visible
                      ? {
                          animation: `hero-up 0.9s cubic-bezier(0.16,1,0.3,1) ${0.85 + i * 0.1}s both`,
                        }
                      : { opacity: 0 }
                  }
                >
                  <div className="text-3xl font-black text-[#d4a853] sm:text-4xl">{stat.value}</div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
          style={
            visible
              ? { animation: "hero-up 0.9s cubic-bezier(0.16,1,0.3,1) 1.2s both" }
              : { opacity: 0 }
          }
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">Scroll</span>
          <div className="relative h-8 w-px overflow-hidden bg-white/15">
            <div
              className="absolute top-0 h-3 w-full bg-[#d4a853]/60"
              style={{ animation: "hero-scroll-pulse 2s ease-in-out infinite" }}
            />
          </div>
        </div>
      </section>

      {/* ── Services ticker bar ─────────────────────────────────── */}
      <div className="relative z-20 w-full overflow-hidden border-y border-[#d4a853]/10 bg-[#111] py-4">
        <div className="hero-ticker flex w-max items-center gap-0">
          {tickerItems.map((item, i) => (
            <div key={i} className="flex shrink-0 items-center">
              <span className="px-6 text-sm font-bold uppercase tracking-[0.25em] text-white/80 sm:px-10 sm:text-base">
                {item.text}
              </span>
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#d4a853]" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
