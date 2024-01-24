import React, { useContext } from 'react';
import './CartButton.css';
import { FiShoppingCart } from 'react-icons/fi';
import AppContext from '../../context/AppContext';


function CartButton() {

  const { cartItems } = useContext(AppContext);


  return(
    <button className="cart__button">
      <FiShoppingCart  />
      <span className="cart-status">{ cartItems.length }</span>
    </button>
  );
}

export default CartButton;
