// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const users = [];
users[0] = new User(1, 'Olga', 'Kasyanova', 'Kasyanova@gmail.com', '0985897421');
users[1] = new User(9, 'Anastasia', 'Aleksandrova', 'Aleksandrova@gmail.com', '0956847896');
users[2] = new User(5, 'Boris', 'Babushkin', 'Babushkin', '0393658971',);
users[3] = new User(3, 'Dmitry', 'Dudinsky', 'Dudinsky@mail.com', '0974568521',);
users[4] = new User(7, 'Andrey', 'Zaytsev', 'Zaytsev@email.com', '0936582147',);
users[5] = new User(10, 'Maria', 'Timmerman', 'Timmerman@email.com', '0679874562',);
users[6] = new User(8, 'Ulyana', 'Bushuyeva', 'Bushuyeva@email.com', '0502458974',);
users[7] = new User(2, 'Leonid', 'Kovalsky', 'Kovalsky@email.com', '0666547896',);
users[8] = new User(6, 'Pavel', 'Lapshin', 'Lapshin@email.com', '0974569821',);
users[9] = new User(4, 'Pyotr', 'Vorobyov', 'Vorobyov@email.com', '0983698521',);
console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
const userWithDoubleId = users.filter(value => value.id % 2 === 0);
console.log(userWithDoubleId);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
const userIdAscending = users.sort((a, b) => a.id - b.id);
console.log(userIdAscending);

// створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order = []) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

const client1 = new Client('1', 'Anastasia', 'Aleksandrova', 'aleksandrova@gmail.com', '0964589812', ['milk']);
const client2 = new Client('2', 'Boris', 'Babushkin', 'babushkin@gmail.com', '0954589815', ['beer', 'chips']);
const client3 = new Client('3', 'Viktor', 'Vasilyev', 'vasilyev@gmail.com', '0954589898', ['fish', 'meat', 'bread']);
const client4 = new Client('4', 'Gennady', 'Georgiyev', 'georgiyev@gmail.com', '0664589852', ['soap', 'tomato', 'potato', 'milk']);
const client5 = new Client('5', 'Dmitry', 'Dudinsky', 'dudinsky@gmail.com', '0974589832', ['vodka', 'jin', 'rom', 'beer', 'whisky']);
const client6 = new Client('6', 'Yelena', 'Yeremeyeva', 'yeremeyeva@gmail.com', '0674589825', ['meat']);
const client7 = new Client('7', 'Pyotr', 'Vorobyov', 'vorobyov@gmail.com', '0664589899', ['water', 'pepsi']);
const client8 = new Client('8', 'Zhanna', 'Strizh', 'strizh@gmail.com', '0504589833', ['coca-cola', 'mars']);
const client9 = new Client('9', 'Zoya', 'Yazova', 'yazova@gmail.com', '0934589875', ['pizza', 'sprite', 'banana']);
const client10 = new Client('10', 'Irina', 'Ilyina', 'ilyina@gmail.com', '0954589891', ['apple', 'orange', 'strawberry', 'sugar']);
const clients = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10];
console.log(clients);

// Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
const sortClientByPurchases = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sortClientByPurchases);

// const sortClientByName = clients.sort((a, b) => {
//     if (a.name > b.name) {
//         return 1
//     }
//     if (a.name < b.name) {
//         return -1
//     }
//     if (a.name === b.name) {
//         return 0
//     }
// });
// console.log(sortClientByName);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, 
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


function Car(model, factory, year, maxSpeed, engine) {
    this.model = model;
    this.factory = factory;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    this.info = function () {
        console.log(`model: ${this.model},
        factory: ${this.factory},
        year: ${this.year},
        maxSpeed: ${this.maxSpeed}, 
        engine: ${this.engine}`);
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
        console.log(this.maxSpeed);
    }
    this.changeYear = function (newValue) {
        this.year = newValue;
        console.log(this.year);
    }
    this.driver = function (driver) {
        this.driver = driver;
        console.log(this.driver);
    }
}

const mazda = new Car('rx-7', 'mazda', 2015, 180, 2.5);
console.log(mazda);
mazda.drive();
mazda.info();
mazda.increaseMaxSpeed(50);
mazda.changeYear(2022);
mazda.driver({ name: 'dima' });

class SuperCar {
    constructor(model, factory, year, maxSpeed, engine) {
        this.model = model;
        this.factory = factory;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        console.log(`model: ${this.model},
        factory: ${this.factory},
        year: ${this.year},
        maxSpeed: ${this.maxSpeed}, 
        engine: ${this.engine}`);
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
        console.log(this.maxSpeed);
    }

    changeYear(newValue) {
        this.year = newValue;
        console.log(this.year);
    }

    addDriver(driver) {
        this.driver = driver;
        console.log(this.driver);
    }
}

const ford = new SuperCar('mustang', 'ford', 1967, 240, 7);



