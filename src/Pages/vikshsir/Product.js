
import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Product = ({ id, name }) => {
  const { addItem, removeItem} = useContext(CartContext);

  const handleAddToCart = () => {
    addItem(name);
  };

  const handleRemoveFromCart = () => {
    removeItem(name);
  };

  return (
    <div>
      <p>{name}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <button onClick={handleRemoveFromCart}>Remove from Cart</button>
     
    </div>
  );
};

export default Product;
