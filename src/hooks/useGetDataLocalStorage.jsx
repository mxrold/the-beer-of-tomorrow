import { useState, useEffect } from 'react'

export const useGetDataLocalStorage = (keyDrink = 'DRINK_') => {
  const [list, setList] = useState([])

  useEffect(() => {
    const data = []

    for (const key in window.localStorage) {
      const values = JSON.parse(window.localStorage.getItem(key))
      key.includes(keyDrink) ? data.push(values) : []
    }

    setList(data)
  }, [list])

  return [list]
}