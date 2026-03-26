"use client";

import Image from "next/image";
import { useRef, useCallback, useState } from "react";
import { motion } from "motion/react";

type Dict = {
  title_line1: string;
  title_line2: string;
  subtitle: string;
  items: {
    before: string;
    after: string;
    caption: string;
  }[];
};

function Slider({
  item,
}: {
  item: { before: string; after: string; caption: string };
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      dragging.current = true;
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!dragging.current) return;
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const onPointerUp = useCallback(() => {
    dragging.current = false;
  }, []);

  return (
    <div className="mx-auto w-full max-w-[900px]">
      <div
        ref={containerRef}
        className="relative aspect-[16/10] w-full cursor-ew-resize select-none overflow-hidden rounded-lg"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
      >
        {/* After image (full, background) */}
        <Image
          src={item.after}
          alt="After"
          fill
          className="object-cover"
          sizes="(max-width: 900px) 100vw, 900px"
          draggable={false}
        />

        {/* Before image (clipped) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={item.before}
            alt="Before"
            fill
            className="object-cover"
            sizes="(max-width: 900px) 100vw, 900px"
            draggable={false}
          />
        </div>

        {/* Divider line */}
        <div
          className="pointer-events-none absolute top-0 bottom-0 z-10 w-[3px] bg-[#d4a853]"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        />

        {/* Drag handle */}
        <div
          className="pointer-events-none absolute top-1/2 z-20 flex -translate-y-1/2 items-center gap-0"
          style={{ left: `${position}%`, transform: `translateX(-50%) translateY(-50%)` }}
        >
          <span className="rounded-l-md bg-[#0a0a0a]/80 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-white/80 backdrop-blur-sm">
            Before
          </span>
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#d4a853] bg-[#0a0a0a]/80 backdrop-blur-sm">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              className="text-[#d4a853]"
            >
              <path
                d="M5.5 4L1 9L5.5 14M12.5 4L17 9L12.5 14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="rounded-r-md bg-[#0a0a0a]/80 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-white/80 backdrop-blur-sm">
            After
          </span>
        </div>

        {/* Corner labels */}
        <span className="pointer-events-none absolute top-4 left-4 z-10 rounded bg-[#0a0a0a]/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white/70 backdrop-blur-sm">
          Before
        </span>
        <span className="pointer-events-none absolute top-4 right-4 z-10 rounded bg-[#0a0a0a]/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white/70 backdrop-blur-sm">
          After
        </span>
      </div>

      {/* Caption */}
      <p className="mt-4 text-center text-sm text-[#94a3b8] sm:text-base">{item.caption}</p>
    </div>
  );
}

export default function BeforeAfter({ dict }: { dict: Dict }) {
  return (
    <section id="before-after" className="bg-[#0a0a0a] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section title */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl font-black uppercase tracking-wide text-white sm:text-5xl lg:text-6xl">
            {dict.title_line1}{" "}
            <span className="text-[#d4a853]">{dict.title_line2}</span>
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-16 bg-[#d4a853]" />
          <p className="mt-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
            {dict.subtitle}
          </p>
        </motion.div>

        {/* Slider items */}
        <div className="flex flex-col gap-16">
          {dict.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Slider item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
