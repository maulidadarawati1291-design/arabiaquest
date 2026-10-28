'use client';
const key=t=>t.toLowerCase().replace(/\s+/g,'-');
// Cadangan jika belum ada rekaman: bacaan waqf (tanpa akhiran i'rab) agar suara mesin lebih wajar.
const waqf=s=>s.replace(/ً/g,'َ').replace(/[ٌٍ]/g,'').replace(/[َُِ]$/,'').replace(/َة$/,'َه');
export function playModel(text,name){
  try{speechSynthesis.cancel()}catch{}
  const tts=()=>{if(!('speechSynthesis' in window))return alert('Perangkat ini belum mendukung suara.');
    const u=new SpeechSynthesisUtterance(waqf(text));u.lang='ar-SA';u.rate=.7;speechSynthesis.speak(u)};
  const a=new Audio('/audio/'+key(name)+'.webm');
  a.play().catch(()=>{const b=new Audio('/audio/'+key(name)+'.mp3');b.play().catch(tts)});
}
export default function Speak({text,name}){
  return <button className="btn ghost" onClick={()=>playModel(text,name)} aria-label="Putar suara">🔊 Dengar</button>;
}
