import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle.js';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/cardsReducer';
import Card from '../Card/Card.js';

const Favorite = () => {

    const cards = useSelector(getFavoriteCards);

    if (!cards.length) return <PageTitle>No cards...</PageTitle>

    return (
        <div className={styles.favorite}>
            <PageTitle>Favorite</PageTitle>
            <p className={styles.subtitle}>Lorem Ipsum</p>
            <ul className={styles.cards}>{cards.map(card => <Card key={card.id} {...card} />)}</ul>
        </div>
    );
};

export default Favorite;
