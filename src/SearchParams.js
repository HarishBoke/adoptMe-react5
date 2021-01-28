import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import { async } from "fast-glob";
import Results from "./Results";

const SearchParams = () => {
  // const location = "Seattle, WA";
  const [location, setLocation] = useState("Seattle, WA");
  // const [animal, setAnimal] = useState("dog")
  // const [breed, setBreed] = useState("")
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);

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
        {/* <label htmlFor="animal">
                        Animal
                        <select
                            id="animal"
                            onChange={event => setAnimal(event.target.value)}
                            onBlur={event => setAnimal(event.target.value)}
                            value={animal}
                            placeholder="Animal">
                            <option>All</option>
                            {
                                ANIMALS.map(animal => <option value={animal} key={animal}>{animal}</option>)
                            }
                            </select>
                    </label>
                    <label htmlFor="breed">
                        Breed
                        <select
                            id="breed"
                            disabled={!breeds.length}
                            onChange={event => setBreed(event.target.value)}
                            onBlur={event => setBreed(event.target.value)}
                            value={animal}
                            placeholder="Breed">
                            <option>All</option>
                            {
                                breeds.map(breedStr => <option value={breedStr} key={breedStr}>{breedStr}</option>)
                            }
                            </select>
                    </label> */}
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
