'use client';
import {useEffect,useState} from 'react';
import {save} from '@/lib/progress';
const sh=a=>[...a].sort(()=>Math.random()-.5);
export default function Match({slug,words}){
  const [cards,setCards]=useState([]),[sel,setSel]=useState(null),[done,setDone]=useState([]),[miss,setMiss]=useState(0),[msg,setMsg]=useState('');
  const start=()=>{const ws=sh(words).slice(0,4);setCards(sh(ws.flatMap(w=>[{id:w.id,t:'ar',l:w.ar},{id:w.id,t:'id',l:w.e+' '+w.id}])));setSel(null);setDone([]);setMiss(0);setMsg('')};
  useEffect(start,[]);
  const n=cards.length/2,fin=n>0&&done.length===n;
  useEffect(()=>{if(fin)save(slug,'cocok',Math.max(1,n-miss),n)},[fin]);
  const tap=(c,i)=>{
    if(done.includes(c.id)||sel===i)return;
    if(sel===null){setSel(i);return}
    const p=cards[sel];
    if(p.id===c.id&&p.t!==c.t){setDone([...done,c.id]);setMsg('Cocok! ✓')}else{setMiss(miss+1);setMsg('Belum cocok, coba lagi ✗')}
    setSel(null);
  };
  return <section className="card" style={{'--c':'#FF5D8F'}}>
    <h3>Cocokkan kata dan gambar</h3>
    <div className="opts">{cards.map((c,i)=><button key={i} className={'opt'+(done.includes(c.id)?' ok':sel===i?' pick':'')} onClick={()=>tap(c,i)}>
      {c.t==='ar'?<span className="ar big" dir="rtl" lang="ar">{c.l}</span>:c.l}{done.includes(c.id)?' ✓':''}</button>)}</div>
    <p role="status">{fin?`Hebat! Semua cocok, salah ${miss} kali. ⭐`:msg}</p>
    {fin&&<button className="btn" onClick={start}>Main lagi</button>}
  </section>;
}
