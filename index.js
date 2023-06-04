
function sum(fromN, toN) {
  if(fromN === toN) return toN
  
  return fromN + sum(fromN+1, toN)
}


//3 + 4 + 5 + 6 + 7
//3 + 22 = 25
//4 + 18 = 22
//5 + 13 = 18
//6 + 7 = 13
//sum(7, 7) return 7

console.log(sum(3,7))

module.exports = sum;