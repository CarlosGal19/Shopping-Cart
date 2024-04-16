import './Cart.css';
import { ClearCartIcon, CartIcon } from './Icons';
import { useCart } from '../hooks/useCart';
import { useId } from 'react';
import PropTypes from 'prop-types';

function CartItem({ thumbnail, title, price, quantity, addToCart}) {
    return(
        <li>
        <img src={thumbnail} alt={title} />
        <div>
            <strong>{title}</strong> - ${price}
        </div>
        <footer>
            <button onClick={addToCart}>
                Qty: {quantity}
            </button>
        </footer>
        <button onClick={addToCart}>+</button>
    </li>
    )
}

export default function Cart() {

    const cartId = useId();
    const { cart, addToCart, clearCart } = useCart();

    return(
        <>
            <label htmlFor={cartId} className='cart-button'>
                <CartIcon />
            </label>
            <input type='checkbox' id={cartId} hidden />
            <aside className='cart'>
                <ul>
                    {
                        cart.map(product => (
                            <CartItem
                                key={product.id}
                                {...product}
                                addToCart={() => addToCart(product)}
                            />
                        ))
                    }
                </ul>
                <button onClick={clearCart}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}

CartItem.propTypes = {
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    addToCart: PropTypes.func.isRequired
}
