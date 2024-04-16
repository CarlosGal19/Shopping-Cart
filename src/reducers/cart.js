// Get from LS the cart or an empty array if it doesn't exist
export const initialCart = JSON.parse(localStorage.getItem('cart')) || [];

// Function that update the cart in the local storage
export const updateCart = (state) => {
    localStorage.setItem('cart', JSON.stringify(state));
}

// Actions that will be dispatched to the reducer
export const CART_ACTIONS = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CLEAR_CART: 'CLEAR_CART'
}
// Reducer that will update the state of the cart
export const cartReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case CART_ACTIONS.ADD_TO_CART: {

            const productIndex = state.findIndex(p => p.id === payload.id);
            if (productIndex >= 0) {
                const newCart = [...state];
                newCart[productIndex].quantity++;
                updateCart(newCart);
                return newCart;
            }
            const newCart = [
                ...state,
                {
                    ...payload,
                    quantity: 1
                }
            ];
            updateCart(newCart);
            return newCart;
        }

        case CART_ACTIONS.REMOVE_FROM_CART: {
            const newCart = state.filter(p => p.id !== payload.id);
            updateCart(newCart);
            return newCart;
        }

        case CART_ACTIONS.CLEAR_CART: {
            updateCart([]);
            return [];
        }
    }
    return state;
}
