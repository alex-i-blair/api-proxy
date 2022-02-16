import { useState } from 'react';
import Pokemon from './Pokemon';
import Spinner from './Spinner';

export default function PokemonSearch() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [searchBy, setSearchBy] = useState('');

  // you'll need to track your pokemon search results, the loading state, and one form field: name. For this form field, set a real initial values (like 'pikachu') so the form populates with a default value.

  async function handlePokemonSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const endpointURL = `https://pokedex-alchemy.herokuapp.com/api/pokedex?${searchBy}=${search}`;
      const response = await fetch(endpointURL);
      const json = await response.json();
      setPokemon(json.results);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
    // set the loading state to true
    // use fetch to make a request to your netlify pokemon function. Be sure to pass the pokemon name as a query param in the URL

    // put the jsonified data in state and set the loading state to false
  }

  return (
    <section className="pokemon">
      {/* make the fetch on submit */}
      <form onSubmit={handlePokemonSubmit}>
        Search pokemon for a city
        <input onChange={(e) => setSearch(e.target.value)} value={search} />
        <select
          defaultValue={1}
          required
          name="searchBy"
          onChange={(e) => setSearchBy(e.target.value)}
        >
          <option value="1" disabled hidden>
            Choose
          </option>
          <option value="type_1">Search By Type</option>
          <option value="pokemon">Search By Name</option>
        </select>
        {/* add inputs/labels for city name, state, and country, using all the things we need with react forms. Don't forget to use the value property to sync these up with the default values in react state */}
        <button>Get pokemon</button>
      </form>
      {loading ? <Spinner /> : <Pokemon pokemon={pokemon} />}
      {/* Make a PokemonList component to import and use here. Use a ternery to display a loading spinner (make a <Spinner /> component for this) if the data is still loading. */}
    </section>
  );
}
