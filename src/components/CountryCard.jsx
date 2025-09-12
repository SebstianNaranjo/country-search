import PropTypes from "prop-types";

export const CountryCard = ({ country }) => {
    return (
        <div className="country-card">
            <img src={country.flag} alt={`Flag of ${country.name}`} className="country-flag" />
            <h2 className="country-name">{country.name}</h2>
            <p><strong>Capital:</strong> {country.capital}</p>
            <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
            <p><strong>Region:</strong> {country.region}</p>
        </div>
    );
};

CountryCard.propTypes = {
    country: PropTypes.shape({
        name: PropTypes.string.isRequired,
        capital: PropTypes.string.isRequired,
        flag: PropTypes.string.isRequired,
        population: PropTypes.number.isRequired,
        region: PropTypes.string.isRequired,
    }).isRequired,
};
