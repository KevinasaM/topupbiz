import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X } from 'lucide-react' // ikon hamburger dan close (gunakan lucide-react)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-blue-900 text-white fixed top-0 left-0 w-full z-50 shadow">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">TOPAPPBIZ Digital</Link>

        {/* Tombol Hamburger (Mobile) */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Utama */}
        <ul className={`lg:flex lg:space-x-4 absolute lg:static top-16 left-0 w-full lg:w-auto bg-blue-900 lg:bg-transparent transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
          <li className="p-3 lg:p-0"><Link to="/" className="block hover:text-blue-300">Home</Link></li>
          <li className="p-3 lg:p-0"><Link to="/services" className="block hover:text-blue-300">Services</Link></li>
          <li className="p-3 lg:p-0"><Link to="/how-to-order" className="block hover:text-blue-300">How to Order</Link></li>
          <li className="p-3 lg:p-0"><Link to="/faq" className="block hover:text-blue-300">FAQ</Link></li>
          <li className="p-3 lg:p-0"><Link to="/contact" className="block hover:text-blue-300">Contact</Link></li>
          {/* <li className="p-3 lg:p-0"><Link to="/login" className="block hover:text-blue-300">Login</Link></li> */}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
