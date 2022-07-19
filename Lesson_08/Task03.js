{
    console.log(' randomArray03');
    const randomArray = (len, n, m, parity) => {
        const arr = new Array(len).fill(0);
        const min = n;
        const max = m;

if (parity === 'even') {
        return arr.map(el => {
            el = Math.floor(Math.random() * (max - min + 1)) + min;
            if (el % 2 === 0) {
                return el
            } else {return el +1}
        })}
if (parity === 'odd') {
    return arr.map(el => {
        el = Math.floor(Math.random() * (max - min + 1)) + min;
        if (el % 2 !== 0) {
            return el
        } else {return el +1}
    })
}
    }

    const result = randomArray(50, -1009, 1043, 'even')
    console.log('result: ', result);
}



