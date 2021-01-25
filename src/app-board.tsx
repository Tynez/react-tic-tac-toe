import { FC } from 'react'
import { PlayerToken } from './tictactoe'

import './board.css'

interface Props {
  actualBoard: PlayerToken[]
  onSlotClick(slot: number): void
}

export const Board: FC<Props> = ({ actualBoard, onSlotClick }) => {
  return (
    <ul id={'board'}>
      {actualBoard.map((element, idx) => (
        <li key={idx} className={`${element}`} onClick={() => onSlotClick(idx)}>
          <div className={'token'}></div>
        </li>
      ))}
    </ul>
  )
}
