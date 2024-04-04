import { useGameStore } from '../data/store.js'

const InfoZ = () => {
	const { fish, penguins, managers } = useGameStore(state => ({
		fish: state.fish,
		penguins: state.penguins,
		managers: state.managers
	}))
	return (
		<div className="info">
			<span> {fish} fish </span>
			<span> {penguins} penguins </span>
			<span> {managers} managers </span>
			<span> Goal: {fish}/100 fish </span>
		</div>
	)
}

export default InfoZ
