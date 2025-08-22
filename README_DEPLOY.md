# ABC Center v2.1 — Ready to Sell

## 1) Deploy
- Upload this folder to Vercel (New Project → Import).
- Keep `index.html`, `vercel.json`, `sw.js`, and `site.webmanifest` at the **root**.

## 2) Environment variables (Vercel → Project → Settings → Environment Variables)
- `STRIPE_SECRET_KEY` = Your Stripe secret key (sk_live_... or sk_test_...)
- `PRICE_PRO` = Stripe Price ID for the Pro plan (e.g., price_123)
- `OPENAI_API_KEY` = Your OpenAI API key
- Optional: `OPENAI_MODEL` = e.g. `gpt-4o-mini`
- Optional: `LEADS_WEBHOOK` = Zapier/Make webhook URL to collect leads
- Optional: `DOMAIN` = e.g. `https://yourapp.vercel.app`

## 3) Test checklist
- Home `/` loads, anchors (Features/Reviews/Pricing/FAQ) work.
- `Get Started Free` → `/signup.html` saves account → redirects to `/app/app.html`.
- On `/app/app.html`, AI Assistant returns text (requires `OPENAI_API_KEY`).
- Pricing → **Upgrade** starts Stripe Checkout (requires Stripe env vars).
- `/billing.html` → enter email of a paying user → opens Stripe Customer Portal.
- PWA: Install prompt available; `/app/app.html` works offline after first load.

## 4) Go Live
- Switch Stripe keys to live mode and use live `PRICE_PRO`.
- Update Privacy/Terms with your legal text.
- Add custom domain in Vercel (Project → Settings → Domains).
