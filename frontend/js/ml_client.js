// Lightweight ML client that sends circuit JSON to the local Python backend for suggestions.
const API_BASE = 'http://127.0.0.1:8000'; // localhost-only per rules
export async function suggest(circuitJson){
  try{
    const res = await fetch(API_BASE + '/suggest_components',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(circuitJson)});
    return await res.json();
  }catch(e){ console.warn('ML suggestion failed',e); return {error:'unreachable'}; }
}
