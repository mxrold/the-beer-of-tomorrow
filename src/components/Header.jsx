import { useState } from 'react'
import Navbar from './Navbar'
import Logo from './Logo'
import ShopLink from './ShopLink'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import '../assets/styles/components/Header.css'

const Header = () => {
  const [isActive, setIsActive] = useState(false)
  const ICON_SIZE = '24px'

  return (
    <header className="Header container-padding">
      <div className="Header__container container-width">
        <div className="Header__container--mobile">
          <button className="Header__container--mobile-button" onClick={() => setIsActive(!isActive)}> 
            { isActive ? <AiOutlineClose size={ICON_SIZE} /> : <AiOutlineMenu size={ICON_SIZE} /> }
          </button>
          <Logo iconSize='35px' />
          <ShopLink />
        </div>
        <Navbar isActive={isActive} />
      </div>
    </header>
  )
}

export default Header