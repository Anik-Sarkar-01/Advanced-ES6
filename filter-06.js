// Filter implementation

//Filter gives all the elements inside an array which meets a certain condition
const numbers = [12,5,23,45,9,7,455,2];
const bigNumbers = numbers.filter(number => number > 20);
const tiny = numbers.filter(n => n < 10);
const even = numbers.filter(num => num%2 === 0);
console.log(bigNumbers);
console.log(tiny);
console.log(even);

// Filter implementation for object
const products = [
    {id:1, name:'laptop', price: 45000},
    {id:2, name:'Mobile', price: 35000},
    {id:1, name:'Watch', price: 25000},
    {id:1, name:'Tablet', price: 15000}, 
];

const expensive = products.filter(product => product.price > 25000);
console.log(expensive);