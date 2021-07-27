import OptionCard from "./OptionCard";
import "./CardList.css";
import { useContext, useEffect, useState } from "react";
import SearchContext from "../../hooks/SearchContext";
import BackendApi from "../../api/api";
const CardList = () => {
  const [things, setThings] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { searchData } = useContext(SearchContext);
  useEffect(() => {
    async function getOptions() {
      let { data } = await BackendApi.getOptions(searchData);
      setThings(data);
      setIsLoading(false);
    }
    getOptions();
  }, [searchData]);

  if (isLoading) {
    return <p data-testid="loading">Loading &hellip;</p>;
  }
  if (things.length > 0) {
    return (
      <div className="row">
        <h4 className="title">Pick One of these great options!</h4>
        {things.map((t) => (
          <OptionCard t={t} key={t.id} />
        ))}
      </div>
    );
  } else {
    return (
      <main>
        <p>Uh oh. Looks like everythings closed. Try a different category!</p>
      </main>
    );
  }
};

export default CardList;
