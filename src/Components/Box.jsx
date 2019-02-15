import React from 'react';

function Box (props) {

  const selectBox = () => {
    props.selectBox(props.row, props.col)
  }

    return (
      <div 
        className={props.boxClass}
        id={props.id}
        onClick={selectBox}
      />
  );
}

export default Box