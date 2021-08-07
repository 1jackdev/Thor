import "./BackButton.css"
import { Link } from "react-router-dom";
import {Button} from "reactstrap"
const BackButton = () => {
  return (
    <Button className="btn-back">
      <Link to="/">Search Again</Link>
    </Button>
  );
};

export default BackButton;
