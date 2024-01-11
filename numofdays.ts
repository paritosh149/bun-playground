function numofdays(d1: Date, d2:Date) : number { // d1 is less than d2
    let daysOfMonths: number[] = [31,28,31,30,31,30,31,31,30,31,30,31];
    
    let count = 0

    let dayCount = d1.getDate() - d2.getDate();
    let startMonth = d2.getMonth();
    let monthCount = d1.getMonth() - d2.getMonth();
    let yearCount = d1.getFullYear() - d2.getFullYear();
    if( dayCount < 0 ) {
        dayCount += daysOfMonths.at(d1.getMonth() - 1) || 0;
        monthCount--;
    }
    if( monthCount < 0 ) {
        monthCount += 12;
        --yearCount;
    }
    count += 365 * yearCount;
    let numberOfLeaps = Math.floor(yearCount / 4);
    numberOfLeaps += numberOfDivisors(yearCount, d1, d2, 4);
    numberOfLeaps -= Math.floor(yearCount / 100);
    numberOfLeaps -= numberOfDivisors(yearCount, d1, d2, 100);
    numberOfLeaps += Math.floor(yearCount / 400);
    numberOfLeaps += numberOfDivisors(yearCount, d1, d2, 400);
    count += numberOfLeaps;
    for(let thisIndex = 0; thisIndex<monthCount; thisIndex++){
        count += daysOfMonths.at(thisIndex+startMonth) || 0;
    }
    count += dayCount;
    // find number of days 
    return count;
}
const result = numofdays(new Date(2024, 7, 5), new Date(1583, 4, 15));
console.log(result);
function numberOfDivisors(yearCount: number, d1: Date, d2: Date, multiplier: number) {
    if (yearCount % multiplier !== 0 && (d1.getFullYear() % multiplier !== (multiplier - 1) || d2.getFullYear() % multiplier !== 1)) {
        return 1;
    }
    return 0;
}

