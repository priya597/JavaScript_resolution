function setZeros(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    console.log(" rows ", rows, " cols ", cols)
    const zeroRows = new Set();
    const zeroCols = new Set();
    console.log(" zeroRows ", zeroRows, " zeroCols ", zeroCols)
    // Identify rows and columns containing zeros
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 0) {
                zeroRows.add(i);
                zeroCols.add(j);
            }
        }
    }
    console.log(" zeroRows 1 ", zeroRows, " zeroCols 1 ", zeroCols)
    // Set elements in zero rows to zero
    zeroRows.forEach((row) => {
        for (let j = 0; j < cols; j++) {
            matrix[row][j] = 0;
        }
    });
    console.log(" matrix row ", matrix)
    // Set elements in zero columns to zero
    zeroCols.forEach((col) => {
        for (let i = 0; i < rows; i++) {
            matrix[i][col] = 0;
        }
    });
}

// Example usage
const inputMatrix = [
    [1, 2, 3, 0],
    [4, 0, 6, 9],
    [7, 8, 9, 6],
];

setZeros(inputMatrix);
console.log(inputMatrix);
