import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { updateSearching } from '../../redux/store';

const SearchForm = () => {
  const dispatch = useDispatch();
  const searchString = useSelector(state => state.searchString);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(updateSearching(searchString));
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSearch}>
      <TextInput
        placeholder="Search..."
        value={searchString}
        onChange={(e) => dispatch(updateSearching(e.target.value))}
      />
      <Button type="submit">
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;
