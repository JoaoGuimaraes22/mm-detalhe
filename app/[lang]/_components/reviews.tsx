"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

const AVATAR_COLORS = [
  { bg: "bg-[#d4a853]/15", text: "text-[#d4a853]" },
  { bg: "bg-white/10", text: "text-white" },
  { bg: "bg-[#d4a853]/10", text: "text-[#d4a853]/80" },
  { bg: "bg-white/8", text: "text-white/80" },
  { bg: "bg-[#d4a853]/20", text: "text-[#d4a853]" },
  { bg: "bg-white/12", text: "text-white/90" },
];

function StarIcon() {
  return (
    <svg className="w-3.5 h-3.5 text-[#d4a853]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function TestimonialCard({
  item,
  colorIndex,
}: {
  item: { quote: string; name: string; role: string; avatar: string | null; rating: number };
  colorIndex: number;
}) {
  const color = AVATAR_COLORS[colorIndex % AVATAR_COLORS.length];
  const parts = item.name.trim().split(" ");
  const initials =
    parts.length >= 2
      ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
      : parts[0][0].toUpperCase();

  return (
    <div className="mb-4 flex flex-col gap-4 rounded-2xl border border-white/8 bg-[#1a1a1a] p-6 transition-all duration-300 hover:border-[#d4a853]/20 hover:shadow-md hover:shadow-[#d4a853]/5">
      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: item.rating }).map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>

      {/* Quote */}
      <p className="text-sm leading-relaxed text-[#94a3b8] flex-1">{item.quote}</p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-white/5">
        <div
          className={`h-9 w-9 rounded-full ${color.bg} flex items-center justify-center shrink-0`}
        >
          <span className={`text-xs font-bold ${color.text}`}>{initials}</span>
        </div>
        <div>
          <p className="text-xs font-semibold text-white">{item.name}</p>
          <p className="text-xs text-[#94a3b8]/60">{item.role}</p>
        </div>
      </div>
    </div>
  );
}

function ScrollColumn({
  items,
  duration,
  globalIndexOffset,
}: {
  items: { quote: string; name: string; role: string; avatar: string | null; rating: number }[];
  duration: string;
  globalIndexOffset: number;
}) {
  const prefersReduced = useReducedMotion();
  const tripled = [...items, ...items, ...items];

  return (
    <div className="flex-1 min-w-0 overflow-hidden">
      <div
        className="hover:[animation-play-state:paused]"
        style={
          prefersReduced
            ? {}
            : {
                animation: `testimonials-scroll-up ${duration} linear infinite`,
              }
        }
      >
        {tripled.map((item, i) => (
          <TestimonialCard
            key={i}
            item={item}
            colorIndex={(i % items.length) + globalIndexOffset}
          />
        ))}
      </div>
    </div>
  );
}

export default function Reviews({
  dict,
}: {
  dict: {
    title_line1: string;
    title_line2: string;
    subtitle: string;
    items: { quote: string; name: string; role: string; avatar: string | null; rating: number }[];
  };
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const third = Math.ceil(dict.items.length / 3);
  const col1 = dict.items.slice(0, third);
  const col2 = dict.items.slice(third, third * 2);
  const col3 = dict.items.slice(third * 2);

  return (
    <section
      id="testimonials"
      ref={ref}
      className="bg-[#111111] px-6 py-16 md:px-8 md:py-24 xl:px-16 xl:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d4a853]">
            {dict.title_line1}
          </p>
          <h2 className="mt-2 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            {dict.title_line2}
          </h2>
          {dict.subtitle && (
            <p className="mt-4 text-sm text-[#94a3b8] max-w-md">{dict.subtitle}</p>
          )}
        </motion.div>

        {/* Scrolling columns */}
        <motion.div
          className="relative h-150 md:h-175 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Gradient fades */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-[#111111] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-[#111111] to-transparent z-10" />

          {/* Mobile: single column */}
          <div className="md:hidden h-full">
            <ScrollColumn items={dict.items} duration="65s" globalIndexOffset={0} />
          </div>

          {/* Desktop: 3 columns */}
          <div className="hidden md:flex gap-4 h-full">
            <ScrollColumn items={col1} duration="20s" globalIndexOffset={0} />
            <ScrollColumn items={col2} duration="35s" globalIndexOffset={3} />
            <ScrollColumn items={col3} duration="25s" globalIndexOffset={6} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
