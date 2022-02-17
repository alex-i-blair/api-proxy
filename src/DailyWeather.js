export default function DailyWeather({ weather }) {
  // function parseTime(dt) {
  //   return new Date(dt * 1000).toUTCString();
  // }
  const date = new Date();
  const month = date.getMonth() + 1;
  const today = `${date.getDate()}/${month}/${date.getFullYear()}`;
  return (
    <div>
      {weather && (
        <div className="weather-item">
          <p>Date:{today}</p>
          <p>Temp: {weather.temp}</p>
          <p>Feels Like: {weather.feels_like}</p>
          <p>Humidity: {weather.humidity}</p>
        </div>
      )}
    </div>
  );
  // return (
  //   <div>
  //     {weather &&
  //       weather.map((weatherItem, i) => (
  //         <div className="weather-item" key={weatherItem.dt + i}>
  //           <p>Date: {parseTime(weatherItem.dt)}</p>
  //           <p>Temp: {weatherItem.temp}</p>
  //           <p>Feels Like: {weatherItem.feels_like}</p>
  //           <p>Humidity: {weather.humidity}</p>
  //         </div>
  //       ))}
  //   </div>
  // );
}
