import { create } from 'zustand'

const useGameStore = create(set => ({
	fish: 0,
	penguins: 0,
	penguinCost: 4,
	// TODO: lägg till managers

	// goFishing
	// hirePenguin
	// TODO: lägg till hireManager
}))

export { useGameStore }
