import { useProducts } from '@/contex/ProductsContex';
import { FC, useEffect } from 'react';
import Cards from '@/components/Cards/Cards';
import styles from '../styles/App.module.scss';
import Products from '@/components/Products/Products';

interface HomeProps {
    cards: number[];
}

const Home: FC<HomeProps> = ({ cards }) => {
    const { getListProducts } = useProducts();

    useEffect(() => {
        getListProducts();
    }, []);

    return (
        <div className={styles.App}>
            <Cards cards={cards} />
            <Products />
        </div>
    );
};

export default Home;

export async function getServerSideProps() {
    return {
        props: {
            cards: [94267, 94268, 94269],
        },
    };
}