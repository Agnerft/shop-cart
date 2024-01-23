import React from 'react';
import './CartItem.css';
import { BsCartXFill } from 'react-icons/bs';

function CartItem() {

  return(
    <section className="cart-item">
      <img 
        src=""
        alt="Imagem do produto"
        className="cart-item-image" />

      <div className="cart-item-content">
        <h3 className="cart-item-title">Titulo do Produto</h3>
        <h3 className="cart-item-price">R$ 123,00</h3>

        <button
          type="button"
          className="button__remove-item"
        >
          <BsCartXFill />
        </button>
      </div>
    </section>
  );
}

export default CartItem;
