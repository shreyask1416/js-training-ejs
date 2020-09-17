"use strict";

function checkFermat(a, b, c, n) {


    if (n > 2 && (a ** n + b ** n == c ** n)) {
        console.log("Holy smokes,Fermat was wrong!");
    }
    else {
        console.log("no,that doesnt work");
    }

}
console.log(checkFermat(4, 5, 9, 1));