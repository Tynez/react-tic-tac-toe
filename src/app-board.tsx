import { FC } from 'react'
import { PlayerToken } from './tictactoe'
import { bind } from './utils/bind'
import styles from './board.module.css'

interface Props {
  actualBoard: PlayerToken[]
  onSlotClick(slot: number): void
}

const cx = bind(styles)

export const Board: FC<Props> = ({ actualBoard, onSlotClick }) => {
  return (
    <ul className={styles.board}>
      {actualBoard.map((element, idx) => (
        <li
          key={idx}
          className={cx({
            ['board--first-player-token']: element === 'o',
            ['board--second-player-token']: element === 'x',
          })}
          onClick={() => onSlotClick(idx)}
        >
          <div className={styles.token}></div>
        </li>
      ))}
    </ul>
  )
}
