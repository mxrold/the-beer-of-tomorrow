import { IoMdBeer } from 'react-icons/io'
import '../assets/styles/components/Logo.css'

const Logo = ({ showText = false, iconSize = '45px', titleSize = '2.25rem' }) => {
  return (
    <div className='Logo'>
      <a href='/'>
        <IoMdBeer size={iconSize} color='#e4a410' />
        {showText && <span style={{ fontSize: titleSize }}>TBT</span>}
      </a>
    </div>
  )
}

export default Logo
