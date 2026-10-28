import {Fredoka,Noto_Naskh_Arabic} from 'next/font/google';
import Link from 'next/link';
import './globals.css';
const ui=Fredoka({subsets:['latin'],variable:'--ui'});
const ar=Noto_Naskh_Arabic({subsets:['arabic'],variable:'--ar'});
export const metadata={title:'Arabia Quest',description:'Belajar bahasa Arab seru untuk kelas V–VI MI'};
export default function Root({children}){
  return <html lang="id"><body className={ui.variable+' '+ar.variable}>
    <header className="nav"><Link href="/" className="logo">🦉 Arabia Quest</Link>
      <nav><Link href="/materi">Materi</Link><Link href="/kamus">Kamus</Link><Link href="/progres">Progres</Link><Link href="/guru">Guru</Link></nav></header>
    <main>{children}</main></body></html>;
}
