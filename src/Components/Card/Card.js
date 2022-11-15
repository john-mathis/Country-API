import React, { useEffect } from "react";
import axios from "axios";
import "..//Card/Card.css";
import { Link } from "react-router-dom";

const Card = ({ countryData, setCountryData }) => {
  const getCountryData = async () => {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    setCountryData(response.data);
  };

  useEffect(() => {
    getCountryData();
  });

  const flagData = countryData.map((info) => {
    const { latlng, flags, name, population, region, capital } = info;

    console.log(name.common);
    return (
      <React.Fragment key={latlng}>
        <div className="card-container">
          <div className="flag-container">
            <img className="flag" src={flags.png} alt="flag of country" />
          </div>

          <div className="detail-container">
            <h2 className="country-name">{name.common}</h2>
            <p className="population">
              <span className="bold-detail">Population:</span>
              {population.toLocaleString()}
            </p>
            <p className="reigon">
              <span className="bold-detail">Reigon:</span> {region}
            </p>
            <p className="capital">
              <span className="bold-detail">Capital:</span> {capital}
            </p>
          </div>

          <Link to={`${name}`}>Learn More</Link>
        </div>
      </React.Fragment>
    );
  });

  return <div className="card-grid-container">{flagData}</div>;
};

export default Card;
