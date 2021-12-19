import { Link } from 'react-router-dom'
import { FaShoppingBasket } from 'react-icons/fa'
import '../assets/styles/components/ShopLink.css'

const ShopLink = () => {
  return (
    <div className='ShopLink'>
      <Link to='/checkout'>
        <FaShoppingBasket />
        <span>+9</span>
      </Link>
    </div>
  )
}

export default ShopLink
