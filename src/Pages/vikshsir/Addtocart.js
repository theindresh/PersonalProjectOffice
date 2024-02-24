// App.js
import React from 'react';
import ProductList from './ProductList';
import { CartProvider } from './CartContext';
import Cart from './Cart'

const Addtocart = () => {
    return (
        <CartProvider>
            <div>
                <h1>Shopping Cart App</h1>
                <div className='d-flex gap-2'>
                    <div>
                        <ProductList />
                    </div>
                    <div>
                        <Cart/>
                    </div>
                </div>
            </div>
        </CartProvider>
    );
};

export default Addtocart;
