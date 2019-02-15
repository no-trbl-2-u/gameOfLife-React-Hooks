import React from 'react'
import Box from './Box';


function Grid (props) {
  const width = (props.cols * 16) + 1;
  var rowsArr = [];
  
  var boxClass = "";
  // REFACTOR do with map()
  for (var i=0; i<props.rows; i+=1) {
    for (var j=0; j<props.cols; j+=1) {
      let boxId = i + "_" + j;

      boxClass = props.gridFull[i][j] ? "box on" : "box off";
      rowsArr.push(
        <Box
          boxClass={boxClass}
          key={boxId}
          boxId={boxId}
          row={i}
          col={j}
          selectBox={props.selectBox}
        />
      )
    }
  }

  return (
    <div className="grid" style={{width: width}}>
      {rowsArr}
    </div>
  )
}

export default Grid