import { useProducts } from '@/contex/ProductsContex';
import Product from '@/components/Products/Product';
import Preloader from '@/components/Preloader/Preloader';
import Empty from '@/components/Products/Empty';
import styles from './Products.module.scss';

const Products = () => {
    const { products } = useProducts();

    if (products?.aData?.length === 0) {
        return <Empty />;
    }

    return (
        <div className={styles.products}>
            <Preloader />

            {
                products?.aData?.length > 0 && products.aData.map((product) => (
                    <Product key={product.item_id} product={product} />
                ))
            }
        </div>
    );
};


export default Products;