import React, { useState, useEffect } from 'react';
import Grid from '../Components/Grid';


function Main () {
  
  // Constants
  const speed = 100;
  const rows = 30;
  const cols = 50;

  // Internal State
  const [ generation, setGeneration ] = useState(0)
  
  const [gridFull, setGridFull] = useState(
    Array(rows).fill().map(() => Array(cols).fill(false))
  )


  const selectBox = (row, col) => {
    const newGrid =
      [...gridFull][row][col] = !newGrid[row][col]
    
    setGridFull(newGrid)
  }

  const seed = () => {
    // Copy the array
    // let gridCopy = [...gridFull]

    // Go through each cell, if its random # *4 = 1, activate
    // for (let i=0; i< rows; i++){
    //   for (let j=0; j< cols; j++){
    //     if (Math.floor(Math.random() * 4) === 1){
    //       gridCopy[i][j] = true;
    //     }
    //   }
    // }
    
    const gridCopy = [...gridFull].map(
      (rows, i) =>
        rows.map(
          (cols, j) => {
            return (
              (Math.floor(Math.random() * 4) === 1)
              ? gridCopy[i][j] = true
              : gridCopy[i][j] = false
            )
          }
        )
    )

  // Set Internal state of new grid
  setGridFull(gridCopy)
  
  }
  
  // Empty array as second argument causes it to only run once
  useEffect( () => seed(), [] )

  return (
    <div>
      <h1>Game of Life</h1>
      <Grid
        gridFull={ gridFull }
        rows={ rows }
        cols={ cols }
        selectBox={ selectBox }
      />
      <h2>Generations: { generation } </h2>
    </div>
  )
}


export default Main