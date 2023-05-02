import { useState } from "react";
import "./EightBall.css";
import answers from './answers'

function getRandom(arr) {
    let randomIdx = Math.floor(Math.random() * arr.length);
    return arr[randomIdx];
}

const EightBall = (props) => {
    function reset() {
        setColor("black")
        setMsg("Think of a question")
        setCount({red:0, goldenrod:0, green:0})
    }
	function handleClick() {
		const { color, msg } = getRandom(props.answers);
        setColor(color);
        setMsg(msg);
        count[color]+=1
        setCount(count)
	}
	const [color, setColor] = useState("black");
    const [msg, setMsg] = useState("Think of a question");
    const [count, setCount] = useState({red:0, goldenrod:0, green:0})

	return (
		<>
			<div
				className="EightBall"
				style={{ backgroundColor: color }}
				onClick={handleClick}
			>
				{msg}
            </div>
            <button onClick={reset}>Reset</button>
            <div>red: {count.red}</div>
            <div>yellow: {count.goldenrod}</div>
            <div>green: {count.green}</div>
		</>
	);
};

EightBall.defaultProps={answers}

export default EightBall;
