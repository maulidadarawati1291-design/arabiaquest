'use client';
import {useEffect,useState} from 'react';
import Speak from './Speak';
import {save} from '@/lib/progress';
const shuffle=a=>[...a].sort(()=>Math.random()-.5);
export default function Quiz({slug,mode,words,pool}){
  const [qs,setQs]=useState([]),[i,setI]=useState(0),[pick,setPick]=useState(null),[score,setScore]=useState(0);
  const start=()=>{setQs(shuffle(words).map(a=>({a,o:shuffle([a,...shuffle(pool.filter(p=>p.id!==a.id)).slice(0,3)])})));setI(0);setPick(null);setScore(0)};
  useEffect(start,[]);
  const done=qs.length>0&&i>=qs.length;
  useEffect(()=>{if(done) save(slug,mode,score,qs.length)},[done]);
  if(!qs.length) return null;
  const title=mode==='arti'?'Pilih artinya':'Dengarkan dan tebak';
  if(done) return <section className="card"><h3>{title}</h3><p>Hasilmu: {score} dari {qs.length}. {score===qs.length?'Luar biasa!':'Ayo coba lagi, kamu pasti bisa!'}</p><button className="btn" onClick={start}>Ulangi</button></section>;
  const q=qs[i];
  const choose=o=>{if(pick)return;setPick(o);if(o.id===q.a.id)setScore(s=>s+1)};
  return <section className="card">
    <h3>{title} ({i+1}/{qs.length})</h3>
    {mode==='arti'?<p className="ar big" dir="rtl" lang="ar">{q.a.ar}</p>:null}
    <Speak text={q.a.ar}/>
    <div className="opts">{q.o.map(o=>{
      const st=!pick?'':o.id===q.a.id?'ok':o===pick?'no':'';
      return <button key={o.id} className={'opt '+st} onClick={()=>choose(o)} aria-label={o.id}>
        {mode==='arti'?o.id:<span className="emo">{o.e}</span>}{st==='ok'?' ✓':st==='no'?' ✗':''}</button>})}</div>
    {pick&&<p role="status">{pick.id===q.a.id?'Benar! ✓':`Belum tepat. Jawabannya: ${q.a.id}`}<br/><button className="btn" onClick={()=>{setI(i+1);setPick(null)}}>Lanjut</button></p>}
  </section>;
}
