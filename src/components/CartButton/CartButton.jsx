import React from 'react';
import './CartButton.css';
import { FiShoppingCart } from 'react-icons/fi';


function CartButton() {
  return(
    <button className="cart__button">
      <FiShoppingCart  />
      <span className="cart-status">1</span>
    </button>
  );
}

export default CartButton;
