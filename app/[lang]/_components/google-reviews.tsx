"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const REVIEW_URL = process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL ?? "";

function StarIcon() {
  return (
    <svg className="w-6 h-6 text-[#d4a853]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function GoogleReviews({
  dict,
}: {
  dict: {
    title_line1: string;
    title_line2: string;
    subtitle: string;
    cta: string;
    rating_label: string;
  };
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 } as const,
    animate: inView ? ({ opacity: 1, y: 0 } as const) : ({ opacity: 0, y: 20 } as const),
    transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section
      id="google-reviews"
      ref={ref}
      className="bg-[#0a0a0a] px-6 py-12 md:px-8 md:py-16"
    >
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-center gap-6 rounded-3xl border border-[#d4a853]/20 bg-[#1a1a1a] px-6 py-10 text-center shadow-lg shadow-[#d4a853]/5 md:px-12 md:py-12">
          {/* Large rating */}
          <motion.div className="flex flex-col items-center gap-2" {...fadeUp(0)}>
            <span className="text-5xl font-black text-[#d4a853]">5.0</span>
            <div className="flex gap-1" aria-label="5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-[#94a3b8]/60">
              {dict.rating_label}
            </p>
          </motion.div>

          {/* Copy */}
          <motion.div {...fadeUp(0.05)}>
            <h2 className="text-2xl font-black tracking-tight text-white md:text-3xl">
              {dict.title_line1}{" "}
              <span className="text-[#d4a853]">{dict.title_line2}</span>
            </h2>
            <p className="mt-2 text-sm text-[#94a3b8] max-w-md mx-auto">
              {dict.subtitle}
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div {...fadeUp(0.1)}>
            <a
              href={REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#d4a853] px-6 py-3 text-sm font-semibold text-[#0a0a0a] shadow-lg shadow-[#d4a853]/20 transition-all duration-200 hover:bg-[#c49a48] hover:scale-[1.02] active:scale-[0.98]"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              {dict.cta}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
