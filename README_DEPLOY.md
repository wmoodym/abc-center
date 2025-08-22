# ABC Center — Ready to Sell v1.9 (All‑in‑One)

## Deploy to Vercel
1) Unzip this folder → Vercel → New Project → Import → drag THIS inner folder (must contain index.html + vercel.json).  
2) Project → Settings → Environment Variables:
   - `STRIPE_SECRET_KEY` (test key first, then live)
   - `PRICE_PRO` (your Stripe Price ID, e.g., price_123...)
   - optional `LEADS_WEBHOOK` (Zapier/Make)
3) Build & Output: Framework Preset = Other, Build Command = (empty), Output Directory = `/`.  
4) Redeploy.

## Test
- / (home), /signup.html, /app/app.html all load.
- Pricing → **Upgrade** opens Stripe Checkout.
- Lead form submits (Network → 200 ok).
- Mobile signup stays on your domain (relative redirect).

## Stripe: Customer Portal
- Use /billing.html to open the Stripe customer portal. It looks up a Stripe customer by **email** and opens the portal.  
- Works after the customer has completed Checkout (so a customer exists).

## Go live
- Switch Stripe keys to live mode; replace `PRICE_PRO` with live Price ID; redeploy.
- Replace Privacy/Terms text with counsel‑approved content. Update support email address.
