import "./Box.css";

const Box = ({
	color = "deepskyblue",
	height = 200,
	width = 200,
	id,
	remove
}) => {
	return (
		<div className="Box">
			<div
				className="Box-box"
				data-testid="colored-box"
				style={{
					backgroundColor: color,
					height: height + "px",
                    width: width + "px",
				}}
            >
            </div>
            <button
                className='Box-button'
				onClick={() => remove(id)}
            >
            x
            </button>
		</div>
	);
};

export default Box;
