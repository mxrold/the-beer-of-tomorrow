import FooterTop from './FooterTop'
import FooterBottom from './FooterBottom'
import '../assets/styles/components/Footer.css'

const Footer = () => {
  const date = new Date()
  const currentYear = date.getFullYear()

  return (
    <>
      <footer className='Footer container-padding'>
        <div className='Footer__container container-width'>
          <FooterTop />
          <FooterBottom />
        </div>
      </footer>
      <div className="FooterBottom__copyright">
        <p>The beer of tomorrow 🍺. All right reserved ©. {currentYear}</p>
      </div>
    </>
  )
}

export default Footer
