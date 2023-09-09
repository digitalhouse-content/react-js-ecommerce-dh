import { useQuery } from 'react-query';
import { Toaster } from 'sonner';
import { CardProduct } from '../../components/ui/CardProduct';
import { Hero } from '../../components/ui/Hero';
import { getProducts } from '../../service';
import styles from "./Home.module.css";

const Home = () => {

  const {data, isLoading, error } = useQuery('products', getProducts)

  return (
    <>
      <Hero />
      <Toaster richColors />
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
      <div className={styles.container}>
        {data?.map((product) => (
            <CardProduct key={product.tail} product={product} />
          ))}
      </div>
    </>
  )
}

export default Home