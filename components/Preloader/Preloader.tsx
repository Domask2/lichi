import { useProducts } from '@/contex/ProductsContex';
import SvgLoader from '@/utils/svgLoader';
import styles from './Preloader.module.scss';

const Preloader = () => {
    const { loading } = useProducts();

    return (
        <div className={styles.preloader}>
            { loading && <SvgLoader /> }
        </div>
    )
}

export default Preloader;