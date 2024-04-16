import { createContext, useState } from "react";
import PropType from 'prop-types';

// Create a context to store the filters
// This has to be consumed by the components that need the filters
export const FiltersContext = createContext();

// Provide the context to the components
// This will provide data to the components that need the filters
export function FiltersProvider ({ children }) {

    const [filters, setFilters] = useState({
      category: 'all',
      minPrice: 0
    });

    // Provide the filters and setFilters to the children
    return(
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}>
            {children}
        </FiltersContext.Provider>
    )
}

FiltersProvider.propTypes = {
    children: PropType.node.isRequired
}
