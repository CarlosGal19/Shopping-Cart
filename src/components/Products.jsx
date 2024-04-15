import PropTypes from 'prop-types';
import {AddToCartIcon} from './Icons.jsx';
import './Products.css'

function Products ({ products }) {

    return(
        <main>
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
                                    <AddToCartIcon />
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
