import { useState } from 'react'
import InfoZ from './InfoZ.jsx'
import ControlsZ from './ControlsZ.jsx'


const GameZ = () => {
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
