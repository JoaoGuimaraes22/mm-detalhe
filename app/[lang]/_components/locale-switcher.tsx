"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n, type Locale } from "@/i18n-config";

export default function LocaleSwitcher() {
  const pathname = usePathname();

  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="flex gap-2">
      {i18n.locales.map((locale) => (
        <Link
          key={locale}
          href={redirectedPathname(locale)}
          className="rounded-full border border-solid border-black/8 px-3 py-1 text-sm font-medium transition-colors hover:bg-black/4 dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
