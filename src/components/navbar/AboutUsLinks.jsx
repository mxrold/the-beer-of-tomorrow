import Links from './Links'
import '../../assets/styles/components/navbar/AboutUsLinks.css'

const AboutUsLinks = ({ showTitle = false }) => {
  const data = [
    {
      text: 'Our history',
      url: '/our-history'
    },
    {
      text: 'About us',
      url: '/about-us'
    }
  ]

  return (
    <nav className='AboutUsLinks'>
      {showTitle && <h2>About us</h2>}
      {
        data.map(item => (
          <Links {...item} />
        ))
      }
    </nav>
  )
}

export default AboutUsLinks
