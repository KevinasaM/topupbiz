import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const services = [
  { name: "Alight Motion", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIz2ec1X6XLRf9KsJbXHFIPRSubD2BiQWy0Q&s" },
  { name: "Bstation", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScATdcLmgC1BNFD7xetVdRbyzWpC4rWNZoQg&s" },
  { name: "Canva", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdA1wx17KfcwCjzdeTlhnSpDAuem017gnw-w&s" },
  { name: "Capcut", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzlbD8zESZ4Qqb-7qIsW2iYn7EuIEKwNCrxQ&s" },
  { name: "Chatgpt", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/240px-ChatGPT_logo.svg.png" },
  { name: "Cruncyroll", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb4WXky5su0w7SCFWkJx7yGUS0kulEl2tz3A&s" },
  { name: "Disney", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Disney%2B_logo.svg/240px-Disney%2B_logo.svg.png" },
  { name: "Iqiyi", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSkObXjAketnk4yumxV8yUfsh53u6saVorlw&s" },
  { name: "Kinemaster", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToMX3nRJXTZpruw2yHkFbKclPTGNLnEoVP4w&s" },
  { name: "Loklok", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQezi_D1CKv0KFRLBBLYPhCNcZOk8hSc40wBg&s" },
  { name: "Netflix", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeSMLjxJWXh0dXH_XJIKEnCu-9FXkZmByKyw&s" },
  { name: "Office", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYVR9mMi-xQ700TIxQ6JuHhhW-yVufupB22A&s" },
  { name: "Photoroom", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEAU2e5IeKSbOBJU7AhL2KhkaorjttuiEjbA&s" },
  { name: "Prime Video", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Amazon_Prime_Video_logo.svg/240px-Amazon_Prime_Video_logo.svg.png" },
  { name: "Rcti", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjGNjIE30sLIt9SX2n5hVzTOpFXq18_HVVEw&s" },
  { name: "Remini", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwaDgjXHrR50YAfXSOIiLQbsQUB9TjPF1ndw&s" },
  { name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/240px-Spotify_logo_without_text.svg.png" },
  { name: "Video", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVDYVc1rt33TsrLrMoNr8HdAzch9h_catfVA&s" },
  { name: "Vision", logo: "https://cdn-icon.bluestacks.com/8L_oezLpKI2YqLcrrylElpRhcktdkWHTHo2ZNknRxQBa8hcEVHh6Wrdv36Fajyz0fXj_" },
  { name: "Viu", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStUQtLc2rZJqWOhl91aPSkM6vUuaWIOWuXuyjHRZceDo2aElFzlHSQs8ljZX5IzPxZbWw&usqp=CAU" },
  { name: "Wetv", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSUiSRhFr8tkL22pxjHqQHt-27GiVyar4OFw&s" },
  { name: "Wps", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOV7BHcoDnsZS-eeWWeJnA4U1lszIcSxq_Jw&s" },
  { name: "Youtube", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/240px-YouTube_full-color_icon_%282017%29.svg.png" },
  { name: "Zoom", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Zoom_Communications_Logo.svg/240px-Zoom_Communications_Logo.svg.png" },
  { name: "Gemini", logo: "https://pnghdpro.com/wp-content/themes/pnghdpro/download/social-media-and-brands/google-gemini-logo-hd.png " }
]

const ServicesPage = () => {
  const [query, setQuery] = useState('')
  const [hovered, setHovered] = useState(null)
  const [selected, setSelected] = useState(null)

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const filtered = services.filter(s =>
    s.name.toLowerCase().includes(query.trim().toLowerCase())
  )

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setSelected(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="bg-gray-50 min-h-screen mt-6">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-6">Layanan Akun Premium</h1>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <p className="text-gray-600">Temukan layanan yang Anda butuhkan. Klik kartu untuk detail.</p>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <input
              aria-label="Search services"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari layanan (mis. Netflix)"
              className="w-full sm:w-64 px-3 py-2 rounded-full border border-gray-200 bg-white shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none"
            />
            <Link to="/how-to-order" className="hidden sm:inline-block bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition">Order</Link>
          </div>
        </div>

        {/* Professional grid: 5 per row on large screens */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filtered.map((service, i) => (
            <button
              key={service.name + i}
              onClick={() => setSelected(service)}
              onMouseEnter={() => setHovered(service.name)}
              onMouseLeave={() => setHovered(null)}
              className={`text-left bg-white/90 rounded-2xl p-5 shadow-md transform transition duration-400 ease-in-out
                ${hovered === service.name ? 'scale-105 shadow-2xl' : 'hover:scale-[1.02] hover:shadow-xl'}
                focus:outline-none focus:ring-4 focus:ring-blue-200`}
            >
              <div className="flex flex-col items-center">
                <img
                  src={service.logo}
                  alt={`${service.name} logo`}
                  className="h-16 w-16 object-contain mb-3 transition-all duration-500"
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/64?text=No+Logo' }}
                />
                <h3 className="text-base font-semibold text-blue-900 mb-1">{service.name}</h3>
                <p className="text-sm text-gray-600">Akses akun premium</p>
              </div>
            </button>
          ))}
        </div>

        {/* Empty / not found */}
        {filtered.length === 0 && (
          <div className="text-center text-gray-500 mt-8">Tidak ada layanan ditemukan.</div>
        )}
      </div>

      {/* Modal detail */}
      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <div className="absolute inset-0 bg-black/40" onClick={() => setSelected(null)} />
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 z-10 transform transition-all duration-300">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <img src={selected.logo} alt="" className="h-16 w-16 object-contain" onError={(e)=>{e.target.onerror=null;e.target.src='https://via.placeholder.com/64?text=No+Logo'}} />
                <div>
                  <h3 className="text-2xl font-bold text-blue-900">{selected.name}</h3>
                  <p className="text-sm text-gray-600">Akses akun premium — cepat, bergaransi & aman</p>
                </div>
              </div>
              <button aria-label="Close" onClick={() => setSelected(null)} className="text-gray-500 hover:text-gray-800">&times;</button>
            </div>

            <div className="mt-4 text-gray-700 space-y-3">
              <p>Akun Premium {selected.name}. Durasi mulai dari Tahunan hingga Harian, dengan jaminan garansi 100%.</p>
              <ul className="list-disc list-inside text-sm text-gray-600">
                <li>Harga mulai: Rp. 10.000</li>
                <li>Dukungan: 24/7 via WhatsApp</li>
                <li>Metode pembayaran: Seabank, Dana, QR</li>
              </ul>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <Link to="/services" className="px-4 py-2 rounded-md border border-gray-200">Lihat Layanan</Link>
              <a href="https://wa.me/6285600601619" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-md bg-green-500 text-white font-semibold hover:bg-green-600 transition">Order via WhatsApp</a>
            </div>
          </div>
        </div>
      )}

      <section className="bg-blue-900 text-white py-16 mt-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Tidak Dapat Menemukan Apa yang Anda Cari?</h2>
          <p className="text-xl mb-8">Kami terus memperluas layanan kami. Beri tahu kami apa yang Anda butuhkan!</p>
          <Link to="/contact" className="bg-white text-blue-900 font-bold py-3 px-6 rounded-full hover:bg-blue-100 transition">Contact Us</Link>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage