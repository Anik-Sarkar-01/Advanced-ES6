// Array Mapping:
const numbers = [10, 20, 30, 40, 50];

// Normal program for making an array elements double:
const output = [];
for(const number of numbers){
    const doubled = number * 2;
    output.push(doubled);
}
console.log(output);

// Program using function for making an array elements double:
 function getDoubles(numbers) {
    const output = [];
    for (const number of numbers) {
        const doubled = doubleIt(number);
        output.push(doubled);
    }
    return output;
}
function doubleIt(number){
    return number * 2;
}

const result = getDoubles(numbers);
console.log(result);

// We can write this as the arrow function of above program:
const doubleIt = num => num * 2;

// Using Map for making the array elements double:

// Method - 1 :
const makeDouble = numbers.map(doubleIt);
console.log(makeDouble);
// Method - 2 :
const makeDoubleDirect = numbers.map(x => x*2);
console.log(makeDoubleDirect);
// Method - 3 :
const fiveTimes = [1,2,3,4,5].map(x => x*5);
console.log(fiveTimes);
