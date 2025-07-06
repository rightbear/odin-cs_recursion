#!/usr/bin/env node

// Function mergeSort with recursion method
function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let midIndex = Math.floor(array.length / 2);
  const leftArray = array.slice(0, midIndex);
  const rightArray = array.slice(midIndex);

  return mergeArray(mergeSort(leftArray), mergeSort(rightArray));
}

// Function mergeArray to merge the two sorted array
function mergeArray(left, right) {
  const result = [];
  const leftLength = left.length;
  const rightLength = right.length;
  let leftIndex = 0,
    rightIndex = 0;

  while (leftIndex < leftLength && rightIndex < rightLength) {
    if (left[leftIndex] <= right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex += 1;
    } else {
      result.push(right[rightIndex]);
      rightIndex += 1;
    }
  }

  while (leftIndex < leftLength) {
    result.push(left[leftIndex]);
    leftIndex += 1;
  }

  while (rightIndex < rightLength) {
    result.push(right[rightIndex]);
    rightIndex += 1;
  }

  return result;
}

// Test function mergeSort
console.log(mergeSort([])); // []
console.log(mergeSort([3])); // [ 3 ]
console.log(mergeSort([9, 5])); // [ 5, 9 ]
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // [ 0, 1, 1, 2, 3, 5, 8, 13 ]
console.log(mergeSort([105, 79, 100, 110])); // [ 105, 79, 100, 110 ]
console.log(mergeSort([27, 16, 85, 54, 73])); // [ 16, 27, 54, 73, 85 ]
