import React, {useContext} from 'react';
import { CartContext } from '../contexts/CartContext';

// Components
import Item from './ShoppingCartItem';

const ShoppingCart = () => {
	const {cart, removeItem, total} = useContext(CartContext);

	return (
		<div className="shopping-cart">
			{cart.map(item => (
				<Item key={item.id} {...item} removeItem={removeItem} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${total()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
