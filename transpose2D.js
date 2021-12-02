const transpose = function(matrix) {
  const inputRowsNum = matrix[0].length;
  const outerArr = [];
  for (let col = 0; col < inputRowsNum; col++) {

    const innerArr = [];
    for (let row = 0; row < matrix.length; row++) {
      innerArr.push(matrix[row][col]);
    }

    outerArr.push(innerArr);
  }
  return outerArr;
};

module.exports = transpose;