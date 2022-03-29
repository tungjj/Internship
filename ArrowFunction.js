const array = [ 1, 2, 3, 4];

let sumary = array.reduce( function(sum, current){
  return sum+current
}, 0)
console.log(sumary);