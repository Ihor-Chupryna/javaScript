// function increment(num) {
//     let counter = 0;
//     num++;
//     counter = num
//     if (counter === 100) {
//         console.log(counter);
//         return num;
//     }
//     increment(counter);
// }
// increment(1);

const arr = [1, 2, 3, [4, 5, 6, null,[7, 8, 10, [11, 12, 13, 'Hello', [15, 'Head', 16, {name: 'ihor'}]]]]];

function arrIterator(arrForIter, tempArr = []) {
    let resultArr = [];
    resultArr = tempArr;
    for (const element of arrForIter) {
        if (typeof element === 'number' || typeof element === 'string') {
            resultArr.push(element);
        }
        if (Array.isArray(element)) {
            arrIterator(element, resultArr);
        }
    }
    return resultArr;
}

const resArr = arrIterator(arr);
console.log(resArr);