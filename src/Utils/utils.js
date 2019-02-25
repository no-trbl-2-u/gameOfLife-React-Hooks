/* 
  calculateGrid is used to return [rows, cols]
  based on the string passed to calculateGrid
*/ 

// calculateGrid :: String -> [Int, Int]
function calculateGrid (setting) {
  switch(setting) {
    case 'SMALL':
      return [8, 8]

    case 'MEDIUM':
      return [15, 25]

    case 'LARGE':
      return [30, 50]

    default:
      return [3, 3]
  }
}


// calculateMovement :: (Int, Int, [[Bool]], [[Bool]]) -> [[Bool]]
function calculateMovement (rows, cols, grid) {

  let g1 = [...grid];
  let g2 = [...grid];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let count = 0;

      if (i > 0) if (g1[i - 1][j]) count++;
      if (i > 0 && j > 0) if (g1[i - 1][j - 1]) count++;
      if (i > 0 && j < cols - 1) if (g1[i - 1][j + 1]) count++;
      if (j < cols - 1) if (g1[i][j + 1]) count++;
      if (j > 0) if (g1[i][j - 1]) count++;
      if (i < rows - 1) if (g1[i + 1][j]) count++;
      if (i < rows - 1 && j > 0) if (g1[i + 1][j - 1]) count++;
      if (i < rows - 1 && j < cols - 1) if (g1[i + 1][j + 1]) count++;
      if (g1[i][j] && (count < 2 || count > 3)) g2[i][j] = false;
      if (!g1[i][j] && count === 3) g2[i][j] = true;
  }}

  return g2
}

export { calculateGrid, calculateMovement }