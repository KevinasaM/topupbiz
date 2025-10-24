import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const faqs = [
  {
    question: "Apa itu TOPAPPBIZ Digital?",
    answer: "TOPAPPBIZ Digital adalah layanan yang menyediakan akun premium untuk berbagai aplikasi dan platform populer dengan harga terjangkau."
  },
  {
    question: "Bagaimana cara membeli akun premium?",
    answer: "Untuk membeli akun premium, cukup buka halaman Layanan kami, pilih layanan yang diinginkan, dan ikuti proses pemesanan. Anda dapat menemukan instruksi terperinci di halaman How to Order page."
  },
  {
    question: "Apakah akun premium digunakan bersama atau pribadi?",
    answer: "Akun premium kami bersifat pribadi dan tidak dibagikan. Anda akan memiliki akses eksklusif ke akun yang Anda beli, namun ada beberapa layanan yang mungkin kepemilikan akun dimiliki oleh 2 user, jadi pastikan untuk membaca deskripsi layanan sebelum membeli."
  },
  {
    question: "Berapa lama akun premium bertahan?",
    answer: "Durasi akun premium bervariasi tergantung pada layanan. Anda dapat menemukan informasi durasi spesifik pada halaman detail setiap layanan."
  },
  {
    question: "Metode pembayaran apa yang Anda terima?",
    answer: "Kami menerima metode pembayaran berbasis QR Code, Seabank, Gopay, dan Dana. Anda dapat menemerima QR Code tersebut saat akan melakukan pembayaran."
  },
  {
    question: "Bagaimana jika saya mengalami masalah dengan akun premium saya?",
    answer: "Jika Anda mengalami masalah apa pun dengan akun premium Anda, segera hubungi tim dukungan pelanggan kami. Kami siap membantu dan akan menyelesaikan masalah apa pun secepat mungkin."
  },
  {
    question: "Dapatkah saya membatalkan langganan saya?",
    answer: "Ya, Anda dapat membatalkan langganan Anda namun hanya saat sebelum anda menggunakan akun layanan kami (login akun). Harap diperhatikan bahwa pengembalian dana tunduk pada kebijakan pengembalian dana kami, yang dapat Anda temukan di Ketentuan Layanan kami."
  },
  {
    question: "Apakah informasi pribadi saya aman?",
    answer: "Tentu!, Kami menangani privasi data dengan sangat serius. Semua informasi pribadi dienkripsi dan disimpan dengan aman. Kami tidak pernah membagikan informasi Anda dengan pihak ketiga. Anda dapat membaca lebih lanjut di Kebijakan Privasi kami."
  }
]

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null)
    } else {
      setOpenIndex(index)
    }
  }

  useEffect(() => {
    // Scroll ke atas setiap kali halaman ini dimuat
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-gray-50 min-h-screen mt-6">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-8 animate-fade-in-down">Pertanyaan yang Sering Diajukan</h1>
        <p className="text-xl text-center text-gray-600 mb-12 animate-fade-in-up">
        Temukan jawaban cepat untuk pertanyaan umum tentang layanan Digital Premium TOPAPPBIZ.
        </p>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-blue-900">{faq.question}</span>
                <span className="text-2xl">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="bg-white p-4 rounded-b-lg shadow-md mt-1 animate-fade-in-down">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <section className="bg-blue-900 text-white py-16 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 animate-fade-in-down">Masih Ada Pertanyaan Lain?</h2>
          <p className="text-xl mb-8 animate-fade-in-up">Tim dukungan kami siap membantu Anda dengan pertanyaan lain yang mungkin Anda miliki.</p>
          <Link
            to="/contact"
            className="bg-white text-blue-900 font-bold py-3 px-6 rounded-full hover:bg-blue-100 transition duration-300 transform hover:scale-105 hover:shadow-lg inline-block"
          >
            Hubungi Kami
          </Link>
        </div>
      </section>
    </div>
  )
}

export default FAQPage

