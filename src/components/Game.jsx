import Info from './Info.jsx'
import Controls from './Controls.jsx'


const Game = () => (
	<section className="framed">
		<p> Your people are hungry. Get some fish to feed them. If you have fish to spare, you can hire penguin hunters. Get 100 fish to survive! </p>
			<p> Each penguin will catch a fish when you go fishing. Each manager will allow penguins to catch an additional fish. </p>

		{/* <!-- Info component --> */}
		<Info />
		{/* <!-- Controls component --> */}
		<Controls />

	</section>
)

export default Game
