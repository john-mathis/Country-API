import React, { useEffect, useState, useParams } from "react";
import "..//InnerCardPage/InnerCardPage.css";
import axios from "axios";
import { Link } from "react-router-dom";

const InnerCardPage = (countryData) => {
  const [country, setCountry] = useState([]);
  // const { name } = useParams();

  // const displayCountryData = countryData.map((data) => {
  const {
    flags,
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    border,
  } = countryData;

  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${name}`
      );
      console.log(response);

      setCountry(response);
    };
    fetchCountryData();
  });

  return (
    <React.Fragment>
      <h1>Country Data</h1>
      <Link to="/Country-API/">
        <button>Back Home</button>
      </Link>
      {/* <div className="inner-card-container">
          <div className="flag-container">
            <img className="inner-flag" src={flags.png} alt="country flags" />
          </div>
          <div className="country-info-container">
            <div className="detail-container">
              <p className="country-name">{name.common}</p>
              <p>
                <span className="bold-detail">Native Name:</span>{" "}
                {name.official}
              </p>
              <p>
                <span className="bold-detail">Population:</span>
                {population.toLocaleString()}
              </p>
              <p>
                <span className="bold-detail">Reigon:</span> {region}
              </p>
              <p>
                <span className="bold-detail">Sub Reigon:</span> {subregion}
              </p>
              <p>
                <span className="bold-detail">Capital:</span> {capital}
              </p>

              <p>
                <span className="bold-detail">Top Level Domain:</span> {tld}
              </p>
              <p>Currencies: </p>
              <p>Languages: </p>

              <p>Border Countries:</p>
              <p>{}</p>
              <p></p>
              <p></p>
            </div>
          </div>
        </div> */}
    </React.Fragment>
  );
  return (
    <div className="inner-page-container">
      <button>Back</button>displayCountryData}
    </div>
  );
};

export default InnerCardPage;
