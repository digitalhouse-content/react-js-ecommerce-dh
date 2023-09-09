import {useQuery} from "react-query";
import {Toaster} from "sonner";
import {CardProduct} from "../../components/ui/CardProduct";
import {Hero} from "../../components/ui/Hero";
import {getProducts} from "../../service";
import styles from "./Home.module.css";
import {useState} from "react";

const Home = () => {
	const [page, setPage] = useState(1);

	const {data, isLoading, error} = useQuery(
		["products", page],
		() => getProducts(page),
		{keepPreviousData: true}
	);

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
      <div className={styles.paginationContainer}>
        <button
          onClick={() => setPage(page - 1)}
          className={styles.paginationButton}
          disabled={page === 1}
        >
          previus page
        </button>
        <div className={styles.paginationActive}>
          <span>{page}</span>
        </div>
        <button
          className={styles.paginationButton}
          onClick={() => setPage(page + 1)}
        >
          next page
        </button>
      </div>
		</>
	);
};

export default Home;
