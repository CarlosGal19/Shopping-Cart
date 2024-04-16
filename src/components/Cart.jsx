import './Cart.css';
import { ClearCartIcon, CartIcon } from './Icons';
import { useId } from 'react';

export default function Cart() {

    const cartId = useId();

    return(
        <>
            <label htmlFor={cartId} className='cart-button'>
                <CartIcon />
            </label>
            <input type='checkbox' id={cartId} hidden />
            <aside className='cart'>
                <ul>
                    <li>
                        <img src="https://i.dummyjson.com/data/products/6/thumbnail.png" alt="Yes" />
                        <div>
                            <strong>iPhone</strong> - $999
                        </div>
                        <footer>
                            <small>
                                Qty: 1
                            </small>
                        </footer>
                        <button>+</button>
                    </li>
                </ul>
                <button>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}
