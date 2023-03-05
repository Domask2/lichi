import { FC } from 'react';
import { useProducts } from '@/contex/ProductsContex';
import { aDataType } from '@/type/type';
import styles from './Product.module.scss';

interface ProductType {
    product: aDataType
}

const Product: FC<ProductType> = ({ product }) => {
    const { addProducts } = useProducts();

    const handlerClick = (id: number) => {
        addProducts(id);
    };

    return (
        <div className={styles.product}>
            <div>{product.name}</div>
            {/*<div>{product.count}</div>*/}
            {/*<button className={styles.product_btn} onClick={() => handlerClick(product.item_id)}>+</button>*/}
            {/*<button className={styles.product_btn}>-</button>*/}
            <button className={styles.product_btn}>Remove</button>
        </div>
    );
};


export default Product;