import { useProducts } from '@/contex/ProductsContex';
import Button from '@/components/Button/Button';
import styles from './Card.module.scss';

const Card = ({ card }: { card: number }) => {
    const { addProducts } = useProducts();

    const handlerClick = (id: number) => {
        addProducts(id);
    };

    return (
        <div className={styles.card}>
            <h3 className={styles.card_title}>{card}</h3>
            <Button animation={false} onClick={() => handlerClick(card)}>добавить</Button>
        </div>
    );
};


export default Card;