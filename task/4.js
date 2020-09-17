"use strict";
let sum = 0;
function oddSum(n) {
    if (n == 0) {

        return sum;
    }
    else
    if (n % 2 != 0 && n > 0) {
        sum = sum + n;
        return oddSum(n - 1);
    }
    else { return oddSum(n - 1); }
}
console.log(oddSum(5));

