import styles from './Card.module.scss';
import { toggleCardFavorite } from '../../redux/store';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';

const Card = props => {

    const dispatch = useDispatch();


  return (
    <li className={styles.card}>{props.title}
      <div>
        <button className={clsx(props.isFavorite && styles.cardActive)} onClick={()=> {dispatch( toggleCardFavorite(props.id) )}}>
            <i className='fa fa-star-o'></i>
        </button>
      </div>
    </li>
  );
};

export default Card;