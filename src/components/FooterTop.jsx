import Logo from './Logo'
import ContactInformation from './ContactInformation'
import Button from './Button'
import '../assets/styles/components/FooterTop.css'

const FooterTop = () => {
  return (
    <div className='FooterTop'>
      <ContactInformation />
      <div className='FooterTop__right'>
        <Logo showText iconSize='45px' titleSize='2.25rem' />
        <Button text='Become a distributor' type='primary' />
      </div>
    </div>
  )
}

export default FooterTop
