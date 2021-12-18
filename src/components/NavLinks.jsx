import Links from './Links'
import { BsFillDiamondFill } from 'react-icons/bs'
import '../assets/styles/components/NavLinks.css'

const NavLinks = ({ showTitle = false }) => {
  const ICON_SIZE = '8px'
  const data = [
    {
      text: 'How to buy',
      url: '/how-to-buy'
    },
    {
      text: 'Shipping',
      url: '/shipping'
    },
    {
      text: 'Payment Methods',
      url: '/payment'
    },
    {
      text: 'Refunds',
      url: '/refunds'
    },
    {
      text: 'Blog',
      url: '/blog'
    },
    {
      text: 'Contact',
      url: '/contact'
    }
  ]

  return (
    <nav className='NavLinks'>
      {showTitle && <h2>Information</h2>}
      {
        data.map(item => (
          <>
            <Links type='large' {...item} />
            <span> <BsFillDiamondFill size={ICON_SIZE} /> </span> 
          </>
        ))
      }
    </nav>
  )
}

export default NavLinks