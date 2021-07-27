import React, { useContext } from "react";
import SearchForm from "../SearchForm";
import SearchContext from "../../hooks/SearchContext";
const Home = () => {
  const { searchData, setSearchData } = useContext(SearchContext);
  function LoggedOut() {
    return (
      <main className="container">
        <h1 className="title">
          <p style={{ color: "salmon" }}>Cool With Whatever!</p>
        </h1>
        <div className="">
          <p>Can't Decide? Let us pick for you!</p>
          <SearchForm searchData={searchData} setSearchData={setSearchData} />
        </div>
        {""}
      </main>
    );
  }

  //   function LoggedIn() {
  //     return (
  //       <div className="text-center">
  //         <h1>Jack's Jobly</h1>
  //         <p>Find the right company, find the right job.</p>
  //         <h3>Welcome Back, {user.username || user.firstName}!</h3>
  //       </div>
  //     );
  //   }

  return <div className="container">{LoggedOut()}</div>;
};

export default Home;
