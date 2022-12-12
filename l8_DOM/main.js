// є масив
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//  Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
// let simpsonsBlock = document.createElement('div');
// simpsonsBlock.classList.add('simpsons-list');
// for (const simpson of simpsons) {
//     let name = document.createElement('h2');
//     name.innerText = `name: ${simpson.name}`;
//     let surname = document.createElement('h2');
//     surname.innerText = `surname: ${simpson.surname}`;
//     let age = document.createElement('h3');
//     age.innerText = `age: ${simpson.age}`;
//     let info = document.createElement('p');
//     info.innerText = `${simpson.info}`;
//     let photo = document.createElement('img');
//     photo.src = `${simpson.photo}`;
//     simpsonsBlock.append(name, surname, age, info, photo);
// }
// document.body.append(simpsonsBlock);

// Цикл в циклі
// - Є масив
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей,
// для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
// const coursesList = document.createElement('div');
// for (const course of coursesArray) {
//     const courseName = document.createElement('h2');
//     courseName.innerText = `${course.title}`;
//     const durationCourse = document.createElement('div');
//     durationCourse.style.display = 'flex';
//     durationCourse.innerHTML = `<div> month duration: ${course.monthDuration}</div>;<div>hour duration ${course.hourDuration}</div>`
//     const modulesList = document.createElement('div');
//     for (const module of course.modules) {
//         const moduleName = document.createElement('div');
//         moduleName.innerText = `${module}`;
//         modulesList.append(moduleName);
//     }
//     coursesList.append(courseName, durationCourse, modulesList);
// }
// document.body.append(coursesList)
//
//     - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
// const div = document.createElement('div');
// div.innerText = 'Hello Okten';
// div.setAttribute('id', 'collapse');
// div.classList.add('wrap', 'alpha', 'beta');
// document.body.appendChild(div);
// const cloneDiv = div.cloneNode(true);
// document.body.appendChild(cloneDiv);

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
// let array = ['Main', 'Products', 'About us', 'Contacts'];
// const menuUl = document.getElementsByClassName('menu')[0];
// for (const element of array) {
//     const liElement = document.createElement('li');
//     liElement.innerText = `${element}`;
//     menuUl.appendChild(liElement);
// }
// document.body.appendChild(menuUl);
//
// - Є масив
// let coursesAndDurationArray = [
//     { title: 'JavaScript Complex', monthDuration: 5 },
//     { title: 'Java Complex', monthDuration: 6 },
//     { title: 'Python Complex', monthDuration: 6 },
//     { title: 'QA Complex', monthDuration: 4 },
//     { title: 'FullStack', monthDuration: 7 },
//     { title: 'Frontend', monthDuration: 4 }
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// const coursesDiv = document.createElement('div');
// for (const course of coursesAndDurationArray) {
//     const courseInfo = document.createElement('div');
//     courseInfo.classList.add('course-info');
//     const courseTitle = document.createElement('h2');
//     courseTitle.innerText = `${course.title}`;
//     const courseDuration = document.createElement('h3');
//     courseDuration.innerText = `Month Duration: ${course.monthDuration}`;
//     courseInfo.append(courseTitle, courseDuration);
//     coursesDiv.appendChild(courseInfo);
// }
// document.body.append(coursesDiv);
//
// - Є масив
let coursesAndDurationArrayCopy = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
const coursesDivWithClass = document.createElement('div');
for (const course of coursesAndDurationArrayCopy) {
    const headingH1 = document.createElement('h1');
    headingH1.classList.add('heading');
    headingH1.innerText = `${course.title}`;
    const descriptionP = document.createElement('p');
    descriptionP.classList.add('description');
    descriptionP.innerText = `${course.monthDuration}`;
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');
    itemDiv.append(headingH1, descriptionP);
    coursesDivWithClass.appendChild(itemDiv);
}
document.body.appendChild(coursesDivWithClass);
//
// - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
const textDiv = document.createElement('div');
textDiv.setAttribute('id', 'text');
textDiv.innerText = 'Text';
const removeIdButton = document.createElement('button');
removeIdButton.innerText = 'Remove';
removeIdButton.onclick = () => {
    textDiv.removeAttribute('id');
}
document.body.append(textDiv, removeIdButton);
//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
const checkAge = document.createElement('div');
const ageInput = document.createElement('input');
const ageVerificationBtn = document.createElement('button');
ageVerificationBtn.innerText = 'Check age';
const message = document.createElement('h2');
message.innerText = '';
checkAge.append(ageInput, ageVerificationBtn, message);
document.body.append(checkAge);
ageVerificationBtn.onclick = function () {
    console.log(+ageInput.value)
    if (+ageInput.value < 18) {
        message.innerText = 'You are not 18';
        message.style.color = 'red';
    } else {
        message.innerText = 'Welcome!!';
        message.style.color = 'green';
    }
}

// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let tableForm  = document.forms.tableForm;
tableForm.onsubmit = (e) => {
    e.preventDefault();
    let table = document.createElement('table');
    const values = {row: tableForm.tableRow.value, column: tableForm.tableColumn.value, content: tableForm.tableContent.value};
    for (let i = 0; i < values.row ; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < values.column; j++) {
        let column = document.createElement('td');
        column.innerText = `${values.content}`;
            column.style.border = '1px solid black';
            row.appendChild(column);
        }
        table.appendChild(row);
    }
    document.body.appendChild(table);
}


