import { useProducts } from '@/contex/ProductsContex';
import styles from './Card.module.scss';

const Card = ({ card }: { card: number }) => {
    const { addProducts } = useProducts();

    const handlerClick = (id: number) => {
        addProducts(id);
    };

    return (
        <div className={styles.card}>
            <h3 className={styles.card_title}>{card}</h3>
            <button className={styles.card_btn} onClick={() => handlerClick(card)}>Добавить</button>
        </div>
    );
};


export default Card;