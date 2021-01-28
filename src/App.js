import React from 'react'
import { render } from 'react-dom'
import Pet from './Pet';

const App = () => {
  return React.createElement(
    "div",
    { id: "something-important" },
    React.createElement("h1", {}, "Adopt Me!"),
    
    // React.createElement(Pet), // other two params optional
    React.createElement(Pet, {
      name: "Sheru",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, {
      name: "Sizzer",
      animal: "Cat",
      breed: "KNQ",
    })
  );
};
render(React.createElement(App), document.getElementById("root"));
