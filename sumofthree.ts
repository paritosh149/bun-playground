function isSumOfThreeFound(inputArray: number[], targetSum: number) {
    //init
    let stackOfIndexes: number[] = [];
    let targetRemaining = targetSum;
    let inc = true;
    let push = true;
    let thisIndex = 0;
    let nextIndex = 0;
    //iterate
    while (stackOfIndexes.length > 0 || (inc && push)) {/*stackOfIndexes is not empty*/
        if (targetRemaining === 0 && stackOfIndexes.length === 3) {
            return true;
        }
        push = push && stackOfIndexes.length < 3;
        if (inc && push) {
            stackOfIndexes.push(stackOfIndexes.length === 0 ? 0 : stackOfIndexes[stackOfIndexes.length - 1]);
            targetRemaining -= inputArray[stackOfIndexes[stackOfIndexes.length - 1]];
            inc = false;
            push = true;
            continue;
        }
        if (!inc && push) {
            thisIndex = stackOfIndexes[stackOfIndexes.length - 1];
            if (thisIndex === inputArray.length - 1) {
                push = false;
                inc = false;
                continue;
            }
            nextIndex = thisIndex + 1;
            stackOfIndexes.push(nextIndex);
            targetRemaining -= inputArray[stackOfIndexes[stackOfIndexes.length - 1]];
            continue;
        }
        if (!push && inc) {
            thisIndex = stackOfIndexes[stackOfIndexes.length - 1];
            if (thisIndex === inputArray.length - 1) {
                push = false;
                inc = false;
                continue;
            }
            nextIndex = thisIndex + 1;
            stackOfIndexes[stackOfIndexes.length - 1] = nextIndex;
            targetRemaining = targetRemaining + inputArray[thisIndex] - inputArray[nextIndex];
            inc = false;
            push = true;
            continue;
        }
        if (!inc && !push) {
            let popValue = stackOfIndexes.pop();
            if (popValue == undefined) return false;
            targetRemaining += inputArray[popValue];
            push = false;
            inc = true;
            continue;
        }
        if (targetRemaining <= 0) {
            inc = true;
            push = false;
            continue;
        }


    }
    return false;
}

console.log(isSumOfThreeFound([7, 3, 1, 4, 5, 10], 10));
