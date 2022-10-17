import Country from "./Country";
import OneCountry from "./OneCountry";

const Output = ({ countries }) => {
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else if (countries.length === 1) {
    const country = countries[0];
    return (
      <div>
        <OneCountry country={country} />
      </div>
    );
  } else {
    return (
      <div>
        {countries.map((country) => (
          <Country key={country.tld} country={country} />
        ))}
      </div>
    );
  }
};

export default Output;
