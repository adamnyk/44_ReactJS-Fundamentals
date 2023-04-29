import React from "react";
import "./Pokedex.css";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

const Pokedex = (props) => {
	let winMessage = null;
	if (props.isWinner) {
		winMessage = <div className="Pokedex-winner">^ THIS HAND WINS!</div>;
	}

	return (
		<>
			<div className="Pokedex">
				{props.pokemon.map((p) => (
					<Pokecard key={p.id} {...p} />
				))}
			</div>
			{winMessage}
		</>
	);
};

export default Pokedex;
