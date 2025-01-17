import React, {useContext} from 'react';
import {CartContext} from '../contexts/CartContext'
import Item from './ShoppingCartItem';

// Components

const ShoppingCart = () => {
	const cart  = useContext(CartContext);
	const getCartTotal = () => {
		return Array.from(cart).reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{Array.from(cart).map(item => (
				<Item key={item.id} {...item} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
