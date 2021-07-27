import { Link } from "react-router-dom";
import "./OptionCard.css";
const OptionCard = ({ t }) => {
  return (
    <div>
      <Link to={`/places/${t.id}`}>
        <div className="card">
          <div>
            {t.name} - <span>{t.rating} stars</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default OptionCard;
