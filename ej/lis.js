function arrayToList(arr) {
    return arr.reverse().reduce((rest, value) => {
        return {
            value: value,
            rest: rest
        };
    }, null);
}

function listToArray(list) {
    let arr = [];
    let curr = list;
    while (curr !== null) {
        arr.push(curr.value);
        curr = curr.rest;
    }
    return arr;
}
 function prepend(value, list) {
        return { value, rest: list };
    }

 function nth(list, n) {
        if (!list) return undefined;
        else if (n == 0) return list.value;
        else return nth(list.rest, n - 1);
    }

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20