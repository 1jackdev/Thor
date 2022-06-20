import "./Place.css";
import React, { useContext, useEffect, useState } from "react";
import { handlePlaceData, sortCategories } from "../../helpers/formatters";
import { useParams } from "react-router-dom";
import UserContext from "../../hooks/UserContext";
import useGeolocation from "../../hooks/useGeolocation";
import BackendApi from "../../api/api";
import GoButton from "../buttons/GoButton";
import HomeButton from "../buttons/HomeButton";
import BackButton from "../buttons/BackButton";

export default function Place() {
  let closingTime;
  let categories;
  let googleDirectionsLink;
  let appleDirectionsLink;
  const { id } = useParams();
  const { searchData } = useContext(UserContext);
  const geo = useGeolocation() || null;
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

  const departingAddr = !geo.error
    ? geo.coordinates.lat + "," + geo.coordinates.lng
    : searchData.location;

  if (placeData) {
    let address = placeData.location.display_address;
    closingTime = handlePlaceData(placeData);
    categories = sortCategories(placeData.categories);
    googleDirectionsLink = `https://maps.google.com/maps/dir/${departingAddr}/${address}`;
    appleDirectionsLink = `http://maps.apple.com/?saddr=${departingAddr}&daddr=${address}`;
  }

  const closingTimeBox = () => {
    if (!closingTime) {
      return;
    } else {
      return <h3 className="closing">Closes at {closingTime}</h3>;
    }
  };

  if (isLoading) {
    return <p data-testid="loading">Loading &hellip;</p>;
  }

  return (
    <div className="container">
      <div className="page">
        <div className="nav-btn-drawer">
          <BackButton />
          <HomeButton />
        </div>
        <div className="name" style={{ color: "white" }}>
          {placeData.name}
        </div>
        <div className="place-details">
          <span className="descriptor">What's it like?</span>{" "}
          <ul className="category-list">
            {categories.map((c) => (
              <li className="place-bubble" key={c.alias}>
                {c.title + " "}
              </li>
            ))}
          </ul>
        </div>
        {""}
        {closingTimeBox()}
        <div className="dir-btns">
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
      </div>
    </div>
  );
}
