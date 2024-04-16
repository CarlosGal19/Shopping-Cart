import { createContext, useReducer } from "react";
import { cartReducer, initialCart } from "../reducers/cart";
import PropTypes from 'prop-types';

// Create a context to store the cart
export const CartContext = createContext();

// Provide the context to the components to access the cart
function useCartReducer() {
    const [state, dispatch] = useReducer(cartReducer, initialCart);

    const addToCart = (product) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: product
        });
    }

    const clearCart = () => {
        dispatch({
            type: 'CLEAR_CART'
        });
    }

    const removeFromCart = (product) => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: product
        });
    }

    return { state, addToCart, clearCart, removeFromCart };
}
export function CartProvider({ children }) {

    const { state, addToCart, clearCart, removeFromCart } = useCartReducer();

    // Provider that will wrap the application
    return (
        <CartContext.Provider value={{ cart: state, addToCart, clearCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
