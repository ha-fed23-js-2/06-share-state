import { useGameStore } from '../data/store.js'

const ControlsZ = () => {
	const { fish, penguinCost, goFishing, hirePenguin, managerCost, hireManager } = useGameStore(state => ({
		fish: state.fish,
		penguinCost: state.penguinCost,
		goFishing: state.goFishing,
		hirePenguin: state.hirePenguin,
		managerCost: state.managerCost,
		hireManager: state.hireManager
	}))
	return (
		<div>
			<button onClick={goFishing}> Go fishing </button>
			<button
				disabled={fish < penguinCost}
				onClick={hirePenguin}> Hire penguin ({penguinCost} fish) </button>
			<button
				disabled={fish < managerCost}
				onClick={hireManager}> Hire manager ({managerCost} fish) </button>

			{/*
			<button> Hire manager (20 fish) </button>
			<button disabled> Start over </button> */}
		</div>
	)
}

export default ControlsZ
