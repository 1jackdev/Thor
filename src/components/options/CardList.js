import OptionCard from "./OptionCard";
import "./CardList.css";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../hooks/UserContext";
import BackendApi from "../../api/api";
import BackButton from "../buttons/BackButton";
import { Redirect } from "react-router-dom";

const CardList = () => {
  const [options, setOptions] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { user, searchData } = useContext(UserContext);
  searchData.username = user ? user.username : "";
  
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
        <BackButton />
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
        <BackButton />
        {options.map((t) => (
          <OptionCard t={t} key={t.id} />
        ))}
      </div>
    );
  }

  if (options === undefined) return Redirect("/");

  if (options.length > 1) {
    return twoOptions();
  } else if (options.length === 1) {
    return oneOption();
  } else {
    return (
      <main className="container">
        <BackButton />
        <p>Uh oh. Looks like everythings closed. Try a different category!</p>
      </main>
    );
  }
};

export default CardList;
