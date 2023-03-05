import { useProducts } from '@/contex/ProductsContex';
import styles from './Cards.module.scss';

const Cards = ({ cards }: { cards: number[] }) => {
    const { addProducts } = useProducts();

    const handlerClick = (id: number) => {
        addProducts(id);
    };

    return (
        <div className={styles.cards}>
            {
                cards?.length > 0 && cards.map((card) => (
                    <div className={styles.card} key={card}>
                        <h3 className={styles.card_title}>{card}</h3>

                        <button onClick={() => handlerClick(card)}>Добавить</button>
                    </div>
                ))
            }
        </div>
    );
};

export default Cards;