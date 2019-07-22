import {
  useEffect,
  useState
} from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useShoppingCart = () => {
  const [cart, setCart]               = useState( [] );
  // LS = LocalStorage
  const [testLS, getLS, setLS, delLS] = useLocalStorage( 'react_cart' );

  useEffect( () => {
    if (testLS()) {
      const savedCart = getLS();
      if (savedCart.length === 0) {
        delLS();
      } else {
        setCart( savedCart );
      }
    }
  }, [] );

  useEffect( () => {
    total();
  }, [cart] );

  function total() {
    return cart.reduce( ( acc, value ) => acc + value.price, 0 )
               .toFixed( 2 );
  }

  function addItem( item ) {
    setCart( [...cart, item] );
    setLS( [...cart, item] );
  }

  function removeItem( id ) {
    const newCart = cart.filter( item => item.id !== id );
    setCart( newCart );
    setLS( newCart );
  }

  return [cart, total, addItem, removeItem];
};