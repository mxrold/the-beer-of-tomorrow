import { useState, useEffect } from 'react'

export const useGetData = (url = '') => {
  const [data, setData] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getData(url, true)
  }, [])

  const getData = async (value, firstCall) => {
    try {
      setLoading(true)
      const response = await fetch(value)
      const responseJson = await response.json()

      if (firstCall) {
        setData([])
        setData(responseJson)
      } else {
        setData((prev) => [...prev, ...responseJson])
      }
      setLoading(false)
    } catch {
      setError(true)
    }
  }

  return { data, error, loading }
}