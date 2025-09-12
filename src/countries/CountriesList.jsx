import { CountryCard } from "../components/CountryCard";

export const CountriesList = ({ countries }) => {
  if (!countries.length) return null;
  return (
    <div className="countries-list">
      {countries.map((country) => (
        <CountryCard key={country.name} country={country} />
      ))}
    </div>
  );
};