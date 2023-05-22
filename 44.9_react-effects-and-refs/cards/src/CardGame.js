import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Card from "./Card";

import "./CardGame.css";

const BASE_API_URL = "https://deckofcardsapi.com/api";

const CardGame = () => {
	const [deckId, setDeckId] = useState(null);
	const [cards, setCards] = useState([]);
	const [autoDrawOn, setAutoDrawOn] = useState(false);

	useEffect(function fetchDeckWhenMounted() {
		async function fetchDeck() {
			const res = await axios.get(BASE_API_URL + "/deck/new/shuffle");
			setDeckId((deckId) => res.data.deck_id);
		}
		fetchDeck();
	}, []);

	const toggleAutoDraw = () => {
		setAutoDrawOn((autoDrawOn) => !autoDrawOn);
	};

	const timerId = useRef(null);
	useEffect(
		function autoDrawCard() {
			console.log([autoDrawOn])
			if (autoDrawOn && !timerId.current) {
				timerId.current = setInterval( () => {
					drawCard();
					console.log("draw ID:", timerId.current);
				}, 500);
			} else {
				console.log('useEffect else, timer cleared')
				clearInterval(timerId.current);
				timerId.current = null; // may not be necessary. Makes timer clear more explicit
			}
			return () => clearInterval(timerId.current); // may not be necessary.
		},
		[autoDrawOn]
	);

	const drawCard = async () => {
		try {
			const res = await axios.get(BASE_API_URL + `/deck/${deckId}/draw`);
			console.log("cards remaining:", res.data.remaining);
			if (!res.data.remaining) {
				setAutoDrawOn((autoDrawOn) => false);
				throw new Error("No cards remaining!");
			} else {
				const newCard = res.data.cards[0].code;
				setCards((cards) => [...cards, newCard]);
			}
		} catch (err) {
			alert(err);
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

	const cardComponents = cards.map((card) => <Card code={card} key={card} />);

	return (
		<div className="CardGame">
			{deckId ? (
				<div className="CardControls">
					<button onClick={toggleAutoDraw}>
						{autoDrawOn ? "STOP " : "START "}
						drawing
					</button>

					<button onClick={shuffleDeck}>Shuffle</button>
					<button onClick={drawCard}>Draw 1</button>
				</div>
			) : (
				<h3>Loading...</h3>
			)}

			<div className="CardGame-cards-wrapper">{cardComponents}</div>
		</div>
	);
};

export default CardGame;
