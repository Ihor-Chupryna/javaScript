// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const calcArea = (a, b) => a * b;

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function calcAreaCircleWithRadius(radius) {
    return Math.PI * Math.pow(radius, 2);
}

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const calcAreaCylinder = (height, radius) => 2 * Math.PI * radius * (radius + height);
console.log(calcAreaCylinder(5, 25));

// - створити функцію яка приймає масив та виводить кожен його елемент
// function logArrayElement(array = []) {
//     for (const element of array) {
//         console.log(element);
//     }
// }
// const numbArr = [12, 56, 69, 998, 3368, 7];
// logArrayElement(numbArr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createParagraphWithText(text = ' ') {
    document.write(`<p>${text}</p>`);
}

createParagraphWithText('Hello world');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function createList(text = ' ') {
//     document.write(`<ul>
//                       <li>${text}</li>
//                       <li>${text}</li>
//                       <li>${text}</li>
//                    </ul>`);
// }
// createList('Hello');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createList(text = ' ', index) {
    document.write(`<ul>`);
    for (let i = 0; i < index; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

createList('hello', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const mixArr = [25, true, 'land', 69, 'follow', 556, false, 6999];
const createListFromArrayItem = (array) => {
    document.write(`<ol>`)
    for (const element of array) {
        document.write(`<li>${element}</li>`);
    }
    document.write(`</ol>`);
}
createListFromArrayItem(mixArr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
const users = [
    { id: 1, name: 'Danil', age: 20 },
    { id: 2, name: 'Elena', age: 30 },
    { id: 3, name: 'Sergey', age: 27 }
];
const createBlockForUser = function (array) {
    for (const user of array) {
        document.write(`<div>
                         <div>ID: ${user.id}</div>
                         <div>Name: ${user.name}</div>
                         <div>Age: ${user.age}</div>
                    </div>`);
    }
}
createBlockForUser(users);

// - створити функцію яка повертає найменьше число з масиву
const numberArr = [22, 699, 6, 76, 1, 69, 52, 13,];

function findMinNumber(array) {
    let number = 99999;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < number) {
            number = array[i];
        }
    }
    return number;
}

const minNumber = findMinNumber(numberArr);
console.log(minNumber);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function sumArrayElement(array) {
    let sum = 0;
    for (const element of array) {
        sum += element;
    }
    return sum;
}

const sumElem = sumArrayElement(numberArr);
console.log(sumElem);
