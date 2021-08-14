import "./BackButton.css";
import { useHistory } from "react-router";
import { Button } from "reactstrap";

const BackButton = () => {
  const history = useHistory();
  
  function toHome() {
    history.push("/");
  }
  return (
    <Button className="btn-back" onClick={toHome}>
      Search Again
    </Button>
  );
};

export default BackButton;
