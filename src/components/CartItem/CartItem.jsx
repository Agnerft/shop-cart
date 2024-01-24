import React, { useContext } from 'react';
import './CartItem.css';
import { BsCartXFill } from 'react-icons/bs';
import propTypes from 'prop-types';
import locale from '../../utils/locale';
import AppContext from '../../context/AppContext';
import { FaPlus } from 'react-icons/fa6';
import { FaMinus } from 'react-icons/fa6';


function CartItem({ data }) {

  const { cartItems, setCartItems } = useContext(AppContext);
  const { id, title, price, thumbnail } = data;

  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.id != id);

    setCartItems(updatedItems);

  };

  const Multplic = price * setCartItems.length;
  
  

  return(
    <section className="cart-item">
      <img 
        src={thumbnail}
        alt="Imagem do produto"
        className="cart-item-image" />

      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{locale(Multplic,'BRL')}</h3>
        <div className="cart-item-count">
          
          <button 
            type="button"
            className="button__count-minus"
            onClick={ handlePlus }>
            <FaMinus />
          </button>
          <span className="item-count-span">{ setCartItems.length }</span>
          <button 
            type="button"
            className="button__count-plus">
            <FaPlus />
          </button>
        </div>        

        <button
          type="button"
          className="button__remove-item"
          onClick={ handleRemoveItem }
        >
          <BsCartXFill />
        </button>
      </div>
    </section>
  );
}

export default CartItem;


CartItem.propTypes = {
  data: propTypes.shape({})
}.isRequired;
