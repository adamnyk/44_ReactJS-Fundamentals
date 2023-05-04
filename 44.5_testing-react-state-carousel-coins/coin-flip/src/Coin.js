import './Coin.css'

const Coin = (props) => {
	return (
		<div className="Coin">
			<img
				src={props.src}
				alt={props.alt} />
		</div>
	);
};

export default Coin;
