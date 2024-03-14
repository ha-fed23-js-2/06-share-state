import { create } from 'zustand'

const useGameStore = create(set => ({
	fish: 0,
	penguins: 0,
	penguinCost: 4,
	// TODO: lägg till managers

	goFishing: () => set(state => ({
		fish: state.fish + 1 + state.penguins
	})),

	hirePenguin: () => set(state => {
		if( state.fish >= state.penguinCost ) {
			return {
				fish: state.fish - state.penguinCost,
				penguins: state.penguins + 1
			}
		} else {
			return {}
		}
	})
	// TODO: lägg till hireManager
}))

export { useGameStore }
