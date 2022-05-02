console.log(' Прогресивный налог');

const base = Number(prompt('Введите сумму заработка', '100'));
const tax = base * 0.13;
const taxAbove15K = (base - 15000) * 0.2;
console.log('taxAbove15K: ', taxAbove15K);

const taxAbove50K = (base - 50000) * 0.3;
console.log('taxAbove50K: ', taxAbove50K);

const result = 0;
switch (true) {
    case (base === 0):
        console.log("Вы отказались от ввода")
        break
    case (isNaN(base % 2)):
        console.log("Ошибка, введено НЕ ЧИСЛО")
        break
    case (base <= 15000):
        console.log('Налог равен: ' + base * 0.13)
        break
    case (base > 15000 && base <= 50000):
        console.log('Налог равен: ' + (1950 + taxAbove15K));
        break
    case (base > 50000):
        console.log('Налог равен: ' + (8950 + taxAbove50K));
        break
    default:
        console.log('заплати налоги и спи спокойно')
        break
}