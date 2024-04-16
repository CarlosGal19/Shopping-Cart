import PropTypes from 'prop-types';
import { AddToCartIcon } from './Icons.jsx';
import { useCart } from '../hooks/useCart';
import './Products.css'

function Products ({ products }) {

    const { addToCart } = useCart();

    return(
        <main className='products'>
            <ul>
                {
                    products.map(product => {
                        return(
                            <li key={product.id}>
                                <img src={product.thumbnail} alt={product.title} />
                                <div>
                                    <strong>{product.title}</strong> - ${product.price}
                                </div>
                                <div>
                                    <button onClick={() => {addToCart(product)}}>
                                        <AddToCartIcon />
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
