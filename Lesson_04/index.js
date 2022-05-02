// {
//     const goodsName = 'whatsminer';
//     console.log('goodsName: ', goodsName);
//     const goodsQuantity = 10;
//     const goodsCategory = 'ASIC';
//     const goodsPrice = 4876;
//     const goodsCost = goodsPrice * goodsQuantity;
//     console.log('goodsCost: ', goodsCost + ' у.е.');
// }

// {
//     const goodsName = 'RX570';
//     console.log('goodsName: ', goodsName);
//     const goodsQuantity = 97;
//     const goodsCategory = 'GPU card';
//     const goodsPrice = 368;
//     const goodsCost = goodsPrice * goodsQuantity;
//     console.log('goodsCost: ', goodsCost + ' у.е.');

// }

{
    const goodsName = prompt("Наименование товара", " ");
    const goodsQuantity = prompt("Количество товара", "0");
    const goodsCategory = prompt("Категория товара", "0");
    const goodsPrice = prompt("Цена товара", "0");
    const goodsCost = goodsPrice * goodsQuantity;

    if (isNaN(goodsQuantity) || isNaN(goodsPrice)) {

        console.log("Вы ввели некорректные данные");
    } else {
        console.log(`На складе ${goodsQuantity} единицы товара ${goodsName} на сумму ${goodsCost} деревянных`);
    }


}