{
    const rain = Math.round(Math.random() * 1);

    if (rain === 1) {
        console.log("Пошёл дождь. Возьмите зонт!");
    } else {
        console.log("Дождя нет!");
    }

}

// {
// console.log("Экзамен");
// const ref = 256;
// const point1 = prompt ("Введите кол-во баллов по математике: ", "0");
// const point2 = prompt ("Введите кол-во баллов по русскому языку: ", "0");
// const point3 = prompt ("Введите кол-во баллов по информатике: ", "0");
// const result = (point1 / 1 ) + (point2 / 1) + (point3 / 1);
// console.log('result: ', result);
// console.log('result: ', typeof result);

// if (result >= 256) {
//     console.log('point1 + point2 + point3: ', point1 + point2 + point3);
// console.log("Поздравляю, вы поступили на бюджет!");
// } else {
//     console.log("Баллов недостаточно для поступления (");
// }
// }

{
    console.log(" Банкомат ");
    const requestedAmount = Number(prompt("Введите сумму для снятия", "100"));


    if (requestedAmount % 100 === 0) {
        console.log('Ожидайте выдачу денег');
    } else {
        console.log('Запрошеная сумма не может быть выдана');
    }


}