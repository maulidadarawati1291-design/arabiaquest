import Link from 'next/link';
import {themes} from '@/lib/data';
export const metadata={title:'Jelajah Materi'};
const C=['#D46743','#BFE7EA','#E89B5B'];
export default function Materi(){
  return <><h1>🗺️ Pilih petualanganmu</h1><div className="grid">{themes.map((t,i)=>
    <Link key={t.slug} href={'/tema/'+t.slug} className="card tile" style={{'--c':C[i%C.length]}}><span className="emo">{t.icon}</span><h3>{t.title}</h3><p>{t.words.length} kata</p></Link>)}</div></>;
}
