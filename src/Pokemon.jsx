import React, { useEffect, useState } from "react";

export default function Pokemon(props) {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch(props.url)
      .then((response) => response.json())
      .then((data) => {
        setPokemonData(data);
      });
  }, [props.url]);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pokemons">
      <h2>{pokemonData.name}</h2>
      <img
        src={pokemonData.sprites.front_default}
        alt={pokemonData.name}
        width={400}
      />
      <p>
        Abilities: {pokemonData.abilities.map((a) => a.ability.name).join(", ")}
      </p>
      <p>Height: {pokemonData.height / 10}m</p>
      <p>
        Moves:{" "}
        {pokemonData.moves
          .slice(0, 5)
          .map((m) => m.move.name)
          .join(", ")}
      </p>
      <p>Stats:</p>
      <ul className="pokemon-container">
        {pokemonData.stats.map((s) => (
          <li key={s.stat.name}>
            {s.stat.name}: {s.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
}
