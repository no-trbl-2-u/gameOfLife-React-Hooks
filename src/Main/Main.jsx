import React, { useState, useEffect } from 'react';
import Grid from '../Components/Grid';
import ButtonContainer from '../Components/ButtonContainer';

import { calculateGrid, calculateMovement } from '../Utils/utils'

// Global intervalID for clearInterval
let intervalID = 0;

function Main () {
  // STATE

  // speed :: Number
  const speed = 100

  // gridSize :: String
  // setGridSize :: String -> State String/[[Bool]]
  const [gridSize, setGridSize] = useState('LARGE')

  // Calculate rows/cols based on gridSize
  const [rows, cols] = calculateGrid(gridSize)
  
  // generation    :: State Int
  // setGeneration :: State Int -> () State Int
  let [generation, setGeneration] = useState(0)

  // gridFull    :: State [[Bool]]
  // setGridFull :: State [[Bool]] -> () State [[Bool]]
  const [gridFull, setGridFull] = useState(
    Array(rows).fill().map(() => Array(cols).fill(false))
  )


  // FUNCTIONS

  // selectBox :: (Int, Int) -> () Event State
  const selectBox = (row, col) => {
    const gridCopy = [...gridFull]
    gridCopy[row][col] = !gridCopy[row][col]
    setGridFull(gridCopy)
  }

  // seed :: () -> () Event State
  const seed = () => {
    setGridFull(
      [...gridFull].map(rows => rows.map(cols =>
        (Math.floor(Math.random() * 4) === 1)
          ? true
          : false
        )
      )
    )
  }

  // play :: () -> State [[Bool]]
  const play = () => {
    setGridFull(calculateMovement(rows, cols, [...gridFull]))
    setGeneration(generation++)
  }


  // INTERVAL LOGIC

  // playButton :: () -> Begin Interval -> State [[Bool]]
	const playButton = () => {
		clearInterval(intervalID);
		intervalID = setInterval(play, speed);
  }
  
  // stopButton :: () -> Stop Interval
  const stopButton = () => {
    clearInterval(intervalID)
  }

  // clearButton :: () -> State Int, State [[Bool]]
  const clearButton = () => {
    setGeneration(0)
    setGridFull(Array(rows).fill().map(() => Array(cols).fill(false)))
  }


  // EFFECT HOOKS

  // onLoad
  useEffect( () => seed(), [])

  // onGridSizeChange
  useEffect(() => {
    setGeneration(0)
    setGridFull(Array(rows).fill().map(() => Array(cols).fill(false)))
  }, [gridSize])
  


  return (
    <section className="Main">
      <h1 className="App-header">Game of Life</h1>
      
      <Grid
        gridFull={ gridFull }
        rows={ rows }
        cols={ cols }
        selectBox={ selectBox }
      />
      
      <ButtonContainer
        generation={ generation }
        playButton={ playButton }
        stopButton={ stopButton }
        clearButton={ clearButton }
        seed={ seed }
        setGridSize={ setGridSize }
      />

    </section>
  )
}


export default Main