//Link to the challenge: https://www.freecodecamp.org/learn/javascript-v9/lab-range-based-lcm-calculator/implement-a-range-based-lcm-calculator

const gcd = (a, b) => b === 0 ? Math.abs(a) : gcd(b, a % b);

function smallestCommons(arrOf2Num){
  const min = Math.min(...arrOf2Num);
  const max = Math.max(...arrOf2Num);

  const newArr = []
  for (let i = min; i < max + 1; i++){
    newArr.push(i)
  }

  return newArr.reduce((acc, curr) => (acc * curr) / gcd(acc, curr) , min)
}

//test 2
console.log(smallestCommons([1, 5]))

//test 3
console.log(smallestCommons([5, 1]))

//test 5
console.log(smallestCommons([2, 10]))