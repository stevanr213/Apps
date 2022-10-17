import React from "react";

const CountryInfo = ({ country, toggle }) => {
  const style = toggle ? { display: "block" } : { display: "none" };
  let lngArray = [];
  let i = 0;
  for (let key in country.languages) {
    lngArray[i] = country.languages[key];
    i++;
  }
  return (
    <div style={style}>
      <h2>{country.name.common}</h2>
      <p>capital {country.capital}</p>
      <p>area {country.area}</p>
      <h3>languages:</h3>
      <ul>
        {lngArray.map((element) => (
          <li key={element}>{element}</li>
        ))}
      </ul>
      <img src={`${country.flags.svg}`} alt=""></img>
    </div>
  );
};

export default CountryInfo;
