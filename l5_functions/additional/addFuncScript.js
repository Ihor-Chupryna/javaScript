// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function findMinNumber(num1, num2, num3) {
    if (num1 <= num2 && num1 <= num3) {
        console.log(num1, 'num1');
    } else if (num2 <= num1 && num2 <= num3) {
        console.log(num2, 'num2');
    } else if (num3 <= num1 && num3 <= num2) {
        console.log(num3, 'num3');
    } else {
        console.log('error');
    }
}

findMinNumber(2, 1, 1)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function findMaxNumber(num1, num2, num3) {
    if (num1 >= num2 && num1 > num3) {
        console.log(num1, 'num1');
    } else if (num2 >= num1 && num2 >= num3) {
        console.log(num2, 'num2');
    } else if (num3 >= num1 && num3 >= num2) {
        console.log(num3, 'num3')
    } else {
        console.log('error');
    }
}

findMaxNumber(1, 0, 1);

// - створити функцію яка повертає найбільше число з масиву
const numberArr = [15, 256, 698, 1000, 2, 63, 78, 756];
const findMaxNumbFromArr = (array) => {
    let number = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > number) {
            number = array[i];
        }
    }
    return number;
}

const maxNumb = findMaxNumbFromArr(numberArr);
console.log(maxNumb);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function averageElemArr(array = []) {
    let number = 0;
    for (let i = 0; i < array.length; i++) {
        number = +array[i];
    }
   return  number / array.length
}

let resAverage = averageElemArr(numberArr);
console.log(resAverage);

// - створити функцію яка приймає будь-яку кількість чисел,
// повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function returnMinLogMaxNumb() {
    let min = 999999;
    let max = 0;
    for (const number of arguments) {
        if (number < min) {
            min = number;
        } else if (number > max) {
            max = number;
        }
    }
    console.log(max);
    return min;
}

let min = returnMinLogMaxNumb(2, 6, 8, 1, 566, 22, 9, 111);
console.log(min);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
const emptyArr = [];

function pushArrRandomNumb(array, index) {
    for (let i = 0, j = 0; i < index; i++, j++) {
        array[j] = Math.round(Math.random() * 100);
    }
    console.log(array);
}

pushArrRandomNumb(emptyArr, 20);

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
//  limit - аргумент, який характеризує кінцеве значення діапазону.
function pushArrRandomNumbWithLimit(array, index, limit) {
    for (let i = 0, j = 0; i < index; i++, j++) {
        array[j] = Math.round(Math.random() * limit);
    }
    console.log(array);
}

pushArrRandomNumbWithLimit(emptyArr, 20, 50);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
const arrayReverse = (array) => {
    let revArr = [];
    for (let i = array.length - 1, k = 0; i >= 0; i--, k++) {
        revArr[k] = array[i];
    }
    console.log(revArr);
}
arrayReverse(emptyArr);

// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його,
// якщо два аргументи - складає або конкатенує їх між собою.
const sumElement = (numA, numB) => {
    if (numA && numB) {
        console.log(numA + numB);
    } else {
        console.log(numA);
    }
}
sumElement(2);

// створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами
// та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
const arrNumb1 = [1, 2, 3, 4];
const arrNumb2 = [2, 3, 4, 5];
const sumIndexArr = function (arr1, arr2) {
    const result = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0, k = 0; j < arr2.length; j++, k++) {
            if (i === j) {
                result[k] = arr1[i] + arr2[j];
            }
        }
    }
    return result;
}
let resArr = sumIndexArr(arrNumb1, arrNumb2);
console.log(resArr);

// Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE: [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ];
const arrayObj = [{ name: 'Dima', age: 13 }, { model: 'Camry' }];

function returnKeyObj(array) {
    const arrKeys = [];
    for (let i = 0, k = 0; i < array.length; i++) {
        for (const key in array[i]) {
            console.log(key)
            arrKeys[k++] = key;
        }
    }
    return arrKeys;
}

let resKey = returnKeyObj(arrayObj);
console.log(resKey);

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE: [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

function returnValueObj(array) {
    const arrValues = [];
    for (let i = 0, k = 0; i < array.length; i++) {
        for (const key in array[i]) {
            arrValues[k++] = array[i][key];
        }
    }
    return arrValues;
}

let resValue = returnValueObj(arrayObj);
console.log(resValue);
