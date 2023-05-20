const BASE_API_URL = "https://deckofcardsapi.com/api";

const randomInRange = (min, max) =>
	Math.floor(Math.random() * (max - min + 1) + min);




export { randomInRange, BASE_API_URL}