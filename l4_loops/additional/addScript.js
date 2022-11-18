// --створити масив з:
// - з 5 числових значень
const numberArr = [1, 215, 698, 65, 78];
console.log(numberArr);

// - з 5 стічкових значень
const stringArr = ['hello', 'enter', 'change', 'motion', 'solution'];
console.log(stringArr);

// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
const mixArr = ['total', true, 'basic', 25, false];
console.log(mixArr);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль/**/
const emptyArr = [];
emptyArr['0'] = 5;
emptyArr['1'] = 'property';
emptyArr['2'] = 654;
emptyArr['3'] = false;
emptyArr['4'] = 'anger';
console.log(emptyArr);

/*є масив*/
const numbArr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// 1. перебрати його циклом while
let j = 0;
while (j < numbArr.length) {
    console.log(numbArr[j]);
    j++
}

//     2. перебрати його циклом for
for (let l = 0; l < numbArr.length; l++) {
    console.log(numbArr[l]);
}

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
let z = 0;
while (z < numbArr.length) {
    if (numbArr[z] % 2 === 1) {
        console.log(numbArr[z]);
    }
    z++
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let l = 0; l < numbArr.length; l++) {
    const numb = numbArr[l];
    if (numb % 2 === 1) {
        console.log(numb);
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення
let q = 0;
while (q < numbArr.length) {
    if (numbArr[q] % 2 === 0) {
        console.log(numbArr[q]);
    }
    q++
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let l = 0; l < numbArr.length; l++) {
    const numb = numbArr[l];
    if (numb % 2 === 0) {
        console.log(numb);
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"
for (let number of numbArr) {
    if (number % 3 === 0) {
        number = 'okten'
    }
    console.log(number);
}

// 8. вивести масив в зворотньому порядку.
for (let i = numbArr.length - 1; i >= 0; i--) {
    console.log(numbArr[i]);
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

const mixArray = [12, 'catch', true, 9987, 36, 'storage', false, 'joy', true, 'soft'];
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
for (let l = 0; l < mixArray.length; l++) {
    const element = mixArray[l];
    if (typeof element === "boolean") {
        console.log(element);
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let h = 0;
while (h < mixArray.length) {
    if (typeof mixArray[h] === "number") {
        console.log(mixArray[h]);
    }
    h++
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (const element of mixArray) {
    if (typeof element === "string") {
        console.log(element);
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(i);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 200; i += 2) {
//     console.log(i);
//     document.write(i);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2) {
//         console.log(i);
//         document.writeln(i);
//     }
// }

// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
const books = [
    { title: 'land of the dead', pages: 256, authors: ['ivanov'], genres: ['drama', 'horror'] },
    {
        title: 'god of war',
        pages: 128,
        authors: ['boyko', 'lesin', 'sokolova'],
        genres: ['fantasy', 'adventures', 'detective']
    },
    { title: 'star wars', pages: 512, authors: ['polischyk'], genres: ['fantasy'] },
    { title: 'uncharted', pages: 196, authors: ['petrov', 'levenda'], genres: ['adventures'] },
]

// -знайти наібльшу книжку.
let counterPages = books[0];
for (let i = 0; i < books.length; i++) {
    const element = books[i];
    if (element.pages > counterPages.pages) {
        counterPages = element;
    }
}
console.log(counterPages);

// - знайти книжку/ки з найбільшою кількістю жанрів
let counterGenres = books[0];
for (let i = 0; i < books.length; i++) {
    const book = books[i];
    if (book.genres.length > counterPages.genres.length) {
        counterGenres = book;
    }
}
console.log(counterGenres)

// - знайти книжку/ки з найдовшою назвою
let counterTitle = books[0];
for (let i = 0; i < books.length; i++) {
    const book = books[i];
    if (book.title.length > counterTitle.title.length) {
        counterTitle = book;
    }
}
console.log(counterTitle);

// - знайти книжку/ки які писали 2 автори
let counterAuthors = books[0];
for (let i = 0; i > books.length; i++) {
    let book = books[i];
    if (book.authors.length === 2) {
        counterAuthors = book;
    }
}
console.log(counterAuthors);

// - знайти книжку/ки які писав 1 автор
let counterAuthor = books[0];
for (let i = 0; i < books.length; i++) {
    let book = books[i];
    if (book.authors.length === 1) {
        counterAuthor = book;
    }
}
console.log(counterAuthor);