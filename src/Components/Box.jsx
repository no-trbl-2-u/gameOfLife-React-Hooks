import React from 'react';

function Box (props) {

  const { row, col, boxClass, id, selectBox } = props

    return (
      <div 
        className={ boxClass }
        id={ id }
        onClick={ () => selectBox(row, col) }
      />
  );
}

export default Box