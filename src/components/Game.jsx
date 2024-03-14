import { useState } from 'react'
import Info from './Info.jsx'
import Controls from './Controls.jsx'


const Game = () => {
	const [fish, setFish] = useState(0)
	const [penguins, setPenguins] = useState(0)

	const goFishing = () => {
		setFish( fish + 1 )
		// TODO: lägg till 1 fisk per pingvin
	}

	return (
		<section className="framed">
			<p> Your people are hungry. Get some fish to feed them. If you have fish to spare, you can hire penguin hunters. Get 100 fish to survive! </p>
				<p> Each penguin will catch a fish when you go fishing. Each manager will allow penguins to catch an additional fish. </p>

			{/* <!-- Info component --> */}
			<Info fish={fish} penguins={penguins} />
			{/* <!-- Controls component --> */}
			<Controls goFishing={goFishing} />

		</section>
	)
}

export default Game
