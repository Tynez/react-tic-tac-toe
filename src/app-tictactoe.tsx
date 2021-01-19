import { FC } from 'react'
import { Engine } from './engine'
import { Board } from './app-board'

export const TicTacToe: FC = () => {
  const engine = new Engine()

  return (
    <section>
      <h1>Tic Tac Toe</h1>
      <Board board={engine.board()}></Board>
    </section>
  )
}
