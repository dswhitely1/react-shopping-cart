import React, { useState } from 'react';
import { Route } from 'react-router-dom';
// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import { CartProvider } from './contexts/CartContext';

import { ProductProvider } from './contexts/ProductContext';
import data from './data';

function App() {
  const [products]      = useState( data );
  const [cart, setCart] = useState( [] );

  const addItem = item => {
    setCart( [...cart, item] );
  };

  const removeItem = id => setCart(cart.filter(item => item.id !== id));

  return (
    <ProductProvider value={{
      products,
      addItem
    }}>
      <CartProvider value={{cart, removeItem}}>
        <div className="App">
          <Navigation cart={cart} />

          {/* Routes */}
          <Route exact path="/" component={Products} />
          <Route
            path="/cart"
            render={() => <ShoppingCart cart={cart} />}
          />
        </div>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
