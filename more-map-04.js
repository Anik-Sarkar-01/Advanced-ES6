//Map number array
const numbers = [10,20,30,40,50];
const half = numbers.map(n => n/2);
const third = numbers.map( x => x/3);
console.log(half);
console.log(third);

//Map string Array
const friends = ["Anik","Rahid","Shakil"];
const firstLetters = friends.map(friend => friend[0]);
console.log(firstLetters);
const nameLengths = friends.map(friend => friend.length);
console.log(nameLengths);

// Map Array of Object
const products = [
    {id:1, name:'laptop', price: 45000},
    {id:2, name:'Mobile', price: 35000},
    {id:1, name:'Watch', price: 25000},
    {id:1, name:'Tablet', price: 15000}, 
];

// const items = products.map(product => console.log(product.name));
const items = products.map(product => product.name);
console.log(items);