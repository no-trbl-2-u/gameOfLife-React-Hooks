import React, { useState, useEffect } from 'react';
import Grid from '../Components/Grid';


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
    // Copy Grid
    const gridCopy = [...gridFull]
    // Mutate Copy
    gridCopy[row][col] = !gridCopy[row][col]
    // Set State w/ new Grid
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
  
  // Seed the initial group of activated boxes
  useEffect( () => seed(), [] ) // Empty array to only trigger onLoad

  // logger (Maybe split out into a function that parameterizes the state logging)
  useEffect( () => console.log(
    `State:
      Generation: ${generation},
      GridFull: ${gridFull}
    `
    )
  )

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
    </section>
  )
}


export default Main