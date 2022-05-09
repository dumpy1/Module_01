console.log('getAverageValue');

const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (arr) => {
    let output = 0;
    for (const item of arr) {
        output += item;
        }
output = Math.floor(output/arr.length)
return output
    
}

const result1 = getAverageValue(allСashbox);
console.log('result1: ', result1);