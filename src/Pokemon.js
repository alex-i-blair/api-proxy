import React from 'react';
import { toTitle } from './utils';

export default function Pokemon({ pokemon }) {
  return (
    <div>
      {pokemon &&
        pokemon.map((poke, i) => (
          <div className="poke-item" key={poke.pokemon + i}>
            <p>{toTitle(poke.pokemon)}</p>
            <img src={poke.url_image} />
          </div>
        ))}
    </div>
  );
}
