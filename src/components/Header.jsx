import Filters from './Filters';
import PropTypes from 'prop-types';

export default function Header({ changeFilters }){
    return (
        <header>
            <h1>My Shopping Cart</h1>
            <Filters changeFilters={changeFilters} />
        </header>
    )
}

Header.propTypes = {
    changeFilters: PropTypes.func.isRequired,
  };
