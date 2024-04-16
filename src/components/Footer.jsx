import PropTypes from 'prop-types';
import './Footer.css';

export default function Footer({ filters }) {

    return(
        <>
            <footer className="footer">
                {
                    JSON.stringify(filters, null, 2)
                }
            </footer>
        </>
    )

}

Footer.propTypes = {
    filters: PropTypes.object.isRequired,
};
