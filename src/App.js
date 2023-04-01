import "./styles.css";
import Pokemon from "./Pokemon";
import React, { useEffect, useState } from "react";
export default function App() {
  const [pokemonList, setPokemonList] = useState([]);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then((response) => response.json())
      .then((data) => {
        setPokemonList(data.results);
      });
  }, []);

  return (
    <div className="App">
      {pokemonList.map((pokemon) => (
        <Pokemon key={pokemon.name} url={pokemon.url} />
      ))}
    </div>
  );
}
