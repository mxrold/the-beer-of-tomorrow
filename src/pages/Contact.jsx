import ContactInformation from '../components/ContactInformation'
import GoogleMaps from '../components/GoogleMaps'
import '../assets/styles/pages/Contact.css'

const Contact = () => {
  return (
    <section className='Contact container-padding container-margin'>
      <h1>Contact us</h1>
      <div className='Contact__information container-width'>
        <ContactInformation />
        <GoogleMaps />
      </div>
    </section>
  )
}

export default Contact
