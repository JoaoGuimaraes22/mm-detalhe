"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";

export default function Services({
  dict,
}: {
  dict: {
    title_line1: string;
    title_line2: string;
    items: { icon: string; title: string; description: string; image: string }[];
  };
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="services"
      ref={ref}
      className="relative bg-[#111111] px-6 py-20 md:px-8 md:py-28 xl:px-16 xl:py-36 overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d4a853]">
            {dict.title_line1}
          </p>
          <h2 className="mt-2 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            {dict.title_line2}
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-[#d4a853]" />
        </motion.div>

        {/* Service cards grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {dict.items.map((item, i) => {
            const isHovered = hoveredIndex === i;

            return (
              <motion.div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-white/8 bg-[#1a1a1a] cursor-default transition-all duration-500 hover:border-[#d4a853]/30 hover:shadow-xl hover:shadow-[#d4a853]/5"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.1 * i,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={`object-cover transition-transform duration-700 ${
                      isHovered ? "scale-105" : "scale-100"
                    }`}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#1a1a1a] via-transparent to-transparent" />

                  {/* Icon badge */}
                  <div className="absolute top-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#0a0a0a]/80 text-lg shadow-md backdrop-blur-sm ring-1 ring-white/10">
                    {item.icon}
                  </div>

                  {/* Gold accent line on hover */}
                  <div
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#d4a853] transition-all duration-500 ${
                      isHovered ? "w-full" : "w-0"
                    }`}
                  />
                </div>

                {/* Content */}
                <div className="p-5 pt-3">
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-[#94a3b8]">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
