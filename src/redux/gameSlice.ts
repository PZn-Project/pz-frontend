import { createSlice } from '@reduxjs/toolkit'

type TGameState = {
  // TODO: Refactor after game type is specified. Replace type string with proper game type
  games: string[] // array of game objects
}

type TGameReducers = {
  clear: (state: TGameState) => void
  addGame: (state: TGameState) => void
}

export const gameSlice = createSlice<TGameState, TGameReducers>({
  name: 'game',
  initialState: {
    games: [],
  },
  reducers: {
    clear: (state) => {
      state.games = []
    },
    addGame: (state) => {
      state.games = [...state.games, `game ${state.games.length + 1}`]
    },
  },
})

export default gameSlice.reducer
export const { clear, addGame } = gameSlice.actions
