/*

Sample Input
1 2 3
4 5 6
7 8 9

Output
[
  [1], [2, 4], [3, 5, 7], [6, 8], [9],
  [7], [4, 8], [1, 5, 9], [2, 6], [3],
]
*/

const sampleMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
const diagonalTraversal = matrix => {
    const numberOfcolumns = matrix[0].length;
    const numberOfRows = matrix.length;

    let output = [];

    for(let row = 0; row < numberOfRows; row++) {
        for(let column = 0; column < numberOfcolumns; column++) {
            
            if(inFirstRow(matrix, row, column) || inLastColumn(matrix, row, column)) {
                output.push(traverseDiagonal(matrix, row, column));
            }
        }
    }

    console.log(output);
}
  
  const inFirstRow = (matrix, row, column) => {
    const numberOfcolumns = matrix[0].length;
    return column < numberOfcolumns - 1 && row === 0;
  }

  const inLastColumn = (matrix, row, column) => {
    const numberOfcolumns = matrix[0].length;
    const numberOfRows = matrix.length;
    return  column === numberOfcolumns - 1 && row < numberOfRows;
  }

  const inBound = (matrix, row, column) => {
    const numberOfcolumns = matrix[0].length;
    const numberOfRows = matrix.length;
    return row >= 0 && column >= 0 && row < numberOfRows && column < numberOfcolumns;
  }
  
  const traverseDiagonal = (matrix, row, column) => {
    let diagonal = [];
    
    while(inBound(matrix, row, column)) {
      diagonal.push(matrix[row][column]);
      row++;
      column--;
    }
    return diagonal;
  }


  diagonalTraversal(sampleMatrix)