

const Controls = ({ goFishing }) => (
	<div>
		<button onClick={goFishing}> Go fishing </button>
		<button> Hire penguin (4 fish) </button>
		<button> Hire manager (20 fish) </button>
		<button disabled> Start over </button>
	</div>
)

export default Controls
