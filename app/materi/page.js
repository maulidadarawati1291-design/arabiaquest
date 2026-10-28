import Link from 'next/link';
import {themes} from '@/lib/data';
export const metadata={title:'Jelajah Materi'};
const C=['#3A86FF','#FF5D8F','#FFB703','#2EC4B6','#8338EC','#FB5607'];
export default function Materi(){
  return <><h1>🗺️ Pilih petualanganmu</h1><div className="grid">{themes.map((t,i)=>
    <Link key={t.slug} href={'/tema/'+t.slug} className="card tile" style={{'--c':C[i%6]}}><span className="emo">{t.icon}</span><h3>{t.title}</h3><p>{t.words.length} kata</p></Link>)}</div></>;
}
