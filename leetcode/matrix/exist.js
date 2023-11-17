// Given an m x n grid of characters board and a string word,
// return true if word exists in the grid.

// NOTE: The word can be constructed from letters of sequentially adjacent cells, 
// where adjacent cells are horizontally or vertically neighboring. 

// The same letter cell may not be used more than once.

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let row = board.length;
    let col = board[0].length;

    if (word.length < 1) return false;

    const dfs = (i, j, pos) => {
        // if looping outside the bounds OR current element in matrix != curr pos
        if (i === row || i < 0 || j === col || j < 0 || board[i][j] !== word[pos]) return false;

        if (pos === word.length - 1) return true;

        board[i][j] = "*" // Mark as visited in the matrix
        const found = 
        // Check every direction and see if there is a match
            dfs(i + 1, j, pos + 1) ||
            dfs(i - 1, j, pos + 1) ||
            dfs(i, j + 1, pos + 1) ||
            dfs(i, j - 1, pos + 1);
        
        return found;
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (board[i][j] === word[0]) {
                const match = dfs(i, j, 0);
                if (match) return true;
            }
        }
    }
    return false;
}