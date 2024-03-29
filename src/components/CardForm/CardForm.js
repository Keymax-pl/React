import styles from './CardForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { addCard } from '../../redux/cardsReducer';

const CardForm = props => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addCard({ title, columnId: props.columnId }));
        setTitle('');
    };

    return (
        <form className={styles.cardForm} onSubmit={handleSubmit}>
            <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <Button>Add Card</Button>
        </form>
    );
};
export default CardForm;