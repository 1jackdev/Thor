import { useContext } from "react";
import Button from "@mui/material/Button";

import BackendApi from "../../api/api";
import UserContext from "../../hooks/UserContext";

const GoButton = ({ type, href, placeData }) => {
  const { user } = useContext(UserContext);
  async function handleClick() {
    if (user) {
      try {
        const { id, name, categories } = placeData;
        await BackendApi.AddSelection(user.username, id, name, categories);
      } catch (e) {
        console.error(e);
      }
    }
  }
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <Button
        onClick={handleClick}
        variant="contained"
        size="large"
        color={type === "google" ? "success" : "primary"}
      >
        {type} Maps
      </Button>
    </a>
  );
};

export default GoButton;
