/*

https://leetcode.com/discuss/interview-question/373202
Amazon | OA 2019 | Optimal Utilization

Given 2 lists a and b:
1.  Each element is a pair of integers
2.  where the first integer represents the unique id
3.  and the second integer represents a value.

Your task is to:

find an element
from a
and an element from b
such that the sum of their values
is less
or equal to target
and as close to target as possible.

Return a list of ids of selected elements.

If no pair is possible, return an empty list.

*/

/*

Example 1:

Input:
a = [[1, 2], [2, 4], [3, 6]]
b = [[1, 2]]
target = 7

Output: [[2, 1]]

Explanation:
There are only three combinations [1, 1], [2, 1], and [3, 1],
which have a total sum of 4, 6 and 8, respectively.
Since 6 is the largest sum that does not exceed 7,
[2, 1] is the optimal pair.

*/

let a = [
  [1, 2],
  [2, 4],
  [3, 6],
];
let b = [[1, 2]];
let target = 7;
//Output: [[2, 1]]

const findTarget = (inputA, inputB, target) => {
  // get id
  inputA.forEach((id, value) => {
    console.log(`id: ${id}\nvalue:${value}\n`);
  });

  // get value
  // get sum
  // check against target
  // store results
};

let getList = findTarget(a, b, target);
