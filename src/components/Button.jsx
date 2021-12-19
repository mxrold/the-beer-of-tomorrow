import { Link } from 'react-router-dom'
import '../assets/styles/components/Button.css'

const Button = ({ text = '', type = 'primary' }) => {
  return (
    <div className='Button'>
      <Link to='#' className={`Button__item Button__item--${type}`}>
        {text}
      </Link>
    </div>
  )
}

export default Button
