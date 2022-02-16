import React from 'react';

export default function Pokemon({ pokemon }) {
  return (
    <div>
      {pokemon &&
        pokemon.map((poke, i) => (
          <div className="poke-item" key={poke.pokemon + i}>
            <p>{poke.pokemon}</p>
            <img src={poke.url_image} />
          </div>
        ))}
    </div>
  );
}
