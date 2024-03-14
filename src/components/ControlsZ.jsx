

const Controls = ({ goFishing, hirePenguin, penguinCost, fish }) => (
	<div>
		<button onClick={goFishing}> Go fishing </button>
		<button
			disabled={fish < penguinCost}
			onClick={hirePenguin}> Hire penguin ({penguinCost} fish) </button>
		<button> Hire manager (20 fish) </button>
		<button disabled> Start over </button>
	</div>
)

export default Controls
