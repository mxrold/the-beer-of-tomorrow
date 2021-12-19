import { FaInstagram, FaFacebookF } from 'react-icons/fa'
import '../assets/styles/components/SocialMedia.css'

const SocialMedia = ({ showText = false }) => {
  const ICON_SIZE = '24px'
  const data = [
    {
      text: 'Instagram',
      url: 'https://www.instagram.com/timejobschile/',
      icon: <FaInstagram size={ICON_SIZE} />,
      target: '_blank'
    },
    {
      text: 'Facebook',
      url: 'https://www.facebook.com/TimeJobsCL',
      icon: <FaFacebookF size={ICON_SIZE} />,
      target: '_blank'
    }
  ]

  return (
    <div className='SocialMedia'>
      {
        data.map(item => (
          <a href={item.url} key={item.text} title={item.text} target={item.target}>
            {item.icon}
            {showText && item.text}
          </a>
        ))
      }
    </div>
  )
}

export default SocialMedia
