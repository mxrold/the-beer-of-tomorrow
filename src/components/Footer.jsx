import FooterTop from './FooterTop'
import FooterBottom from './FooterBottom'
import '../assets/styles/components/Footer.css'

const Footer = () => {
  return (
    <footer className='Footer container-padding'>
      <div className='Footer__container container-width'>
        <FooterTop />
        <FooterBottom />
      </div>
    </footer>
  )
}

export default Footer
