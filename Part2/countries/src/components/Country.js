import React from "react";
import { useState } from "react";
import CountryInfo from "./CountryInfo";

const Country = ({ country }) => {
  const [toggle, setToggle] = useState(false);

  const changeState = (event) => {
    setToggle(!toggle);
  };

  return (
    <div>
      <label>{country.name.common} </label>
      <button onClick={changeState}>{toggle ? "hide" : "show"}</button>
      <CountryInfo country={country} toggle={toggle} />
    </div>
  );
};

export default Country;
