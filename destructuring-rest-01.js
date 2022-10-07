// Here ...c will contain all the values as an object except the value of x,y,z
const {x,y,z,...c} = {x:45, y:12, z:33, name:'Shakib Al Hasan', Salary:'450'};
console.log(c);

// ... => is called rest which allows a function to accept indefinite No. of arguments as an array
function sum (... theArgs){
    let total = 0;
    for(const arg of theArgs){
        total += arg;
    }
    return total;
}
console.log(sum(1,2,3));