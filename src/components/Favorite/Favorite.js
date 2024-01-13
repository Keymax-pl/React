import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle.js';

const Favorite = () => {
    return (
        <div className={styles.favorite}>
            <PageTitle>Favorite</PageTitle>
            <p className={styles.subtitle}>Lorem Ipsum</p>
        </div>
    );
};

export default Favorite;
