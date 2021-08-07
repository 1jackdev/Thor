import { Link } from "react-router-dom";
import "./OptionCard.css";
import { sortCategories } from "../../helpers/formatters";
const OptionCard = ({ t }) => {
  // sort categories alphabetically
  let categories = sortCategories(t.categories);
  return (
    <div className="column">
      <Link to={`/places/${t.id}`}>
        <div className="card">
          <div className="option-title">
            <div>{t.name}</div>
            <p>{t.rating} ⭐️</p>
          </div>
          <hr />
          <ul className="category-list">
            {categories.map((c) => (
              <li key={c.alias}>{c.title + " "}</li>
            ))}
          </ul>
        </div>
      </Link>
    </div>
  );
};

export default OptionCard;
