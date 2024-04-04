import { create } from 'zustand'

const useGameStore = create(set => ({
	fish: 0,
	penguins: 0,
	penguinCost: 4,
	managers: 0,
	managerCost: 20,

	goFishing: () => set(state => ({
		fish: state.fish + 1 + state.penguins * (state.managers + 1)
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
	}),
	hireManager: () => set(state => {
		if( state.fish >= state.managerCost ) {
			return {
				fish: state.fish - state.managerCost,
				managers: state.managers + 1
			}
		} else {
			return {}  // inga ändringar
		}
	})
}))

export { useGameStore }
