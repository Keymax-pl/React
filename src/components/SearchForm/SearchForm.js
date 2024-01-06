import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const SearchForm = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_SEARCHSTRING', payload: searchText });
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSearch}>
      <TextInput
        placeholder="Search..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <Button type="submit">
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;
