import axios from "axios";
import React, { useEffect, useState } from "react";

const OneCountry = ({ country }) => {
  const [weather, setWeather] = useState({});
  const api_key = process.env.REACT_APP_API_KEY;
  console.log(api_key);
  const lat = country.latlng[0];
  const lon = country.latlng[1];

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`
      )
      .then((response) => {
        setWeather(response.data);
      });
  }, []);

  const temp = (weather["main"]["temp"] - 274.15).toFixed(2);
  const windSpeed = weather["wind"]["speed"];

  let lngArray = [];
  let i = 0;
  for (let key in country.languages) {
    lngArray[i] = country.languages[key];
    i++;
  }

  return (
    <div>
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
      <h3>Weather in {country.capital}</h3>
      <p>temperature {temp} Celcius</p>
      <p>wind {windSpeed} m/s</p>
    </div>
  );
};

export default OneCountry;
