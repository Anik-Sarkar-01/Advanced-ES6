// Find implementation

//Find gives only the first element of an array which meets a certain condition
const numbers = [12,5,23,45,9,7,455,2];
const fives = numbers.find(num => num%5 === 0);
console.log(fives);

// Find implementation for object
const products = [
    {id:1, name:'laptop', price: 45000},
    {id:2, name:'Mobile', price: 35000},
    {id:1, name:'Watch', price: 25000},
    {id:1, name:'Tablet', price: 15000}, 
];

const expensive = products.find(product => product.price < 30000);
console.log(expensive);