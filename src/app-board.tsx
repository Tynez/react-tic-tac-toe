import { FC } from 'react'
import { PlayerToken } from './tictactoe'

import './board.css'

interface Props {
  board: PlayerToken[]
}
export const Board: FC<Props> = ({ board }) => {
  return (
    <section id={'board'}>
      {board.map((element, key) => (
        <div key={key} className={`${element}`}>
          <div className={'token'}></div>
        </div>
      ))}
    </section>
  )
}
