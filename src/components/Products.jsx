import PropTypes from 'prop-types';
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx';
import { useCart } from '../hooks/useCart';
import './Products.css'

function Products ({ products }) {

    const { cart, addToCart, removeFromCart } = useCart();

    const checkCart = product => {
        return cart.some(p => p.id === product.id)
    }

    console.log(cart);

    return(
        <main className='products'>
            <ul>
                {
                    products.map(product => {
                        const isOnCart = checkCart(product);
                        return(
                            <li key={product.id}>
                                <img src={product.thumbnail} alt={product.title} />
                                <div>
                                    <strong>{product.title}</strong> - ${product.price}
                                </div>
                                <div>
                                    <button onClick={() => isOnCart ? removeFromCart(product) : addToCart(product)}>
                                        {
                                            isOnCart
                                            ? <RemoveFromCartIcon />
                                            : <AddToCartIcon />
                                        }
                                    </button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </main>
    )

}


Products.propTypes = {
    products: PropTypes.array.isRequired
};

export default Products;
