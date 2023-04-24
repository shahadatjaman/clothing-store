import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {
  Form,
  SeachIcon,
  SearchBar,
  SearchButton,
  SearchInput,
} from './Styles';

const Search__Bar = () => {
  return (
    <SearchBar>
      <Form>
        <SeachIcon>
          <SearchIcon />
        </SeachIcon>
        <SearchInput placeholder="SEARCH PRODUCTS..." />
        <SearchButton type="submit">SEARCH</SearchButton>
      </Form>
    </SearchBar>
  );
};

export default Search__Bar;
