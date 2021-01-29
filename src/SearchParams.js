import React, { useState, useEffect, useContext } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import { async } from "fast-glob";
import Results from "./Results";
import ThemeContext from "./ThemeContext";

const SearchParams = () => {
  // const location = "Seattle, WA";
  const [location, setLocation] = useState("Seattle, WA");
  // const [animal, setAnimal] = useState("dog")
  // const [breed, setBreed] = useState("")
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);
  const [theme, setTheme] = useContext(ThemeContext);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal,
    });
    setPets(animals || []);
  }

  useEffect(() => {
    // pet.breeds("dog").then(console.log, console.error)
    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(({ breeds: apiBreeds }) => {
      const breedStrings = apiBreeds.map(({ name }) => name);
      setBreeds(breedStrings);
    }, console.error);
  }, [animal, setBreed, setBreeds]);

  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            onChange={(event) => setLocation(event.target.value)}
            value={location}
            placeholder="Location"
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <label htmlFor="theme">
          Theme:
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            onBlur={(e) => setTheme(e.target.value)}
          >
            <option value="peru">Peru</option>
            <option value="darkblue">Dark blue</option>
            <option value="mediumorchid">Medium Orchid</option>
            <option value="charteuse">Charteuse</option>
          </select>
        </label>
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
