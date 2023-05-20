import { useState } from "react";
import { BASE_API_URL } from "./helpers";
import axios from "axios";
import Timer from "./Timer";

const CardControls = ({ cards, setCards, deckId }) => {
	const [autoDrawOn, setAutoDrawOn] = useState(false);

	const toggleAutoDraw = () => {
		setAutoDrawOn((autoDrawOn) => !autoDrawOn);
	};

	const drawCard = async () => {
		try {
			const res = await axios.get(BASE_API_URL + `/deck/${deckId}/draw`);
			const cardsRemaining = res.data.remaining;
			console.log("cards remaining:", cardsRemaining);
			if (!cardsRemaining) {
				setAutoDrawOn((autoDrawOn) => false);

				alert("Error: No cards remaining!");
			} else {
				const newCard = res.data.cards[0].code;
				setCards((cards) => [...cards, newCard]);
			}
		} catch (err) {
			console.err(err);
		}
	};

	const shuffleDeck = async () => {
		try {
			await axios.get(BASE_API_URL + `/deck/${deckId}/shuffle/`);
			setCards((cards) => []);
		} catch (err) {
			console.err(err);
		}
	};

	return (
		<div className="CardControls">
			<button onClick={toggleAutoDraw}>
				{autoDrawOn ? <Timer drawCard={drawCard} /> : "Start drawing"}
			</button>

			<button onClick={shuffleDeck}>Shuffle</button>
		</div>
	);
};

export default CardControls;
