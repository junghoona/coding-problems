// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let row = matrix.length;
    let col = matrix[0].length;

    let tempRow = new Array(row).fill(-1);
    let tempCol = new Array(col).fill(-1);

    // loop over matrix row
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (matrix[i][j] === 0) {
                tempRow[i] = 0;
                tempCol[j] = 0;
            }
        }
    }
    
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (tempRow[i] === 0 || tempCol[j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }
}