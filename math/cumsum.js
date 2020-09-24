/* 2
Write a function called cumulativeSum that takes an array of numbers and 
returns the cumulative sum; that is, a new array where the ith element is the sum of the first i+1 elements 
from the original array. For example:

>>> let t = [1, 2, 3]
>>> cumulativeSum(t)
[1, 3, 6]
*/
function cumulativeSum(t){

let output=0;
let s=[];
for(let number of t){
    output +=number;
    s.push(output);
}
return s;
}
let t = [1, 2, 3];
console.log(cumulativeSum(t));