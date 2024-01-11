// Merge sort
function sort(inputArray: number[], runScratch: boolean = false): number[] { // O(log n)
    if (runScratch) {
        // if array length = 1 then return the array as-is
        if (inputArray.length <= 1) return inputArray; // O(1)
        // else
        // divide the array into two sub arrays
        const [leftArray, rightArray] = divide(inputArray); // O(n)
        // recurse sort for both sub arrays
        const leftSortedArray = sort(leftArray, true); 
        const rightSortedArray = sort(rightArray, true);
        // merge 
        return merge(leftSortedArray, rightSortedArray); //O(n)
        // return merged array
    }
    else return inputArray.toSorted((a, b) => a - b);

}

function merge(leftSortedArray: number[], rightSortedArray: number[]): number[] {
    const leftSortedArrayLength = leftSortedArray.length;
    const rightSortedArrayLength = rightSortedArray.length;
    // start both at zeroth index
    let lIndex = 0, rIndex = 0;
    let outputArray: number[] = [];
    let leftItem = leftSortedArray[lIndex];
    let rightItem = rightSortedArray[lIndex];
    // loop until both arrays completed
    while (lIndex < leftSortedArrayLength && rIndex < rightSortedArrayLength) {
        if (leftItem < rightItem) {
            outputArray.push(leftItem); // smallest to largest
            lIndex++;
            leftItem = leftSortedArray[lIndex];
        } else {
            outputArray.push(rightItem); // smallest to largest
            rIndex++;
            rightItem = rightSortedArray[rIndex];
        }
    }
    // some items pending to be merged
    for (; lIndex < leftSortedArrayLength; lIndex++) outputArray.push(leftSortedArray[lIndex]);
    for (; rIndex < rightSortedArrayLength; rIndex++) outputArray.push(rightSortedArray[rIndex]);

    return outputArray;
}

function divide(inputArray: number[]) {
    const inputArrayLength = inputArray.length;
    return [inputArray.toSpliced(inputArrayLength / 2), inputArray.toSpliced(0, inputArrayLength / 2)];
}

console.log(sort([5, 1, 8, 4, 0, 2], true));