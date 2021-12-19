import { FaLocationArrow } from 'react-icons/fa'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import '../assets/styles/components/ContactInformation.css'

const ContactInformation = () => {
  const ICON_SIZE = '24px'
  const data = [
    {
      title: 'Location',
      text: 'Calle Neveria 4672, Las Condes, Región Metropolitana de Santiago, Chile',
      icon: <FaLocationArrow size={ICON_SIZE} />
    },
    {
      title: 'Phone',
      text: '+56 9 123 45 678',
      icon: <BsFillTelephoneFill size={ICON_SIZE} />
    },
    {
      title: 'Email',
      text: 'timejobs@email.com',
      icon: <MdEmail size={ICON_SIZE} />
    }
  ]

  return (
    <div className='ContactInformation'>
      {
        data.map(item => (
          <article className='ContactInformation__item' key={item.text}>
            <div className='ContactInformation__item--title'>
              <span>{item.icon}</span>
              <h3>{item.title}</h3>
            </div>
            <p className='ContactInformation__item--data'>{item.text}</p>
          </article>
        ))
      }
    </div>
  )
}

export default ContactInformation
