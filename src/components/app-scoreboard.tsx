import { FC } from 'react'
import { ScoreBoard } from '../utils/tictactoe'
import styles from '../styles/scoreboard.module.css'

interface Props {
  actualScore: ScoreBoard
}

export const Scoreboard: FC<Props> = ({ actualScore }) => {
  return (
    <section className={styles.scoreboard}>
      <h3>Player 1: {actualScore.firstPlayer}</h3>
      <h3>Player 2: {actualScore.secondPlayer}</h3>
      <h3>Draws: {actualScore.draw}</h3>
    </section>
  )
}
