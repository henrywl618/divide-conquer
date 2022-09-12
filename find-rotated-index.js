/*
Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The function should return the index of num in the array. If the value is not found, return -1.

Constraints:

Time Complexity: O(log N)

Examples:

findRotatedIndex([3,4,1,2],4) // 1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
findRotatedIndex([37,44,66,102,10,22],14) // -1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1 [20,25,30,1,5,10,13,15,16]
*/


function findRotatedIndex(array, number) {
    // Find the index where the rotation happens, which will always be the largest number in the array. This will be the number where the elements on the left and right are less then the number where the rotation occurs.
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
    let leftIdx = 0;
    let rightIdx = array.length - 1;
    if (array[rotationIndex] === number){
        return rotationIndex
    }else if (array[rotationIndex] > number && array[leftIdx] <= number){
        rightIdx = rotationIndex - 1;
    } else if(array[rotationIndex + 1] <= number && array[rightIdx] >= number){
        leftIdx = rotationIndex + 1;
    }

    console.log(leftIdx,rightIdx);

    while(leftIdx <= rightIdx){
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        if(array[middleIdx] === number){
            return middleIdx
        } else if(array[middleIdx] > number){
            rightIdx = middleIdx - 1 ;
        } else if(array[middleIdx] < number){
            leftIdx = middleIdx + 1;
        }
    }

    return -1;
}

module.exports = findRotatedIndex