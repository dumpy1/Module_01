{console.log(' randomArray02');
const randomArray = (len, n, m) => {
    const arr = new Array(len).fill(0);
    const min = n;
    const max = m;
    
    return arr.map(el => Math.floor(Math.random() * (max - min + 1)) + min);

}

const result = randomArray(50, -1009, 1043)
console.log('result: ', result);}