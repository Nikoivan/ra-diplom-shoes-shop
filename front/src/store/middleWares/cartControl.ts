import { Dispatch } from '@reduxjs/toolkit';
import { CartItemProps } from '../../components/Main/Cart/Item/Item';
import { addToCart, clearCart, removeFromCart } from '../../assets/services/clients/cart.client';

enum ActionTypes {
	ADD = 'cart/addToCart',
	REMOVE = 'cart/removeFromCart',
	CLEAR = 'cart/clear',
}

type AddAction = { type: ActionTypes.ADD; payload: CartItemProps };
type RemoveAction = { type: ActionTypes.REMOVE; payload: number };
type ClearAction = { type: ActionTypes.CLEAR };

type Actions = AddAction | RemoveAction | ClearAction;

const cartControl = () => (next: Dispatch<Actions>) => (action: Actions) => {
	if (action.type === ActionTypes.ADD) {
		addToCart(action.payload);
	} else if (action.type === ActionTypes.REMOVE) {
		removeFromCart(action.payload);
	} else if (action.type === ActionTypes.CLEAR) {
		clearCart();
	}

	return next(action);
};

export default cartControl;
