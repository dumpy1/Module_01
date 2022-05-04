console.log('calculate');

// Если товаров больше 10, то ко всей сумме применяется скидка 3% ко всей сумме;
// При сумме, превышающей 30 000, применяется скидка 15% к сумме превышения
// Если промокод равен "METHED", то скидка 10%
// Если промокод равен "G3H2Z1", то скидка 500 рублей, но только если сумма  корзины после предыдущих скидок превышает 2000р

const calculate = (total, quantity, promo) => {

    let finalTotal = total;
    if (quantity > 10) {
        finalTotal *= 0.97;
    }
    if (total > 30000) {
        finalTotal = (((finalTotal - 30000) * 0.85) + 30000);
    }

    if (promo === 'METHED') {
        finalTotal *= 0.9;
    }
    if (promo === 'G3H2Z1' && finalTotal > 2000) {
        finalTotal -= 500;
    }

    return finalTotal;
}

console.log('calculate: ', calculate(31000, 11, ''));