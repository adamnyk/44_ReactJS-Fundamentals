import { useEffect, useRef } from "react";

const Timer = ({ drawCard }) => {
	const timerId = useRef();
	useEffect(function autoDrawCard() {
		timerId.current = setInterval(() => {
			drawCard();
			console.log("draw ID:", timerId.current);
		}, 500);
		return () => clearInterval(timerId.current);
	}, []);

	return "Stop drawing";
};

export default Timer;
