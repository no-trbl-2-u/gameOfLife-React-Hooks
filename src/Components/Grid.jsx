import React, { useEffect } from 'react'
import Box from './Box';

function Grid (props) {
  
  const { gridFull, cols, selectBox } = props
  const width = (cols * 16) + 1;

  const renderedGrid =
    // Iterate through both arrays...
    [...gridFull].map((rows, i) => rows.map((cell, j) => {

      // Create Key
      let boxId = i + "_" + j

      return (
        // JSX Element
        <Box
          boxClass={ props.gridFull[i][j] ? "box on" : "box off" }
          key={ boxId }
          boxID={ boxId }
          row={ i }
          col={ j }
          selectBox={ selectBox }
        />
      )
    }
  )
    )

  return (
    <section className="grid" style={ {width: width} }>
      { renderedGrid }
    </section>
  )
}

export default Grid