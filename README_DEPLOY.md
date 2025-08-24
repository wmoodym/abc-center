# ABC Center v2.2.1 — Clean URLs

## Vercel Settings
- Framework Preset: **Other**
- Build Command: *(leave blank)*
- Output Directory: `/`
- Root Directory: folder that contains `vercel.json`

## Env Vars
- `STRIPE_SECRET_KEY`, `PRICE_PRO`, `OPENAI_API_KEY`
- Optional: `LEADS_WEBHOOK`, `OPENAI_MODEL`, `DOMAIN`

## Clean URLs
- Link to `/signup` (file is `signup.html`), `/billing` (`billing.html`), `/app` (`/app/app.html`)
- Catch-all rewrites ensure direct navigation works without 404.
