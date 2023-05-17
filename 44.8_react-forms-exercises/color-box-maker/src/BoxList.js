import { useState } from "react";
import "./BoxList.css";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import { v4 as uuid } from "uuid";

const BoxList = () => {
	const INITIAL_BOXES = [
		// { color: "deepskyblue", height: 200, width: 200, id: uuid() },
		// { color: "purple", height: 100, width: 100, id: uuid() },
		// { color: "teal", height: 250, width: 250, id: uuid() },
	];
	const [boxes, setBoxes] = useState(INITIAL_BOXES);

	const removeBox = (id) => {
		setBoxes(boxes.filter((box) => box.id !== id));
	}

	const addBox = (box) => {
		let newBox = { ...box, id: uuid() }
		setBoxes(boxes => [...boxes, newBox])
	}

	const boxComponents = boxes.map((box) => {
		const { color, height, width, id } = box;

		return (
			<Box
				color={color}
				height={height}
				width={width}
				key={id}
				id={id}
				remove={removeBox}
			/>
		);
	});

	return (
		<div className="BoxList">
			<NewBoxForm addBox={addBox}/>
			<section className="BoxList-boxes-container">
				{boxComponents}
			</section>
		</div>
	);
};

export default BoxList;
