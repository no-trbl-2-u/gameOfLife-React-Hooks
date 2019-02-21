import React from 'react';
import PropTypes from 'prop-types'


function ButtonContainer ({
  generation,
  playButton,
  stopButton,
  resetButton,
  seed
}) {
  return (
    <div className="ButtonContainer">
      <h2>Generations: { generation } </h2>
      <button onClick={ playButton }>Start</button>
      <button onClick={ stopButton }>Stop</button>
      <button onClick={ resetButton }>Reset</button>
      <button onClick={ seed }>Seed</button> 
    </div>
  );
}

// ButtonContainer.propTypes = {
// };

export default ButtonContainer