import { Link } from 'react-router-dom'
import '../../assets/styles/components/global/Button.css'

const Button = ({ path = '#', text = '', type = 'primary' }) => {
  return (
    <div className='Button'>
      <Link to={path} className={`Button__item Button__item--${type}`}>
        {text}
      </Link>
    </div>
  )
}

export default Button
