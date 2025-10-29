// ...existing code...
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const STEPS = [
  {
    id: 1,
    title: 'Pilih Layanan',
    description:
      'Jelajahi halaman layanan kami dan pilih akun premium yang Anda butuhkan. Gunakan fitur Search untuk menemukan layanan dengan cepat.',
  },
  {
    id: 2,
    title: 'Konfirmasi Pesanan',
    description:
      'Klik layanan, pilih durasi (Harian/Mingguan/Bulanan/Tahunan) lalu pilih "Order Via WhatsApp" untuk menghubungi admin.',
  },
  {
    id: 3,
    title: 'Pembayaran',
    description:
      'Admin akan mengirimkan instruksi pembayaran (rekening, QR atau e-wallet). Lakukan pembayaran sesuai metode yang disepakati.',
  },
  {
    id: 4,
    title: 'Verifikasi & Kirim Akun',
    description:
      'Setelah pembayaran terkonfirmasi, admin akan menyiapkan dan mengirim detail akun ke WhatsApp Anda. Garansi dan dukungan tersedia jika diperlukan.',
  },
]

const FAQS = [
  {
    q: 'Apakah akun yang dijual aman?',
    a: 'Ya. Semua akun diperiksa sebelum dikirim dan kami menyediakan garansi jika ada masalah pada akses dalam periode garansi.',
  },
  {
    q: 'Berapa lama proses pengiriman akun?',
    a: 'Biasanya 5–30 menit setelah konfirmasi pembayaran. Untuk paket tertentu bisa lebih cepat atau membutuhkan verifikasi tambahan.',
  },
  {
    q: 'Metode pembayaran apa yang diterima?',
    a: 'Kami menerima Seabank, BRI, QR, GoPay, dan Dana. Detail akan diberikan oleh admin saat konfirmasi.',
  },
]

const WHATSAPP_NUMBER = '6285600601619'
const WHATSAPP_PREFILL = encodeURIComponent(
  'Halo TOPAPPBIZ, saya ingin memesan layanan. Mohon bantuan untuk proses pemesanan.'
)

const HowToOrderPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [activeStep, setActiveStep] = useState(1)
  const [openFaq, setOpenFaq] = useState(null)

  const goToWhatsApp = (stepTitle) => {
    const text = encodeURIComponent(`Halo TOPAPPBIZ, saya ingin memesan: ${stepTitle}. Mohon bantuannya.`)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener')
  }

  return (
    <div className="container mx-auto px-4 mt-20">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">Cara Pemesanan</h1>

      {/* Stepper / Timeline */}
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          {STEPS.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveStep(s.id)}
              className={`flex-1 text-sm md:text-base py-2 px-2 md:px-4 rounded-lg transition-all duration-300 focus:outline-none ${
                activeStep === s.id
                  ? 'bg-blue-600 text-white shadow-lg scale-[1.02]'
                  : 'bg-white/80 text-blue-800 hover:bg-blue-50'
              }`}
              aria-current={activeStep === s.id ? 'step' : undefined}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                    activeStep === s.id ? 'bg-white text-blue-600' : 'bg-blue-100 text-blue-800'
                  }`}
                >
                  {s.id}
                </div>
                <div className="text-left">
                  <div className="font-semibold">{s.title}</div>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h2 className="text-xl font-bold text-blue-900 mb-2">{STEPS[activeStep - 1].title}</h2>
          <p className="text-gray-700 mb-4">{STEPS[activeStep - 1].description}</p>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => goToWhatsApp(STEPS[activeStep - 1].title)}
              className="inline-flex items-center gap-2 bg-blue-50 text-blue-800 font-semibold py-2 px-4 rounded-md shadow hover:bg-green-60 transition transform hover:scale-105"
            >
              Order via WhatsApp
            </button>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-blue-50 text-blue-800 font-semibold py-2 px-4 rounded-md shadow hover:bg-blue-100 transition"
            >
              Lihat Layanan
            </Link>

            <button
              onClick={() => setActiveStep((p) => Math.max(1, p - 1))}
              disabled={activeStep === 1}
              className="ml-auto text-sm text-gray-500 hover:text-gray-700 disabled:opacity-40"
            >
              ← Sebelumnya
            </button>

            <button
              onClick={() => setActiveStep((p) => Math.min(STEPS.length, p + 1))}
              disabled={activeStep === STEPS.length}
              className="text-sm text-gray-500 hover:text-gray-700 disabled:opacity-40"
            >
              Berikutnya →
            </button>
          </div>
        </div>
      </div>

      {/* Visual checklist + benefits */}
      <div className="max-w-4xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-start gap-3">
          <div className="text-blue-700 font-bold">Keunggulan</div>
          <ul className="text-sm text-gray-700 list-inside list-disc">
            <li>Proses cepat & monitoring</li>
            <li>Garansi akses</li>
            <li>Dukungan 24/7</li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="text-blue-700 font-semibold mb-2">Estimasi Waktu</div>
          <div className="text-lg font-bold">5–30 Menit</div>
          <div className="text-sm text-gray-600 mt-1">Tergantung paket & verifikasi</div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="text-blue-700 font-semibold mb-2">Metode Pembayaran</div>
          <div className="text-sm text-gray-700">Seabank · BRI · QR · Shopeepay · Dana</div>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-4xl mx-auto mt-10">
        <h3 className="text-2xl font-bold text-blue-900 mb-4">Pertanyaan Umum</h3>
        <div className="space-y-3">
          {FAQS.map((f, idx) => {
            const open = openFaq === idx
            return (
              <div key={idx} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(open ? null : idx)}
                  className="w-full flex items-center justify-between px-4 py-3 text-left"
                  aria-expanded={open}
                >
                  <span className="font-medium text-gray-800">{f.q}</span>
                  <span className="text-blue-600 font-bold">{open ? '−' : '+'}</span>
                </button>
                <div
                  className={`px-4 pb-4 text-gray-700 transition-all duration-300 ${open ? 'block' : 'hidden'}`}
                  aria-hidden={!open}
                >
                  {f.a}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Sticky CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_PREFILL}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-105"
          aria-label="Order via WhatsApp"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M21 3 3 21" stroke="currentColor" strokeWidth="0" />
          </svg>
          Order via WhatsApp
        </a>
      </div>

      {/* Footer */}
      <section className="rounded-t-3xl bg-blue-900 text-white py-12 mt-12 -mx-4 px-4 sm:-mx-6 sm:px-6 md:-mx-8 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Pesan Layanan Kami</h2>
          <p className="mb-6">Pilih layanan yang tersedia dan dapatkan akun premium sesuai kebutuhan Anda.</p>          <div className="flex justify-center space-x-4">
           <Link
              to="/services"
              className="bg-white text-blue-900 font-bold py-2 px-4 rounded-md hover:bg-blue-100 transition duration-300 transform hover:scale-105"
            >
              Lihat Layanan
            </Link>
            <Link
              to="/faq"
              className="bg-white text-blue-900 font-bold py-2 px-4 rounded-md hover:bg-blue-100 transition duration-300 transform hover:scale-105"
            >
              Tanya Jawab
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HowToOrderPage
// ...existing code...