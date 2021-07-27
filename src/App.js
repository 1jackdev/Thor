import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import SearchContext from "./hooks/SearchContext";
import Routes from "./routes/Routes";
function App() {
  const INITIAL_STATE = {
    type: "restaurant",
    location: "",
  };
  const [searchData, setSearchData] = useState(INITIAL_STATE);
  return (
    <BrowserRouter>
      <SearchContext.Provider value={{ searchData, setSearchData }}>
        <div className="App">
          {/* <NavBar logout={logout} /> */}
          <Routes />
        </div>
      </SearchContext.Provider>
    </BrowserRouter>
  );
}

export default App;
