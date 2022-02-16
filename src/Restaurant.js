export default function Restaurant({ restaurants }) {
  return (
    <div>
      {restaurants &&
        restaurants.map((restaurant, i) => (
          <div className="restaurant-item" key={restaurant.pokemon + i}>
            <p>{restaurant.name}</p>
            <img src={restaurant.image_url} />
          </div>
        ))}
    </div>
  );
}
