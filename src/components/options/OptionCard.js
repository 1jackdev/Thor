import "./OptionCard.css";
import { Link } from "react-router-dom";
import Chip from "@mui/material/Chip";
import { sortCategories } from "../../helpers/formatters";
const OptionCard = ({ t }) => {
  // sort categories alphabetically
  let isRecommended = !!t.weight;
  let categories = sortCategories(t.categories);
  function recommended() {
    return (
      <div className="card-container">
        <div className="msg">
          {" "}
          <Chip
            variant="contained"
            color="primary"
            label="Recommendation"
          ></Chip>
        </div>
        <Link to={`/places/${t.id}`}>
          <div className="rec card">
            <div className="option-title">
              <div>{t.name}</div>
              <p>{t.rating} ⭐️</p>
            </div>
            <ul className="category-list">
              {categories.map((c) => (
                <li className="bubble" key={c.alias}>
                  {c.title + " "}
                </li>
              ))}
            </ul>
          </div>
        </Link>
      </div>
    );
  }

  function notRecommended() {
    return (
      <div className="card-container">
        <div className="msg">
          <Chip
            variant="outlined"
            color="primary"
            label="Try something new"
          ></Chip>
        </div>
        <Link to={`/places/${t.id}`}>
          <div className="card">
            <div className="option-title">
              <div>{t.name}</div>
              <p>{t.rating} ⭐️</p>
            </div>
            <ul className="category-list">
              {categories.map((c) => (
                <li className="bubble" key={c.alias}>
                  {c.title + " "}
                </li>
              ))}
            </ul>
          </div>
        </Link>
      </div>
    );
  }

  return isRecommended ? recommended() : notRecommended();
};

export default OptionCard;
