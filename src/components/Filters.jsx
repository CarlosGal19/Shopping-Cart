import './Filters.css';
import { useId } from 'react';
import { useFilters } from '../hooks/useFilters';

export default function Filters() {

    // Get the setFilters from the context
    const { filters, setFilters } = useFilters();

    const priceId = useId();
    const categoryId = useId();

    const handleChangePrice = (e) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: e.target.value
        }))
    }

    const handleChangeCategory = (e) => {
        setFilters(prevState => ({
            ...prevState,
            category: e.target.value
        }))
    }

    return (
        <section className='filters'>
            <div>
                <label htmlFor={priceId}>Price</label>
                <input type="range" name="price" id={priceId} min={0} max={1500} step={20} onChange={handleChangePrice} />
                <span>{filters.minPrice}</span>
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
