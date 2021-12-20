import { MdRemoveCircleOutline, MdOutlineAddCircleOutline } from 'react-icons/md'
import '../assets/styles/components/ToggleItem.css'

const ToggleItem = () => {
  const ICON_SIZE = '24px'

  return (
    <div className="ToggleItem">
      <button><MdRemoveCircleOutline size={ICON_SIZE} /></button>
      <span>1</span>
      <button><MdOutlineAddCircleOutline size={ICON_SIZE} /></button>
    </div>
  )
}

export default ToggleItem