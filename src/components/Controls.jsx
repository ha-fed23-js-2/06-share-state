

const Controls = ({ goFishing, hirePenguin, hireManager, penguinCost, managerCost, fish, startOver }) => (
	<div>
		<button onClick={goFishing}> Go fishing </button>
		<button
			disabled={fish < penguinCost}
			onClick={hirePenguin}
			> Hire penguin ({penguinCost} fish) </button>
		<button
			disabled={fish < managerCost}
			onClick={hireManager}
			> Hire manager (20 fish) </button>
		<button onClick={startOver}> Start over </button>
	</div>
)

export default Controls
