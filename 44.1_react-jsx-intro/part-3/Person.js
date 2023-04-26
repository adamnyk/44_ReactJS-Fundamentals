const Person = (props) => {
	const voteText = props.age >= 18 ? "Please go vote!" : "You must be 18";

	const hobbies = props.hobbies
		? props.hobbies.map((hobby) => <li>{hobby}</li>)
		: null;

	return (
		<div>
			<p>Learn some information about this person:</p>
			<ul>
				<li>Name: {props.name}</li>
				<li>Age: {props.age}</li>

				
				{hobbies ? (
					<ul>
						<b>Hobbies:</b>
						{hobbies}
					</ul>
				) : null}
				
			</ul>
			<h3>{voteText}</h3>

			<br></br>
		</div>
	);
};
