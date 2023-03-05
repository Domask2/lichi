import { useProducts } from '@/contex/ProductsContex';
import { useEffect } from 'react';
import { getProducts } from '@/api/api';
import styles from '../styles/App.module.scss';

const Home = () => {
    const { setProducts } = useProducts();

    useEffect(() => {
        getProducts()
            .then((res) => {
                setProducts(res.data.data.api_data);
            });
    }, []);

    return (
        <div className={styles.App}>
            Hello Lichi
        </div>
    );
};

export default Home;
