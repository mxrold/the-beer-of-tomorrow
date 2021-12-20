import Logo from '../global/Logo'
import Button from '../global/Button'
import ContactInformation from '../contact/ContactInformation'
import '../../assets/styles/components/footer/FooterTop.css'

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
