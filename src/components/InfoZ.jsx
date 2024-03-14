import { useGameStore } from '../data/store.js'

const InfoZ = () => {
	const { fish, penguins } = useGameStore(state => ({
		fish: state.fish,
		penguins: state.penguins
	}))
	return (
		<div className="info">
			<span> {fish} fish </span>
			<span> {penguins} penguins </span>
			<span> Goal: {fish}/100 fish </span>
		</div>
	)
}

export default InfoZ
