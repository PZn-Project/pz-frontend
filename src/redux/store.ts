import { configureStore } from '@reduxjs/toolkit'

import gameReducer from './gameSlice'

export const store = configureStore({
  reducer: {
    game: gameReducer,
  },
})

export type TRootState = ReturnType<typeof store.getState>
export type TAppDispatch = typeof store.dispatch
