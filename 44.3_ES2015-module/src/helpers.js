/** choose a random item. */

function choice(items) {
	let idx = Math.floor(Math.random() * items.length);
	return items[idx];
}

/** return copy of array w/o first appearance of item
 *
 * If not found, return undefined.
 *
 */
function remove(items, item) {
	const foundIdx = items.findIndex((i) => i === item);
	if (foundIdx !== -1) {
		return items.splice(foundIdx, 1)[0];
	}
}

export {choice, remove}