import { useContext } from "react";
import { CartContext } from "../context/cart";

export function useCart() {

    // Get the cart and setCart from the context
    const context = useContext(CartContext);

    // If the hook is not used within a CartProvider, throw an error
    if(!context) {
        throw new Error('useCart must be used within a CartProvider');
    }

    return context;
}
