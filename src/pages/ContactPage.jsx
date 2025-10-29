// ...existing code...
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const WHATSAPP_NUMBER = '6285600601619'
const WHATSAPP_PREFILL = (name = '', topic = '') =>
  encodeURIComponent(`Halo TOPAPPBIZ, saya ${name || 'ingin bertanya'}. ${topic}`)

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const liveRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const validate = (data) => {
    const e = {}
    if (!data.name || data.name.trim().length < 2) e.name = 'Nama minimal 2 karakter'
    if (!data.email || !/^\S+@\S+\.\S+$/.test(data.email)) e.email = 'Email tidak valid'
    if (!data.message || data.message.trim().length < 10) e.message = 'Tulis pesan minimal 10 karakter'
    return e
  }

  const handleChange = (ev) => {
    const { name, value } = ev.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const egs = validate(formData)
    if (Object.keys(egs).length) {
      setErrors(egs)
      const first = Object.keys(egs)[0]
      const el = document.querySelector(`[name="${first}"]`)
      if (el) el.focus()
      return
    }

    setSubmitting(true)
    setSubmitted(false)

    // simulate API call — replace with real call
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
      try {
        localStorage.setItem('lastContact', JSON.stringify({ when: Date.now(), ...formData }))
      } catch (err) {
        // localStorage can throw in some environments (e.g., private mode); log a non-fatal warning
        // eslint-disable-next-line no-console
        console.warn('Failed to persist contact to localStorage', err)
      }
      setFormData({ name: '', email: '', message: '' })
      if (liveRef.current) liveRef.current.focus()
    }, 1100)
  }

  const openWhatsApp = (prefill) => {
    const text = WHATSAPP_PREFILL(formData.name || '', prefill || 'Saya tertarik dengan layanan Anda.')
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener')
  }

  return (
    <div className="bg-gray-50 min-h-screen mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">Hubungi Tim TOPAPPBIZ</h1>
          <p className="text-lg text-gray-600 mb-6">
            Solusi instan & dukungan prioritas. Kirim pesan lewat form atau chat langsung lewat WhatsApp untuk respon lebih cepat.
          </p>
          <div className="inline-flex items-center gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_PREFILL()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-white font-semibold py-3 px-5 rounded-full shadow-lg hover:bg-green-600 transition"
            >
              Hubungi via WhatsApp
            </a>
            <Link to="/faq" className="inline-flex items-center gap-2 bg-white text-blue-900 font-semibold py-3 px-5 rounded-full shadow hover:scale-[1.02] transition">
              Lihat FAQ
            </Link>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Form (left) */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-2xl p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-black-800">Kirim Pesan</h2>
                <p className="text-sm text-gray-600">Isi form untuk pertanyaan non-darurat — kami akan membalas secepatnya.</p>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500">Estimasi respon</div>
                <div className="text-lg font-semibold text-black-800">5–30 Menit</div>
              </div>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="relative">
                  <span className="sr-only">Nama</span>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`peer w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${
                      errors.name ? 'border-red-300 focus:ring-red-200' : 'border-gray-200 focus:ring-blue-200'
                    }`}
                    placeholder="Nama"
                    aria-invalid={!!errors.name}
                    required
                  />
                  {errors.name && <div className="text-red-600 text-sm mt-1">{errors.name}</div>}
                </label>

                <label className="relative">
                  <span className="sr-only">Email</span>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`peer w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${
                      errors.email ? 'border-red-300 focus:ring-red-200' : 'border-gray-200 focus:ring-blue-200'
                    }`}
                    placeholder="Email"
                    aria-invalid={!!errors.email}
                    required
                  />
                  {errors.email && <div className="text-red-600 text-sm mt-1">{errors.email}</div>}
                </label>
              </div>

              <label className="relative block">
                <span className="sr-only">Pesan</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`peer w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 resize-none ${
                    errors.message ? 'border-red-300 focus:ring-red-200' : 'border-gray-200 focus:ring-blue-200'
                  }`}
                  placeholder="Tulis pesan Anda..."
                  aria-invalid={!!errors.message}
                  required
                />
                {errors.message && <div className="text-red-600 text-sm mt-1">{errors.message}</div>}
              </label>

              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 bg-blue-50 text-blue-900 font-semibold py-3 px-5 rounded-lg shadow hover:bg-blue-50 transition disabled:opacity-60"
                >
                  {submitting ? 'Mengirim...' : 'Kirim Pesan'}
                </button>

                <button
                  type="button"
                  onClick={() => openWhatsApp('Saya ingin layanan prioritas.')}
                  className="inline-flex items-center gap-2 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
                >
                  Chat Prioritas via WhatsApp
                </button>

                <button
                  type="button"
                  onClick={() => { setFormData({ name: '', email: '', message: '' }); setErrors({}) }}
                  className="ml-auto text-sm text-gray-500 hover:text-gray-700"
                >
                  Reset
                </button>
              </div>

              <div className="mt-4" aria-live="polite" ref={liveRef} tabIndex={-1}>
                {submitted && (
                  <div className="inline-flex items-center gap-3 px-4 py-2 bg-green-50 text-green-800 rounded-lg border border-green-100">
                    Terima kasih — pesan Anda telah diterima. Kami akan menghubungi Anda segera.
                  </div>
                )}
              </div>

              {/* Trust badges */}
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="text-xs text-gray-500">Ketersediaan</div>
                    <div className="text-sm font-semibold">24/7 Support</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3v2h6v-2c0-1.657-1.343-3-3-3z" />
                  </svg>
                  <div>
                    <div className="text-xs text-gray-500">Keamanan</div>
                    <div className="text-sm font-semibold">Transaksi aman</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h4l3 9 4-18 3 9h4" />
                  </svg>
                  <div>
                    <div className="text-xs text-gray-500">Skalabilitas</div>
                    <div className="text-sm font-semibold">Solusi enterprise</div>
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Sidebar (right) */}
          <aside className="space-y-6">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-black-800 mb-3">Informasi Kontak</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-700 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
                  </svg>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-gray-600">topappbizdigital@email.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-700 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h2l.4 2M7 13h10l1-6H6l1 6z" />
                  </svg>
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-gray-600">+62 856-0060-1111</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-700 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5V7H2v13h5" />
                  </svg>
                  <div>
                    <div className="font-medium">Address</div>
                    <div className="text-gray-600">JL. Dapbong No.111, Kota Atlantis</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_PREFILL()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-blue-50 text-blue-800 py-2 px-3 rounded-md hover:bg-blue-100 transition"
                >
                  WhatsApp
                </a>
                <a
                  href="mailto:topappbizdigital@email.com"
                  className="inline-flex items-center justify-center gap-2 bg-blue-50 text-blue-800 py-2 px-3 rounded-md hover:bg-blue-100 transition"
                >
                  Email
                </a>
                <Link to="/services" className="inline-flex items-center justify-center gap-2 bg-blue-50 text-blue-800 py-2 px-3 rounded-md hover:bg-blue-100 transition">
                  Lihat Layanan
                </Link>
                <Link to="/faq" className="inline-flex items-center justify-center gap-2 bg-blue-50 text-blue-800 py-2 px-3 rounded-md hover:bg-blue-100 transition">
                  FAQ
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <iframe
                title="office-location"
                className="w-full h-44"
                loading="lazy"
                src="https://maps.google.com/maps?q=Jakarta&t=&z=13&ie=UTF8&iwloc=&output=embed"
              />
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-sm text-sm text-gray-600">
              <div className="font-semibold text-gray-800 mb-1">Jam Kerja</div>
              <div>Senin - Jumat: 09:00 - 00:00</div>
              <div>Sabtu: 00:00 - 00:00</div>
              <div>Minggu: 06:00 - 00:00</div>
            </div>
          </aside>
        </div>
      </div>

      <section className="bg-gradient-to-r from-blue-900 to-indigo-700 text-white py-12 mt-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Butuh Solusi Instan?</h3>
            <p className="text-sm text-blue-100 mt-1">Hubungi kami untuk paket enterprise dan dukungan prioritas.</p>
          </div>
          <div className="flex gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_PREFILL()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-900 font-semibold py-3 px-5 rounded-full hover:opacity-95 transition"
            >
              Chat Sekarang
            </a>
            <Link to="/services" className="bg-transparent border border-white text-white py-3 px-5 rounded-full hover:bg-white/10 transition">
              Lihat Paket
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage