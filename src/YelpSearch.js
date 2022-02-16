import { useState } from 'react';
import Restaurant from './Restaurant';
import Spinner from './Spinner';

export default function YelpSearch() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('portland or');

  // you'll need to track your yelp search results, the loading state, and a form field for location with a default value.

  async function handleYelpSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`/.netlify/functions/yelp?search=${search}`);
      const json = await response.json();
      setRestaurants(json);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }

    // set the loading state to true
    // use fetch to make a request to your netlify yelp function. Be sure to pass the search query as a query param in the URL

    // put the jsonified data in state and set the loading state to false
  }

  return (
    <section className="yelp">
      {/* make the fetch on submit */}
      <form onSubmit={handleYelpSubmit}>
        Search yelp for a city
        <input type="text" onChange={(e) => setSearch(e.target.value)} value={search} />
        {/* add inputs/labels for city name, state, and country, using all the things we need with react forms. Don't forget to use the value property to sync these up with the default values in react state */}
        <button>Search yelp</button>
      </form>
      {loading ? <Spinner /> : <Restaurant restaurants={restaurants} />}
      {/* Make a BusinessesList component to import and use here. Use a ternery to display a loading spinner (make a <Spinner /> component for this) if the data is still loading. */}
    </section>
  );
}
