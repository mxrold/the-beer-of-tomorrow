import { Link } from 'react-router-dom'
import { IoMdBeer } from 'react-icons/io'
import '../assets/styles/components/Logo.css'

const Logo = ({ showText = false, iconSize = '45px', titleSize = '2.25rem' }) => {
  return (
    <div className='Logo'>
      <Link to='/'>
        <IoMdBeer size={iconSize} color='#e4a410' />
        {showText && <span style={{ fontSize: titleSize }}>TBT</span>}
      </Link>
    </div>
  )
}

export default Logo
