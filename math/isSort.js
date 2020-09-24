/* 5
Write a function called isSorted that takes a list as a parameter and returns true if the list is sorted in ascending order 
and false otherwise. For example:

>>> isSorted([1, 2, 2])
true
>>> isSorted(['b', 'a'])
false
*/
function isSorted(a){
    let n=a.length;
    for(let i=0;i<n-1;i++){
        if(a[i]>a[i+1]){

            return false;
        }
    }
    return true;
       
}
console.log(isSorted([1,5,6,3]));
