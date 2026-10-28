'use client';
export default function Speak({text}){
  const go=()=>{
    if(!('speechSynthesis' in window)) return alert('Perangkat ini belum mendukung suara.');
    speechSynthesis.cancel();
    const u=new SpeechSynthesisUtterance(text);u.lang='ar-SA';u.rate=.8;speechSynthesis.speak(u);
  };
  return <button className="btn ghost" onClick={go} aria-label="Putar ulang suara">🔊 Dengar</button>;
}
