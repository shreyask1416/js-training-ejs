let deepEqual = function (a, b) {

    if (typeof a !== typeof b) {
        return false;
    }
    else if (typeof a === "object" && (!b || !a)) {
        return b === a;
    }
    else if (typeof a === "object") {
        let keys_a = Object.keys(a);
        let keys_b = Object.keys(b);

        if (keys_a.length !== keys_b.length) {
            return false;
        }
        else {
            for (let i = 0; i < keys_a.length; i++) {
                if (keys_a[i] !== keys_b[i])
                    return false;
                if (!deepEqual(a[keys_a[i]], b[keys_b[i]]))
                    return false;
            }
            return true;
        }
    }
    else {
        return a === b;

    }
};

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true