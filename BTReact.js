// // 1. Loc phan tu chan, le
// const array = [1, 3, 2, 5, 10, 19, 41, 8, 14, 23];
// const evenArray = array.filter((el) => el % 2 == 0);
// const oddArray = array.filter((el) => el % 2 != 0);
// console.log(evenArray);
// console.log(oddArray);

// // 2. Tinh tong cac phan tu chan
// const array1 = [1, 3, 4, 5, 6, 9, 21, 34, 12];
// const sumary = array1.reduce((sum, curr) => {
//   if (curr % 2 == 0) {
//     return sum + curr;
//   } else {
//     return sum;
//   }
// }, 0);
// console.log(sumary);

// // 3. [1,3,4,5,6,9,21,34,12] tang +1 cho even element
// let array2 = [1, 3, 4, 5, 6, 9, 21, 34, 12];
// array2 = array2.map(el =>{
//   if(el%2 == 0){
//     return el+=1;
//   }else{
//     return el;
//   }
// })
// console.log(array2);

// // 4. Check if string include string
// let stringFather = "string string2 strin10";
// let stringSon =  "string1";
// if(stringFather.includes(stringSon)){
//   console.log(`String \"${stringFather}\" includes \"${stringSon}\"`);
// }

// // 5. Chuan hoa xau
// let stringNotGood = "StrinG1, striNg2, ABSC"; 
// let arrayOfString = stringNotGood.split(" ");
// console.log(arrayOfString);
// let newArray = arrayOfString.map(el=>{
//   return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
// })
// console.log(newArray);
// let finalString = newArray.join(" ");
// console.log(finalString);


// 6. Revert array by spread operator and recursion
let firstArray = [1, 2, 3, 4];
// function swap(array, i, j){
//   [array[i], array[j]] = [array[j], array[i]];
// }
// console.log(smallerArray, firstArray);
function Revert(array, n){
  let smallerArray = firstArray.splice(0, 1);
  if(n == 0){
    return [];
  }
  console.log(smallerArray, array);
  let newArray = array;
  // return [...Revert(array), ...smallerArray];
  return Revert([...newArray, ...smallerArray], --n);
}
// console.log(firstArray);
Revert(firstArray, firstArray.length);
// console.log(firstArray);