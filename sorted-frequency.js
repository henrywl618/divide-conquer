/*
sortedFrequency
Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

Constraints:

Time Complexity: O(log N)

Examples:

sortedFrequency([1,1,2,2,2,2,3],2) // 4
sortedFrequency([1,1,2,2,2,2,3],3) // 1
sortedFrequency([1,1,2,2,2,2,3],1) // 2
sortedFrequency([1,1,2,2,2,2,3],4) // -1
*/


function sortedFrequency(array,number) {
    let leftIndex = 0;
    let rightIndex = array.length - 1;

    //Find the number in the array first 
    while (leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex)/2);

        //If the number is found, find the starting and ending index
        if (array[middleIndex] === number){
            let startingIndex=null;
            let endingIndex=null;

            if(array[middleIndex - 1] != number) startingIndex = middleIndex;
            if(array[middleIndex + 1] != number) endingIndex = middleIndex;
            //binary search on the left side of the found number to find the starting index.
            let leftStartingIdx = 0;
            let leftEndingIdx = middleIndex - 1;
            while (startingIndex === null && leftStartingIdx <= leftEndingIdx){
                let leftMiddleIdx = Math.floor((leftStartingIdx + leftEndingIdx)/2);
                if(array[leftMiddleIdx] === number && array[leftMiddleIdx - 1] !=number){
                    startingIndex = leftMiddleIdx;
                } else {
                    if(array[leftMiddleIdx] === number){
                        leftEndingIdx = leftMiddleIdx - 1;
                    } else if (array[leftMiddleIdx] != number){
                        leftStartingIdx = leftMiddleIdx + 1;
                    }
                }
            }
            //binary search on the right side of the found number to find the ending index.
            let rightStartingIdx = middleIndex + 1;
            let rightEndingIdx = array.length - 1;
            while (endingIndex === null && rightStartingIdx <= rightEndingIdx){
                let rightMiddleIdx = Math.floor((rightStartingIdx + rightEndingIdx)/2);
                if(array[rightMiddleIdx] === number && array[rightMiddleIdx + 1] !=number){
                    endingIndex = rightMiddleIdx;
                } else {
                    if(array[rightMiddleIdx] === number){
                        rightStartingIdx = rightMiddleIdx + 1;
                    } else if (array[rightMiddleIdx] != number){
                        rightEndingIdx = rightMiddleIdx - 1;
                    }
                }
            }

            return endingIndex - (startingIndex - 1);
            

        }else {
            if(array[middleIndex] > number){
                rightIndex = middleIndex - 1;
            }else if (array[middleIndex] < number){
                leftIndex = middleIndex + 1;
            }
        }
    };
    //Return -1 if the number is not found.
    return -1;
}

module.exports = sortedFrequency