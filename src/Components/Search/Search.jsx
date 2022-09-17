import React from "react";
import "..//Search/Search.css";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Search = ({ searchCountryData, filterByRegion }) => {
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
        <select
          className="filter-container"
          onChange={(event) => {
            filterByRegion(event.target.value);
          }}
        >
          <option className="filter-links">Filter by Region</option>

          <option className="filter-links" value="Africa">
            Africa
          </option>
          <option className="filter-links" value="America">
            America
          </option>
          <option className="filter-links" value="Asia">
            Asia
          </option>
          <option className="filter-links" value="Europe">
            Europe
          </option>
          <option className="filter-links" value="Oceania">
            Oceania
          </option>
        </select>
      </section>
    </>
  );
};

export default Search;
