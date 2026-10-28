import Link from 'next/link';
import {themes} from '@/lib/data';
export const metadata={title:'Jelajah Materi'};
export default function Materi(){
  return <><h1>Jelajah Materi</h1><div className="grid">{themes.map(t=>
    <Link key={t.slug} href={'/tema/'+t.slug} className="card tile"><span className="emo">{t.icon}</span><h3>{t.title}</h3><p>{t.words.length} kata</p></Link>)}</div></>;
}
