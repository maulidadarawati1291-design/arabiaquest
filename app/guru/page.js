import Recorder from '@/components/Recorder';
export const metadata={title:'Ruang Guru'};
export default function P(){return <><h1>🎙️ Ruang Guru</h1>
  <p className="bubble">Rekam pelafalan yang benar, simpan filenya, lalu taruh di folder <b>public/audio</b> pada proyek (nama file sudah otomatis). Gunakan Chrome. Setelah git push, kata itu akan memakai suaramu, bukan suara mesin.</p><Recorder teacher/></>}
