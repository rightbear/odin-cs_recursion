#!/usr/bin/env node

// Iteration version of function fibonacci
function fibsIter(index) {
  let first = 0,
    second = 1,
    sum = 0;
  const fibResult = [];

  if (Number.isInteger(index)) {
    if (index >= 1) {
      for (let i = 1; i <= index; i++) {
        if (i === 1) {
          fibResult.push(first);
        } else if (i === 2) {
          fibResult.push(second);
        } else {
          sum = first + second;
          first = second;
          second = sum;
          fibResult.push(sum);
        }
      }
    }
  }
  return fibResult;
}

// Recursion version of function fibonacci
function fibsRec(index) {
  if (Number.isInteger(index)) {
    if (index <= 0) {
      return [];
    } else {
      console.log("This was printed recursively");
      let result = fibsRec(index - 1);

      if (index === 1 || index === 2) {
        return result.concat([index - 1]);
      } else {
        return result.concat([
          result[result.length - 1] + result[result.length - 2],
        ]);
        // Can also write as following code
        // return [...result, result[result.length-1] + result[result.length-2]]
      }
    }
  } else {
    return [];
  }
}

// Test iteration version of function fibonacci
console.log(fibsIter(-1)); // []
console.log(fibsIter(1.1)); // []
console.log(fibsIter(8)); // [ 0, 1, 1, 2, 3, 5, 8, 13 ]
console.log(fibsIter(2)); // [ 0, 1 ]
console.log(fibsIter(10)); // [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

// Test recursion version of function fibonacci
console.log(fibsIter(-1)); // []
console.log(fibsIter(1.1)); // []
console.log(fibsIter(8)); // [ 0, 1, 1, 2, 3, 5, 8, 13 ]
console.log(fibsIter(2)); // [ 0, 1 ]
console.log(fibsIter(10)); // [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]
