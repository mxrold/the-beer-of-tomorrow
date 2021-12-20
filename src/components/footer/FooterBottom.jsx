import NavLinks from '../navbar/NavLinks'
import SocialMedia from '../navbar/SocialMedia'
import AboutUsLinks from '../navbar/AboutUsLinks'
import '../../assets/styles/components/footer/FooterBottom.css'

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
