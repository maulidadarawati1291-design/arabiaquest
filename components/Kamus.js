'use client';
import {useState} from 'react';
import {pool} from '@/lib/data';
import Speak from './Speak';
export default function Kamus(){
  const [q,setQ]=useState('');const r=pool.filter(x=>x.id.toLowerCase().includes(q.toLowerCase())||x.ar.includes(q));
  return <><input className="search" placeholder="Cari kata (Indonesia / Arab)…" value={q} onChange={e=>setQ(e.target.value)}/>
    <div className="grid">{r.map((x,i)=><div className="card" key={x.id} style={{'--c':C[i%C.length]}}><span className="emo">{x.e}</span>
      <p className="ar big" dir="rtl" lang="ar">{x.ar}</p><p>{x.id}</p><Speak text={x.ar} name={x.id}/></div>)}</div>
    {!r.length&&<p>Kata tidak ditemukan. Coba ketik kata lain ya.</p>}</>;
}
const C=['#D46743','#BFE7EA','#E89B5B'];
