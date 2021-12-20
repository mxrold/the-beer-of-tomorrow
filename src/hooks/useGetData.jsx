import { useState, useEffect } from 'react'

export const useGetData = (url = '', countPages = 0) => {
  const [data, setData] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getData(url, true)
  }, [url])

  useEffect(() => {
    getData(url, false)
  }, [countPages])

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
