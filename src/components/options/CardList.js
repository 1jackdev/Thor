import OptionCard from "./OptionCard";
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
    return things.map((t) => <OptionCard t={t} key={t.id} />);
  } else {
    return (
      <main>
        <p>Uh oh. Looks like everythings closed. Try a different category!</p>
      </main>
    );
  }
};

export default CardList;
