import React, { useState } from 'react';
import propTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {

  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  let [valor, setValor] = useState(1);
  // let [newPrice, setNewPrice ] = useState(0);


  const value = {
    products, 
    setProducts,
    loading,
    setLoading,
    cartItems,
    setCartItems,
    valor,
    setValor,
    
   
  };

  return(
    <AppContext.Provider value={ value }>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;
