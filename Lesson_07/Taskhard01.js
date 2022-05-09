console.log('getAveragePriceGoods');

const allСashbox1 = [
    [12, 4500],
    [7, 3210],
    [4, 650],
    [3, 1250],
    [9, 7830],
    [1, 990],
    [6, 13900],
    [1, 370]
];

const getAveragePriceGoods = (arr) => {
    const output = [];
    for (const [quantity, total] of arr) {
        output.push(Math.floor(total / quantity));
    }
    return output;
}

const resultHard = getAveragePriceGoods(allСashbox1);
console.log('resultHard: ', resultHard);
