/* jshint esversion:6 */
"use strict" ;
let space = "";

function rightJustify(s) {
    let n = s.length;
    for (let index = 1; index < 70 - n; index++) {
        space = space + " ";

    }
    return (space + s);

}
console.log(rightJustify("monty"));