import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ nrows = 5, ncols = 5, chanceLightStartsOn=0.5 }) {
	const [board, setBoard] = useState(createBoard());

	/** create a board nrows high/ncols wide, each cell randomly lit or unlit */
	function createBoard() {
		function pickRandomLight() {
			return Math.random() < chanceLightStartsOn;
		}
		// TODO: create array-of-arrays of true/false values
		let initialBoard = Array.from({ length: 5 }, () =>
			Array.from({ length: 5 }, () => pickRandomLight())
		);

		return initialBoard;
	}

	function hasWon() {
		// TODO: check the board in state to determine whether the player has won.
    return !board.some(row => row.some(cell => cell))
	}

	function flipCellsAround(coord) {
		setBoard((oldBoard) => {
			const [y, x] = coord.split("-").map(Number);

			const flipCell = (y, x, boardCopy) => {
				// if this coord is actually on board, flip it

				if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
					boardCopy[y][x] = !boardCopy[y][x];
				}
			};

			// TODO: Make a (deep) copy of the oldBoard
			const boardCopy = [...oldBoard];

			// TODO: in the copy, flip this cell and the cells around it
			flipCell(y, x, boardCopy);
			flipCell(y + 1, x, boardCopy);
			flipCell(y - 1, x, boardCopy);
			flipCell(y, x + 1, boardCopy);
			flipCell(y, x - 1, boardCopy);

			// TODO: return the copy
			return boardCopy;
		});
	}

	// TODO: if the game is won, just show a winning msg & render nothing else
	if (hasWon()) return <h1>You won! Congratulations! 🎉</h1>;

	// TODO: make table board

	let tblBoard = [];
	for (let y = 0; y < nrows; y++) {
		let row = [];
		for (let x = 0; x < nrows; x++) {
			let coord = `${y}-${x}`;
			row.push(
				<Cell
					key={coord}
					isLit={board[y][x]}
					flipCellsAroundMe={() => flipCellsAround(coord)}
				/>
			);
		}
		tblBoard.push(<tr key={y}>{row}</tr>);
	}

	return (
		<table className="Board">
			<tbody>{tblBoard}</tbody>
		</table>
	);
}

export default Board;
