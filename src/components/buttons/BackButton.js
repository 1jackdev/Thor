import "./BackButton.css"
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <div className="btn-back">
      <Link to="/">Search Again</Link>
    </div>
  );
};

export default BackButton;
