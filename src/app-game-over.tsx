import { FC } from 'react'
import styles from './game-over.module.css'
import { bind } from './utils/bind'

interface Props {
  isGameOver: boolean
  message: string
  onNewGame(): void
}

const cx = bind(styles)

export const GameOver: FC<Props> = ({ isGameOver, message, onNewGame }) => {
  if (isGameOver) {
    return (
      <div className={cx({ ['game-over-message']: true })}>
        <div className={cx({ ['game-over-message--content']: true })}>
          <h1>Game Over</h1>
          <h2>{message}</h2>
          <section>
            <button onClick={() => onNewGame()}>Play again</button>
          </section>
        </div>
      </div>
    )
  }

  return <></>
}
