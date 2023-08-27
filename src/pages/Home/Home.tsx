import { Hero } from '../../components/ui/Hero/Hero'
import { useState, useEffect } from 'react';

const Home = () => {

  const [products, setProducts] = useState([])

  const getProducts = async () => {
    try {
      const response = await fetch('http://localhost:3000/products')
      const data = await response.json()
      setProducts(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  console.log(products);

  return (
    <>
      <Hero />
    </>
  )
}

export default Home