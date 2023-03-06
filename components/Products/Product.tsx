import { FC } from 'react';
import { useProducts } from '@/contex/ProductsContex';
import Button from '@/components/Button/Button';
import { aDataType } from '@/type/type';
import styles from './Product.module.scss';

interface ProductType {
    product: aDataType
}

const Product: FC<ProductType> = ({ product }) => {
    const { addProducts, removeProducts } = useProducts();

    const handlerAddProduct = (id: number) => {
        addProducts(id);
    };

    const handlerRemoveProduct = (id: number, count: number) => {
        let all = true;
        if(count > 0) {
            all = false
        }
        if(count === 1) {
            all = true
        }

        removeProducts(id, all);
    };

    return (
        <div className={styles.product}>
            <div>{product.name}</div>
            {/*<div>{product.count}</div>*/}
            {/*<Button animation={false} onClick={() => handlerAddProduct(product.item_id)}>+</Button>*/}
            {/*<Button animation={false} onClick={() => handlerRemoveProduct(product.item_id, product.count)}>-</Button>*/}
            <Button onClick={() => handlerRemoveProduct(product.item_id, product.count)}>
                Удалить из корзины
            </Button>
        </div>
    );
};


export default Product;