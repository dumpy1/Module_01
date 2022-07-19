console.log(' randomArray');
const randomArray = (len) => {
    const arr = new Array(len).fill(0);
    const min = 1;
    const max = 100;
    
    return arr.map(el => Math.floor(Math.random() * (max - min + 1)) + min);

}

const result = randomArray(50)
console.log('result: ', result);

