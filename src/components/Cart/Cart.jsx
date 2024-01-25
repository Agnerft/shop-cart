import React, { useContext } from 'react';
import './Cart.css';
import CartItem from '../CartItem/CartItem';
import AppContext from '../../context/AppContext';
import locale from '../../utils/locale';



function Cart() {

  const { cartItems } = useContext(AppContext);

  let { valor } = useContext(AppContext);

  

  const totalPrice = cartItems.reduce((acc, item) => {
    return (item.price*valor) + acc;
  }, 0);
  
  
  return (
    <section className="cart">
      <div className="cart-items">
        { cartItems.map((cardItem) => <CartItem key={cardItem.id} data={cardItem}/> ) }
      </div>
      <div className="cart-resume">{ locale(totalPrice, 'BRL') }</div>
    </section>
  );
}

export default Cart;
