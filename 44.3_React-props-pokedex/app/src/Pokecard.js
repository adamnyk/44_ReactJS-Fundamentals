import React from "react";
import "./Pokecard.css";

const Pokecard = ({ id, name, type, base_experience }) => {
	const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

	return (
		<div key={id} className="Pokecard">
            <p className="Pokecard-title">{name}</p>
			<img className="Pokecard-image" src={imgUrl} />
			<span className="Pokecard-info">Type: {type}</span>
			<span className="Pokecard-info">EXP: {base_experience}</span>
		</div>
	);
};

export default Pokecard;
