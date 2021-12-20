import { useState } from 'react'

export const useLocalStorage = (key = '', initialValue = '') => {
  const [store, setStore] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialValue
    } catch {
      return initialValue
    }
  })

  const toggleFavorite = (item) => {
    window.localStorage.getItem(key) ? handleRemoveItem() : handleAddItem(item)
  }

  const handleRemoveItem = () => {
    window.localStorage.removeItem(key)
    setStore(false)
  }

  const handleAddItem = (item) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(item))
      setStore(item)
    } catch {
      window.alert('Could not save the drink')
    }
  }

  return { store, toggleFavorite, handleAddItem }
}