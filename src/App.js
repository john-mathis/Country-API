import React, { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { createContext } from "react";
import axios from "axios";
import "../src/App.css";

import Header from "./Components/Header/Header";
import Search from "./Components/Search/Search";
import Card from "./Components/Card/Card";
import Loading from "./Components/Loading/Loading";
import InnerCardPage from "./Components/InnerCardPage/InnerCardPage";

export const ThemeContext = createContext(null);
const App = () => {
  const [countryData, setCountryData] = useState([]);
  const [doneLoading, setDoneLoading] = useState(null);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
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

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <main className="main-container" id={theme}>
        <Header />
        <Search
          searchCountryData={searchCountryData}
          filterByRegion={filterByRegion}
        />
        <Routes>
          <Route
            exact
            path="/Country-API/"
            element={
              <Card
                countryData={countryData}
                setCountryData={setCountryData}
                setDoneLoading={setDoneLoading}
              />
            }
          ></Route>
          <Route path="/Country-API/:name" element={<InnerCardPage />}></Route>
        </Routes>
      </main>
    </ThemeContext.Provider>
  );
};

export default App;
