// copy array
const array1 = ['a', 'b', 'c']
let array2 = ['d', ...array1];

console.log(array2); //[ 'd', 'a', 'b', 'c' ]

// NOTE: 
let array = [1, 2, 3]
let arrayCopyByEqual = array;
let arrayCopyBySpreadOperator = [...array];

array[0] = 6;
console.log(arrayCopyByEqual);          // [ 6, 2, 3 ]
console.log(arrayCopyBySpreadOperator); // [ 1, 2, 3 ]