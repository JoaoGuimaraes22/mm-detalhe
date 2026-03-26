"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

function useCountUp(target: number, duration: number, active: boolean, skip: boolean) {
  const [value, setValue] = useState(() => (skip ? target : 0));
  useEffect(() => {
    if (skip) return;
    if (!active) return;
    const start = performance.now();
    const frame = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }, [active, target, duration, skip]);
  return value;
}

function Counter({ item }: { item: { label: string; target: number; suffix: string } }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const prefersReduced = useReducedMotion();
  const count = useCountUp(item.target, 1800, inView, prefersReduced ?? false);

  return (
    <div ref={ref} className="flex flex-col items-center gap-2 py-8 text-center">
      <span className="text-4xl font-bold tracking-tight text-[#d4a853] sm:text-5xl">
        {inView || prefersReduced ? count.toLocaleString() : "0"}
        {item.suffix}
      </span>
      <span className="text-xs font-semibold uppercase tracking-widest text-[#94a3b8]">
        {item.label}
      </span>
    </div>
  );
}

export default function StatsCounters({
  dict,
}: {
  dict: {
    title_line1: string;
    title_line2: string;
    items: { label: string; target: number; suffix: string }[];
  };
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#0a0a0a] px-6 py-16 md:px-8 md:py-20">
      {(dict.title_line1 || dict.title_line2) && (
        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {dict.title_line1 && (
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d4a853]">
              {dict.title_line1}
            </p>
          )}
          {dict.title_line2 && (
            <p className="mt-1 text-2xl font-bold text-white">{dict.title_line2}</p>
          )}
        </motion.div>
      )}

      <div
        className={[
          "mx-auto grid max-w-4xl",
          "grid-cols-2 sm:grid-cols-4",
        ].join(" ")}
      >
        {dict.items.map((item, i) => (
          <Counter key={i} item={item} />
        ))}
      </div>
    </section>
  );
}
