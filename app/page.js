import Link from 'next/link';
const M=[['/materi','🗺️','Jelajah Materi','#3A86FF'],['/kamus','📖','Kamus Visual','#FF5D8F'],['/progres','⭐','Progres Saya','#FFB703'],['/guru','🎙️','Ruang Guru','#2EC4B6']];
export default function Home(){return <>
  <section className="hero"><div className="bubble"><p className="ar huge" dir="rtl" lang="ar">مَرْحَبًا</p>
    <h1>Halo! Ayo belajar bahasa Arab!</h1><Link className="btn" href="/materi">Mulai petualangan</Link></div>
    <div className="mascot" aria-hidden="true">🦉</div></section>
  <div className="grid">{M.map(([h,e,t,c])=><Link key={h} href={h} className="card tile" style={{'--c':c}}><span className="emo">{e}</span><h3>{t}</h3></Link>)}</div></>}
