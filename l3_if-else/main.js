// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let number = 0;
// if (number !== 0) {
//     console.log('right');
// } else {
//     console.log('not right');
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time = 45;
// if (time >= 0 && time < 15) {
//     console.log('first');
// } else if (time >= 15 && time < 30) {
//     console.log('second');
// } else if (time >= 30 && time < 45) {
//     console.log('third');
// } else if (time >= 45 && time < 60) {
//     console.log('fourth');
// } else {
//     console.log('unknown');
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 10;
// if (day >= 1 && day < 11) {
//     console.log('first');
// } else if (day >= 10 && day < 21) {
//     console.log('second');
// } else if (day >= 20 && day < 32) {
//     console.log('third');
// } else {
//     console.log('unknown');
// }

day >= 1 && day < 11 ? console.log('first') : day >= 11 && day < 21 ? console.log('second')
    : day >= 21 && day < 32 ? console.log('third') : console.log('error');

    // - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
    let dayOfTheWeek = 'qqqq';
switch (dayOfTheWeek) {
    case 'sunday':
        console.log('hello sunday');
        break;
    case 'monday':
        console.log('hello monday');
        break;
    case 'tuesday':
        console.log('hello tuesday');
        break;
    case 'wednesday':
        console.log('hello wednesday');
        break;
    case 'thursday' :
        console.log('hello thursday');
        break;
    case 'friday':
        console.log('hello friday');
        break;
    case 'saturday':
        console.log('hello saturday');
        break;
    default:
        console.log('error');
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let numberOne = 2;
let numberTwo = 2;
if (numberOne >= numberTwo) {
    console.log(numberOne);
} else {
    console.log(numberTwo);
}

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто касту
let user = 0 || 'user';
console.log(user)