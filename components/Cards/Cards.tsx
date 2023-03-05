import Card from '@/components/Cards/Card';
import styles from './Cards.module.scss';

const Cards = ({ cards }: { cards: number[] }) => (
    <div className={styles.cards}>
        {
            cards?.length > 0 && cards.map((card) => (
                <Card key={card} card={card} />
            ))
        }
    </div>
);

export default Cards;