import { useContext } from 'react';
import { FiltersContext } from '../context/filters';

export function useFilters() {

  // Get the filters and setFilters from the context
  const { filters, setFilters } = useContext(FiltersContext);

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' || product.category === filters.category
        )
      )
    })
  }

  return { filters, filterProducts, setFilters }
}
