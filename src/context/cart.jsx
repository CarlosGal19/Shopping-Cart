import { createContext, useState } from "react";
import PropTypes from 'prop-types';


export const CartContext = createContext();

export function CartProvider({ children }) {

    const [cart, setCart] = useState([]);

    function addToCart(product) {
        // Check if the product is already in the cart
        const productIndex = cart.findIndex(p => p.id === product.id);
        if(productIndex >= 0) {
            const newCart = structuredClone(cart);
            newCart[productIndex].quantity++;
            return setCart(newCart);
        }
        // If the product is not in the cart, add it
        return setCart( prevState => ({
            ...prevState,
            product,
            quantity: 1
        }));

    }

    function clearCart() {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };