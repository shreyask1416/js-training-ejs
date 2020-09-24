/* 7
 Write a function called hasDuplicates that takes an array and returns true 
 if there is any element that appears more than once. It should not modify the original array.
*/
function hasDuplicates(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (i != j) {
                if (arr[i] == arr[j]) {
                    return true;
                }
            }

        }

    }
    return false;
}
console.log(hasDuplicates(["ss", "ss"]));