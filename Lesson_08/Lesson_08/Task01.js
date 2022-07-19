console.log(' randomArray');
const randomArray = (len) => {
    const arr = [...Array(len)];
    console.log('arr: ', arr);
    return arr.map(() =>Math.floor(Math.random() * 100));
   
}

const result = randomArray(50)
console.log('result: ', result);