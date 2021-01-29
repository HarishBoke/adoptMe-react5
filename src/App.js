import React, { useState } from "react";
import { render } from "react-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";
import { Link, Router } from "@reach/router";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

const App = () => {
  // it is more of hook but instead of retrive array we are getting entire array
  // const [themeHook, setThemeHook
  const themeHook = useState("peru");
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/">Adopt ME!</Link>
          </header>
          <Router>
            <Details path="/details/:id" />
            <SearchParams path="/" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};
render(<App />, document.getElementById("root"));
