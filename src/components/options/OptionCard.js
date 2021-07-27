import { Link } from "react-router-dom";
import "./OptionCard.css";
const OptionCard = ({ t }) => {
  return (
    <div className="column">
      <Link to={`/places/${t.id}`}>
        <div className="card">
          {t.name} - <span>{t.rating} stars</span>
        </div>
      </Link>
    </div>
  );
};

export default OptionCard;
