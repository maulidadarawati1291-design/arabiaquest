'use client';
import {useEffect,useState} from 'react';
import {load} from '@/lib/progress';
import {themes} from '@/lib/data';
const M=[['arti','Pilih artinya'],['dengar','Dengarkan dan tebak'],['cocok','Cocokkan gambar']];
const st=r=>!r?'belum dicoba':'⭐'.repeat(r.score>=r.total?3:r.score/r.total>=.6?2:1)+` (${r.score}/${r.total})`;
export default function Progress(){
  const [d,setD]=useState({});useEffect(()=>setD(load()),[]);
  const stars=Object.values(d).reduce((s,r)=>s+(r.score>=r.total?3:r.score/r.total>=.6?2:1),0);
  return <><p className="bubble">Bintangmu: <b>{stars} ⭐</b></p><div className="grid">{themes.map((t,i)=>
    <div className="card" key={t.slug} style={{'--c':['#D46743','#BFE7EA','#E89B5B'][i%3]}}>
      <h3>{t.icon} {t.title}</h3>{M.map(([k,n])=><p key={k}>{n}: {st(d[t.slug+':'+k])}</p>)}</div>)}</div></>;
}
