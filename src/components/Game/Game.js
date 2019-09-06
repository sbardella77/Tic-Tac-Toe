import React, { useState } from 'react'
import Box from '../Box/box'
import './style.css'

const board = [[], [], []]

function Gioco () {
  const [turn, setTurn] = useState('X')
  const [winnertext, setWinningText] = useState('')


  function changeTurn (row, col) {
    board[row][col] = turn

    setTurn(turn => turn === 'X' ? 'O' : 'X')
    // console.log(board)
    const winnerIs = checkTheWinner()

    if (!winnerIs) {
      // nothing
    } else {
      setWinningText(winnerIs + ' ' + 'won !')
    }
  }

  function checkTheWinner () {
    // ROW TEST
    for (let i = 0; i < board.length; i++) {
      const row = board[i]

      if (row[0] === row[1] && row[1] === row[2] && row[0]) {
        return row[0]
      }
 }
    // COLUMN TEST
    for (let i = 0; i < board.length; i++) {
      const element1 = board[0][i]
      const element2 = board[1][i]
      const element3 = board[2][i]
      if (element1 === element2 && element2 === element3 && element1) {
        return element1
      }
    }
    // DIAGONAL TEST
    const diagonal1 = board[0][0]
    const diagonal2 = board[1][1]
    const diagonal3 = board[2][2]

    if (diagonal1 === diagonal2 && diagonal2 === diagonal3 && diagonal1) {
      return diagonal1
    }

    const p1 = board[0][2]
    const p2 = board[1][1]
    const p3 = board[2][0]

    if (p1 === p2 && p2 === p3 && p1) {
      return p1
    }

    return false
  }

  return (
    <div id='game'>
      <div id='winner-text'>{winnertext}</div>
      <div className='row'>
        <Box row={0} col={0} currentState={turn} changeTurn={changeTurn} />
        <Box row={0} col={1} currentState={turn} changeTurn={changeTurn} />
        <Box row={0} col={2} currentState={turn} changeTurn={changeTurn} />
      </div>
      <div className='row'>
        <Box row={1} col={0} currentState={turn} changeTurn={changeTurn} />
        <Box row={1} col={1} currentState={turn} changeTurn={changeTurn} />
        <Box row={1} col={2} currentState={turn} changeTurn={changeTurn} />
      </div>
      <div className='row'>
        <Box row={2} col={0} currentState={turn} changeTurn={changeTurn} />
        <Box row={2} col={1} currentState={turn} changeTurn={changeTurn} />
        <Box row={2} col={2} currentState={turn} changeTurn={changeTurn} />
      </div>
    </div>
  )
}

export default Gioco
