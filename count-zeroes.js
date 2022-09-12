/*
Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.

Constraints:

Time Complexity: O(log N)

Examples:

countZeroes([1,1,1,1,0,0]) // 2
countZeroes([1,0,0,0,0]) // 4
countZeroes([0,0,0]) // 3
countZeroes([1,1,1,1]) // 0

*/

function countZeroes(array) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  // Return zero if the array only contains 1s (if last element of the array is a 1, it is an array of just 1s). Return length of the array if the first element is 0 (we assume the entire array is zeroes)
  if(array[rightIndex] === 1){
    return 0;
  } else if(array[0] === 0){
    return array.length;
  }

  while (leftIndex <= rightIndex){
    let middleIndex = Math.floor((leftIndex + rightIndex)/2);
    if (array[middleIndex] === 1){
        leftIndex = middleIndex +1;
    }else if(array[middleIndex] === 0){
        //If we find the starting 0 return the number of zeroes in the array. Else continue searching for the starting 0.
        if(array[middleIndex-1]===1){
            return array.length - middleIndex;
        }else {
            rightIndex = middleIndex - 1;
        }
    }
  }
}

module.exports = countZeroes