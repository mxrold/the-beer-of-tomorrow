import NavLinks from './NavLinks'
import AboutUsLinks from './AboutUsLinks'
import SocialMedia from './SocialMedia'
import '../assets/styles/components/FooterBottom.css'

const FooterBottom = () => {
  return (
    <div className='FooterBottom'>
      <NavLinks showTitle />
      <AboutUsLinks showTitle />
      <SocialMedia showText />
    </div>
  )
}

export default FooterBottom
