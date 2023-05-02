import { useState } from "react";
import Box from "./Box";
import './BoxContainer.css'
import { pickRandom } from "./helper";


const BoxesContainer = (props) => {
    const [boxes, setBoxes] = useState(
        Array.from({length: props.numBoxes},()=>[pickRandom(props.colors),null])
    );
    
    const boxComponents = boxes.map(([color, msg], i) =>
        <Box color={color} key={i} msg={msg} />)
    
    function handleClick() {
        let idx = Math.floor(Math.random() * boxes.length)
        let boxesCopy = boxes.map(([color,msg])=>[color,null])
        boxesCopy[idx] = [pickRandom(props.colors),'x']
        setBoxes(boxesCopy)
    }
	return (
		<>
			<section className="BoxContainer">
				{boxComponents}
			</section>
            <button onClick={handleClick}>Change a box</button>
		</>
	);
};

BoxesContainer.defaultProps = {
	numBoxes: 16,
	colors: [
		"Aqua",
		"Black",
		"BlanchedAlmond",
		"Blue",
		"Chocolate",
		"DodgerBlue",
		"Lavender",
		"LawnGreen",
		"Peru",
		"Plum",
		"SpringGreen",
		"SteelBlue",
		"Tan",
		"Teal",
		"Thistle",
		"Tomato",
		"Turquoise",
		"Violet",
		"Yellow",
		"YellowGreen",
	],
};

export default BoxesContainer;
