import Link from 'next/link';
const M=[['/materi','🗺️','Jelajah Materi','#D46743'],['/kamus','📖','Kamus Visual','#BFE7EA'],['/progres','⭐','Progres Saya','#E89B5B'],['/guru','🎙️','Ruang Guru','#D46743']];
export default function Home(){return <>
  <section className="hero"><div className="bubble"><p className="ar huge" dir="rtl" lang="ar">مَرْحَبًا</p>
    <h1>Halo! Ayo belajar bahasa Arab!</h1><Link className="btn" href="/materi">Mulai petualangan</Link></div>
    <div className="mascot" aria-hidden="true">🦉</div></section>
  <div className="grid">{M.map(([h,e,t,c])=><Link key={h} href={h} className="card tile" style={{'--c':c}}><span className="emo">{e}</span><h3>{t}</h3></Link>)}</div></>}
