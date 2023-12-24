const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, currentDepth = 1, maxDepth = 1) {
    arr.forEach((element) => {
      if (Array.isArray(element)) {
        maxDepth = Math.max(maxDepth, this.calculateDepth(element, currentDepth + 1, maxDepth));
      }
    });
    return currentDepth > maxDepth ? currentDepth : maxDepth;
  }
}

module.exports = {
  DepthCalculator
};
