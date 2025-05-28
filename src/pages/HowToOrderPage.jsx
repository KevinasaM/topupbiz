import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const HowToOrderPage = () => {
  useEffect(() => {
    // Scroll ke atas setiap kali halaman ini dimuat
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="container mx-auto px-4 py-12 mt-6">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-12">Cara Pemesanan</h1>
      <div className="max-w-2xl mx-auto">
        <ol className="list-decimal pl-6 space-y-6">
          <li className="text-lg">
            <h2 className="font-semibold text-blue-900 mb-2">Pilih Layanan</h2>
            <p>Jelajahi halaman layanan kami dan pilih akun premium yang ingin Anda beli.</p>
          </li>
          <li className="text-lg">
            <h2 className="font-semibold text-blue-900 mb-2">Konfirmasi ke Admin</h2>
            <p>Jika Anda sudah memilih layanan yang akan anda beli silahkan hubungi admin melalui whatsapp yang sudah disediakan.</p>
          </li>
          <li className="text-lg">
            <h2 className="font-semibold text-blue-900 mb-2">Lakukan Pembayaran</h2>
            <p>Admin akan memberikan code QR untuk melakukan pembayaran, atau metode pembayaran lain seperti Gopay, Dana, dan BRI.</p>
          </li>
          <li className="text-lg">
            <h2 className="font-semibold text-blue-900 mb-2">Terima Akun</h2>
            <p>Setelah pembayaran dikonfirmasi dengan admin, Anda akan menerima detail akun premium Anda melalui whatsapp admin.</p>
          </li>
        </ol>
        <div className="text-center mt-8">
          <a
            href="https://wa.me/6285600601619"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white font-bold py-3 px-6 rounded-md hover:bg-green-600 transition duration-300 transform hover:scale-105"
          >
            Order Sekarang via WhatsApp
          </a>
        </div>
      </div>
      {/* Footer Section */}
      <footer className="bg-blue-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Pesan Layanan Kami</h2>
          <p className="mb-6">Pilih layanan yang tersedia dan dapatkan akun premium sesuai kebutuhan Anda.</p>
          <div className="flex justify-center space-x-4">
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
      </footer>
    </div>
  )
}

export default HowToOrderPage