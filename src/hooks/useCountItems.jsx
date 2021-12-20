import { useState } from 'react'

export const useCountItems = (initialValue = 1) => {
  const [countItem, setCountItem] = useState(initialValue)
  
  const addCount = () => setCountItem(countItem + 1)

  const removeCount = () => {
    if(countItem === 0){
      return
    }
    setCountItem(countItem - 1)
  }

  return { countItem, addCount, removeCount }
}