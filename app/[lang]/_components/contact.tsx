"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

export default function Contact({
  dict,
}: {
  dict: {
    title_line1: string;
    title_line2: string;
    body: string;
    quote_cta: string;
    call_cta: string;
    phone: string;
    address: string;
    hours: string;
    instagram: string;
    whatsapp: string;
    map_link: string;
    map: { address: string; mapsEmbedUrl: string; mapTitle: string };
  };
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="bg-[#111111] px-6 py-16 md:px-8 md:py-24 xl:px-16 xl:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d4a853]">
            {dict.title_line1}
          </p>
          <h2 className="mt-2 text-4xl font-black tracking-tight text-white sm:text-5xl">
            {dict.title_line2}
          </h2>
        </motion.div>

        {/* Three-column layout */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Column 1 — Contact info */}
          <motion.div
            className="flex flex-col gap-5 rounded-2xl border border-white/8 bg-[#1a1a1a] p-6 lg:p-8"
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-sm leading-relaxed text-[#94a3b8]">{dict.body}</p>

            {/* Phone */}
            <a
              href={`tel:${dict.phone.replace(/\s/g, "")}`}
              className="group flex items-center gap-4 rounded-xl p-3 -mx-3 transition-colors hover:bg-[#d4a853]/5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#d4a853]/10 transition-colors group-hover:bg-[#d4a853]/20">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#d4a853]">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.1 3.4 2 2 0 0 1 3.08 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold text-white">{dict.phone}</div>
                <div className="text-xs text-[#94a3b8]/60">{dict.hours}</div>
              </div>
            </a>

            {/* Address */}
            <a
              href={dict.map_link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl p-3 -mx-3 transition-colors hover:bg-[#d4a853]/5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#d4a853]/10 transition-colors group-hover:bg-[#d4a853]/20">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#d4a853]">
                  <path d="M20 10c0 6-8 13-8 13s-8-7-8-13a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold text-white">{dict.address}</div>
              </div>
            </a>

            {/* Social links */}
            <div className="flex gap-3 pt-2">
              <a
                href={dict.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d4a853]/10 text-[#d4a853] transition-colors hover:bg-[#d4a853]/20"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
                </svg>
              </a>
              <a
                href={dict.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10 text-green-400 transition-colors hover:bg-green-500/20"
                aria-label="WhatsApp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Column 2 — Quote CTA card */}
          <motion.div
            className="relative overflow-hidden rounded-2xl border border-[#d4a853]/20"
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex h-full flex-col justify-between bg-[#1a1a1a] p-8 lg:p-10">
              <div>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d4a853]/10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#d4a853]">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">
                  {dict.quote_cta}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#94a3b8]">
                  {dict.body}
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={dict.whatsapp || `tel:${dict.phone.replace(/\s/g, "")}`}
                  target={dict.whatsapp ? "_blank" : undefined}
                  rel={dict.whatsapp ? "noopener noreferrer" : undefined}
                  className="w-full rounded-xl bg-[#d4a853] py-3.5 text-center text-sm font-semibold text-[#0a0a0a] shadow-lg shadow-[#d4a853]/20 transition-all hover:bg-[#c49a48] hover:scale-[1.02] active:scale-[0.98]"
                >
                  {dict.quote_cta}
                </a>
                <a
                  href={`tel:${dict.phone.replace(/\s/g, "")}`}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-transparent py-3.5 text-sm font-semibold text-white transition-all hover:border-[#d4a853]/50 hover:text-[#d4a853]"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.1 3.4 2 2 0 0 1 3.08 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z" />
                  </svg>
                  {dict.call_cta}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Column 3 — Map */}
          <motion.div
            className="overflow-hidden rounded-2xl border border-white/8"
            style={{ minHeight: "380px" }}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <iframe
              src={dict.map.mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px", display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={dict.map.mapTitle}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
