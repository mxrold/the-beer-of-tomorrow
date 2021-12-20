import { useLocalStorage } from '../hooks/useLocalStorage'
import { MdOutlineAddShoppingCart, MdShoppingCart } from 'react-icons/md'
import '../assets/styles/components/BasketButton.css'

const BasketButton = ({ id, name, item }) => {
  const ICON_SIZE = '24px'
  const key = `DRINK_${name}_${id}`
  const initialValue = false
  const { store, toggleFavorite } = useLocalStorage(key, initialValue)

  return (
    <button
      className={`BasketButton ${store ? 'BasketButton__remove' : 'BasketButton__add'}`}
      onClick={() => toggleFavorite(item)}
    >
      {store ? <MdShoppingCart size={ICON_SIZE} /> : <MdOutlineAddShoppingCart size={ICON_SIZE} />}
    </button>
  )
}

export default BasketButton
