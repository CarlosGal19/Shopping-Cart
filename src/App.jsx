import { useContext, useState } from 'react'
import Products from './components/Products.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { products as initialProducts } from './mocks/products.json'
import { FiltersContext } from './context/filters.jsx'

function useFilters() {

  const { filters, setFilters } = useContext(FiltersContext);

  const filterProducts = (products) => {
    return products.filter( product => {
      return(
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' || product.category === filters.category
        )
      )
    })
  }

  return { filters, filterProducts, setFilters }
}


function App() {

  const [products] = useState(initialProducts);
  const { filters, filterProducts, setFilters } = useFilters();
  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
      <Footer filters={filters}/>
    </>
  )
}

export default App
