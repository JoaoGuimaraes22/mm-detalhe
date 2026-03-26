"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

export default function Pricing({
  dict,
}: {
  dict: {
    title_line1: string;
    title_line2: string;
    subtitle: string;
    popular_label: string;
    cta: string;
    disclaimer: string;
    plans: {
      name: string;
      price: string;
      currency: string;
      popular: boolean;
      features: string[];
      cta: string;
    }[];
  };
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 } as const,
    animate: inView ? ({ opacity: 1, y: 0 } as const) : ({ opacity: 0, y: 24 } as const),
    transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section id="pricing" ref={ref} className="bg-[#0a0a0a] px-6 py-16 md:px-8 md:py-24 xl:px-16 xl:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div {...fadeUp()} className="mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d4a853]">
            {dict.title_line1}
          </p>
          <h2 className="mt-2 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            {dict.title_line2}
          </h2>
          {dict.subtitle && (
            <p className="mt-4 max-w-xl text-sm text-[#94a3b8]">{dict.subtitle}</p>
          )}
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {dict.plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              {...fadeUp(0.1 + i * 0.1)}
              className={[
                "relative flex flex-col rounded-2xl border p-8 transition-shadow duration-300",
                plan.popular
                  ? "border-[#d4a853] bg-[#1a1a1a] shadow-lg shadow-[#d4a853]/10"
                  : "border-white/8 bg-[#1a1a1a] hover:border-white/15 hover:shadow-md hover:shadow-white/5",
              ].join(" ")}
            >
              {/* Popular badge */}
              {plan.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#d4a853] px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#0a0a0a]">
                  {dict.popular_label}
                </span>
              )}

              {/* Plan name */}
              <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#94a3b8]">
                {plan.name}
              </div>

              {/* Price */}
              <div className="mb-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight text-[#d4a853]">
                  {plan.currency}{plan.price}
                </span>
              </div>

              {/* Features */}
              <ul className="mb-8 flex flex-col gap-3">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-[#94a3b8]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 shrink-0 text-[#d4a853]"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={[
                  "mt-auto block cursor-pointer rounded-xl py-3.5 text-center text-sm font-semibold transition-all duration-200",
                  plan.popular
                    ? "bg-[#d4a853] text-[#0a0a0a] hover:bg-[#c49a48] shadow-lg shadow-[#d4a853]/20"
                    : "border border-white/15 text-white hover:border-[#d4a853]/50 hover:text-[#d4a853]",
                ].join(" ")}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        {dict.disclaimer && (
          <motion.p {...fadeUp(0.4)} className="mt-8 text-center text-sm text-[#94a3b8]/60">
            {dict.disclaimer}
          </motion.p>
        )}
      </div>
    </section>
  );
}
