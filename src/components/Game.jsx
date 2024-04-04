import { useState } from 'react'
import Info from './Info.jsx'
import Controls from './Controls.jsx'


const Game = () => {
	const [fish, setFish] = useState(0)
	const [penguins, setPenguins] = useState(0)
	const [managers, setManagers] = useState(0)
	const penguinCost = 4, managerCost = 20

	const goFishing = () => {
		setFish( fish + 1 + penguins * (managers + 1) )
	}

	const hirePenguin = () => {
		if( fish >= penguinCost ) {
			setPenguins(penguins + 1)
			setFish(fish - penguinCost)
		}
	}

	const hireManager = () => {
		if( fish >= managerCost ) {
			setManagers(managers + 1)
			setFish(fish - managerCost)
		}
	}

	const startOver = () => {
		setFish(0)
		setPenguins(0)
		setManagers(0)
	}

	return (
		<section className="framed">
			<p> [Vanilla version] Your people are hungry. Get some fish to feed them. If you have fish to spare, you can hire penguin hunters. Get 100 fish to survive! </p>
				<p> Each penguin will catch a fish when you go fishing. Each manager will allow penguins to catch an additional fish. </p>

			{/* <!-- Info component --> */}
			<Info fish={fish} penguins={penguins} managers={managers} />
			{/* <!-- Controls component --> */}
			<Controls
				goFishing={goFishing}
				hirePenguin={hirePenguin}
				hireManager={hireManager}
				penguinCost={penguinCost}
				managerCost={managerCost}
				startOver={startOver}
				fish={fish} />

		</section>
	)
}

export default Game
