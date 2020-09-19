"use strict";
function countChar(string, character) {
    let count = 0;
    for (let x = 0; x < string.length; x++) {
        if (string[x] === character) {
            count++;

        }
    }
    return count;
}
function countBs(string){
    return countChar(string,"B");
}
console.log(countChar("shreya", "s"));
console.log(countBs("BBC"));