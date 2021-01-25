import { FC, useState } from 'react'
import { Engine } from '../engine'
import { Board } from './app-board'
import { Scoreboard } from './app-scoreboard'
import { GameOver } from './app-game-over'

export const TicTacToe: FC = () => {
  const [engine] = useState(new Engine())
  const [board, setBoard] = useState(engine.board())

  const updateBoard = (clickedSlot: number) => {
    engine.play(clickedSlot)
    setBoard([...engine.board()])
  }

  function winnerMessage(): string {
    if (engine.isFirstPlayerTheWinner) {
      return 'First player wins!'
    }
    if (engine.isSecondPlayerTheWinner) {
      return 'Second player wins!'
    }
    return 'It is a draw!'
  }

  const newGame = () => {
    console.log('click')
    engine.reset()
    setBoard(engine.board())
  }

  return (
    <section>
      <h1>Tic Tac Toe</h1>
      <Scoreboard actualScore={{ ...engine.scoreBoard }} />
      <Board actualBoard={[...board]} onSlotClick={clickedSlot => updateBoard(clickedSlot)} />
      <GameOver
        isGameOver={engine.isGameOver}
        message={winnerMessage()}
        onNewGame={() => newGame()}
      />
    </section>
  )
}
