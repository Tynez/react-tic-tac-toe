import { FC, useState } from 'react'
import { Engine } from './engine'
import { Board } from './app-board'
import { Scoreboard } from './app-scoreboard'

export const TicTacToe: FC = () => {
  const [engine] = useState(new Engine())
  const [board, setBoard] = useState(engine.board())

  const updateBoard = (clickedSlot: number) => {
    engine.play(clickedSlot)
    setBoard([...engine.board()])
  }

  return (
    <section>
      <h1>Tic Tac Toe</h1>
      <Scoreboard actualScore={{ ...engine.scoreBoard }} />
      <Board actualBoard={[...board]} onSlotClick={clickedSlot => updateBoard(clickedSlot)} />
    </section>
  )
}
