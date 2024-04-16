import { createContext, useReducer } from "react";
import PropTypes from 'prop-types';


export const CartContext = createContext();

const initialCart = [];
// Reducer that will update the state of the cart
const reducer = (state, action) => {
    const {type, payload} = action;
    switch (type){
        case 'ADD_TO_CART':{
            const productIndex = state.findIndex(p => p.id === payload.id);
            if(productIndex >= 0) {
                const newCart = [...state];
                newCart[productIndex].quantity++;
                return newCart;
            }
            return[
                ...state,
                {
                    ...payload,
                    quantity: 1
                }
            ];
        }
        case 'REMOVE_FROM_CART':{
            return state.filter(p => p.id !== payload.id);
        }
        case 'CLEAR_CART':{
            return initialCart;
        }
    }
    return state;
}

export function CartProvider({ children }) {

    // useReducer to manage the state of the cart
    const [state, dispatch] = useReducer(reducer, initialCart);

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
