import "./CategoryCard.css";

const CategoryCard = ({ cat }) => {
  return (
    <div>
      <div className="cat-card">
        <h2 style={{ margin: "1rem 0" }}>{cat[0]}</h2>
        <ul className="cat-ul">
          {cat[1].map((f) => {
            return (
              <li className="cat-li" key={f}>
                {f}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CategoryCard;
