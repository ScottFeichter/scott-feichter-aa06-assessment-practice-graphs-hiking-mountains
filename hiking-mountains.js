function findPeak(matrix) {
  let highest = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let k = 0; k < matrix[0].length; k++) {
      if (matrix[i][k] > highest) {
        highest = matrix[i][k];
      }
    }
  }

  // console.log("highest: ", highest);
  return highest;
}

function findStarts(matrix) {
  let starts = [];

  // Top Row
  for (let i = 0; i < matrix[0].length; i++) {
    if (matrix[0][i] == 0) {
      starts.push([0, i]);
    }
  }

  // Bottom Row
  for (let i = 0; i < matrix[matrix.length - 1].length; i++) {
    if (matrix[matrix.length - 1][i] == 0) {
      starts.push([matrix.length - 1, i]);
    }
  }

  // Left except first and last
  for (let i = 1; i < matrix.length - 1; i++) {
    if (matrix[i][0] == 0) {
      starts.push([i, 0]);
    }
  }

  // Right except first and last
  for (let i = 1; i < matrix.length - 1; i++) {
    if (matrix[i][matrix[0].length - 1] == 0) {
      starts.push([i, matrix[0].length - 1]);
    }
  }
  // console.log("starts: ", starts);
  return starts;
}

function findNeighbors(node, matrix) {
  // Don't forget to include diagonal neighbors!!!
  debugger;
  const neighborsArr = [];
  const neighborsObj = {};
  const c = node[0];
  const r = node[1];

  /*

    [-1, -1]  [-1, 0]  [-1, +1]

    [0, -1]   [node]   [0, +1]

    [+1, -1]  [+1, 0]  [+1, +1]


  */

  // [-1, -1]
  if (matrix[c - 1] && matrix[r - 1]) {
    if (
      matrix[c - 1][r - 1] > matrix[c][r] + 1 ||
      matrix[c - 1][r - 1] < matrix[c][r] - 1
    ) {
      neighborsArr.push([c - 1, r - 1]);
    }
  }
  console.log(neighborsArr);
  debugger;

  // [-1, 0]
  if (matrix[c - 1] && matrix[r]) {
    if (
      matrix[c - 1][r] > matrix[c][r] + 1 ||
      matrix[c - 1][r] < matrix[c][r] - 1
    ) {
      neighborsArr.push([c - 1, r]);
    }
  }
  console.log(neighborsArr);
  debugger;

  // [-1, +1]
  if (matrix[c - 1] && [r + 1]) {
    if (
      matrix[c - 1][r + 1] > matrix[c][r] + 1 ||
      matrix[c - 1][r + 1] < matrix[c][r] - 1
    ) {
      neighborsArr.push([c - 1, r + 1]);
    }
  }
  console.log(neighborsArr);
  debugger;

  // [0, -1]
  if (matrix[c] && matrix[r - 1]) {
    if (
      matrix[c][r - 1] > matrix[c][r] + 1 ||
      matrix[c][r - 1] < matrix[c][r] - 1
    ) {
      neighborsArr.push([c, r - 1]);
    }
  }
  console.log(neighborsArr);
  debugger;

  // [0, +1]
  if (matrix[c] && matrix[r + 1]) {
    if (
      matrix[c][r + 1] > matrix[c][r] + 1 ||
      matrix[c][r + 1] < matrix[c][r] - 1
    ) {
      neighborsArr.push([c, r + 1]);
    }
  }
  console.log(neighborsArr);
  debugger;

  // [+1, -1]
  if (matrix[c + 1] && matrix[r - 1]) {
    if (
      matrix[c + 1][r - 1] > matrix[c][r] + 1 ||
      matrix[c + 1][r - 1] < matrix[c][r] - 1
    ) {
      neighborsArr.push([c + 1, r - 1]);
    }
  }
  console.log(neighborsArr);
  debugger;

  // [+1, 0]
  if (matrix[c + 1] && matrix[r]) {
    if (
      matrix[c + 1][r] > matrix[c][r] + 1 ||
      matrix[c + 1][r] < matrix[c][r] - 1
    ) {
      neighborsArr.push([c + 1, r]);
    }
  }
  console.log(neighborsArr);
  debugger;

  // [+1, +1]
  if (matrix[c + 1] && matrix[r + 1]) {
    if (
      matrix[c + 1][r + 1] > matrix[c][r] + 1 ||
      matrix[c + 1][r + 1] < matrix[c][r] - 1
    ) {
      neighborsArr.push([c + 1, r + 1]);
    }
  }
  console.log(neighborsArr);
  debugger;

  return neighborsArr;
}

function pathTraversal(node, matrix, visited, peak) {
  // Your code here
}

function identifyPath(mountain) {
  // Find the peak
  // Find the start
  // Traverse from the starts and try to get to the top
  // Your code here
}

// Uncomment for local testing

// // Example 0
const mountain_0 = [
  [1, 2, 4],
  [4, 5, 9],
  [5, 7, 6],
];

// console.log(mountain_0[4,4]);
console.log(findNeighbors([2, 0], mountain_0));
// <- Expect '[ [ 1, 0 ], [ 1, 1 ] ]'

// // Example 1
// const mountain_1 = [
//         [1, 0, 1, 1],
//         [2, 3, 2, 1],
//         [0, 2, 4, 1],
//         [3, 2, 3, 1]
// ];

// console.log(findStarts(mountain_1));

// test_visited = new Set()
// console.log(pathTraversal([0, 1], mountain_1, test_visited, 4)) // <- Expect 'true
// console.log(identifyPath(mountain_1)) // <- Expect '[ 0, 1 ]'

// // Example 2
// const mountain_2 = [
//         [0, 2, 1, 1],
//         [2, 2, 3, 1],
//         [1, 1, 1, 1],
//         [1, 0, 1, 1]
// ];

// console.log(identifyPath(mountain_2)) // <- Expect '[ 3, 1 ]'

// // Example 3
// const mountain_3 = [
//         [0, 1, 2, 0],
//         [5, 1, 3, 2],
//         [4, 1, 2, 1],
//         [3, 4, 3, 1]
// ];

// console.log(identifyPath(mountain_3)) // <- Expect '[ 0, 0 ]'

/*************DO NOT MODIFY UNDER THIS LINE ***************/

module.exports = [identifyPath, findNeighbors, pathTraversal];
