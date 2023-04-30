// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {

    const matrix = Array.from(Array(n), () => Array(n));

    let value = 0;

    let startRow = 0;
    let startCol = 0;
    let endRow = n - 1;
    let endCol = n - 1;

    while(startRow <= endRow && startCol <= endCol) {
        for (let col = startCol; col <= endCol; col++) {
            matrix[startRow][col] = ++value;
        }
        startRow++;
        for (let row = startRow; row <= endRow; row++) {
            matrix[row][endCol] = ++value;
        }
        --endCol;
        for (let col = endCol; col >= startCol; col--) {
            matrix[endRow][col] = ++value;
        }
        --endRow;
        for (let row = endRow; row >= startRow; row--) {
            matrix[row][startCol] = ++value;
        }
        startCol++;
    }

    return matrix;
}

module.exports = matrix;
