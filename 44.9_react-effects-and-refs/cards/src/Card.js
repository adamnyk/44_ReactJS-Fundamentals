import "./Card.css";
import { useState } from "react"
import {randomInRange} from "./helpers"

const Card = ({ code }) => {
	const [rotation, setRotation] = useState(randomInRange(-25, 25));
	
	return (
		<img
			src={`https://deckofcardsapi.com/static/img/${code}.png`}
			style={{ transform: `rotate(${rotation}deg)` }}
		/>
	);
};

export default Card;
