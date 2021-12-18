import NavbarTop from './NavbarTop'
import NavbarBottom from './NavbarBottom'
import '../assets/styles/components/Navbar.css'

const Navbar = ({ isActive }) => {
  return (
    <div className={`Navbar ${isActive ? 'Navbar__open' : 'Navbar__close'}`}>
      <NavbarTop />
      <NavbarBottom />
    </div>
  )
}

export default Navbar