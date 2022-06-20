import { useHistory } from "react-router";
import Button from "@mui/material/Button";

const HomeButton = () => {
  const history = useHistory();

  function toHome() {
    history.push("/");
  }
  return (
    <Button
      className="btn-home"
      color="info"
      variant="contained"
      size="small"
      onClick={toHome}
    >
      Search Again
    </Button>
  );
};

export default HomeButton;
