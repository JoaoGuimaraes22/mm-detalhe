"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "motion/react";

export default function About({
  dict,
}: {
  dict: {
    title_line1: string;
    title_line2: string;
    body: string;
    stats: { value: string; label: string }[];
  };
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const paragraphs = dict.body.split("\n\n").filter(Boolean);

  return (
    <section
      id="about"
      ref={ref}
      className="bg-[#111111] px-6 py-16 md:px-8 md:py-24 xl:px-16 xl:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <motion.div
            className="relative aspect-4/3 overflow-hidden rounded-2xl shadow-lg lg:aspect-square"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src="/about/bruno.webp"
              alt="Bruno — M M Detalhe"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            {/* Subtle gold border glow */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-[#d4a853]/20" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d4a853]">
              {dict.title_line1}
            </p>
            <h2 className="mt-2 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              {dict.title_line2}
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-[#d4a853]" />

            <div className="mt-8 space-y-4">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-sm leading-relaxed text-[#94a3b8] md:text-base">
                  {p}
                </p>
              ))}
            </div>

            {/* Stats row */}
            {dict.stats.length > 0 && (
              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/8 pt-8">
                {dict.stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    className="text-center"
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="text-2xl font-black text-[#d4a853] sm:text-3xl">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs font-medium text-[#94a3b8] leading-tight">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
