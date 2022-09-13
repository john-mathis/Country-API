import React from "react";
import "..//Search/Search.css";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Search = ({
  countryData,
  setCountryData,
  getCountryData,
  searchCountryData,
}) => {
  return (
    <>
      <section className="search-container">
        <div className="input-container">
          <p className="search-icon">
            <FaSearch />
          </p>
          <input
            className="search-bar"
            type="text"
            placeholder="Search for a country..."
            onChange={(event) => {
              searchCountryData(event.target.value);
            }}
          />
        </div>
        <div className="filter-container">
          <button className="filter-button">
            Filter by Region
            <IoIosArrowDown />
          </button>
          <div className="filter-options">
            <a className="filter-links" href="/">
              Africa
            </a>
            <a className="filter-links" href="/">
              America
            </a>
            <a className="filter-links" href="/">
              Asia
            </a>
            <a className="filter-links" href="/">
              Europe
            </a>
            <a className="filter-links" href="/">
              Oceania
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
