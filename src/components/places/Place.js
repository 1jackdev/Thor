import "./Place.css";
import React, { useContext, useEffect, useState } from "react";
import { handlePlaceData, sortCategories } from "../../helpers/formatters";
import { useParams } from "react-router-dom";
import UserContext from "../../hooks/UserContext";
import BackendApi from "../../api/api";
import BackButton from "../buttons/BackButton";
import GoButton from "../buttons/GoButton";

export default function Place() {
  let closingTime;
  let categories;
  let googleDirectionsLink;
  let appleDirectionsLink;
  const { id } = useParams();
  const { searchData } = useContext(UserContext);
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
    let address = placeData.location.display_address;
    closingTime = handlePlaceData(placeData);
    categories = sortCategories(placeData.categories);
    googleDirectionsLink = `https://maps.google.com/maps/dir/${searchData.location}/${address}`;
    appleDirectionsLink = `http://maps.apple.com/?saddr=${searchData.location}&daddr=${address}`;
  }

  const closingTimeBox = () => {
    if (!closingTime) {
      return;
    } else {
      return <h3 className="closing">Closes at {closingTime}</h3>;
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
        <div className="name" style={{ color: "#784F41" }}>
          {placeData.name}
        </div>
        <div>
          <span className="descriptor">What's it like?</span>{" "}
          <ul className="category-list">
            {categories.map((c) => (
              <li className="bubble" key={c.alias}>
                {c.title + " "}
              </li>
            ))}
          </ul>
        </div>
        {""}

        <div className="btns">
          {closingTimeBox()}
          <GoButton
            type={"google"}
            href={googleDirectionsLink}
            placeData={placeData}
          />
          <GoButton
            type={"apple"}
            href={appleDirectionsLink}
            placeData={placeData}
          />
        </div>
      </main>
    </div>
  );
}
