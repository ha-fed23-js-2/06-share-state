import { useState } from 'react'
import InfoZ from './InfoZ.jsx'
import ControlsZ from './ControlsZ.jsx'


const GameZ = () => {

	// const [penguins, setPenguins] = useState(0)
	// TODO: lägg till state-variabel för managers
	// const penguinCost = 4

	// const goFishing = () => {
	// 	setFish( fish + 1 + penguins )
	// 	// TODO: managers multiplicerar fiskbonus från pingvinerna
	// }

	// const hirePenguin = () => {
	// 	if( fish >= penguinCost ) {
	// 		setPenguins(penguins + 1)
	// 		setFish(fish - penguinCost)
	// 	}
	// }

	return (
		<section className="framed">
			<p> Your people are hungry. Get some fish to feed them. If you have fish to spare, you can hire penguin hunters. Get 100 fish to survive! </p>
				<p> Each penguin will catch a fish when you go fishing. Each manager will allow penguins to catch an additional fish. </p>

			{/* <!-- Info component --> */}
			<InfoZ />
			{/* <!-- Controls component --> */}
			<ControlsZ />

		</section>
	)
}

export default GameZ
