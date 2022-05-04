console.log("Конвертер");

const converter = (cost) => {

    let euroCost = cost;
    let dollar = 73;
    let euro = dollar * 1.2;

    let rubleCost = euroCost * euro;
    return rubleCost;
}

console.log('converter: ', converter(100));