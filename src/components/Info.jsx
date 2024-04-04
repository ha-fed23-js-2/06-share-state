

const Info = ({ fish, penguins, managers }) => (
	<div className="info">
		<span> {fish} fish </span>
		<span> {penguins} penguins </span>
		<span> {managers} managers </span>
		<span> Goal: {fish}/100 fish </span>
	</div>
)

export default Info
