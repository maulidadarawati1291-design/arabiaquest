// Kosakata contoh dari dokumen rancangan. WAJIB ditelaah guru/ahli bahasa Arab sebelum dipublikasikan.
const w=(ar,id,e)=>({ar,id,e});
export const themes=[
{slug:'anggota-tubuh',title:'Anggota Tubuh',icon:'🖐️',words:[w('رَأْسٌ','Kepala','🙂'),w('يَدٌ','Tangan','✋'),w('عَيْنٌ','Mata','👁️'),w('قَدَمٌ','Kaki','🦶')]},
{slug:'kebun-binatang',title:'Kebun Binatang',icon:'🦁',words:[w('أَسَدٌ','Singa','🦁'),w('فِيْلٌ','Gajah','🐘'),w('قِرْدٌ','Monyet','🐒')]},
{slug:'ruang-belajar',title:'Ruang Tamu & Ruang Belajar',icon:'🪑',words:[w('كُرْسِيٌّ','Kursi','🪑'),w('مَكْتَبٌ','Meja','🗄️'),w('كِتَابٌ','Buku','📘')]},
{slug:'perpustakaan',title:'Perpustakaan',icon:'📚',words:[w('كِتَابٌ','Buku','📖'),w('مَكْتَبَةٌ','Perpustakaan','🏛️'),w('قِرَاءَةٌ','Membaca','👓')]},
{slug:'kantin',title:'Kantin',icon:'🍞',words:[w('مَاءٌ','Air','💧'),w('خُبْزٌ','Roti','🍞'),w('أَرُزٌّ','Nasi','🍚')]},
{slug:'waktu',title:'Waktu dan Jam',icon:'⏰',words:[w('السَّاعَةُ','Jam','⏰'),w('السَّاعَةُ السَّابِعَةُ','Jam tujuh','🕖')]},
{slug:'suka-bahasa-arab',title:'Saya Suka Bahasa Arab',icon:'❤️',words:[w('أُحِبُّ','Saya suka','❤️'),w('اللُّغَةُ الْعَرَبِيَّةُ','Bahasa Arab','🔤')]},
{slug:'liburan',title:'Kegiatan Liburan',icon:'🏖️',words:[w('أَذْهَبُ','Saya pergi','🚶'),w('أَلْعَبُ','Saya bermain','⚽'),w('أَزُوْرُ','Saya mengunjungi','🏠')]},
{slug:'piknik',title:'Piknik',icon:'🧺',words:[w('حَدِيْقَةٌ','Taman','🌳'),w('أُسْرَةٌ','Keluarga','👨‍👩‍👧'),w('نَذْهَبُ','Kami pergi','🚌')]}
];
export const pool=[...new Map(themes.flatMap(t=>t.words).map(x=>[x.id,x])).values()];
