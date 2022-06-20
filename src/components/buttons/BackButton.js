import { useHistory } from "react-router";
import Button from "@mui/material/Button";

const BackButton = () => {
  const history = useHistory();

  function toOptions() {
    history.push("/decide");
  }
  return (
    <Button
      color="secondary"
      variant="contained"
      size="small"
      onClick={toOptions}
    >
      Back to Options
    </Button>
  );
};

export default BackButton;
