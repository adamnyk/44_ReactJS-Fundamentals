import React, { useState } from "react";
import pokemonList from "./pokemonList";
import { choice, formatPokemon} from "./helpers";

/* Select element to choose from common pokemon. */
function PokemonSelect({ add, pokemon = pokemonList, empty}) {
  const [pokeIdx, setPokeIdx] = useState(0);
  const handleChange = evt => {
    setPokeIdx(evt.target.value);
  };

  return (
    <div>
      <select onChange={handleChange}>
        {pokemon.map((p, idx) => (
          <option key={idx} value={idx}>
            {p}
          </option>
        ))}
      </select>
      <button onClick={() => add(formatPokemon, pokemon[pokeIdx])}>Catch one!</button>
      <button onClick={() => add(formatPokemon, choice(pokemon))}>I'm feeling lucky</button>
      <button onClick={empty}>Reset</button>
    </div>
  );
}

export default PokemonSelect;
