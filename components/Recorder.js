'use client';
import {useRef,useState} from 'react';
import {pool} from '@/lib/data';
import {playModel} from './Speak';
const key=t=>t.toLowerCase().replace(/\s+/g,'-');
export default function Recorder({teacher,words=pool}){
  const [w,setW]=useState(words[0]),[url,setUrl]=useState(''),[rec,setRec]=useState(false),[err,setErr]=useState('');const mr=useRef();
  const start=async()=>{try{
    const s=await navigator.mediaDevices.getUserMedia({audio:true}),m=new MediaRecorder(s),ch=[];
    m.ondataavailable=e=>ch.push(e.data);
    m.onstop=()=>{s.getTracks().forEach(t=>t.stop());setUrl(URL.createObjectURL(new Blob(ch,{type:m.mimeType})))};
    m.start();mr.current=m;setRec(true);setErr('');
  }catch{setErr('Mikrofon belum bisa dipakai. Tidak apa-apa: dengarkan contoh lalu tirukan bersama gurumu.')}};
  const stop=()=>{mr.current?.stop();setRec(false)};
  return <section className="card" style={{'--c':'#2EC4B6'}}>
    <h3>{teacher?'Rekam suara model (guru)':'🎙️ Rekam Suaraku'}</h3>
    <select value={w.id} onChange={e=>{setW(words.find(x=>x.id===e.target.value));setUrl('')}} aria-label="Pilih kata">
      {words.map(x=><option key={x.id} value={x.id}>{x.id}</option>)}</select>
    <p className="ar big" dir="rtl" lang="ar">{w.ar}</p>
    <button className="btn ghost" onClick={()=>playModel(w.ar,w.id)}>🔊 Dengar contoh</button>{' '}
    {!rec?<button className="btn" onClick={start}>⏺ Rekam</button>:<button className="btn" onClick={stop}>⏹ Berhenti</button>}
    {err&&<p role="alert">{err}</p>}
    {url&&<p><audio controls src={url}/><br/>{teacher?<a className="btn" href={url} download={key(w.id)+'.webm'}>⬇ Simpan {key(w.id)}.webm</a>:'Dengarkan rekamanmu, lalu bandingkan dengan contoh.'}</p>}
  </section>;
}
