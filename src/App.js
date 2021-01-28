import React from "react";
import { render } from "react-dom";
// import Pet from "./Pet";
import SearchParams from './SearchParams'

const App = () => {
  //   return React.createElement(
  //     "div",
  //     { id: "something-important" },
  //     React.createElement("h1", {}, "Adopt Me!"),

  //     // React.createElement(Pet), // other two params optional
  //     React.createElement(Pet, {
  //       name: "Sheru",
  //       animal: "Dog",
  //       breed: "Havanese",
  //     }),
  //     React.createElement(Pet, {
  //       name: "Pepper",
  //       animal: "Bird",
  //       breed: "Cockatiel",
  //     }),
  //     React.createElement(Pet, {
  //       name: "Sizzer",
  //       animal: "Cat",
  //       breed: "KNQ",
  //     })
  //   );
  return (
    <div>
      <h1 id="something-important">Adopt ME!</h1>
      {/* <Pet name="Sheru" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Sizzer" animal="Cat" breed="KNQ" /> */}
    <SearchParams />
    </div>
  );
};
render(<App />, document.getElementById("root"));
