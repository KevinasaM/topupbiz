import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">TOPAPPBIZ Digital</Link>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-blue-300 transition duration-300">Home</Link></li>
          <li><Link to="/services" className="hover:text-blue-300 transition duration-300">Services</Link></li>
          <li><Link to="/how-to-order" className="hover:text-blue-300 transition duration-300">How to Order</Link></li>
          <li><Link to="/faq" className="hover:text-blue-300 transition duration-300">FAQ</Link></li>
          <li><Link to="/contact" className="hover:text-blue-300 transition duration-300">Contact</Link></li>
          {/* <li><Link to="/login" className="hover:text-blue-300 transition duration-300">Login</Link></li> */}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar