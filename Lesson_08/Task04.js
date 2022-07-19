console.log('leap year');

const leapYears = (n, m) => {
    
    const years = [];
    const result = [];
    for (let i = n; i <= m; i++) {
        years.push(i);
    }

    const getLeapYear = (year) => {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
            return year;
        } else {
            return false;
        }
    }
    
    years.forEach(year => {
        if (getLeapYear(year))
            result.push(year);
    });

    return result;

}

console.log('leapYears: ', leapYears(2000, 2025));

