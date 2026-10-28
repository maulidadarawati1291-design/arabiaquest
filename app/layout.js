import {Baloo_2,Noto_Naskh_Arabic} from 'next/font/google';
import Link from 'next/link';
import './globals.css';
const ui=Baloo_2({subsets:['latin'],variable:'--ui'});
const ar=Noto_Naskh_Arabic({subsets:['arabic'],variable:'--ar'});
export const metadata={title:'Arabia Quest',description:'Belajar bahasa Arab interaktif untuk MI kelas V–VI'};
export default function Root({children}){
  return <html lang="id"><body className={ui.variable+' '+ar.variable}>
    <header className="nav"><Link href="/" className="logo">Arabia Quest</Link>
      <nav><Link href="/materi">Jelajah Materi</Link><Link href="/progres">Progres Saya</Link></nav></header>
    <main>{children}</main></body></html>;
}
