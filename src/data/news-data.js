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
            title: "New Banking Regulations 2024",
            description: "Latest updates on banking regulations and their impact on financial services.",
            content: "",
            image: getImagePath('/images/bank.jpg'),
            date: "2024-01-15",
            category: "Regulations",
            length: "5 min read"
        },
        {
            id: '3',
            title: "Digital Banking Transformation",
            description: "How digital transformation is reshaping the banking industry.",
            content: "",
            image: getImagePath('/images/big-bank.jpg'),
            date: "2024-01-10",
            category: "Technology",
            length: "5 min read"
        },
        {
            id: '4',
            title: "Sustainable Finance Initiative",
            description: "New sustainable finance programs and their environmental impact.",
            content: "",
            image: getImagePath('/images/suitedman.jpg'),
            date: "2024-01-05",
            category: "Sustainability",
            length: "5 min read"
        },
        {
            id: '5',
            title: "Rapat RAT Koperasi 2025",
            description: "Pengumuman hasil Rapat Anggota Tahunan Koperasi 2025.",
            content: `<article>
      <h2>Hasil RAT Koperasi 2025 Disetujui oleh Anggota</h2>
      <div className="news-meta">
        <span className="date">15 Januari 2024</span>
        <span className="category">Koperasi</span>
      </div>
      <div className="news-content">
        <p className="lead">
          Hasil Rapat Anggota Tahunan (RAT) Koperasi 2025 telah resmi disetujui oleh seluruh anggota.
        </p>
        <p>
          Pada pertemuan tersebut, anggota koperasi menyetujui sejumlah inisiatif strategis yang akan membawa
          koperasi ke arah yang lebih modern dan responsif terhadap kebutuhan anggotanya. Beberapa poin penting
          yang disetujui meliputi peningkatan transparansi, inovasi digital, serta pemberdayaan ekonomi anggota.
        </p>
        <blockquote>
          <p>
            "Keputusan ini merupakan langkah maju dalam mengoptimalkan kinerja koperasi dan meningkatkan kesejahteraan
            anggota," ujar Ketua Koperasi.
          </p>
        </blockquote>
        <h3>Rencana Implementasi</h3>
        <ul>
          <li>Digitalisasi sistem administrasi dan manajemen koperasi</li>
          <li>Peningkatan fasilitas dan pelayanan bagi anggota</li>
          <li>Program pelatihan dan pengembangan kapasitas anggota</li>
        </ul>
        <p>
          Implementasi hasil RAT ini dijadwalkan dimulai segera dan akan dilaksanakan secara bertahap selama tahun 2025.
        </p>
      </div>
    </article>`,
            image: getImagePath('/images/news/RAT.jpg'),
            date: "2025-02-17",
            category: "Regulasi",
            length: "10 min read"
        }
    ]
}
