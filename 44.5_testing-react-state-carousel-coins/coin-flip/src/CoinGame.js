import React, { useState } from "react";
import Coin from "./Coin";
import "./CoinGame.css";

const CoinGame = (props) => {
	const [count, setCount] = useState({ heads: 0, tails: 0, total: 0 });
	const [coinSide, setCoinSide] = useState();

	function flipCoin() {
		const side = Math.floor(Math.random() * 2);
		setCoinSide(side);
		const countCopy = { ...count };
		countCopy.total++;
		side === 0 ? countCopy.heads++ : countCopy.tails++;
		setCount(countCopy);
	}

	const coin =
		coinSide !== undefined ? (
			<Coin {...props.coinImages[coinSide]} />
		) : (
			<div className="CoinGame-coin" />
		);

	return (
		<div className="CoinGame">
			{coin}
			<button onClick={flipCoin} data-testid="flip-button">
				Flip Coin!
			</button>

			<div className="CoinGame-count">
				<div>Heads: {count.heads}</div>
				<div>Tails: {count.tails}</div>
				<div>Total flips: {count.total}</div>
			</div>
		</div>
	);
};

CoinGame.defaultProps = {
	coinImages: [
		{
			src: "https://i.ebayimg.com/images/g/xtcAAOSwLwBaZigS/s-l500.jpg",
			alt: "heads",
		},
		{
			src: "https://m.media-amazon.com/images/I/51bcZy+HZpL._AC_UF894,1000_QL80_.jpg",
			alt: "tails",
		},
	],
};

export default CoinGame;
