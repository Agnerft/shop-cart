import React, { useContext } from 'react';
import './ProductCard.css';
import { BsCartPlusFill } from 'react-icons/bs';
import propTypes from 'prop-types';


import locale from '../../utils/locale';
import AppContext from '../../context/AppContext';


function ProductCard({ data }) {


  const { title, price, thumbnail } = data;

  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAddCart = () => setCartItems([ ...cartItems, data ]);

  // const thumbLimpa = thumbnail.replace(/\w\.jpg/gi,'W.jpg');

  return(
    <section className="product-card">
      
      <img src={thumbnail.replace(/\w\.jpg/gi,'W.jpg')}
        alt="product"
        className="card__image" />

      <div className="card__infos">
        <h2 className="card__price">{locale(price,'BRL')}</h2>
        <h2 className="card__title">{title}</h2>

      </div>

      <button
        type="button"
        className="button__add-cart"
        onClick={ handleAddCart }>
        <BsCartPlusFill />
      </button>
    </section>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
