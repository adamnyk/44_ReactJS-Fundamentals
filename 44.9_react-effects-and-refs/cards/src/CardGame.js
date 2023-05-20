import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Card from "./Card";
import CardControls from "./CardControls";

import "./CardGame.css";

const BASE_API_URL = "https://deckofcardsapi.com/api";

const CardGame = () => {
	const [deckId, setDeckId] = useState();
	const [cards, setCards] = useState([]);

	useEffect(function fetchDeckWhenMounted() {
		async function fetchDeck() {
			const res = await axios.get(BASE_API_URL + "/deck/new/shuffle");
			setDeckId((deckId) => res.data.deck_id);
		}
		fetchDeck();
	}, []);



	const cardComponents = cards.map((card) => <Card code={card} key={card} />);

	return (
		<div className="CardGame">
			{deckId ? 
				<CardControls
					cards={cards}
					setCards={setCards}
					deckId={deckId}
				/>
			 : 
				<h3>Loading...</h3>
			}

			<div className="CardGame-cards-wrapper">{cardComponents}</div>
		</div>
	);
};

export default CardGame;
