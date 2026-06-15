// @demo-banner — legal disclaimer for SurgeX demo sites. Managed by the demo-safety
// rollout (scripts/demo-safety). Keep self-contained (no dict dependency) so it builds
// in every project regardless of dictionary shape.

const COPY: Record<string, { text: string; cta: string }> = {
  pt: {
    text: "SITE DE DEMONSTRAÇÃO — criado pela SurgeX. Não afiliado nem associado a este negócio. Conteúdo meramente ilustrativo.",
    cta: "Saber mais",
  },
  en: {
    text: "DEMONSTRATION SITE — built by SurgeX. Not affiliated with or endorsed by this business. Content shown is illustrative only.",
    cta: "Learn more",
  },
};

export default function DemoBanner({ lang }: { lang: string }) {
  const copy = COPY[lang] ?? COPY.en;

  return (
    <>
      {/* Reserves space so the fixed bar never covers footer content. */}
      <div aria-hidden className="h-20 shrink-0 sm:h-12" />
      <div
        role="note"
        aria-label="Demonstration site disclaimer"
        className="fixed inset-x-0 bottom-0 z-[2147483647] flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 border-t border-amber-600/60 bg-amber-400 px-4 py-2 text-center text-[11px] font-semibold leading-tight text-amber-950 sm:text-sm"
      >
        <span>{copy.text}</span>
        <a
          href="https://surgex.pt"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 whitespace-nowrap underline underline-offset-2 hover:text-black"
        >
          {copy.cta} →
        </a>
      </div>
    </>
  );
}
