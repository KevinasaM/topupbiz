import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.5 } // Section dianggap terlihat jika 50% dari elemen berada di viewport
    )

    const section = document.querySelector('#testimonials-section')
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  useEffect(() => {
    // Scroll ke atas setiap kali halaman ini dimuat
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-gray-50 mt-6">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white">
        {/* Decorative shapes + subtle photo background */}
        <div className="pointer-events-none absolute inset-0">
          {/* Pastikan file ada: public/images/hero-bg.jpg */}
          <img
            src="/images/hero-bg.jpg"
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-40 md:opacity-60 filter blur-sm brightness-95 scale-[1.05] z-0"
          />

          <svg className="absolute right-0 top-0 w-96 opacity-20 transform translate-x-20 -translate-y-16 z-10" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <g transform="translate(300,300)">
              <circle r="200" fill="#1e3a8a" />
            </g>
          </svg>

          <div className="absolute left-0 bottom-0 w-60 h-60 bg-blue-700 opacity-30 rounded-full -translate-x-12 translate-y-12 z-10"></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-20">
          <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left content */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <p className="inline-block rounded-full bg-yellow-300/20 text-yellow-300 px-3 py-1 text-sm font-semibold mb-4">Pelayanan 24/7 · Harga Terjangkau</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
                Akses Konten Premium dengan
                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-white to-yellow-300">TOPAPPBIZ Digital</span>
              </h1>
              <p className="text-lg sm:text-xl text-blue-100/90 mb-8 max-w-2xl">
                Layanan akun premium murah, tercepat, dan paling dapat diandalkan untuk aplikasi dan platform favorit Anda — mulai dari Netflix, Spotify hingga Capcut dan banyak lagi.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-3">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center bg-white text-blue-900 font-bold py-3 px-6 rounded-full shadow-lg hover:scale-105 transform transition"
                >
                  Pesan Sekarang
                </Link>

                <a
                  href="https://wa.me/6285600601619"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-green-500 text-white font-semibold py-3 px-5 rounded-full shadow hover:bg-green-600 transition"
                >
                  Order via WhatsApp
                </a>
              </div>

              {/* Small feature list */}
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-blue-100/90">
                <span className="inline-flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full">⚡ Fast Delivery</span>
                <span className="inline-flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full">🔒 Secure</span>
                <span className="inline-flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full">💬 Support 24/7</span>
              </div>
            </div>

            {/* Right illustrative panel */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-md bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-2xl transform transition hover:scale-102">
                <div className="h-44 bg-gradient-to-tr from-white/10 via-white/5 to-white/5 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-white font-semibold">Akun Premium</h3>
                    <p className="text-sm text-blue-100/80 mt-2">Contoh layanan: Netflix, Spotify, Capcut</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-center justify-between text-sm">
                    <span className="text-blue-100/90">Harga Mulai</span>
                    <strong className="text-white">Rp. 5.000</strong>
                  </li>
                  <li className="flex items-center justify-between text-sm">
                    <span className="text-blue-100/90">Dukungan</span>
                    <span className="text-white">24/7 via WhatsApp</span>
                  </li>
                  <li className="flex items-center justify-between text-sm">
                    <span className="text-blue-100/90">Metode Pembayaran</span>
                    <span className="text-white">QR, Seabank, Gopay, Dana, BRI</span>
                  </li>
                </ul>

                <div className="mt-6">
                  <Link to="/services" className="block w-full text-center bg-yellow-300 text-blue-900 font-bold py-2 px-4 rounded-md hover:opacity-95 transition">
                    Lihat Layanan
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Featured Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Layanan Populer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Netflix', 'Spotify', 'Disney+'].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">{service}</h3>
                <p className="mb-4">Dapatkan akses premium ke  {service} dengan harga yang tidak ada duanya!</p>
                <Link to="/services" className="text-blue-600 hover:text-blue-800 transition duration-300 hover:underline">Learn More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-gray-50 mt-6">
      {/* Testimonials Section */}
      <section
        id="testimonials-section"
        className={`bg-gray-100 py-16 ${isVisible ? 'overflow-x-auto' : ''}`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12 ">Kata Pelanggan</h2>
          <div className="overflow-x-auto">
          <div className={`flex space-x-8 ${isVisible ? 'animate-slideIn' : ''}`}>
            {[
              { name: 'Danang R.', text: 'TOPAPPBIZ Digital telah menjadi pengubah permainan bagi saya. Layanan premium yang terjangkau tanpa kompromi!' },
              { name: 'kumpling S.', text: 'Saya telah mencoba layanan lain, tetapi tidak ada yang sebanding dengan keandalan dan dukungan yang saya dapatkan dari TOPAPPBIZ.' },
              { name: 'Khamid J.', text: 'Rangkaian layanan yang ditawarkan sangat mengesankan. Saya telah menemukan semua yang saya butuhkan di satu tempat!' },
              { name: 'Rina T.', text: 'Pelayanan cepat, ramah dan sangat membantu. Saya sangat merekomendasikan TOPAPPBIZ Digital!' },
              { name: 'Satriya A.', text: 'Harga yang sangat terjangkau dengan kualitas layanan yang luar biasa, melayani hingga malam hari:).' }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl min-w-[300px]"
              >
                <p className="mb-4 italic">{testimonial.text}</p>
                <p className="font-semibold text-blue-900">- {testimonial.name}</p>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>
    </div>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Mengapa Memilih TOPAPPBIZ Digital?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Harga Terjangkau', description: 'Dapatkan layanan premium dengan harga tak bikin miskin.' },
              { title: 'Banyak Pilihan', description: 'Pilih dari berbagai aplikasi dan platform populer.' },
              { title: 'Layanan Terpercaya', description: 'Nikmati akses tanpa gangguan, ke konten favorit Anda.' },
              { title: 'Dukungan 24 Jam', description: 'Tim kami selalu siap membantu Anda.' }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 animate-fade-in-down">Ready to Get Started?</h2>
          <p className="text-xl mb-8 animate-fade-in-up">Bergabunglah dengan ratusan pelanggan yang puas dan tingkatkan pengalaman konten digital premium Anda hari ini!</p>
          <Link to="/services" className="bg-white text-blue-900 font-bold py-3 px-6 rounded-full hover:bg-blue-100 transition duration-300 transform hover:scale-105 hover:shadow-lg inline-block">
            View All Services
          </Link>
        </div>
      </section>
    </div>
  )
}


export default HomePage