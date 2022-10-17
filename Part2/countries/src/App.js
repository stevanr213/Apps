import React from "react";

import { useState, useEffect } from "react";
import Output from "./components/Output";
import Search from "./components/Search";
import axios from "axios";

const App = () => {
  const [filter, setFilter] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const searchContries = (event) => {
    setFilter(event.target.value);
  };

  const filteredCountries = countries.filter(
    (country) =>
      country.name.common.toLowerCase().search(filter.toLowerCase()) >= 0
  );

  return (
    <div>
      <Search value={filter} onChange={searchContries} />
      <Output countries={filteredCountries} />
    </div>
  );
};

export default App;
