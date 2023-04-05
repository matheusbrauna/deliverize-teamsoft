import { useEffect, useState } from 'react'

export function useProducts() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  async function fetchData() {
    try {
      setIsLoading(true)
      const res = await fetch(
        'https://6077803e1ed0ae0017d6aea4.mockapi.io/test-frontend/products',
      )
      const json = await res.json()
      setProducts(json)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return {
    products,
    isLoading,
  }
}
