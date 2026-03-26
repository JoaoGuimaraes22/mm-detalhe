# Audit Report — M M Detalhe Automóvel
_Generated: 2026-03-26_

## 🔴 Critical (must fix before launch)

- [ ] `metadata.email` is empty in both EN and PT — no email for SEO/schema. Either add a real email or remove the field
- [ ] Years experience mismatch: EN says "8+" everywhere (hero, statsCounters, about), PT says "5+" — must be consistent. Verify real number with business
- [ ] Review count mismatch: EN has 8 reviews, PT has 6 reviews — should be identical set across both languages
- [ ] Pricing not verified — €35/€85/€250 are fabricated estimates. Verify with Bruno before launch
- [ ] Stats "2000+ Cars Detailed" (statsCounters) is unverified/fabricated — verify or remove
- [ ] FAQ answers are AI-generated — verify accuracy with business owner (especially service areas, ceramic coating duration "2+ years" EN vs "6-12 months" PT)

## 🟡 Warning (should verify with client)

- [ ] About section text is AI-generated — describes Bruno and the business but needs verification
- [ ] og-image.jpg is 128KB — should be real branded image (1200x630), currently likely AI-generated
- [ ] Ceramic coating protection duration differs: EN says "2-year protection" (pricing) and "2+ years" (FAQ), PT says "até 12 meses" (pricing) and "6 a 12 meses" (FAQ) — conflicting claims
- [ ] Premium Detail features differ between EN and PT: EN has "Engine bay clean", PT has "Polimento de um passo" + "Tratamento dos plásticos" + "Ambientador premium" (6 features vs 5 in EN)
- [ ] Service icons differ between EN and PT (EN: ✨💎🔄🪑 vs PT: 🧹✨💎🧼) — should match
- [ ] `hero/hero-video.mp4` is copied from the mechanic project — replace with auto detailing video

## 🟢 Info (nice to have)

- [ ] No Facebook URL set in any section — add if business has a Facebook page
- [ ] `site.webmanifest` should be updated with correct business name and theme color
- [ ] Copyright says "© 2026" — verify year
- [ ] `hero/hero-bg.webp` exists but unused (hero now uses video) — can remove to save space

## 📊 Summary
- 6 critical issues
- 6 warnings
- 4 info items
- 0 images missing (all dict paths resolve to existing files)
- 24 images present (6 services + 8 before-after + 8 gallery + 1 about + 1 hero-bg)

## Top 3 to fix first
1. **Sync EN/PT numbers** — years experience (8 vs 5), review count (8 vs 6), ceramic duration, features
2. **Verify pricing** with Bruno — €35/€85/€250 are estimates
3. **Replace hero video** with auto detailing footage
