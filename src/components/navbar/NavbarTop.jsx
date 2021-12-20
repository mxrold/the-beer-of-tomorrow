import Logo from '../global/Logo'
import Button from '../global/Button'
import ShopLink from '../global/ShopLink'
import AboutUsLinks from '../navbar/AboutUsLinks'
import SocialMedia from '../navbar/SocialMedia'
import '../../assets/styles/components/navbar/NavbarTop.css'

const NavbarTop = () => {
  return (
    <div className='NavbarTop'>
      <Logo showText iconSize='45px' titleSize='2.25rem' />
      <AboutUsLinks />
      <SocialMedia />
      <Button text='Become a distributor' />
      <ShopLink />
    </div>
  )
}

export default NavbarTop
