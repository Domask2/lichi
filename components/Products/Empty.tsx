import { useProducts } from '@/contex/ProductsContex';
import Preloader from '@/components/Preloader/Preloader';

const Empty = () => {
    const { loading } = useProducts();

    return (
        <div>
            <Preloader />
            {
                !loading && <div>Корзина пустая</div>
            }
        </div>
    );
};

export default Empty;