import React, { useState, useEffect } from "react";
import axios from "axios";
import "../src/App.css";

import Header from "./Components/Header/Header";
import Search from "./Components/Search/Search";
import Card from "./Components/Card/Card";

const App = () => {
  const [countryData, setCountryData] = useState([]);

  const getCountryData = async () => {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    setCountryData(response.data);
  };

  const searchCountryData = async (countryName) => {
    if (countryName.length < 3 || countryName === null) return;

    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${countryName}`
    );
    setCountryData(response.data);
  };

  useEffect(() => {
    getCountryData();
  }, []);

  return (
    <>
      <Header />
      <Search searchCountryData={searchCountryData} />
      <Card countryData={countryData} />
    </>
  );
};

export default App;
