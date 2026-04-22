"use client";

import { useRef, useState } from "react";

export type CarouselLabels = { previous: string; next: string; goTo: string };

export default function CarouselSwiper({
  images,
  alt,
  labels,
}: {
  images: string[];
  alt: string;
  labels: CarouselLabels;
}) {
  const [active, setActive] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const total = images.length;
  const hasMultiple = total > 1;

  function scrollTo(idx: number) {
    const el = scrollerRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(total - 1, idx));
    el.scrollTo({ left: clamped * el.clientWidth, behavior: "smooth" });
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!hasMultiple) return;
    if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollTo(active + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollTo(active - 1);
    }
  }

  return (
    <div
      className="relative"
      onKeyDown={handleKeyDown}
      tabIndex={hasMultiple ? 0 : -1}
    >
      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onScroll={(e) => {
          const el = e.currentTarget;
          const idx = Math.round(el.scrollLeft / el.clientWidth);
          if (idx !== active) setActive(idx);
        }}
      >
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${alt} — ${i + 1}`}
            className="aspect-[4/5] w-full shrink-0 snap-start object-cover"
          />
        ))}
      </div>

      {hasMultiple && active > 0 && (
        <button
          type="button"
          onClick={() => scrollTo(active - 1)}
          aria-label={labels.previous}
          className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-zinc-900 shadow-md backdrop-blur transition hover:bg-white"
        >
          <span aria-hidden className="text-lg leading-none">‹</span>
        </button>
      )}
      {hasMultiple && active < total - 1 && (
        <button
          type="button"
          onClick={() => scrollTo(active + 1)}
          aria-label={labels.next}
          className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-zinc-900 shadow-md backdrop-blur transition hover:bg-white"
        >
          <span aria-hidden className="text-lg leading-none">›</span>
        </button>
      )}

      {hasMultiple && (
        <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-1.5">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => scrollTo(i)}
              aria-label={labels.goTo.replace("{n}", String(i + 1))}
              className={`h-1.5 rounded-full transition-all ${
                i === active ? "w-4 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
