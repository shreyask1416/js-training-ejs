/* 9
A word is said to be “abecedarian” if the letters in the word appear in alphabetical order. 
For example, the following are all six-letter English abecedarian words:

abdest, acknow, acorsy, adempt, adipsy, agnosy, befist, behint, beknow, 
bijoux, biopsy, cestuy, chintz, deflux, dehors, dehort, deinos, diluvy, dimpsy
Write a function called isAbecedarian that takes a String and returns a boolean indicating whether the word is abecedarian
*/

function isAbecedarian(s) {
    let index=s.length-1;
    for(let i=1; i<index ;i++){
        if(s.charAt(i) <= s.charAt(i+1)){

        }
        else{
            return false;
        }
    }
    return true;
}
console.log(isAbecedarian("abc"));

    