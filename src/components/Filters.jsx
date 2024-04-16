import './Filters.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Filters({ changeFilters }) {

    const [price, setPrice] = useState(0);

    const handleChangePrice = (e) => {
        setPrice(e.target.value);
        changeFilters(prevState => ({
            ...prevState,
            minPrice: e.target.value
        }))
    }

    const handleChangeCategory = (e) => {
        changeFilters(prevState => ({
            ...prevState,
            category: e.target.value
        }))
    }

    return(
        <section className='filters'>
            <div>
                <label htmlFor="price">Price</label>
                <input type="range" name="price" id="price" min={0} max={1500} step={20} onChange={handleChangePrice} />
                <span>{price}</span>
            </div>
            <div>
                <label htmlFor="category">Category</label>
                <select name="category" id="category" onChange={handleChangeCategory}>
                    <option value="all">All</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Smartphones</option>
                </select>
            </div>
        </section>
    )
}

Filters.propTypes = {
    changeFilters: PropTypes.func.isRequired,
  };
