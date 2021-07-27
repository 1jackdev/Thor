import "./Place.css";
import React, { useContext, useEffect, useState } from "react";
import { handlePlaceData } from "../../helpers/formatters";
import { Link, useParams } from "react-router-dom";
import SearchContext from "../../hooks/SearchContext";
import BackendApi from "../../api/api";
export default function Place() {
  let closingTime;
  let directionsLink;
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
    directionsLink = `https://maps.google.com/maps/dir/${searchData.location}/${address}`;
  }
  // convert hours

  if (isLoading) {
    return <p data-testid="loading">Loading &hellip;</p>;
  }

  return (
    <div className="container">
      <main>
        <div className="btn-back">
          <Link to="/">Go Back</Link>
        </div>
        <div className="title">
          <h4 style={{ color: "salmon" }}>{placeData.name}</h4>
        </div>
        {""}
        <div>
          <h2>
            Closes at <span style={{ color: "green" }}>{closingTime}</span>
          </h2>
          <button className="btn">
            {" "}
            <a target="_blank" href={directionsLink} rel="noreferrer">
              Lets Try It!
            </a>{" "}
          </button>
        </div>
      </main>
    </div>
  );
}
