/* You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
Now convert this array into an even array (array with even
numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
method. Hints: add one to any odd number and it will become an even
number. */

// using For Loop
const oddNumbers = [1,3,5,7,9];
const evenNumbers = [];

for(const oddNumber of oddNumbers ){
    const evenNumber = oddNumber + 1;
    evenNumbers.push(evenNumber);
}
console.log(evenNumbers);

// using Map
const makeEven = oddNumbers.map(x => x+1);
console.log(makeEven);