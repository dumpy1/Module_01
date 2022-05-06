console.log(' IsPrime ');

const isPrime = x => {
    if (x === 1) {
        return true
    };
    let counter = 0;

    for (let i = 1; i <= x; i++) {
        if (x % i === 0) {
            counter++;
           
            if (counter > 2) {
                return false
            }
        }
    }

    return true;
}

const result = isPrime(8);
console.log('result: ', result);