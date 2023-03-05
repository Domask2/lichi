import { useProducts } from '@/contex/ProductsContex';
import Product from '@/components/Products/Product';
import styles from './Products.module.scss';

const Products = () => {
    const { products } = useProducts();

    return (
        <div className={styles.products}>
            {
                products?.aData?.length > 0 && products.aData.map((product) => (
                    <Product key={product.item_id} product={product} />
                ))
            }
        </div>
    );
};


export default Products;