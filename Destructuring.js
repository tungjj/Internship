// array
// let numbers = [101, 102, 103, 104, 105];
// let [x, y, z] = numbers;

// console.log(x, y, z); // 101 102 103
// [x, y, ...z] = numbers;
// console.log(x, y, z); // 101, 102, [103, 104, 105]

//string
// let message = 'Hello';
// let [a, b] = message;
// let [x, y, ...z] = message;

// console.log(a, b);    // H e
// console.log(x, y, z); // H e ['l', 'l', 'o']

// Object
function foo(){
	return {
		x: 1,
		y: 2,
		z: 3
	}
}
let {x, y, z} = foo(); // x=1, y=2, z=3
let {x: a, y: b, z: c} = foo(); //a=1, b=1, c=1

console.log(x, y, z);
console.log(a, b, c);