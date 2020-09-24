/* 6
Two words are anagrams if you can rearrange the letters from one to spell the other.
 Write a function called isAnagram that takes two strings and returns true if they are anagrams.
 */

function isAnagram (str1, str2) {

    if (str1.length !== str2.length) {
        return false;
    }
    
    let a = str1.split('').sort().join('');
    let b = str2.split('').sort().join('');

    return (a === b);
}

console.log(isAnagram('dog','god')); // true
console.log(isAnagram('cat','act')); // true
console.log(isAnagram('foo','food')); // false
