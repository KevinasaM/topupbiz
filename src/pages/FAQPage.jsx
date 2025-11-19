import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const CATEGORIES = {
  general: 'Umum',
  account: 'Akun & Layanan',
  payment: 'Pembayaran',
  support: 'Dukungan'
}

const faqs = [
  {
    category: 'general',
    question: "Apa itu TOPAPPBIZ Digital?",
    answer: "TOPAPPBIZ Digital adalah layanan yang menyediakan akun premium untuk berbagai aplikasi dan platform populer dengan harga terjangkau."
  },
  {
    category: 'general',
    question: "Mengapa harus memilih TOPAPPBIZ Digital?",
    answer: "TOPAPPBIZ Digital menawarkan keunggulan berupa: (1) Harga kompetitif dengan garansi kepuasan, (2) Dukungan pelanggan 24/7, (3) Proses aktivasi cepat dalam 5-30 menit, (4) Sistem monitoring dan maintain berkala, (5) Garansi penggantian jika terjadi masalah, dan (6) Pembayaran aman dan terpercaya."
  },
  {
    category: 'account',
    question: "Bagaimana cara membeli akun premium?",
    answer: "Proses pembelian sangat mudah: (1) Pilih layanan yang diinginkan di halaman Layanan, (2) Klik tombol Order atau hubungi kami via WhatsApp, (3) Lakukan pembayaran melalui metode yang tersedia, (4) Terima akses akun premium Anda dalam 5-30 menit. Detail lengkap dapat dilihat di halaman Cara Pemesanan."
  },
  {
    category: 'account',
    question: "Apakah akun premium digunakan bersama atau pribadi?",
    answer: "Kami menyediakan dua jenis akun: (1) Akun Private: akses eksklusif untuk 1 pengguna, (2) Akun Sharing: akses untuk 2-4 pengguna dengan harga lebih ekonomis. Setiap tipe akun dijelaskan secara detail di halaman produk untuk membantu Anda memilih yang paling sesuai."
  },
  {
    category: 'account',
    question: "Berapa lama masa aktif akun premium?",
    answer: "Kami menawarkan berbagai pilihan durasi mulai dari 1 bulan hingga 1 tahun. Setiap akun memiliki jaminan garansi selama masa aktif. Anda akan menerima notifikasi sebelum masa aktif berakhir dan mendapat prioritas perpanjangan dengan harga khusus."
  },
    {
    category: 'payment',
    question: "Apa saja metode pembayaran yang tersedia?",
    answer: "Kami menerima berbagai metode pembayaran untuk kemudahan Anda: (1) E-wallet: GoPay, OVO, DANA, LinkAja, (2) Virtual Account Bank: BCA, Mandiri, BNI, BRI, (3) QRIS untuk semua e-wallet, (4) Transfer Bank Digital: Seabank, Jago, dll. Semua transaksi dijamin aman dan terverifikasi."
  },
  {
    category: 'support',
    question: "Apa yang terjadi jika akun bermasalah?",
    answer: "Kami memiliki prosedur penanganan masalah yang cepat: (1) Laporan masalah diterima 24/7, (2) Penanganan prioritas dalam 5-30 menit, (3) Pergantian akun jika diperlukan, (4) Garansi kepuasan penuh. Tim teknis kami siap membantu hingga masalah teratasi."
  },
  {
    category: 'account',
    question: "Bagaimana kebijakan penggantian akun?",
    answer: "Kami memberikan garansi penggantian akun dengan syarat: (1) Masih dalam masa aktif, (2) Penggunaan sesuai ketentuan, (3) Laporan masalah terdokumentasi. Proses penggantian dilakukan dalam 24 jam dengan akun baru yang setara atau lebih baik."
  },
  {
    category: 'account',
    question: "Dapatkah saya membatalkan langganan saya?",
    answer: "Ya, Anda dapat membatalkan langganan Anda namun hanya saat sebelum anda menggunakan akun layanan kami (login akun). Harap diperhatikan bahwa pengembalian dana tunduk pada kebijakan pengembalian dana kami, yang dapat Anda temukan di Ketentuan Layanan kami."
  },
  {
    category: 'general',
    question: "Apakah layanan Anda legal dan aman?",
    answer: "Ya, TOPAPPBIZ Digital beroperasi secara legal dan aman: (1) Terdaftar sebagai bisnis resmi, (2) Menggunakan sistem pembayaran terverifikasi, (3) Mematuhi regulasi privasi data dengan serius, (4) Memiliki perjanjian resmi dengan penyedia layanan, (5) Memberikan invoice resmi untuk setiap transaksi."
  },
  {
    category: 'payment',
    question: "Apakah ada biaya tambahan tersembunyi?",
    answer: "Tidak ada biaya tersembunyi. Harga yang tercantum sudah termasuk: (1) Biaya layanan penuh, (2) Dukungan teknis 24/7, (3) Garansi selama masa aktif, (4) Panduan penggunaan lengkap. Kami menerapkan transparansi penuh dalam pricing."
  },
  {
    category: 'general',
    question: "Bagaimana dengan keamanan data pelanggan?",
    answer: "Kami menerapkan standar keamanan data tertinggi: (1) Enkripsi data end-to-end, (2) Sistem pembayaran tersertifikasi, (3) Kebijakan privasi ketat, (4) Penyimpanan data terenkripsi, (5) Akses terbatas hanya untuk personel terotorisasi. Data Anda sepenuhnya aman bersama kami."
  }
]

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState('general')
  const [openIndex, setOpenIndex] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen mt-5">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Pusat Bantuan
          </h1>
          <p className="text-xl text-center text-blue-100 mb-8">
            Temukan jawaban untuk pertanyaan umum tentang layanan TOPAPPBIZ Digital
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Cari pertanyaan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 rounded-full text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg"
            />
            <svg className="w-6 h-6 absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-2 rounded-full transition ${
              activeCategory === 'all' 
                ? 'bg-blue-900 text-white shadow-lg transform scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Semua
          </button>
          {Object.entries(CATEGORIES).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-2 rounded-full transition ${
                activeCategory === key
                  ? 'bg-blue-900 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between gap-4"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                <span className={`text-blue-600 transition-transform duration-200 ${
                  openIndex === index ? 'transform rotate-180' : ''
                }`}>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div className={`transition-all duration-200 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-800 p-8 text-white shadow-xl">
            <h2 className="text-2xl font-bold mb-2">Tidak menemukan yang Anda cari?</h2>
            <p className="text-blue-100 mb-6">
              Tim support kami siap membantu Anda 24/7
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-900 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-md"
              >
                Hubungi Kami
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <a
                href={`https://wa.me/6285600601619`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-colors shadow-md"
              >
                Chat WhatsApp
                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-6.627-5.373-12-12-12zm.615 18.31h-.045c-1.037-.038-2.06-.3-2.995-.82l-3.075.81.825-3.015c-.575-.965-.865-2.025-.865-3.13 0-3.585 2.915-6.5 6.5-6.5s6.5 2.915 6.5 6.5-2.915 6.5-6.5 6.5z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQPage