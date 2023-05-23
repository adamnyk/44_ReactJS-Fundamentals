import { useAxios } from "./hooks";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";

/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
function PokeDex() {
	const [pokemon, addPokemon, emptyPokedex] = useAxios(`https://pokeapi.co/api/v2/pokemon/`, 'pokemon');

	return (
		<div className="PokeDex">
			<div className="PokeDex-buttons">
				<h3>Please select your pokemon:</h3>
				<PokemonSelect add={addPokemon} empty={emptyPokedex} />
			</div>
			<div className="PokeDex-card-area">
				{pokemon.map((cardData) => (
					<PokemonCard
						key={cardData.id}
						front={cardData.front}
						back={cardData.back}
						name={cardData.name}
						stats={cardData.stats}
					/>
				))}
			</div>
		</div>
	);
}

export default PokeDex;
