export const config = { runtime: 'edge' };
export default async function handler(req) {
  if (req.method !== 'POST') return new Response('Method Not Allowed', { status: 405 });
  let body = {}; try { body = await req.json(); } catch {}
  const priceId = body.priceId || (process.env.PRICE_PRO || '');
  const customer_email = body.customer_email || '';
  const secret = process.env.STRIPE_SECRET_KEY;
  const origin = process.env.DOMAIN || (new URL(req.url)).origin;
  if (!secret || !priceId) {
    return new Response(JSON.stringify({ error: 'Missing STRIPE_SECRET_KEY or PRICE_PRO' }), { status: 500, headers: { 'content-type': 'application/json' } });
  }
  const params = new URLSearchParams();
  params.set('mode', 'subscription');
  params.set('line_items[0][price]', priceId);
  params.set('line_items[0][quantity]', '1');
  params.set('success_url', `${origin}/success.html`);
  params.set('cancel_url', `${origin}/cancel.html`);
  if (customer_email) params.set('customer_email', customer_email);

  const resp = await fetch('https://api.stripe.com/v1/checkout/sessions', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${secret}`, 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params
  });
  const data = await resp.json();
  return new Response(JSON.stringify(data), { status: resp.status, headers: { 'content-type': 'application/json' } });
}
