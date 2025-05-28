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
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in-down">Selamat Datang di TOPAPPBIZ Digital</h1>
          <p className="text-xl mb-8 animate-fade-in-up">Layanan akun premium murah terbaik, tercepat, dan paling dapat diandalkan untuk aplikasi dan platform favorit Anda.</p>
          <Link to="/services" className="bg-white text-blue-900 font-bold py-3 px-6 rounded-full hover:bg-blue-100 transition duration-300 transform hover:scale-105 hover:shadow-lg inline-block">
            Pesan Sekarang
          </Link>
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