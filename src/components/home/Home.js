import React, { useContext } from "react";
import SearchForm from "../forms/SearchForm";
import SearchContext from "../../hooks/SearchContext";
const Home = () => {
  const { searchData, setSearchData } = useContext(SearchContext);
  function LoggedOut() {
    return (
      <main>
        <h2 className="title">
          <div style={{ color: "#FF5E5B" }}>Cool With Whatever!</div>
        </h2>
        <h3 style={{ padding: "2rem" }}>Can't Decide? Let us pick for you!</h3>
        <SearchForm searchData={searchData} setSearchData={setSearchData} />
        {""}
      </main>
    );
  }

  //   function LoggedIn() {
  //     return (
  //       <div className="text-center">
  //         <h1>Cool With Whatever</h1>
  //         <h3>Welcome Back, {user.username || user.firstName}!</h3>
  //       </div>
  //     );
  //   }

  return <div className="container">{LoggedOut()}</div>;
};

export default Home;
