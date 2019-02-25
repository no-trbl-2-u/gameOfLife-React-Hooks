import React from 'react'
import PropTypes from 'prop-types'
import Box from './Box';

function Grid ({gridFull, cols, selectBox}) {
  const width = (cols * 16) + 1;
  const renderedGrid =
    [...gridFull].map((rows, i) => rows.map((cell, j) => {
      return (
        <Box
          boxClass={ cell ? "box on" : "box off" }
          key={ i + "_" + j }
          boxID={ i + "_" + j }
          row={ i }
          col={ j }
          selectBox={ selectBox }
        />
      )
    })
  )

  return (
    <section className="grid" style={ {width: width} }>
      { renderedGrid }
    </section>
  )
}

Grid.propTypes = {
  gridFull: PropTypes.array.isRequired,
  cols: PropTypes.number.isRequired,
  selectBox: PropTypes.func.isRequired
}

export default Grid