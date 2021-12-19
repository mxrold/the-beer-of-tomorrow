import Logo from './Logo'
import AboutUsLinks from './AboutUsLinks'
import SocialMedia from './SocialMedia'
import Button from './Button'
import ShopLink from './ShopLink'
import '../assets/styles/components/NavbarTop.css'

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
