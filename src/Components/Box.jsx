import React from 'react';
import PropTypes from 'prop-types'

// Properties
Box.propTypes = {
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
  boxClass: PropTypes.string.isRequired,
  boxID: PropTypes.string.isRequired,
  selectBox: PropTypes.func.isRequired
//selectBox :: Int -> Int -> State Event
};

// Definition
function Box (props) {

  const { row, col, boxClass, boxID, selectBox } = props

    return (
      <div 
        className={ boxClass }
        boxid={ boxID }
        onClick={ () => selectBox(row, col) }
      />
  );
}
export default Box