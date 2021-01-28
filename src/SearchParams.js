import React, { useState } from "react"
import { ANIMALS } from "@frontendmasters/pet"
import useDropdown from "./useDropdown"

const SearchParams = () => {
    // const location = "Seattle, WA";
    const [location, setLocation] = useState("Seattle, WA");
    // const [animal, setAnimal] = useState("dog")
    // const [breed, setBreed] = useState("")
    const [breeds, setBreeds] = useState([])
    const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS)
    const [breed, BreedDropdown] = useDropdown("Breed", "", breeds)


    return (
        <div className="search-params">
            <h1>{ location }</h1>
            <form>
                <label htmlFor="location">
                    Location
                     <input
                        id="location"
                        onChange={event => setLocation(event.target.value)}
                        value={location}
                        placeholder="Location" />
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
        </div>
    )
}
  
export default SearchParams