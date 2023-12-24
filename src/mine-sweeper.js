const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let gameSetup = [];
    for (let row = 0; row < matrix.length; row++) {
        gameSetup[row] = [];
        for (let col = 0; col < matrix[row].length; col++) {
            let minesCount = 0;
            for (let adjRow = row - 1; adjRow <= row + 1; adjRow++) {
                for (let adjCol = col - 1; adjCol <= col + 1; adjCol++) {
                    if (adjRow === row && adjCol === col) {
                        continue;
                    }
                    if (adjRow >= 0 && adjRow < matrix.length &&
                        adjCol >= 0 && adjCol < matrix[row].length &&
                        matrix[adjRow][adjCol]) {
                        minesCount++;
                    }
                }
            }
            gameSetup[row][col] = minesCount;
        }
    }

    return gameSetup;
}

module.exports = {
  minesweeper
};
