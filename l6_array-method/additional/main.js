// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
function cutString(string, n) {
    let resArr = [];
    for (let i = 0; i < string.length; i += n) {
        resArr.push(string.slice(i, n + i));
    }
    return resArr
}

let result = cutString('наслаждение', 3);
console.log(result);

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
let str = 'Каждый охотник желает знать';
const deleteCharacters = (string, length) => {
    return string.slice(0, length);
}
let resStr = deleteCharacters(str, 7);
console.log(resStr);

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let str2 = "HTML JavaScript PHP";
const insertDash = (string = '') => {
    return string.replaceAll(' ', '-').toUpperCase();
}
let resStr2 = insertDash(str2);
console.log(resStr2);

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let str3 = 'hello';
const toUppercaseWord = (str) => str[0].toUpperCase() + str.slice(1);
console.log(toUppercaseWord(str3));

// - Дано список імен.
// // let n1 = 'Harry..Potter'
// // let n2 = 'Ron---Whisley'
// // let n3 = 'Hermione__Granger'
// // Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// // let n1 = 'Harry Potter'
// // let n2 = 'Ron Whisley'
// // let n3 = 'Hermione Granger'
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
const normalizeStr = (string) => {
    let temp = (string.replaceAll(/[-._]/g, ' ')).split(' ');
    let result = [];
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] === '') {
            continue
        }
        result.push(temp[i]);
    }
    return result.join(' ').trim();
}
let resNormalize = normalizeStr(n3);
console.log(resNormalize);

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
const numbArr = [];
const numbGenerate = (array = []) => {
    for (let i = 0; i < 100; i++) {
        array.push(Math.round(Math.random() * 100))
    }
    return array
}
let genNumRes = numbGenerate(numbArr);
console.log(numbArr);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
const sortArray = numbArr.sort((a, b) => a - b);
console.log(sortArray);

// створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
const filteredArray = sortArray.filter(value => value % 2 === 0 && value !== 0);
console.log(filteredArray);

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
const capitalize = (str = '') => {
    return str.split(' ').map(value => value[0] + value.slice(1)).join(' ');
}
let resUp = capitalize('hello okten');
console.log(resUp);

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@),
// //     наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до
// // регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// // Протестувати на значеннях
// // someemail@gmail.com
// // someeMAIL@gmail.com
// // someeMAIL@i.ua
// // some.email@gmail.com
let email1 = 'someemail@gmail.com';
let email2 = 'someeMAIL@gmail.com';
let email3 = 'someeMAIL@i.ua';
let email4 = 'some.email@gmail.com';
const mailValidator = (mail = ' ') => {
    let str = mail.toUpperCase();
    if (!str.startsWith('@') && str.includes('.', str.indexOf('@') + 3)) {
        console.log('Valid email');
    } else {
        console.log('Not Valid email');
    }
    return str;
}
const newMail = mailValidator(email4);

// - є масивlet:
const coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
const sortByModulesLength = coursesArray.sort((a, b) => {
    return a.modules.length - b.modules.length
})

console.log(sortByModulesLength);

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

let strForCount = "Астрономия это наука о небесных объектах";
const counter = (string, stringSearch) => {
    const counterArr = [];
    for (let i = 0; i < string.length; i++) {
        if (string[i] === stringSearch) {
            counterArr.push(stringSearch);
        }
    }
    return counterArr.length;
}
const stringCounter = counter(strForCount, 'о');
console.log(stringCounter);

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
let strForCut = "Сила тяжести приложена к центру масс тела";
const cutStr = (string, n) => string.split(' ').slice(0, n).join(' ');

const cut = cutStr(strForCut, 5);
console.log(cut);

// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).

