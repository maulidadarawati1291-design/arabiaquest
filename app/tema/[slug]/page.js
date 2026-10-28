import {notFound} from 'next/navigation';
import {themes,pool} from '@/lib/data';
import Speak from '@/components/Speak';
import Quiz from '@/components/Quiz';
import Match from '@/components/Match';
import Recorder from '@/components/Recorder';
export const generateStaticParams=()=>themes.map(t=>({slug:t.slug}));
export default function Tema({params}){
  const t=themes.find(x=>x.slug===params.slug);if(!t)notFound();
  return <><h1>{t.icon} {t.title}</h1>
    <h2>Kosakata</h2>
    <div className="grid">{t.words.map(x=><div className="card" key={x.id} style={{"--c":"#3A86FF"}}>
      <span className="emo">{x.e}</span><p className="ar big" dir="rtl" lang="ar">{x.ar}</p><p>{x.id}</p><Speak text={x.ar} name={x.id}/></div>)}</div>
    <h2>Latihan</h2>
    <Quiz slug={t.slug} mode="arti" words={t.words} pool={pool}/>
    <Quiz slug={t.slug} mode="dengar" words={t.words} pool={pool}/>
    <Match slug={t.slug} words={t.words}/>
    <Recorder words={t.words}/></>;
}
