import { type ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { TRootState } from '@Redux/store'

import { addGame, clear } from '@Redux/gameSlice'
import NarrowPageLayout from '@Layout/Page/NarrowPageLayout'

const HomePage = (): ReactElement => {
  const games = useSelector<TRootState, string[]>((state) => state.game.games)
  const dispatch = useDispatch()

  return (
    <NarrowPageLayout>
      Games: {games}
      <button onClick={() => dispatch(addGame())}>ADD GAME</button>
      <button onClick={() => dispatch(clear())}>CLEAR STORE</button>
    </NarrowPageLayout>
  )
}

export default HomePage
