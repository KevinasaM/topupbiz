import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

// Daftar layanan dengan nama dan logo yang sesuai
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
  { name: "Zoom", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Zoom_Communications_Logo.svg/240px-Zoom_Communications_Logo.svg.png" }
]

const ServicesPage = () => {
  const [hoveredService, setHoveredService] = useState(null)
  useEffect(() => {
    // Scroll ke atas setiap kali halaman ini dimuat
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-gray-50 min-h-screen mt-6">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-8 animate-fade-in-down">Layanan Premium</h1>
        <p className="text-xl text-center text-gray-600 mb-12 animate-fade-in-up">
        Temukan berbagai layanan premium kami dengan harga yang tidak bikin kantong kering.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-lg shadow-md text-center transform transition-all duration-500 ease-in-out ${hoveredService === service.name ? 'scale-105 shadow-xl' : 'scale-100'}`}
              onMouseEnter={() => setHoveredService(service.name)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="flex justify-center mb-4">
                <img 
                  src={service.logo} 
                  alt={`${service.name} logo`} 
                  className="h-16 w-16 object-contain"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "https://via.placeholder.com/64?text=No+Logo"
                  }}
                />
              </div>
              <h2 className="text-xl font-semibold text-blue-900 mb-2">{service.name}</h2>
              <p className="text-gray-600 mb-4">Access to Premium Accounts</p>
              {hoveredService === service.name && (
                <Link
                  to="/how-to-order"
                  className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-700 transition-all duration-500 ease-in-out transform hover:scale-110"
                >
                  Order Now
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
      <section className="bg-blue-900 text-white py-16 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 animate-fade-in-down">Tidak Dapat Menemukan Apa yang Anda Cari?</h2>
          <p className="text-xl mb-8 animate-fade-in-up">Kami terus memperluas layanan kami. Beri tahu kami apa yang Anda butuhkan!</p>
          <Link
            to="/contact"
            className="bg-white text-blue-900 font-bold py-3 px-6 rounded-full hover:bg-blue-100 transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage