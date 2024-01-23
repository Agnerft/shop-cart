import React, { useState, useContext } from 'react';
import { FcSearch } from 'react-icons/fc';
import './SearchBar.css'; 
import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';


function SearchBar() {

  const [searchValue, setSearchValue] = useState('');

  const { setProducts, setLoading } = useContext(AppContext);

  // console.log(setProducts);

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    const products = await fetchProducts(searchValue);
    console.log(products);
    setSearchValue('');
    setProducts(products);
    setLoading(false);
  
  };

  return(
    
    <form className="search-bar" onSubmit={handleSearch}>
      
      <input type="search"
        value={searchValue}
        className="search__input"
        placeholder="Buscar produtos"
        onChange={ ({ target }) => setSearchValue(target.value) }
        required 
      />
      

      <button type="submit" className="search__button">
        <FcSearch />
      </button>
    </form>
  
  );
}

export default SearchBar;
