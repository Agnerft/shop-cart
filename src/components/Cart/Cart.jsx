import React, { useContext } from 'react';
import './Cart.css';
import CartItem from '../CartItem/CartItem';
import AppContext from '../../context/AppContext';



function Cart() {

  const { cartItems } = useContext(AppContext);

  


  return (
    <section className="cart">
      <div className="cart-items">

        { cartItems.map((cardItem) => <CartItem key={cardItem.id} data={cardItem}/> ) }
        
      </div>
    
      <div className="cart-resume">Resumo do carrinho</div>
    </section>
  );
}

export default Cart;
