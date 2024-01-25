// import React, { useContext, useState } from 'react';
// import './CartCount.css';
// import { FaPlus } from 'react-icons/fa6';
// import { FaMinus } from 'react-icons/fa6';
// import AppContext from '../../context/AppContext';


// function CartCount() {

//   let [ valor, setValor ] = useState(1);
//   const { cartItems } = useContext(AppContext);


//   const handlePlus = () => {
//     valor++;
//     setValor(valor);
  
//   };
  
//   function handleMinus() {
//     valor--;
//     setValor(valor);
     
//   }

//   const teste = cartItems.map((cardItem) => cardItem.price*valor);


//   return(
//     <div className="cart-item-count">
          
//       <button 
//         type="button"
//         className="button__count-minus"
//         onClick={ handleMinus }>
//         <FaMinus />
//       </button>

//       <span className="item-count-span">{ valor }</span>

//       <button 
//         type="button"
//         className="button__count-plus"
//         onClick={ handlePlus }>
//         <FaPlus />
//         {console.log(teste) }
        
//       </button>

//     </div> 
//   );
// }


// export default CartCount;
