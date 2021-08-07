import "./GoButton.css";
import { useContext } from "react";

import BackendApi from "../../api/api";
import UserContext from "../../hooks/UserContext";

const GoButton = ({ type, href, placeData }) => {
  const { user } = useContext(UserContext);
  async function handleClick() {
    if (user) {
      try {
        let placeId = placeData.id;
        let placeName = placeData.name;
        await BackendApi.AddSelection(user.username, placeId, placeName);
      } catch (e) {
        console.error(e);
      }
    }
  }
  return (
    <button onClick={handleClick} className={"btn-go " + type}>
      <a href={href} target="_blank" rel="noreferrer">
        {type} Maps
      </a>
    </button>
  );
};

export default GoButton;
