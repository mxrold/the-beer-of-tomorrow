import { Link } from 'react-router-dom'
import { FaShoppingBasket } from 'react-icons/fa'
import { useGetDataLocalStorage } from '../hooks/useGetDataLocalStorage'
import '../assets/styles/components/ShopLink.css'

const ShopLink = () => {
  const [list] = useGetDataLocalStorage()
  const quantity = list.length

  return (
    <div className='ShopLink'>
      <Link to='/checkout'>
        <FaShoppingBasket />
        {
          quantity > 0 && 
          <span>
            {quantity > 9 ? '+9' : quantity}
          </span>
        }
      </Link>
    </div>
  )
}

export default ShopLink
