import OptionCard from "./OptionCard";
import "./CardList.css";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import SearchContext from "../../hooks/SearchContext";
import BackendApi from "../../api/api";

const CardList = () => {
  const [options, setOptions] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { searchData } = useContext(SearchContext);
  useEffect(() => {
    async function getOptions() {
      let { results } = await BackendApi.getOptions(searchData);
      setOptions(results);
      setIsLoading(false);
    }
    getOptions();
  }, [searchData]);

  if (isLoading) {
    return <p data-testid="loading">Loading &hellip;</p>;
  }

  function twoOptions() {
    return (
      <div className="container">
        <div className="title">Take your pick!</div>
        <div className="btn-back">
          <Link to="/">Search Again</Link>
        </div>
        <div className="row">
          {options.map((t) => (
            <OptionCard t={t} key={t.id} />
          ))}
        </div>
      </div>
    );
  }

  function oneOption() {
    return (
      <div className="container">
        <h4 className="title">We've only got 1 option for you. Easy Peasy!</h4>
        <div className="btn-back">
          <Link to="/">Search Again</Link>
        </div>
        {options.map((t) => (
          <OptionCard t={t} key={t.id} />
        ))}
      </div>
    );
  }

  if (options === null) {
    return (
      <main>
        <p>Uh oh. Looks like everythings closed. Try a different category!</p>
      </main>
    );
  }
  if (options.length > 1) {
    return twoOptions();
  } else if (options.length === 1) {
    return oneOption();
  }
};

export default CardList;
