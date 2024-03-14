import './App.css'
import GameZ from './components/GameZ.jsx'
import Game from './components/Game.jsx'


function App() {
	return (
		<div className="game">
			<header>
				<h1> Fish clicker </h1>
			</header>
			<main>

			<GameZ />

			<Game />

			</main>
		</div>
	)
}

export default App
