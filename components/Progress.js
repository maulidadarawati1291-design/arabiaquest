'use client';
import {useEffect,useState} from 'react';
import {load} from '@/lib/progress';
import {themes} from '@/lib/data';
export default function Progress(){
  const [d,setD]=useState({});useEffect(()=>setD(load()),[]);
  return <div className="grid">{themes.map(t=>{const a=d[t.slug+':arti'],b=d[t.slug+':dengar'];
    return <div className="card" key={t.slug}><h3>{t.icon} {t.title}</h3>
    <p>Pilih artinya: {a?`${a.score}/${a.total}`:'belum dicoba'}</p><p>Dengarkan dan tebak: {b?`${b.score}/${b.total}`:'belum dicoba'}</p></div>})}</div>;
}
