import './Filters.css';
import { useState, useId } from 'react';
import PropTypes from 'prop-types';

export default function Filters({ changeFilters }) {

    const [price, setPrice] = useState(0);
    const priceId = useId();
    const categoryId = useId();

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
                <label htmlFor={priceId}>Price</label>
                <input type="range" name="price" id={priceId} min={0} max={1500} step={20} onChange={handleChangePrice} />
                <span>{price}</span>
            </div>
            <div>
                <label htmlFor={categoryId}>Category</label>
                <select name="category" id={categoryId} onChange={handleChangeCategory}>
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
