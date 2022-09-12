/*
findFloor
Write a function called findFloor which accepts a sorted array and a value x, and returns the floor of x in the array. The floor of x in an array is the largest element in the array which is smaller than or equal to x. If the floor does not exist, return -1.

Examples:

findFloor([1,2,8,10,10,12,19], 9) // 8
findFloor([1,2,8,10,10,12,19], 20) // 19
findFloor([1,2,8,10,10,12,19], 0) // -1
Constraints

Time Complexity: O(log N)
*/

function findFloor(array, number) {
    let leftIdx = 0;
    let rightIdx = array.length - 1;
    let floor;
    if (array[leftIdx] > number) return -1;

    while(leftIdx <= rightIdx){
        let middleIdx = Math.ceil((leftIdx + rightIdx)/2);
        if(array[middleIdx] === number){
            return number
        } else if (array[middleIdx] > number){
            rightIdx = middleIdx - 1;
        } else if (array[middleIdx] < number){
            floor = array[middleIdx];
            leftIdx = middleIdx + 1;
        }
    }

    return floor;
}

module.exports = findFloor