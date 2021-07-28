import { Link } from "react-router-dom";
import "./OptionCard.css";
const OptionCard = ({ t }) => {
  return (
    <div className="column">
      <Link to={`/places/${t.id}`}>
        <div className="card">
          <h2>{t.name}</h2>
          <div>{t.rating} ⭐️</div>
        </div>
      </Link>
    </div>
  );
};

export default OptionCard;
