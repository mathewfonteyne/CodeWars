// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.

// My solution //

function getSum(a, b)
{
   //Good luck!
  if (a == b) {
    return a
  }
  let start = Math.min(a, b);
  let end = Math.max(a, b);

  // Initialize the sum
  let sum = 0;

  // Loop through the range and add each number to the sum
  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
  }

console.log(getSum(1,0))
console.log(getSum(-1,5))
console.log(getSum(1,8))