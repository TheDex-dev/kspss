import { getImagePath } from '../utils/imagePath';

export const newsData = {
    news: [
        {
            id: '1',
            title: 'New Environmental Initiative Launched',
            description: 'A groundbreaking environmental project kicks off in Sentosa.',
            content: `<article>
                <h2>New Environmental Initiative Launched</h2>
                <div class="news-meta">
                    <span class="date">January 15, 2024</span>
                    <span class="category">Environment</span>
                </div>
                <div class="news-content">
                    <p class="lead">Sentosa launches a groundbreaking environmental project aimed at reducing carbon emissions and promoting sustainable practices across the island.</p>
                    
                    <h3>Key Highlights:</h3>
                    <ul>
                        <li>Implementation of solar panels across major facilities</li>
                        <li>New waste management system</li>
                        <li>Green transportation initiatives</li>
                    </ul>
                    
                    <p>The initiative, which begins next month, will be implemented in phases over the next two years. Environmental experts predict this will reduce our carbon footprint by 30%.</p>
                    
                    <blockquote>
                        <p>"This is a significant step towards our goal of becoming a fully sustainable island by 2030," says Environmental Director.</p>
                    </blockquote>
                    
                    <div class="additional-info">
                        <h4>Get Involved</h4>
                        <p>For more information about the initiative and how to participate, visit our sustainability portal or contact our environmental office.</p>
                    </div>
                </div>
            </article>`,
            image: getImagePath('/images/bank.jpg'),
            date: '2024-01-15',
            category: 'Environment',
            length: '5 min read'
        },
        {
            id: '2',
            title: "Pelaksaanaan RAT Tutup Tahun Buku 2024",
            description: "Pengumuman hasil Rapat Anggota Tahunan Koperasi 2025.",
            content: `<article className="cooperative-news">
  <h1 style={{ fontSize: "24px", color: "#2c3e50", marginBottom: "16px" }}>
    Koperasi Syariah Sukses Gelar RAT 2024, Tetapkan Inovasi Digital dan Penguatan Transparansi
  </h1>

  <div className="news-meta" style={{ color: "#7f8c8d", marginBottom: "20px" }}>
    <span>Wonogiri, 17 Februari 2024</span>
  </div>

  <p style={{ lineHeight: 1.6 }}>
    Momentum sejarah tercatat bagi Koperasi Syariah Kerjo Lor saat berhasil menyelenggarakan Rapat Anggota Tahunan (RAT) 
    Tahun Buku 2024 yang berlangsung meriah pada Minggu (16/2/2024). Bertempat di Balai Desa Kerjo Lor, Kecamatan Ngadirojo, 
    agenda strategis ini dihadiri oleh puluhan anggota yang antusias menyambut transformasi koperasi.
  </p>

  <blockquote style={{
    borderLeft: "4px solid #27ae60",
    padding: "12px 20px",
    margin: "20px 0",
    backgroundColor: "#f9f9f9"
  }}>
    "Tahun 2025 akan menjadi era baru dimana kami akan mengimplementasikan sistem digital terintegrasi sekaligus menjaga 
    prinsip syariat dalam setiap transaksi," tegas Ketua Koperasi dalam presentasi utamanya.
  </blockquote>

  <p style={{ lineHeight: 1.6 }}>
    Dalam rapat yang berlangsung demokratis ini, anggota menyepakati tiga pilar utama pengembangan:
  </p>

  <ul style={{
    listStyleType: "disc",
    paddingLeft: "40px",
    marginBottom: "20px",
    lineHeight: 1.6
  }}>
    <li style={{ marginBottom: "8px" }}>
      <strong>Revolusi Transparansi:</strong> Implementasi portal real-time tracking keuangan dan audit terbuka
    </li>
    <li style={{ marginBottom: "8px" }}>
      <strong>Lompatan Digital:</strong> Pengembangan aplikasi mobile banking syariah dan platform e-commerce koperasi
    </li>
    <li style={{ marginBottom: "8px" }}>
      <strong>Ekosistem Pemberdayaan:</strong> Program literasi keuangan syariah dan inkubasi UMKM berbasis anggota
    </li>
  </ul>

  <p style={{ lineHeight: 1.6 }}>
    Rencana Anggaran Pendapatan dan Belanja Tahun 2025 yang disetujui mencakup alokasi 35% untuk pengembangan teknologi 
    dan 25% untuk program peningkatan kapasitas anggota. Acara ditutup dengan komitmen bersama untuk mempercepat 
    transformasi digital tanpa mengikis nilai-nilai kekeluargaan yang menjadi fondasi koperasi.
  </p>
</article>`,
            image: getImagePath('/images/news/RAT.jpg'),
            date: "2025-02-17",
            category: "Regulasi",
            length: "10 min read"
        },
        {
            id: '3',
            title: "Sentosa SPSS Launches New Website",
            description: "Sentosa SPSS unveils a new website to enhance user experience.",
            content: `<article>
  <h1 className="title">ULAZ MKU BMT Prima Sentosa Raih Penghargaan Tertinggi Bidang Akuntabilitas Zakat</h1>
    <p>
      Unit Layanan Zakat (ULAZ) MKU BMT Prima Sentosa kembali mencatatkan prestasi gemilang 
      dengan meraih predikat <strong>A+ (Sangat Tertib)</strong> dari Lembaga Amil Zakat Nasional 
      Keluarga Utama. Penghargaan ini diberikan sebagai apresiasi atas konsistensi lembaga 
      dalam menerapkan sistem pelaporan zakat yang transparan dan akuntabel.
    </p>

    <p>
      Piagam bernomor 08/A/KET/LAZMKU/II/2025 ini diserahkan langsung oleh Ketua Umum 
      LAZNAS Keluarga Utama, <em>H. Muhammad Ridwan, S.Pd</em>, dalam sebuah acara khusus 
      yang digelar di Bali pada 26 Syaban 1446 H. Penghargaan ini menandai tahun ketiga 
      berturut-turut ULAZ MKU BMT Prima Sentosa menerima pengakuan tertinggi di bidang 
      administrasi zakat.
    </p>

    <blockquote className="quote">
      "Predikat A+ ini merupakan bukti komitmen kami dalam membangun sistem pengelolaan 
      zakat berstandar nasional. Transparansi bukan sekadar slogan, tapi praktik nyata 
      yang kami implementasikan dalam setiap laporan keuangan," tegas H. Muhammad Ridwan 
      dalam sambutannya.
    </blockquote>

    <p>
      Direktur ULAZ MKU BMT Prima Sentosa mengungkapkan bahwa penghargaan ini akan 
      menjadi motivasi untuk terus meningkatkan kualitas layanan. "Kami berkomitmen 
      untuk menjadikan zakat sebagai instrumen strategis dalam membangun kesejahteraan 
      umat melalui program-program berkelanjutan," ujarnya.
    </p>
</article>`,
            image: getImagePath('/images/news/Piagam.jpg'),
            date: '2025-02-27',
            category: 'Komunitas',
            length: '19 min read'
        },
    ]
}
