import { useState } from 'react';
import DailyWeather from './DailyWeather';
import Spinner from './Spinner';
import { toTitle } from './utils';

export default function WeatherSearch() {
  const [forecastItems, setForecastItems] = useState([]);
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(false);

  // you'll need to track your weather search results, the loading state, and a form field for location with a default value.

  async function handleWeatherSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `/.netlify/functions/weather?city=${city}&state=${state}&country=${country}`
      );
      const json = await response.json();
      setForecastItems(json);
      setLoading(false);
    } catch (e) {
      // console.error(e);
    }
    // set the loading state to true
    // use fetch to make a request to your netlify weather function. Be sure to pass the location as a query param in the URL

    // put the jsonified data in state and set the loading state to false
  }

  return (
    <section className="weather">
      {/* make the fetch on submit */}
      <form onSubmit={handleWeatherSubmit}>
        Search weather for a city
        <label>
          City
          <input onChange={(e) => setCity(e.target.value)} value={city} type="text" />
        </label>
        <label>
          State
          <input onChange={(e) => setState(e.target.value)} value={state} type="text" />
        </label>
        <label>
          Country
          <input onChange={(e) => setCountry(e.target.value)} value={country} type="text" />
        </label>
        {/* add inputs/labels for city name, state, and country, using all the things we need with react forms. Don't forget to use the value property to sync these up with the default values in react state */}
        <button>Get weather</button>
      </form>
      {city && <h3>{`Today in ${toTitle(city)}, ${state.toUpperCase()}`}</h3>}
      {loading ? <Spinner /> : <DailyWeather weather={forecastItems} />}
      {/* Make a ForecastList component to import and use here. Use a ternery to display a loading spinner (make a <Spinner /> component for this) if the data is still loading. */}
    </section>
  );
}
