let time = 7;
let money = 500;

function wakeUp(timeWakeUp) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (timeWakeUp === 7) {
                console.log(`Подьем пора вставать ${timeWakeUp} часов`);
                timeWakeUp += 0.5;
                resolve(timeWakeUp);
            } else if (time < 7) {
                console.log('Рано, можно еще спать')
            } else {
                reject('Все! Опоздал, можно дальше спать')
            }
        }, 1000);
    });
}

function takeAShower(hotWater) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (hotWater) {
                console.log('Есть горячая вода, приму душ');
                resolve(time += 0.5)
            } else {
                reject('Горячей воды нету, пойду спать дальше');
            }
        }, 1800);
    });
}

function breakfast(timeBreakfast) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (timeBreakfast === 7.5) {
                console.log('Время есть, еще успеваю позавтракать');
                resolve(timeBreakfast += 0.5);
            } else {
                reject('Нету времени на завтрак');
            }
        }, 1700);
    });
}

function transportToWork(transport, timeToGoWork) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (transport === 'taxi') {
                console.log('Поеду на такси');
                resolve(timeToGoWork += 0.5, money -= 300);
            } else if (transport === 'metro') {
                console.log('Поеду на метро');
                resolve(timeToGoWork += 1, money -= 100);
            } else if (transport === 'bus') {
                console.log('Поеду на автобусе');
                resolve(timeToGoWork += 1.5, money -= 100);
            } else {
                reject('Вообще транспорт не ходит')
            }

        }, 2000);
    })
}

function working(isJobDone) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isJobDone) {
                console.log('Хорошо поработал, заработал 1000');
                resolve(money += 1000);
            } else {
                reject('Плохо работал, ничего не заработал')
            }
        }, 1000);
    });
}

function goToDinner(moneyForDiner) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (moneyForDiner > 300) {
                console.log('Поработал, можно и пообедать');
                resolve(moneyForDiner - 300);
            }
            {
                reject('Heт денег на обед');
            }
        }, 1200);
    });
}

function goShopping(moneyForShopping) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (moneyForShopping >= 900) {
                console.log('Денег хватает, можно за покупками')
                resolve(moneyForShopping - 900);
            } else {
                reject('Маловато денег на покупки')
            }
        }, 900)
    });
}

// wakeUp(time)
//     .then(getUp => {
//         console.log('Все, проснулся');
//         return takeAShower(true);
//     })
//     .then(timeAfterShower => {
//         console.log('Душ принял');
//         return breakfast(timeAfterShower);
//     })
//     .then(timeAfterBreakfast => {
//         console.log(`Пора идти на работу ${timeAfterBreakfast} часов`);
//         return transportToWork('metro', timeAfterBreakfast);
//     })
//     .then(cameToWork => {
//         if (cameToWork >= 8 && cameToWork < 9) {
//             console.log('Быстро добрался, можно еще кофе выпить');
//         } else if (cameToWork === 9) {
//             console.log('Чуть не опоздал');
//         } else if (cameToWork > 9) {
//             console.log('Опоздал, штраф 100');
//         } else {
//             console.log('Не попал сегодня на работу');
//         }
//         return working(true);
//     })
//     .then(moneyAfterWork => {
//         console.log(`Всего денег ${moneyAfterWork}`);
//         return goToDinner(moneyAfterWork);
//     })
//     .then(moneyAfterDiner => {
//         console.log(`Вкусный обед, осталось ${moneyAfterDiner}`);
//         return goShopping(moneyAfterDiner);
//     })
//     .then(moneyAfterShopping => {
//         console.log(`Купил все что нужно, осталось ${moneyAfterShopping}`);
//     })
//     .catch(e => {
//         console.log(e);
//     });

async function myDay() {
    try {
        const timeGetUp = await wakeUp(time);
        console.log(`${timeGetUp} часов, пора вставать`);

        const timeAfterShower = await takeAShower(true);
        console.log('Принял душ');

        const timeAfterBreakfast = await breakfast(timeAfterShower);
        console.log(`${timeAfterBreakfast} часов, пора на работу`);

        const cameToWork = await transportToWork('bus', timeAfterBreakfast);
        if (cameToWork >= 8 && cameToWork < 9) {
            console.log('Быстро добрался, можно еще кофе выпить');
        } else if (cameToWork === 9) {
            console.log('Чуть не опоздал');
        } else if (cameToWork > 9) {
            console.log('Опоздал, штраф 400');
            money -= 400;
        } else {
            console.log('Не попал сегодня на работу');
        }

        const moneyAfterWork = await working(true);
        console.log(`Всего денег ${moneyAfterWork}`);

        const moneyAfterDinner = await goToDinner(moneyAfterWork);
        console.log(`После обеда осталось ${moneyAfterDinner}`);

        const moneyAfterShopping = await goShopping(moneyAfterDinner);
        console.log(`Купил все что нужно, осталось ${moneyAfterShopping}`);
    } catch (e) {
        console.log(e);
    }
}

myDay().then();
