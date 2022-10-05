import React from "react";
import "..//Card/Card.css";

const Card = ({ countryData }) => {
  const flagData = countryData.map((info) => {
    const { latlng, flags, name, population, region, capital } = info;

    const clickedCountry = (event) => {
      console.log(event);
    };

    return (
      <React.Fragment key={latlng}>
        <div className="card-container" onClick={clickedCountry}>
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
        </div>
      </React.Fragment>
    );
  });

  return <div className="card-grid-container">{flagData}</div>;
};

export default Card;
