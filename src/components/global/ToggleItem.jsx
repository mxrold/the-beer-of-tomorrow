import { useCountItems } from '../../hooks/useCountItems'
import { MdRemoveCircleOutline, MdOutlineAddCircleOutline } from 'react-icons/md'
import '../../assets/styles/components/global/ToggleItem.css'

const ToggleItem = () => {
  const ICON_SIZE = '24px'
  const initialValue = 1
  const { countItem, addCount, removeCount } = useCountItems(initialValue)
  
  return (
    <div className="ToggleItem">
      <button onClick={removeCount}><MdRemoveCircleOutline size={ICON_SIZE} /></button>
      <span>{countItem}</span>
      <button onClick={addCount}><MdOutlineAddCircleOutline size={ICON_SIZE} /></button>
    </div>
  )
}

export default ToggleItem