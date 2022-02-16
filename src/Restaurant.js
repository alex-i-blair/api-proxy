export default function Restaurant({ restaurants }) {
  return (
    <div>
      {restaurants &&
        restaurants.map((restaurant, i) => (
          <div className="restaurant-item" key={restaurant.pokemon + i}>
            <p>{restaurant.alias}</p>
            <img src={restaurant.image_url} />
          </div>
        ))}
    </div>
  );
}
