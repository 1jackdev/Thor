import OptionCard from "./OptionCard";
import "./CardList.css";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../hooks/UserContext";
import BackendApi from "../../api/api";
import HomeButton from "../buttons/HomeButton";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router";

const CardList = ({ setSearchErrors }) => {
  const history = useHistory();
  const [options, setOptions] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { user, searchData } = useContext(UserContext);
  searchData.username = user ? user.username : null;

  useEffect(() => {
    async function getOptions() {
      try {
        let data = await BackendApi.getOptions(searchData);
        if (data.error) throw data.error.description;
        setOptions(data.results);
        setIsLoading(false);
        setSearchErrors([]);
      } catch (error) {
        setSearchErrors(error);
        history.push("/");
      }
    }
    getOptions();
  }, [history, searchData, setSearchErrors]);

  if (isLoading) {
    return <p data-testid="loading">Loading &hellip;</p>;
  }

  if (options && options[1]) options[1].weight = 0;

  function twoOptions() {
    return (
      <div className="container">
        <div className="title">Take your pick!</div>
        <div className="options-back-btn">
          <HomeButton />
        </div>
        <div className="option-list">
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
        <h4 className="title">We've only got 1 option for you. You're welcome! 😜</h4>
        <HomeButton />
        <div className="container one-result">
          <OptionCard
            t={options[0]}
            key={options[0].id}
          />
        </div>
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
      <div className="container">
        <HomeButton />
        <p style={{ color: "white", whiteSpace: "pre-wrap" }}>
          Uh oh. Looks like everything is closed! <br /> Try searching for a
          different category, or increasing your search radius.
        </p>
      </div>
    );
  }
};

export default CardList;
