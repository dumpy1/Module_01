console.log('Налог');

const base = Number(prompt('Введите сумму заработка', '100'));

switch (true) {
    case (base === 0):
        console.log("Вы отказались от ввода")
        break
    case (isNaN(base % 2)):
        console.log("Ошибка, введено НЕ ЧИСЛО")
        break
    case (base < 15000) :
        console.log('Налог равен: ' + Math.round(base * 0.13))
        break
        case (base >= 15000 && base < 50000) :
            console.log('Налог равен: ' + Math.round(base * 0.2));
            break
            case (base >= 50000) :
            console.log('Налог равен: ' + Math.round(base * 0.3));
            break
    default:
        console.log('введите сумму заработка')
        break
}