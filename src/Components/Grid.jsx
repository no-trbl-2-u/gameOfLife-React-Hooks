import React, { useEffect } from 'react'
import Box from './Box';

function Grid (props) {
  
  const { gridFull, cols, selectBox } = props
  const width = (cols * 16) + 1;

  const renderedGrid =
    [...gridFull].map(
      (rows, i) =>
        rows.map(
          (cell, j) => {
            // Key
            let boxId = i + "_" + j
            return (
              // JSX Element
              <Box
                boxClass={ props.gridFull[i][j] ? "box on" : "box off" }
                key={ boxId }
                boxId={ boxId }
                row={ i }
                col={ j }
                selectBox={ selectBox }
              />
            )
          }
        )
    )

  return (
    <div className="grid" style={ {width: width} }>
      { renderedGrid }
    </div>
  )
}

export default Grid