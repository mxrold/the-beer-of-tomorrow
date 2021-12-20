import { useState, useEffect } from 'react'

export const useSeveralData = (url, maxAmount) => {
  const [data, setData] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const newArray = []

    const getData = async (value, max) => {
      try {
        setLoading(true)
        while (newArray.length < max) {
          const response = await fetch(value)
          const responseJson = await response.json()
          newArray.push(responseJson[0])
        }
        setLoading(false)
      } catch {
        setError(true)
      }
    }

    getData(url, maxAmount)
    setData(newArray)
  }, [])

  return { data, error, loading }
}
