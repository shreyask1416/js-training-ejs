/* 3
Write a function called middle that takes an array and returns a new array that contains 
all but the first and last elements. For example:

>>> let t = [1, 2, 3, 4]
>>> middle(t)
[2, 3]
*/
function middle(s){
    let n=s.length;
    let res=[];
    res[s]=s.slice(s[0],s[n-2]);
    return res[s];
}
let t = [1, 2, 3, 4];
console.log(middle(t));

