import React from 'react'
import PropTypes from 'prop-types'
import GridSizeDropDown from './GridSizeDropDown'

function ButtonContainer ({
  generation,
  playButton,
  stopButton,
  clearButton,
  seed,
  setGridSize
}) {
  return (
    <div className="ButtonContainer">
      <h2>Generations: { generation } </h2>
      <button onClick={ playButton }>Start</button>
      <button onClick={ stopButton }>Stop</button>
      <button onClick={ clearButton }>Clear</button>
      <button onClick={ seed }>Seed</button>
      <GridSizeDropDown setGridSize={ setGridSize } />
    </div>
  );
}

ButtonContainer.propTypes = {
  generation: PropTypes.number.isRequired,
  playButton: PropTypes.func.isRequired,
  stopButton: PropTypes.func.isRequired,
  clearButton: PropTypes.func.isRequired,
  seed: PropTypes.func.isRequired,
  setGridSize: PropTypes.func.isRequired
};

export default ButtonContainer