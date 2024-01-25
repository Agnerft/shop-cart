import React, { useContext, useState } from 'react';
import './CartItem.css';
import { BsCartXFill } from 'react-icons/bs';
import propTypes from 'prop-types';

import AppContext from '../../context/AppContext';
import { FaPlus } from 'react-icons/fa6';
import { FaMinus } from 'react-icons/fa6';
import locale from '../../utils/locale';

function CartItem({ data }) {
  
  const { cartItems, setCartItems } = useContext(AppContext);
  const { id, title, price, thumbnail } = data;
  let [ valor, setValor ] = useState(1);
  // let [newPrice, setNewPrice ] = useContext(AppContext);


  // METÓDO PARA EXCLUIR O PRODUTO DO CARD
  const handleRemoveItem = () => {

    const updatedItems = cartItems.filter((item) => item.id != id);

    setCartItems(updatedItems);

  };

  // METÓDO PARA ADD O PRODUTO
  const handlePlus = () => {
    valor++;
    setValor(valor);

    let soma = 0.0;

    for (let i = 0; i < cartItems.length; i++) {      
      soma +=cartItems[i].price;
    }
    console.log(soma);
  };
  
  // METÓDO PARA SUBT O PRODUTO
  function handleMinus() {
    valor--;
    setValor(valor);
    
  }

  // newPrice = locale((price * valor));
  

  return(
    <section className="cart-item">
      <img 
        src={thumbnail}
        alt="Imagem do produto"
        className="cart-item-image" />

      <div className="cart-item-content">
        <h3 className="cart-item-title">{ title }</h3>
        <h3 className="cart-item-price">{ locale((price * valor), 'BRL') }</h3>
       
        <button
          type="button"
          className="button__remove-item"
          onClick={ handleRemoveItem }
        >
          <BsCartXFill />
        </button>
        <div className="cart-item-count">
          
          <button 
            type="button"
            className="button__count-minus"
            onClick={ handleMinus }>
            <FaMinus />
          </button>
    
          <span className="item-count-span">{ valor }</span>
    
          <button 
            type="button"
            className="button__count-plus"
            onClick={ handlePlus }>
            <FaPlus />
            
            
          </button>
    
        </div>



      </div>
    </section>
  );
}

export default CartItem;


CartItem.propTypes = {
  data: propTypes.shape({})
}.isRequired;
