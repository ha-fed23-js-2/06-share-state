import { useState } from 'react'
import './App.css'

function App() {
	//   const [count, setCount] = useState(0)

	return (
		<div className="game">
			<header>
				<h1> Fish clicker </h1>
			</header>
			<main>
			{/* <!-- Game component --> */}
			<section className="framed">
				<p> Your people are hungry. Get some fish to feed them. If you have fish to spare, you can hire penguin hunters. Get 100 fish to survive! </p>
					<p> Each penguin will catch a fish when you go fishing. Each manager will allow penguins to catch an additional fish. </p>

				{/* <!-- Info component --> */}
				<div className="info">
					<span> 0 fishes </span>
					<span> 0 penguins </span>
					<span> Goal: 102/100 fish </span>
				</div>
				{/* <!-- Controls component --> */}
				<div>
					<button> Go fishing </button>
					<button> Hire penguin (4 fish) </button>
					<button> Hire manager (20 fish) </button>
					<button disabled> Start over </button>
				</div>

			</section>
			</main>
		</div>
	)
}

export default App
