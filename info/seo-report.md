# SEO Check — M M Detalhe Automóvel
_URL: https://mm-detalhe.vercel.app_
_Checked: 2026-03-26_

## /pt (Portuguese)

### ✅ Passing
- [x] Title: "M M Detalhe Automóvel | São Domingos de Rana" — specific, branded
- [x] Meta description: 152 chars — within 50-160 range, keyword-rich
- [x] Robots: "index, follow" — correct
- [x] OG title matches page title
- [x] OG description exists and matches meta description
- [x] OG type: "website"
- [x] OG locale: "pt_PT" — matches page language
- [x] Twitter card: "summary_large_image"
- [x] Twitter title and description present
- [x] JSON-LD exists, valid JSON, type "AutoRepair"
- [x] JSON-LD has name, telephone, address, image
- [x] HTML lang="pt" — correct
- [x] Exactly 1 `<h1>` on page
- [x] 0 broken images
- [x] Favicon loads
- [x] site.webmanifest referenced
- [x] Skip-to-content link present (accessibility)

### 🔴 Failing
- [ ] **Canonical URL points to localhost** — `http://localhost:3000/pt` instead of `https://mm-detalhe.vercel.app/pt`. The `NEXT_PUBLIC_SITE_URL` env var is not set on Vercel. **Fix: Add `NEXT_PUBLIC_SITE_URL=https://mm-detalhe.vercel.app` in Vercel project settings → Environment Variables, then redeploy.**
- [ ] **OG image URL points to localhost** — `http://localhost:3000/og-image.jpg`. Same root cause as canonical.
- [ ] **OG URL points to localhost** — `http://localhost:3000/pt`. Same root cause.
- [ ] **JSON-LD URL and image point to localhost** — Same root cause.
- [ ] **"Leave a Google Review" link has empty href** — The `googleReviews.cta` link goes nowhere. **Fix: Add Google review URL to the googleReviews section in both dicts.**

## /en (English)

### ✅ Passing
- [x] Title: "M M Detalhe Automóvel | Premium Auto Detailing in São Domingos de Rana" — specific, branded
- [x] Meta description: 151 chars — within range
- [x] Robots: "index, follow"
- [x] OG title, description, type, locale (en_US) — all correct
- [x] Twitter card: "summary_large_image" with title/description
- [x] JSON-LD: valid, type "AutoRepair", has name/telephone/address/image
- [x] HTML lang="en"
- [x] Exactly 1 `<h1>`
- [x] 0 broken images
- [x] Favicon and manifest present

### 🔴 Failing
- [ ] **Same localhost URL issue** — canonical, OG image, OG URL, JSON-LD all point to `http://localhost:3000`
- [ ] **Same empty Google Review link**

## ⚠️ Warnings
- [ ] `metadata.email` is empty — Schema.org LocalBusiness benefits from email field
- [ ] Google Maps iframe shows "Open in Maps" fallback link pointing to `about:invalid` — may be a CSP or embed URL issue on Vercel

## 📊 Summary
- 17 checks passed (per locale)
- 2 failing issues (localhost URLs, empty review link) — both affect both locales
- 2 warnings
- 0 broken images
- Both locales render correctly with proper lang attributes
