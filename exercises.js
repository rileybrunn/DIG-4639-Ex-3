// 3-1
let arrays = [[1, 2, 3], [4, 5], [6]];

export function flattening(list) {
    return list.reduce((previousValue, currentValue) => previousValue.concat(currentValue));
}

console.log(flattening(arrays));



// 3-2
export function loop(value, test, update, body) {
    let curValue = value;
    while(test(curValue)) {
        console.log('Iteration, curValue ' + curValue);
        console.log('Calling body...');
        body(curValue);
        curValue = update(curValue);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);



// 3-3
export function everyLoop(array, test) {
    let curResult = true;
    for(let item of array) {
        console.log(test(item));
        curResult = curResult && test(item);
    }
    return curResult;
}

console.log(everyLoop([1, 3, 5], n => n < 10));
// → true
console.log(everyLoop([2, 4, 16], n => n < 10));
// → false
console.log(everyLoop([], n => n < 10));
// → true



// 3-4
export function everySome(array, test) {
    return !array.some((value)=>!test(value));
}

console.log(everySome([1, 3, 5], n => n < 10));
// → true
console.log(everySome([2, 4, 16], n => n < 10));
// → false
console.log(everySome([], n => n < 10));
// → true