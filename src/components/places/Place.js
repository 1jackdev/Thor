import "./Place.css";
import React, { useContext, useEffect, useState } from "react";
import { handlePlaceData } from "../../helpers/formatters";
import { useParams } from "react-router-dom";
import SearchContext from "../../hooks/SearchContext";
import BackendApi from "../../api/api";
import BackButton from "../buttons/BackButton";

export default function Place() {
  let closingTime;
  let googleDirectionsLink;
  let appleDirectionsLink;
  const { id } = useParams();
  const { searchData } = useContext(SearchContext);
  const [isLoading, setIsLoading] = useState(true);
  const [placeData, setPlaceData] = useState(null);
  useEffect(() => {
    async function getDetails() {
      let { results } = await BackendApi.getDetails(id);
      setPlaceData(results);
      setIsLoading(false);
    }
    getDetails();
  }, [id]);

  if (placeData) {
    closingTime = handlePlaceData(placeData);
    let address = placeData.location.display_address;
    googleDirectionsLink = `https://maps.google.com/maps/dir/${searchData.location}/${address}`;
    appleDirectionsLink = `http://maps.apple.com/?saddr=${searchData.location}&daddr=${address}`;
  }

  const closingTimeBox = () => {
    if (!closingTime) {
      return <div></div>;
    } else {
      return (
        <h3>
          Closes at <span style={{ color: "green" }}>{closingTime}</span>
        </h3>
      );
    }
  };
  // convert hours

  if (isLoading) {
    return <p data-testid="loading">Loading &hellip;</p>;
  }

  return (
    <div className="container">
      <main>
        <BackButton />
        <div className="name" style={{ color: "salmon" }}>
          {placeData.name}
        </div>
        {""}
        <div>
          {closingTimeBox()}
          <button className="btn google">
            {" "}
            <a target="_blank" href={googleDirectionsLink} rel="noreferrer">
              Google Maps
            </a>{" "}
          </button>
          <button className="btn apple">
            {" "}
            <a target="_blank" href={appleDirectionsLink} rel="noreferrer">
              Apple Maps
            </a>{" "}
          </button>
        </div>
      </main>
    </div>
  );
}
