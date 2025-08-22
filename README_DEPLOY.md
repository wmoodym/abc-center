# ABC Center v2.2 — Full

## Deploy (Vercel)
- New Project → Import this folder (keep `index.html`, `sw.js`, `site.webmanifest`, `vercel.json` at root).
- Settings → Build & Development:
  - Framework Preset: **Other**
  - Build Command: *(empty)*
  - Output Directory: **/**
- Add Environment Variables:
  - `STRIPE_SECRET_KEY` (sk_live_* or sk_test_*)
  - `PRICE_PRO` (price_* id)
  - `OPENAI_API_KEY`
  - Optional: `OPENAI_MODEL` (e.g., gpt-4o-mini), `LEADS_WEBHOOK`, `DOMAIN`

## Test
- `/` loads; Pricing → **Upgrade** opens Stripe
- `/signup.html` → creates free account → redirects to `/app/app.html`
- `/app/app.html` → AI Assistant works with OpenAI key
- `/billing.html` → email → opens Stripe portal
- Offline: after first visit, `/app/app.html` opens offline (AI/Stripe need network)

## Notes
- `success.html` flips local plan to **pro** on this device (demo only). For production entitlements, add a Stripe webhook + persistent user store.
