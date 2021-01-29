import React from "react";
import { render } from "react-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";
import { Link, Router } from "@reach/router"
import Details from "./Details";

const App = () => {
  return (
    <React.StrictMode>
          <div>
            <header>
                <Link to="/">
                        Adopt ME!
                </Link> 
            </header>
            <Router>
                <Details path="/details/:id" />
                <SearchParams path="/" />
            </Router>   
      </div>
    </React.StrictMode>
  );
};
render(<App />, document.getElementById("root"));
