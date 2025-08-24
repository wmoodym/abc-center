export const config={runtime:'edge'};
export default async function handler(req){
  if(req.method!=='POST') return new Response('Method Not Allowed',{status:405});
  const apiKey=process.env.OPENAI_API_KEY;
  if(!apiKey) return new Response(JSON.stringify({error:'Missing OPENAI_API_KEY'}),{status:500,headers:{'content-type':'application/json'}});
  let body={}; try{body=await req.json()}catch{};
  const messages=(body&&body.messages)||[{role:'user',content:'Hello'}];
  const model=process.env.OPENAI_MODEL||'gpt-4o-mini';
  const resp=await fetch('https://api.openai.com/v1/chat/completions',{method:'POST',headers:{Authorization:`Bearer ${apiKey}`,'Content-Type':'application/json'},body:JSON.stringify({model,messages,temperature:0.7,max_tokens:600})});
  const data=await resp.json();
  if(data.error) return new Response(JSON.stringify({error:data.error.message}),{status:500,headers:{'content-type':'application/json'}});
  const text=(data.choices&&data.choices[0]&&data.choices[0].message&&data.choices[0].message.content)||'';
  return new Response(JSON.stringify({text}),{status:200,headers:{'content-type':'application/json'}});
}