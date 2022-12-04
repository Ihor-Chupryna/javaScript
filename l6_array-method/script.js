// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';
console.log(str1.length);
console.log(str2.length);
console.log(str3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let strUp1 = str1.toUpperCase();
let strUp2 = str2.toUpperCase();
let strUp3 = str3.toUpperCase();

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
strUp1.toLowerCase();
strUp2.toLowerCase();
strUp3.toLowerCase();

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let strDirty = ' dirty string   ';
console.log(strDirty.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str = 'Ревуть воли як ясла повні';

function stringToArray(string) {
    return string.split(' ')
}

let res = stringToArray(str);
console.log(res)

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
const numberArr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
const numberToString = (array) => array.map(value => value.toString());
console.log(numberToString(numberArr));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
let nums = [11, 21, 3];

const sortNums = (nums, direction) => {
    if (direction === 'ascending') {
        return nums.sort((a, b) => a - b);
    }
    if (direction === 'descending') {
        return nums.sort((a, b) => b - a)
    } else {
        console.log('Error')
    }
}
console.log(sortNums(nums, 'descending'));

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
const monthDurationDescending = coursesAndDurationArray.sort((a, b) =>
    b.monthDuration - a.monthDuration
);
console.log(monthDurationDescending);

const filterCourses = coursesAndDurationArray.filter(value => value.monthDuration === 5);
console.log(filterCourses);

// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

const deck = [
    { cardSuit: 'Spade', value: 6, color: 'Black' },
    { cardSuit: 'Clubs', value: 6, color: 'Black' },
    { cardSuit: 'Hearts', value: 6, color: 'Red' },
    { cardSuit: 'Diamonds', value: 6, color: 'Red' },
    { cardSuit: 'Spade', value: 7, color: 'Black' },
    { cardSuit: 'Clubs', value: 7, color: 'Black' },
    { cardSuit: 'Hearts', value: 7, color: 'Red' },
    { cardSuit: 'Diamonds', value: 7, color: 'Red' },
    { cardSuit: 'Spade', value: 8, color: 'Black' },
    { cardSuit: 'Clubs', value: 8, color: 'Black' },
    { cardSuit: 'Hearts', value: 8, color: 'Red' },
    { cardSuit: 'Diamonds', value: 8, color: 'Red' },
    { cardSuit: 'Spade', value: 9, color: 'Black' },
    { cardSuit: 'Clubs', value: 9, color: 'Black' },
    { cardSuit: 'Hearts', value: 9, color: 'Red' },
    { cardSuit: 'Diamonds', value: 9, color: 'Red' },
    { cardSuit: 'Spade', value: 10, color: 'Black' },
    { cardSuit: 'Clubs', value: 10, color: 'Black' },
    { cardSuit: 'Hearts', value: 10, color: 'Red' },
    { cardSuit: 'Diamonds', value: 10, color: 'Red' },
    { cardSuit: 'Spade', value: 'Jack', color: 'Black' },
    { cardSuit: 'Clubs', value: 'Jack', color: 'Black' },
    { cardSuit: 'Hearts', value: 'Jack', color: 'Red' },
    { cardSuit: 'Diamonds', value: 'Jack', color: 'Red' },
    { cardSuit: 'Spade', value: 'Queen', color: 'Black' },
    { cardSuit: 'Clubs', value: 'Queen', color: 'Black' },
    { cardSuit: 'Hearts', value: 'Queen', color: 'Red' },
    { cardSuit: 'Diamonds', value: 'Queen', color: 'Red' },
    { cardSuit: 'Spade', value: 'King', color: 'Black' },
    { cardSuit: 'Clubs', value: 'King', color: 'Black' },
    { cardSuit: 'Hearts', value: 'King', color: 'Red' },
    { cardSuit: 'Diamonds', value: 'King', color: 'Red' },
    { cardSuit: 'Spade', value: 'Ace', color: 'Black' },
    { cardSuit: 'Clubs', value: 'Ace', color: 'Black' },
    { cardSuit: 'Hearts', value: 'Ace', color: 'Red' },
    { cardSuit: 'Diamonds', value: 'Ace', color: 'Red' }
];

const cardSort = deck.reduce((acc, value) => {
    if (value.cardSuit === 'Spade') {
        acc.spades.push(value);
    }
    if (value.cardSuit === 'Diamonds') {
        acc.diamonds.push(value);
    }
    if (value.cardSuit === 'Hearts') {
        acc.hearts.push(value);
    }
    if (value.cardSuit === 'Clubs') {
        acc.clubs.push(value);
    }
    return acc;
}, { spades: [], diamonds: [], hearts: [], clubs: [] });
console.log(cardSort);