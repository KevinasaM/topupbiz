
import { NavLink, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react' // ikon hamburger dan close (gunakan lucide-react)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsOpen(prev => !prev)
  }

  // tutup menu saat berpindah halaman
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  // ESC untuk menutup menu
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const linkClass = ({ isActive }) =>
    `block py-2 px-4 rounded-md transition-colors duration-200 ${isActive ? 'text-yellow-300 font-semibold' : 'hover:text-blue-300'}`

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="bg-gradient-to-r from-blue-900/95 via-blue-800/90 to-blue-700/95 backdrop-blur-sm text-white shadow">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center text-lg font-bold text-white shadow">T <span className="text-yellow-300">D</span></span>
            <span className="text-2xl font-bold tracking-tight">
              TOPAPPBIZ <span className="text-yellow-300">Digital</span>
            </span>
          </NavLink>

          {/* Desktop links + CTA */}
          <div className="hidden lg:flex lg:items-center lg:space-x-2">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/services" className={linkClass}>Services</NavLink>
            <NavLink to="/how-to-order" className={linkClass}>How to Order</NavLink>
            <NavLink to="/faq" className={linkClass}>FAQ</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>

            {/* <a
              href="https://wa.me/6285600601619"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md shadow transition transform hover:-translate-y-0.5"
            >
              Order via WhatsApp
            </a> */}
          </div>

          {/* Hamburger (mobile) */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu (slide down) */}
        <div
          id="mobile-menu"
          className={`lg:hidden transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="px-4 pb-6 space-y-1 bg-blue-900">
            <NavLink to="/" className={({isActive}) => `block py-3 px-3 rounded-md ${isActive ? 'text-yellow-300 font-semibold' : 'hover:text-blue-300'}`}>Home</NavLink>
            <NavLink to="/services" className={({isActive}) => `block py-3 px-3 rounded-md ${isActive ? 'text-yellow-300 font-semibold' : 'hover:text-blue-300'}`}>Services</NavLink>
            <NavLink to="/how-to-order" className={({isActive}) => `block py-3 px-3 rounded-md ${isActive ? 'text-yellow-300 font-semibold' : 'hover:text-blue-300'}`}>How to Order</NavLink>
            <NavLink to="/faq" className={({isActive}) => `block py-3 px-3 rounded-md ${isActive ? 'text-yellow-300 font-semibold' : 'hover:text-blue-300'}`}>FAQ</NavLink>
            <NavLink to="/contact" className={({isActive}) => `block py-3 px-3 rounded-md ${isActive ? 'text-yellow-300 font-semibold' : 'hover:text-blue-300'}`}>Contact</NavLink>

            <a
              href="https://wa.me/6285600601619"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block w-full text-center bg-green-500 text-white py-3 rounded-md font-semibold hover:bg-green-600 transition transform hover:-translate-y-0.5"
            >
              Order via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
// ...existing code...