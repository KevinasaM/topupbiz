import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
    alert('Terima kasih atas pesan Anda. Kami akan segera menghubungi Anda kembali!, jika ingin respon yang lebih cepat silahkan hubungi admin melalui whatsapp yang sudah disediakan.')
  }


  useEffect(() => {
    // Scroll ke atas setiap kali halaman ini dimuat
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-gray-50 min-h-screen mt-6">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-8 animate-fade-in-down">Hubungi Kami</h1>
        <p className="text-xl text-center text-gray-600 mb-12 animate-fade-in-up">
          Ada pertanyaan atau butuh bantuan? Kami siap membantu!
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md transform transition duration-300 hover:shadow-xl">
            <h2 className="text-2xl font-semibold text-blue-900 mb-6">Kirimkan pesan kepada kami</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Nama</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Pesan</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 transform hover:scale-105"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md transform transition duration-300 hover:shadow-xl">
            <h2 className="text-2xl font-semibold text-blue-900 mb-6">Informasi Kontak</h2>
            <div className="space-y-4">
              <p><strong>Email:</strong> topappbiz@email.com</p>
              <p><strong>Phone:</strong> +62 123 456 789</p>
              <p><strong>Address:</strong> 111 JL. Dapbong, Kota Atlantis, 12345</p>
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mt-8 mb-4">Jam Kerja</h3>
            <p>Senin - Jumat: 09:00 - 00:00</p>
            <p>Sabtu: 00:00 - 00:00</p>
            <p>Minggu: 06:00 - 00:00</p>
            <a
              href="https://wa.me/6285600601619"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 transition duration-300 transform hover:scale-105"
            >
              Hubungi via WhatsApp
            </a>
          </div>
        </div>
      </div>
      <section className="bg-blue-900 text-white py-16 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 animate-fade-in-down">Butuh Bantuan Segera?</h2>
          <p className="text-xl mb-8 animate-fade-in-up">Lihat bagian Tanya Jawab kami untuk mendapatkan jawaban cepat atas pertanyaan umum.</p>
          <Link
            to="/faq"
            className="bg-white text-blue-900 font-bold py-3 px-6 rounded-full hover:bg-blue-100 transition duration-300 transform hover:scale-105 hover:shadow-lg inline-block"
          >
            Lihat FAQ
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ContactPage