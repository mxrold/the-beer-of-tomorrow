import { useState } from 'react'
import { MdOutlineAddShoppingCart, MdShoppingCart } from 'react-icons/md'
import '../assets/styles/components/BasketButton.css'

const BasketButton = () => {
  const [isActive, setIsActive] = useState(false)
  const ICON_SIZE = '24px'
  
  return (
    <button 
      className={`BasketButton ${isActive ? 'BasketButton__remove' : 'BasketButton__add'}`}
      onClick={() => setIsActive(!isActive)}
    >
      {isActive ? <MdShoppingCart size={ICON_SIZE} /> : <MdOutlineAddShoppingCart size={ICON_SIZE} />}
    </button>
  )
}

export default BasketButton