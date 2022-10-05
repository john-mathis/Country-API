import React, { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";
import axios from "axios";
import "../src/App.css";

import Header from "./Components/Header/Header";
import Search from "./Components/Search/Search";
import Card from "./Components/Card/Card";
import Loading from "./Components/Loading/Loading";
import InnerCardPage from "./Components/InnerCardPage/InnerCardPage";

const App = () => {
  const [countryData, setCountryData] = useState([]);
  const [doneLoading, setDoneLoading] = useState(null);

  const getCountryData = async () => {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    setCountryData(response.data);
    setDoneLoading(response.data);
  };

  const searchCountryData = async (countryName) => {
    if (countryName.length < 3 || countryName === null) return;

    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${countryName}`
    );
    setCountryData(response.data);
  };

  const filterByRegion = async (region) => {
    if (region === "") return;
    const response = await axios.get(
      `https://restcountries.com/v3.1/region/${region}`
    );

    setCountryData(response.data);
  };

  useEffect(() => {
    getCountryData();
  }, []);

  return (
    <>
      <Header />
      <InnerCardPage countryData={countryData} />
      <Search
        searchCountryData={searchCountryData}
        filterByRegion={filterByRegion}
      />
      {doneLoading ? <Card countryData={countryData} /> : <Loading />}
    </>
  );
};

export default App;
