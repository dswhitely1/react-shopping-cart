import React, { useState } from 'react';
import { Route } from 'react-router-dom';
// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import { CartProvider } from './contexts/CartContext';

import { ProductProvider } from './contexts/ProductContext';
import data from './data';
import { useShoppingCart } from './hooks/useShoppingCart';

function App() {
  const [products]      = useState( data );
  // const [cart, setCart] = useState( [] );
  const [cart, total, addItem, removeItem] = useShoppingCart();
  // const addItem = item => {
  //   setCart( [...cart, item] );
  // };

  // const removeItem = id => setCart(cart.filter(item => item.id !== id));

  return (
    <ProductProvider value={{
      products,
      addItem
    }}>
      <CartProvider value={{cart, removeItem, total}}>
        <div className="App">
          <Navigation cart={cart} />

          {/* Routes */}
          <Route exact path="/" component={Products} />
          <Route
            path="/cart"
            component={ShoppingCart} />
        </div>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
