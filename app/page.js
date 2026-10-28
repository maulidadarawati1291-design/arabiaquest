import Link from 'next/link';
export default function Home(){
  return <section className="hero">
    <p className="ar huge" dir="rtl" lang="ar">مَرْحَبًا</p>
    <h1>Selamat datang di Arabia Quest</h1>
    <p>Dengar, lihat, tebak, dan kuasai kosakata bahasa Arab langkah demi langkah.</p>
    <Link className="btn" href="/materi">Mulai belajar</Link>
  </section>;
}
