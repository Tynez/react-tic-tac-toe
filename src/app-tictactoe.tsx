import { FC, useState } from 'react'
import { Engine } from './engine'
import { Board } from './app-board'

export const TicTacToe: FC = () => {
  const [engine] = useState(new Engine())
  const [board, setBoard] = useState(engine.board())

  const updateBoard = (slot: number) => {
    engine.play(slot)
    setBoard([...engine.board()])
  }

  return (
    <section>
      <h1>Tic Tac Toe</h1>
      <Board actualBoard={[...board]} onSlotClick={slot => updateBoard(slot)}></Board>
    </section>
  )
}
