
import React from 'react';
import Product from './Product';

const ProductList = () => {
  return (
    <div>
      <h2>Product List</h2>
      <Product id={1} name="Shirt" />
      <Product id={2} name="Apple" />
      <Product id={3} name="Banana" />
      <Product id={4} name="Laptop" />
      <Product id={5} name="Computer" />
    </div>
  );
};

export default ProductList;
