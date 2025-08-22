export const config={runtime:'edge'};
export default async function handler(req){
  if(req.method!=='POST') return new Response('Method Not Allowed',{status:405});
  let body={}; try{body=await req.json()}catch{}
  const priceId=body.priceId||(process.env.PRICE_PRO||'');
  const email=body.customer_email||'';
  const secret=process.env.STRIPE_SECRET_KEY;
  const origin=process.env.DOMAIN||(new URL(req.url)).origin;
  if(!secret||!priceId){
    return new Response(JSON.stringify({error:'Missing STRIPE_SECRET_KEY or PRICE_PRO'}),{status:500,headers:{'content-type':'application/json'}});
  }
  const p=new URLSearchParams();
  p.set('mode','subscription');
  p.set('line_items[0][price]',priceId);
  p.set('line_items[0][quantity]','1');
  p.set('success_url',`${origin}/success.html`);
  p.set('cancel_url',`${origin}/cancel.html`);
  if(email) p.set('customer_email',email);
  const resp=await fetch('https://api.stripe.com/v1/checkout/sessions',{
    method:'POST',
    headers:{Authorization:`Bearer ${secret}`,'Content-Type':'application/x-www-form-urlencoded'},
    body:p
  });
  const data=await resp.json();
  return new Response(JSON.stringify(data),{status:resp.status,headers:{'content-type':'application/json'}});
}