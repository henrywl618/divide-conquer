/*
findRotationCount
Write a function called findRotationCount which accepts an array of distinct numbers sorted in increasing order. The array has been rotated counter-clockwise n number of times. Given such an array, find the value of n.

Constraints:

Time Complexity: O(log N)

Examples:

findRotationCount([15, 18, 2, 3, 6, 12]) // 2
findRotationCount([7, 9, 11, 12, 5]) // 4
findRotationCount([7, 9, 11, 12, 15]) // 0
*/

function findRotationCount(array) {

    //finds the largest number in the array
    const getRotationIdx = (array)=>{
        let leftIdx = 0;
        let rightIdx = array.length - 1;

        while(leftIdx <= rightIdx){
            let middleIdx = Math.ceil((leftIdx + rightIdx) / 2);
            if(array[middleIdx] < array[leftIdx]){
                rightIdx = middleIdx - 1;
            } else if(array[middleIdx] > array[leftIdx]){
                leftIdx = middleIdx;
            } else if(array[middleIdx] === array[leftIdx]){
                return leftIdx;
            }
        }

    }

    const rotationIndex = getRotationIdx(array);
    console.log(rotationIndex)

    return rotationIndex === array.length - 1 ? 0 : rotationIndex + 1
}

module.exports = findRotationCount