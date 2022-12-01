let myArray = [1, 2, 3];
let previous = 2.5;
let arraySum = myArray.reduce((previous, current =>  previous + current));
console.log(`Sum of array values is: ${arraySum}`);