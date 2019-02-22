import React from 'react';
import PropTypes from 'prop-types'


function Box ({row, col, boxClass, boxID, selectBox}) {
  return (
    <div 
      className={ boxClass }
      boxid={ boxID }
      onClick={ () => selectBox(row, col) }
    />
  );
}

Box.propTypes = {
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
  boxClass: PropTypes.string.isRequired,
  boxID: PropTypes.string.isRequired,
  selectBox: PropTypes.func.isRequired
};

export default Box