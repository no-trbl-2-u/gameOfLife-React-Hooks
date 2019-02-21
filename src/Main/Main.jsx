import React, { useState, useEffect } from 'react';
import Grid from '../Components/Grid';

let intervalID = 0;

function Main () {
  
  // Constants
  const speed = 100; // speed :: number
  const rows = 30;   // rows  :: number
  const cols = 50;   // cols  :: number

  // generation    :: State Int
  // setGeneration :: State Int -> () State Int
  const [ generation, setGeneration ] = useState(0)

  // gridFull    :: State [[Bool]]
  // setGridFull :: State [[Bool]] -> () State [[Bool]]
  const [gridFull, setGridFull] = useState(
    Array(rows).fill().map(() => Array(cols).fill(false))
  )

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
  
  // onLoad
  useEffect( () => seed(), [] )

  // play :: () -> State Change
  const play = () => {

    // Make copies
    let g = [...gridFull];
    let g2 = [...gridFull];

    // gridFull.forEach((rows, i) => rows.forEach((cols, j) => {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        let count = 0;

        if (i > 0) if (g[i - 1][j]) count++;
        if (i > 0 && j > 0) if (g[i - 1][j - 1]) count++;
        if (i > 0 && j < cols - 1) if (g[i - 1][j + 1]) count++;
        if (j < cols - 1) if (g[i][j + 1]) count++;
        if (j > 0) if (g[i][j - 1]) count++;
        if (i < rows - 1) if (g[i + 1][j]) count++;
        if (i < rows - 1 && j > 0) if (g[i + 1][j - 1]) count++;
        if (i < rows - 1 && j < cols - 1) if (g[i + 1][j + 1]) count++;
        if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false;
        if (!g[i][j] && count === 3) g2[i][j] = true;
    }}

    // Set Internal State
      setGridFull(g2)
      setGeneration(generation + 1)
  }


	const playButton = () => {
		clearInterval(intervalID);
		intervalID = setInterval(play, speed);
  }
  
  const stopButton = () => {
    clearInterval(intervalID)
  }

  const resetButton = () => {
    clearInterval(intervalID)
    setGridFull(Array(rows).fill().map(() => Array(cols).fill(false)))
  }


  return (
    <section className="Main">
      <h1 className="App-header">Game of Life</h1>
      <Grid
        gridFull={ gridFull }
        rows={ rows }
        cols={ cols }
        selectBox={ selectBox }
      />
      <h2 className="generation">Generations: { generation } </h2>
      <button onClick={ playButton }>Start</button>
      <button onClick={ stopButton }>Stop</button>
      <button onClick={ resetButton }>Reset</button>
      <button onClick={ seed }>Seed</button> 
    </section>
  )
}


export default Main