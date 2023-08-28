import { Hero } from '../../components/ui/Hero'
import { useState, useEffect } from 'react';
import styles from "./Home.module.css"
import { CardProduct } from '../../components/ui/CardProduct';

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
      <div className={styles.container}>
        {products.map((product) => (
            <CardProduct key={product.tail} product={product} />
          ))}
      </div>
    </>
  )
}

export default Home