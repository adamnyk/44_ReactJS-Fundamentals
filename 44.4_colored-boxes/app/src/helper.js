function pickRandom(arr) {
	let randIdx = Math.floor(Math.random() * arr.length);
	return arr[randIdx];
}

export {pickRandom}
