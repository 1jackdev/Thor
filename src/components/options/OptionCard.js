import { Link } from "react-router-dom";
import "./OptionCard.css";
import { sortCategories } from "../../helpers/formatters";
const OptionCard = ({ t }) => {
  // sort categories alphabetically
  let isRecommended = !!t.weight;
  let categories = sortCategories(t.categories);
  function recommended() {
    return (
      <div className="column">
        <div className="msg">
          {" "}
          <span className="rec-span">Recommendation</span>{" "}
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
      <div className="column">
        <div className="msg">Try something new</div>
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
